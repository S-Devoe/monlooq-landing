"use server";

import { headers } from "next/headers";

import {
  type ContactField,
  type ContactState,
  contactLimits,
  contactTopics,
} from "@/lib/contact";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** A person cannot read the form and write a message faster than this. */
const MIN_FILL_MS = 2500;

function field(form: FormData, key: string) {
  const v = form.get(key);
  return typeof v === "string" ? v.trim() : "";
}

/**
 * Relays the contact form to the MonlooQ API (POST /contact), which emails the
 * team inbox. Runs on the server, so the API origin never reaches the browser,
 * and forwards the visitor's IP so the API's per-IP limit applies to the
 * visitor rather than to this server.
 */
export async function sendContactMessage(
  _prev: ContactState,
  form: FormData,
): Promise<ContactState> {
  const values = {
    name: field(form, "name"),
    email: field(form, "email"),
    topic: field(form, "topic") || "support",
    message: field(form, "message"),
  };

  // Bots: a filled honeypot or an instant submit gets a convincing success
  // and nothing is sent, so there is no signal to tune against.
  const startedAt = Number(field(form, "startedAt"));
  if (
    field(form, "company") !== "" ||
    (Number.isFinite(startedAt) && Date.now() - startedAt < MIN_FILL_MS)
  ) {
    return { status: "success", reference: undefined };
  }

  const fieldErrors: Partial<Record<ContactField, string>> = {};
  if (!values.name) fieldErrors.name = "Tell us your name.";
  else if (values.name.length > contactLimits.name)
    fieldErrors.name = "That name is a little long.";
  if (!EMAIL_RE.test(values.email) || values.email.length > contactLimits.email)
    fieldErrors.email = "Enter an email address we can reply to.";
  if (!contactTopics.some((t) => t.value === values.topic))
    fieldErrors.topic = "Choose a topic.";
  if (values.message.length < contactLimits.messageMin)
    fieldErrors.message = "Add a little more detail so we can help.";
  else if (values.message.length > contactLimits.messageMax)
    fieldErrors.message = `Keep it under ${contactLimits.messageMax} characters.`;

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Check the highlighted fields.",
      fieldErrors,
      values,
    };
  }

  const api = process.env.MONLOOQ_API_URL?.replace(/\/$/, "");
  if (!api) {
    console.error("[contact] MONLOOQ_API_URL is not set");
    return {
      status: "error",
      message:
        "We could not send your message right now. Please email support@monlooq.com.",
      values,
    };
  }

  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "";

  try {
    const res = await fetch(`${api}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(ip ? { "X-Forwarded-For": ip } : {}),
        "User-Agent": h.get("user-agent") ?? "monlooq-landing",
      },
      body: JSON.stringify({ ...values, source: "monlooq.com/contact" }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (res.status === 429) {
      return {
        status: "error",
        message:
          "You have sent a few messages already. Please try again in a couple of minutes.",
        values,
      };
    }
    if (!res.ok) {
      console.error(
        "[contact] API responded",
        res.status,
        await res.text().catch(() => ""),
      );
      return {
        status: "error",
        message:
          "We could not send your message. Please try again, or email support@monlooq.com.",
        values,
      };
    }

    const body = (await res.json().catch(() => null)) as {
      data?: { reference?: string };
    } | null;
    return { status: "success", reference: body?.data?.reference };
  } catch (err) {
    console.error("[contact] request failed", err);
    return {
      status: "error",
      message:
        "We could not reach our servers. Please try again, or email support@monlooq.com.",
      values,
    };
  }
}
