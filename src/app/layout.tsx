import { ThemeProvider } from "@/components/theme-provider";
import GridPattern from "@/components/ui/grid-pattern";
import Particles from "@/components/ui/particles";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  preload: true,
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen`}
      >
        <Particles
          className="absolute inset-0 opacity-20 z-[-9998]"
          quantity={500}
          ease={80}
          refresh
        />
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "z-[-9999]",
            "opacity-30",
            "[mask-image:radial-gradient(circle_at_top,white,transparent_60%)]",
          )}
        />
        <ThemeProvider disableTransitionOnChange>
          {children}
          <footer className="flex flex-col items-center w-full mb-8 text-xs">
            <span> {new Date().getFullYear()} All rights reserved.</span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
