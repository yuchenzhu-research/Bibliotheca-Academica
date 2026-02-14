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
        <div className="fixed inset-0 -z-50 bg-zinc-950" />
        {/* Layer 2: Fixed Grid Pattern */}
        <div className="fixed inset-0 -z-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/* Layer 3: Ambient Spotlight (Top Center) */}
        <div className="fixed left-0 right-0 top-[-10%] -z-30 h-[1000px] w-full rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#6366f115,transparent)] blur-[100px]" />
        {/* Layer 4: Noise Texture */}
        <div className="fixed inset-0 -z-20 opacity-[0.15] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("/noise.svg")' }} />

        {children}
      </body>
    </html>
  );
}
