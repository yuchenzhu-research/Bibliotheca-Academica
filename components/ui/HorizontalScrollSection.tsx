"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HorizontalScrollSectionProps {
    children: React.ReactNode;
    className?: string;
    showScrollIndicator?: boolean;
}

export function HorizontalScrollSection({
    children,
    className,
    showScrollIndicator = true,
}: HorizontalScrollSectionProps) {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Phase 1: Entry (0% - 12.5%) - Title fades out
    const headerOpacity = useTransform(scrollYProgress,
        [0, 0.125, 0.625, 0.75],
        [1, 0, 0, 1]
    );

    // Phase 2: Horizontal Scroll (12.5% - 62.5%) - Cards slide in
    const xRaw = useTransform(scrollYProgress, [0.125, 0.625], ['30%', '-60%']);
    const x = useSpring(xRaw, {
        damping: 15,
        stiffness: 200,
        mass: 1,
    });

    // Card scale effect
    const cardScaleRaw = useTransform(scrollYProgress, [0.125, 0.625], [0.95, 1]);
    const cardScale = useSpring(cardScaleRaw, {
        damping: 20,
        stiffness: 300,
    });

    return (
        <section
            ref={targetRef}
            className={cn('relative h-[400vh] bg-warm-paper py-0', className)}
        >
            <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
                {/* Section header */}
                <motion.div
                    style={{ opacity: headerOpacity }}
                    className="container mx-auto px-4 mb-16 w-full"
                >
                    <div className="flex items-end justify-between">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-px bg-primary/40" />
                                <span className="text-display-xs text-primary font-elegant-sans tracking-[0.3em] uppercase">
                                    Archive Collection
                                </span>
                            </div>
                            <h2 className="font-epic-serif text-6xl md:text-8xl text-foreground font-light leading-[1]">
                                Selected <br />
                                <span className="italic pl-16 md:pl-32">Works</span>
                            </h2>
                        </div>

                        {showScrollIndicator && (
                            <div className="hidden md:flex flex-col items-end gap-3 text-xs tracking-widest text-muted-foreground/40">
                                <div className="flex items-center gap-4">
                                    <span>Scroll to explore</span>
                                    <span className="w-24 h-px bg-foreground/10" />
                                    <span className="animate-side-to-side text-lg">→</span>
                                </div>
                                <span className="font-mono text-[10px] uppercase">/ 1687—2026</span>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Horizontal scroll container with spring damping */}
                <motion.div
                    style={{ x, scale: cardScale }}
                    className="flex gap-16 md:gap-24 px-[10vw] items-center will-change-transform"
                >
                    {children}
                    <div className="flex-none w-[20vw]" />
                </motion.div>

                {/* Floating background letter */}
                <div className="absolute left-[5vw] top-1/2 -translate-y-1/2 -z-10 opacity-[0.03] pointer-events-none select-none">
                    <span className="font-epic-serif text-[40rem] leading-none">A</span>
                </div>
            </div>
        </section>
    );
}
