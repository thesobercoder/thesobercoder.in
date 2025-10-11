import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Configuration
export const alt = "Soham Dasgupta - Technology Leader & Enterprise Architect";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

// Styles optimized for Twitter display
const styles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start" as const,
    justifyContent: "flex-end" as const,
    backgroundColor: "#09090b",
    backgroundImage:
      "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
    padding: "40px 60px",
    position: "relative" as const,
    overflow: "hidden",
  },
  overlay: {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    height: "70%",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
    zIndex: 1,
  },
  avatar: {
    position: "absolute" as const,
    top: "50%",
    right: "60px",
    transform: "translateY(-50%)",
    width: "220px",
    height: "220px",
    borderRadius: "110px",
    border: "4px solid rgba(255,255,255,0.2)",
    objectFit: "cover" as const,
    zIndex: 2,
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start" as const,
    width: "65%",
    zIndex: 2,
  },
  title: {
    fontSize: 72,
    fontWeight: 800,
    background:
      "linear-gradient(to bottom right, white, rgba(255,255,255,0.7))",
    backgroundClip: "text",
    color: "transparent",
    margin: 0,
    lineHeight: 1.1,
  },
  subtitle: {
    fontSize: 32,
    color: "rgba(255,255,255,0.9)",
    marginTop: 16,
    fontWeight: 500,
  },
  url: {
    fontSize: 24,
    color: "rgba(255,255,255,0.6)",
    marginTop: 20,
    fontWeight: 400,
  },
};

export default async function TwitterImage() {
  try {
    const avatarImageData = await readFile(
      join(process.cwd(), "public", "profile.png"),
    );

    const avatarDataUrl = `data:image/png;base64,${avatarImageData.toString(
      "base64",
    )}`;

    return new ImageResponse(
      (
        <div style={styles.container}>
          <div style={styles.overlay} />
          <img src={avatarDataUrl} alt={alt} style={styles.avatar} />
          <div style={styles.contentWrapper}>
            <h1 style={styles.title}>Soham Dasgupta</h1>
            <p style={styles.subtitle}>
              Technology Leader & Enterprise Architect
            </p>
            <p style={styles.url}>thesobercoder.in</p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error(error);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
