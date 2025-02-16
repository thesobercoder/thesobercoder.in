import { readFile } from "fs/promises";
import { ImageResponse } from "next/og";
import { join } from "path";

// Configuration
export const alt = "Soham's Portfolio";
export const contentType = "image/png";

// Styles
const styles = {
  large: {
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
  },
  square: {
    container: {
      position: "relative",
      width: "400px",
      height: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#09090b",
      backgroundImage:
        "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
      overflow: "hidden",
    },
    avatar: {
      width: "320px",
      height: "320px",
      borderRadius: "160px",
      objectFit: "cover",
    },
  },
} as const;

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 1200, height: 630 },
      id: "large",
    },
    {
      contentType: "image/png",
      size: { width: 400, height: 400 },
      id: "square",
    },
  ];
}

export default async function OGImage({
  id,
  size,
}: {
  id: string;
  size: { width: number; height: number };
}) {
  try {
    const avatarImageData = await readFile(
      join(process.cwd(), "public", "avatar.png"),
    );

    const avatarDataUrl = `data:image/png;base64,${avatarImageData.toString(
      "base64",
    )}`;

    if (id === "square") {
      return new ImageResponse(
        (
          <div style={styles.square.container}>
            <img src={avatarDataUrl} alt={alt} style={styles.square.avatar} />
          </div>
        ),
        {
          width: 400,
          height: 400,
        },
      );
    }

    return new ImageResponse(
      (
        <div style={styles.large.container}>
          <div style={styles.large.wrapper}>
            <img src={avatarDataUrl} alt={alt} style={styles.large.avatar} />
            <div style={styles.large.textContainer}>
              <h1 style={styles.large.title}>Soham&apos;s Portfolio</h1>
              <p style={styles.large.subtitle}>
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
