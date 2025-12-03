import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared styles for both OG and Twitter images
export const ogImageStyles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row" as const,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#251f1a", // Warm Dark Brown
    padding: "80px",
    position: "relative" as const,
  },
  content: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
    justifyContent: "center",
    maxWidth: "60%",
  },
  title: {
    fontSize: 96,
    fontFamily: "Newsreader",
    fontWeight: 500,
    color: "#e6e0d6", // Warm White
    lineHeight: 0.9,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column" as const,
  },
  lastName: {
    fontStyle: "italic",
    fontFamily: "Newsreader",
    color: "rgba(230, 224, 214, 0.6)", // Muted Warm White
  },
  separator: {
    height: 4,
    width: 120,
    backgroundColor: "#f5b83d", // Amber
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 28,
    color: "rgba(230, 224, 214, 0.8)",
    lineHeight: 1.4,
    fontWeight: 300,
    fontFamily: "Geist Sans",
  },
  imageWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 400,
    borderRadius: 200,
    overflow: "hidden",
    border: "2px solid rgba(230, 224, 214, 0.2)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
  },
  avatar: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  },
};

// Load avatar image as data URL
export const loadAvatarDataUrl = async (): Promise<string> => {
  try {
    const avatarImageData = await readFile(
      join(process.cwd(), "public", "profile.png"),
    );
    return `data:image/png;base64,${avatarImageData.toString("base64")}`;
  } catch (error) {
    console.error("Failed to load avatar:", error);
    throw error;
  }
};

export const DEFAULT_TITLE = "Soham Dasgupta";
export const DEFAULT_SUBTITLE = "Technology Leader & Enterprise Architect";
export const DEFAULT_URL = "thesobercoder.in";
export const DEFAULT_ALT = `${DEFAULT_TITLE} - ${DEFAULT_SUBTITLE}`;
