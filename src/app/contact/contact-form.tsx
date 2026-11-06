"use client";

import { ArrowRight, CircleCheck, LoaderCircle } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";

import { sendContactMessage } from "@/app/contact/actions";
import {
  type ContactField,
  type ContactState,
  contactLimits,
  contactTopics,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

const initial: ContactState = { status: "idle" };

/** Move focus to the result so screen readers announce it after submitting. */
const focusOnMount = (el: HTMLElement | null) => el?.focus();

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-[border-color,box-shadow] outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 aria-invalid:border-destructive aria-invalid:ring-destructive/15";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactMessage, initial);
  const startedAt = useRef<HTMLInputElement>(null);

  // Set on the client, after hydration, so a statically rendered page does not
  // bake its build time into the field.
  useEffect(() => {
    if (startedAt.current) startedAt.current.value = String(Date.now());
  }, []);

  if (state.status === "success") {
    return (
      <output
        ref={focusOnMount}
        tabIndex={-1}
        className="block rounded-3xl border bg-card p-8 outline-none sm:p-10"
      >
        <CircleCheck
          className="size-9 text-success"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <h2 className="mt-6 text-3xl font-semibold tracking-tight">
          Message sent, thank you
        </h2>
        <p className="mt-3 max-w-md leading-7 text-muted-foreground">
          It is with the MonlooQ team now. We reply by email, usually within two
          working days.
        </p>
        {state.reference ? (
          <p className="mt-6 text-sm text-muted-foreground">
            Your reference:{" "}
            <span className="font-semibold text-foreground tabular-nums">
              {state.reference}
            </span>
          </p>
        ) : null}
      </output>
    );
  }

  const err = (f: ContactField) => state.fieldErrors?.[f];
  const v = (f: ContactField) => state.values?.[f];
  // Re-key on each error response so defaultValue re-applies after React
  // resets the form at the end of the action.
  const formKey = state.status === "error" ? JSON.stringify(state.values) : "f";

  return (
    <form key={formKey} action={action} noValidate className="space-y-6">
      {state.status === "error" && state.message ? (
        <div
          ref={focusOnMount}
          tabIndex={-1}
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive outline-none"
        >
          {state.message}
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Your name" error={err("name")}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={contactLimits.name}
            defaultValue={v("name")}
            aria-invalid={!!err("name") || undefined}
            aria-describedby={err("name") ? "name-error" : undefined}
            className={inputCls}
          />
        </Field>
        <Field id="email" label="Email" error={err("email")}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={contactLimits.email}
            defaultValue={v("email")}
            aria-invalid={!!err("email") || undefined}
            aria-describedby={err("email") ? "email-error" : undefined}
            className={inputCls}
          />
        </Field>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium">What is it about?</legend>
        <div className="flex flex-wrap gap-2">
          {contactTopics.map((t) => (
            <label key={t.value} className="cursor-pointer">
              <input
                type="radio"
                name="topic"
                value={t.value}
                defaultChecked={(v("topic") ?? "support") === t.value}
                className="peer sr-only"
              />
              <span className="inline-flex rounded-full border px-4 py-2 text-sm text-muted-foreground transition-colors peer-checked:border-foreground peer-checked:bg-foreground peer-checked:text-background peer-focus-visible:ring-4 peer-focus-visible:ring-brand/25 hover:border-foreground/60">
                {t.label}
              </span>
            </label>
          ))}
        </div>
        {err("topic") ? (
          <p className="mt-2 text-sm text-destructive">{err("topic")}</p>
        ) : null}
      </fieldset>

      <Field
        id="message"
        label="Message"
        hint="If it is about the app, tell us your phone model and what you were doing."
        error={err("message")}
      >
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={contactLimits.messageMin}
          maxLength={contactLimits.messageMax}
          defaultValue={v("message")}
          aria-invalid={!!err("message") || undefined}
          aria-describedby={err("message") ? "message-error" : "message-hint"}
          className={cn(inputCls, "min-h-40 resize-y")}
        />
      </Field>

      {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input ref={startedAt} type="hidden" name="startedAt" defaultValue="" />

      <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-muted-foreground">
          We only use your details to reply. See our{" "}
          <a href="/privacy" className="underline underline-offset-4">
            Privacy Policy
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-medium text-brand-foreground transition-[opacity,transform] hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
        >
          {pending ? (
            <>
              <LoaderCircle
                className="size-4 animate-spin"
                aria-hidden="true"
              />
              Sending
            </>
          ) : (
            <>
              Send message
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-2 text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
