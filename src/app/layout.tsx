import { Footer } from "@/components/footer";
import { Particles } from "@/components/particles";
import { Spotlight } from "@/components/spotlight";
import { ThemeProvider } from "@/components/theme-provider";
import { geistMono, geistSans, newsreader } from "@/lib/fonts";
import { metadataConfig, viewportConfig } from "@/lib/metadata";
import "./globals.css";

export const metadata = metadataConfig;
export const viewport = viewportConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} font-sans antialiased min-h-screen bg-background text-foreground relative overflow-x-hidden`}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 z-[-1] bg-background transition-colors duration-500" />
        <div className="fixed inset-0 z-[1] bg-noise pointer-events-none opacity-20 mix-blend-soft-light" />
        <Spotlight />
        <Particles />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
