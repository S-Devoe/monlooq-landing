/** Mirrors internal/contact in the MonlooQ API. Keep the two in step. */
export const contactTopics = [
  { value: "support", label: "App support" },
  { value: "account", label: "Account help" },
  { value: "general", label: "General enquiry" },
  { value: "privacy", label: "Privacy and data" },
  { value: "partnerships", label: "Partnerships" },
  { value: "press", label: "Press" },
] as const;

export type ContactTopic = (typeof contactTopics)[number]["value"];

export const contactLimits = {
  name: 100,
  email: 254,
  messageMin: 10,
  messageMax: 5000,
} as const;

export type ContactField = "name" | "email" | "topic" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  reference?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<ContactField, string>>;
};
