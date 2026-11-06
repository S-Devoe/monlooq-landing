/**
 * Renders schema.org JSON-LD. `<` is escaped so a string in the data can never
 * close the script tag early (the pattern the Next.js JSON-LD guide uses).
 */
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: serialised JSON, escaped below
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
