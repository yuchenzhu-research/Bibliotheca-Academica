"use client";

import dynamic from 'next/dynamic';
import { Hero } from '@/components/features/Hero';
import { ArchiveGrid } from '@/components/features/ArchiveGrid';
import { HorizontalScrollSection } from '@/components/ui/HorizontalScrollSection';
import { ImageCard } from '@/components/ui/ImageCard';
import { documents } from '@/lib/data';

// Dynamically import Canvas3D to avoid SSR issues
const Canvas3D = dynamic(() => import('@/components/visual/Canvas3D').then(mod => mod.default), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-30 bg-warm-paper" />,
});

const SmoothScrollWrapper = dynamic(
  () => import('@/components/ui/SmoothScrollWrapper').then(mod => mod.SmoothScrollWrapper),
  { ssr: false }
);

export default function Home() {
  return (
    <SmoothScrollWrapper>
      <main className="min-h-screen bg-warm-paper selection:bg-primary/20">
        {/* Layer 0: Particle Background */}
        <Canvas3D imageUrl="/archive/newton.jpg" />

        {/* Hero Section */}
        <Hero />

        {/* Horizontal Scroll Section - Featured Works */}
        <HorizontalScrollSection>
          {documents.slice(0, 4).map((doc) => (
            <div key={doc.id} className="flex-none w-[550px]">
              <ImageCard
                title={doc.title}
                description={doc.description}
                year={doc.year}
                author={doc.author}
                imageUrl={doc.imageUrl}
                floatingTexts={{
                  topLeft: doc.category,
                  centerLeft: doc.author.split(' ')[0],
                  bottomRight: doc.year,
                }}
                aspectRatio="video"
                className="h-[65vh]"
                focalPoint={doc.focalPoint}
              />
            </div>
          ))}
        </HorizontalScrollSection>

        {/* Browse Archive Grid */}
        <ArchiveGrid />

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 border-t border-foreground/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-xl text-foreground">
                Bibliotheca Academica
              </span>
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-sans text-sm text-muted-foreground/60">
                Since 2026
              </span>
            </div>
          </div>
        </footer>
      </main>
    </SmoothScrollWrapper>
  );
}