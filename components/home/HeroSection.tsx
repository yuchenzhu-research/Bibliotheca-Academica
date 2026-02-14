"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturedCard } from "@/components/ui/featured-card";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Typography */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-sans font-medium uppercase tracking-widest text-muted-foreground/70 backdrop-blur-sm mb-6">
              Digital Renaissance Archive
            </span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-6">
              Bibliotheca
              <span className="block text-white/60">Academica</span>
            </h1>

            <p className="font-serif text-lg md:text-xl text-muted-foreground/80 max-w-xl leading-relaxed mb-8">
              Curating the intersection of history and technology.
              A comprehensive digital archive for the modern scholar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="h-12 px-8 text-base font-medium"
              >
                Explore Collection
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="h-12 px-8 text-base font-medium group"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right: Featured Card (Bento Style) */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <FeaturedCard
              title="Principia Mathematica"
              description="The foundational text on the laws of motion and universal gravitation."
              year="1687"
              author="Isaac Newton"
              imageUrl="/archive/newton.jpg"
              category="Featured"
              className="aspect-[4/3] md:aspect-[16/10] md:min-h-[320px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}