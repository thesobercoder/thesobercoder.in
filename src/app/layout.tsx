import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { geistMono, geistSans } from "@/lib/fonts";
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen`}
        suppressHydrationWarning
      >
        {/* Pure CSS Grid Background - Small grid that fades halfway */}
        <div
          className="fixed inset-0 z-[-9999] opacity-10 pointer-events-none"
          style={{
            backgroundSize: "40px 40px",
            backgroundImage: `
              linear-gradient(to right, #555555 1px, transparent 1px),
              linear-gradient(to bottom, #555555 1px, transparent 1px)
            `,
            maskImage:
              "radial-gradient(circle 65vw at center -10%, white 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle 65vw at center -10%, white 0%, transparent 75%)",
          }}
        />

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
