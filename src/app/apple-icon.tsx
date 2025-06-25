import { readFileSync } from "fs";
import { ImageResponse } from "next/og";
import { join } from "path";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default async function AppleIcon() {
  try {
    const imagePath = join(process.cwd(), "public", "profile.jpg");
    const imageBuffer = readFileSync(imagePath);
    const imageBase64 = imageBuffer.toString("base64");
    const imageSrc = `data:image/jpeg;base64,${imageBase64}`;

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20%",
            overflow: "hidden",
            background: "transparent",
          }}
        >
          <img
            src={imageSrc}
            alt="Soham Dasgupta"
            width="180"
            height="180"
            style={{
              borderRadius: "20%",
              objectFit: "cover",
            }}
          />
        </div>
      ),
      {
        ...size,
      },
    );
  } catch (error) {
    console.error("Error generating Apple icon:", error);

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#1f2937",
            borderRadius: "20%",
            color: "#ffffff",
            fontSize: "64px",
            fontWeight: "bold",
          }}
        >
          S
        </div>
      ),
      {
        ...size,
      },
    );
  }
}
