import { ImageResponse } from "next/og";
import {
  ogImageStyles,
  loadAvatarDataUrl,
  DEFAULT_TITLE,
  DEFAULT_SUBTITLE,
  DEFAULT_URL,
  DEFAULT_ALT,
} from "@/lib/og-image";

export const alt = DEFAULT_ALT;
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export default async function OGImage() {
  try {
    const avatarDataUrl = await loadAvatarDataUrl();

    return new ImageResponse(
      (
        <div style={ogImageStyles.container}>
          <div style={ogImageStyles.overlay} />
          <img src={avatarDataUrl} alt={alt} style={ogImageStyles.avatar} />
          <div style={ogImageStyles.contentWrapper}>
            <h1 style={ogImageStyles.title}>{DEFAULT_TITLE}</h1>
            <p style={ogImageStyles.subtitle}>{DEFAULT_SUBTITLE}</p>
            <p style={ogImageStyles.url}>{DEFAULT_URL}</p>
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
