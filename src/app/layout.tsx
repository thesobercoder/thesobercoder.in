import { ThemeProvider } from "@/components/theme-provider";
import GridPattern from "@/components/ui/grid-pattern";
import Particles from "@/components/ui/particles";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Soham's Portfolio",
  description: "Soham Dasgupta's portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
          className={cn(
            "z-[-9999]",
            "top-[-50%]",
            "opacity-30",
            "[mask-image:radial-gradient(circle_at_center,white,transparent_70%)]"
          )}
        />
        <ThemeProvider disableTransitionOnChange>{children}</ThemeProvider>
      </body>
    </html>
  );
}
