import { HeroSection } from "@/components/home/HeroSection";
import { DocumentCard } from "@/components/archive/DocumentCard";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BentoCard } from "@/components/ui/bento-card";
import { UploadZone } from "@/components/archive/UploadZone";
import { documents } from "@/app/data/mock-documents";
import { BookOpen, Microscope, Palette } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground selection:bg-primary/20 pb-20">
      <HeroSection />

      {/* Bento Grid Section */}
      <section className="container mx-auto px-4">
        <BentoGrid className="auto-rows-auto">
          {/* Row 1: Upload Zone + Manifesto */}
          <BentoGridItem span="double">
            <UploadZone className="h-full min-h-[280px]" />
          </BentoGridItem>

          <BentoGridItem span="single">
            <BentoCard className="h-full flex flex-col justify-center">
              <h3 className="font-serif text-2xl mb-4">Manifesto</h3>
              <p className="font-sans text-sm text-muted-foreground/70 leading-relaxed">
                Preserving human knowledge through digital craftsmanship.
                Each document tells a story of discovery, insight, and the
                relentless pursuit of understanding.
              </p>
            </BentoCard>
          </BentoGridItem>

          {/* Row 2: Categories */}
          <BentoGridItem span="single">
            <BentoCard className="h-full flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-lg">Philosophy</h4>
                <p className="font-sans text-xs text-muted-foreground/50">24 documents</p>
              </div>
            </BentoCard>
          </BentoGridItem>

          <BentoGridItem span="single">
            <BentoCard className="h-full flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Microscope className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h4 className="font-serif text-lg">Science</h4>
                <p className="font-sans text-xs text-muted-foreground/50">18 documents</p>
              </div>
            </BentoCard>
          </BentoGridItem>

          <BentoGridItem span="single">
            <BentoCard className="h-full flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Palette className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h4 className="font-serif text-lg">Art</h4>
                <p className="font-sans text-xs text-muted-foreground/50">12 documents</p>
              </div>
            </BentoCard>
          </BentoGridItem>

          {/* Row 3: Latest Documents */}
          {documents.slice(0, 4).map((doc) => (
            <BentoGridItem key={doc.id} span="single">
              <DocumentCard document={doc} className="h-full" />
            </BentoGridItem>
          ))}
        </BentoGrid>
      </section>
    </main>
  );
}