import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bibliotheca Academica",
  description: "A digital renaissance archive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          playfair.variable
        )}
      >
        {/* Layer 0: Void (Base Background) - Handled by global CSS --background */}
        <div className="fixed inset-0 -z-50 bg-background" />

        {/* Layer 1: Infinite Grid (Structure) with Radial Mask */}
        <div
          className="fixed inset-0 -z-40 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
          }}
        />

        {/* Layer 2: Atmosphere (Nebula/God Rays) */}
        <div
          className="fixed left-1/2 top-[-10%] -z-30 h-[800px] w-[140%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-background to-transparent blur-[120px]"
        />
        <div
          className="fixed right-0 top-0 -z-30 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-blue-600/5 blur-[100px]"
        />

        {/* Layer 4: Analog Grain (Texture) */}
        <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("/noise.svg")' }} />

        {/* Layer 3: Content (Z-Index implicit) */}
        {children}
      </body>
    </html>
  );
}
