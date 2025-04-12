import type { Metadata } from "next";

export const metadataConfig: Metadata = {
  title: "Soham Dasgupta | Portfolio",
  description: "Technology Leader & Enterprise Architect",
  keywords: [
    "Soham Dasgupta",
    "Technology Leader",
    "Enterprise Architect",
    "Software Engineer",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Soham Dasgupta", url: "https://thesobercoder.in" }],
  creator: "Soham Dasgupta",
  publisher: "Soham Dasgupta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://thesobercoder.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Soham Dasgupta | Portfolio",
    description: "Technology Leader & Enterprise Architect",
    url: "/",
    siteName: "Soham Dasgupta",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Soham Dasgupta - Technology Leader & Enterprise Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham Dasgupta | Portfolio",
    description: "Technology Leader & Enterprise Architect",
    creator: "@thesobercoder",
    images: [
      {
        url: "/twitter-image",
        width: 1200,
        height: 630,
        alt: "Soham Dasgupta - Technology Leader & Enterprise Architect",
      },
    ],
  },
};

export const viewportConfig = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
