import { Geist, Geist_Mono, Newsreader } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  preload: true,
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  preload: true,
  subsets: ["latin"],
  display: "swap",
});

export const newsreader = Newsreader({
  variable: "--font-newsreader",
  preload: true,
  subsets: ["latin"],
  display: "swap",
});
