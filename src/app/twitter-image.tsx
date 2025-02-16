import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Configuration
export const alt = "Soham's Portfolio";
export const size = {
  width: 1200,
  height: 628,
};
export const contentType = "image/png";

// Styles
const styles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#09090b",
    backgroundImage:
      "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
    padding: "40px",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
  },
  avatar: {
    width: "256px",
    height: "256px",
    borderRadius: "128px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 60,
    fontWeight: 800,
    background:
      "linear-gradient(to bottom right, white, rgba(255,255,255,0.4))",
    backgroundClip: "text",
    color: "transparent",
    margin: 0,
  },
  subtitle: {
    fontSize: 30,
    color: "rgba(255,255,255,0.8)",
    marginTop: 10,
  },
} as const;

export default async function TwitterImage() {
  try {
    const avatarImageData = await readFile(
      join(process.cwd(), "public", "avatar.png"),
    );

    // Convert buffer to base64 data URL
    const avatarDataUrl = `data:image/png;base64,${avatarImageData.toString(
      "base64",
    )}`;

    return new ImageResponse(
      (
        <div style={styles.container}>
          <div style={styles.wrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={avatarDataUrl} alt={alt} style={styles.avatar} />
            <div style={styles.textContainer}>
              <h1 style={styles.title}>Soham&apos;s Portfolio</h1>
              <p style={styles.subtitle}>
                Technology Leader & Enterprise Architect
              </p>
            </div>
          </div>
        </div>
      ),
      {
        ...size,
      },
    );
  } catch (error) {
    console.error(error);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
