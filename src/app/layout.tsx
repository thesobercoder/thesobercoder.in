import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import GridPattern from "@/components/ui/grid-pattern";
import { geistMono, geistSans } from "@/lib/fonts";
import { metadataConfig, viewportConfig } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import "./globals.css";

const Particles = dynamic(() => import("@/components/ui/particles"), {
  loading: () => <div className="absolute inset-0 z-[-9998]" />,
});

export const metadata = metadataConfig;
export const viewport = viewportConfig;

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
          strokeDasharray="4 2"
          className={cn(
            "z-[-9999]",
            "opacity-30",
            "[mask-image:radial-gradient(circle_at_top,white,transparent_60%)]",
          )}
        />
        <ThemeProvider disableTransitionOnChange>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
