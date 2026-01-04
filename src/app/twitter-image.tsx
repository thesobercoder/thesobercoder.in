import { DEFAULT_ALT, loadAvatarDataUrl, ogImageStyles } from "@/lib/og-image";
import { ImageResponse } from "next/og";

export const alt = DEFAULT_ALT;
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export default async function TwitterImage() {
  try {
    const avatarDataUrl = await loadAvatarDataUrl();

    // Fetch Newsreader font (Regular)
    const fontData = await fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/newsreader@latest/latin-500-normal.ttf",
    ).then((res) => {
      if (!res.ok) throw new Error("Failed to fetch font");
      return res.arrayBuffer();
    });

    // Fetch Newsreader font (Italic)
    const fontItalicData = await fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/newsreader@latest/latin-500-italic.ttf",
    ).then((res) => {
      if (!res.ok) throw new Error("Failed to fetch italic font");
      return res.arrayBuffer();
    });

    // Fetch Geist Sans font (Light)
    const fontSansData = await fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-300-normal.ttf",
    ).then((res) => {
      if (!res.ok) throw new Error("Failed to fetch sans font");
      return res.arrayBuffer();
    });

    return new ImageResponse(
      <div style={ogImageStyles.container}>
        <div style={ogImageStyles.content}>
          <div style={ogImageStyles.title}>
            <span>Soham</span>
            <span style={ogImageStyles.lastName}>Dasgupta</span>
          </div>
          <div style={ogImageStyles.separator} />
          <p style={ogImageStyles.subtitle}>
            Technology Leader & Enterprise Architect
          </p>
        </div>
        <div style={ogImageStyles.imageWrapper}>
          <img src={avatarDataUrl} alt={alt} style={ogImageStyles.avatar} />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(124, 45, 18, 0.15)", // Warm overlay
            }}
          />
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Newsreader",
            data: fontData,
            style: "normal",
            weight: 500,
          },
          {
            name: "Newsreader",
            data: fontItalicData,
            style: "italic",
            weight: 500,
          },
          {
            name: "Geist Sans",
            data: fontSansData,
            style: "normal",
            weight: 300,
          },
        ],
      },
    );
  } catch (error) {
    console.error(error);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
