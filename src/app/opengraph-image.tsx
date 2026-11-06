import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "MonlooQ: AI stylist, virtual try-on and digital closet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const mark =
  "M89.55249,142.67149c-3.27973.52043-6.63899.79804-10.06261.79804-35.27855,0-63.97966-28.70122-63.97966-63.97966S44.21132,15.51022,79.48988,15.51022s63.97966,28.7011,63.97966,63.97966c0,15.1009-5.27081,28.98676-14.0533,39.94232l10.10663,12.12765c12.11002-13.94999,19.45688-32.1465,19.45688-52.06997C158.97975,35.58883,123.39093,0,79.48988,0S0,35.58883,0,79.48988s35.58883,79.48988,79.48988,79.48988c7.41052,0,14.57491-1.03577,21.38051-2.93266l-11.3179-13.3756Z";

/** Shared preview card for every page that does not define its own. */
export default async function Image() {
  const fonts = join(process.cwd(), "src/app/fonts");
  const [semibold, lightItalic] = await Promise.all([
    readFile(join(fonts, "DegularDisplayDemo-Semibold.otf")),
    readFile(join(fonts, "DegularDisplayDemo-LightItalic.otf")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#f8f8f8",
        color: "#1f1f1f",
        fontFamily: "Degular",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -160,
          top: -160,
          width: 640,
          height: 640,
          borderRadius: 640,
          background:
            "radial-gradient(closest-side, rgba(232,86,42,0.28), rgba(232,86,42,0))",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: rasterised by Satori, which would draw a <title> as text; the image has its own alt */}
        <svg width="64" height="66" viewBox="0 0 177.9 184.64" fill="#e8562a">
          <path d={mark} />
          <polygon points="79.48988 110.8219 104.09023 110.8219 177.90986 184.64152 153.35789 184.64152 79.48988 110.8219" />
        </svg>
        <span style={{ fontSize: 44, fontWeight: 600, letterSpacing: -1 }}>
          MonlooQ
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 112,
            fontWeight: 600,
            lineHeight: 0.95,
            letterSpacing: -4,
          }}
        >
          Your stylist, closet
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 112,
            lineHeight: 0.95,
            letterSpacing: -4,
          }}
        >
          <span style={{ fontWeight: 600 }}>and&nbsp;</span>
          <span
            style={{ fontWeight: 300, fontStyle: "italic", color: "#e8562a" }}
          >
            community
          </span>
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 30, color: "#6b6b6b" }}>
        Maya AI stylist · Virtual try on · Digital closet · Free on iPhone and
        Android
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Degular", data: semibold, weight: 600, style: "normal" },
        { name: "Degular", data: lightItalic, weight: 300, style: "italic" },
      ],
    },
  );
}
