"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Document } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface DocumentCardProps {
    document: Document;
    className?: string;
    onClick?: () => void;
}

export function DocumentCard({ document, className, onClick }: DocumentCardProps) {
    const [focalY, setFocalY] = useState(document.focalY || 20); // Default to 20% (eyes) if not set
    const isDev = process.env.NODE_ENV === "development";

    const handleCopyConfig = (e: React.MouseEvent) => {
        e.stopPropagation();
        const config = `focalY: ${focalY},`;
        navigator.clipboard.writeText(config);
        alert(`Copied: ${config}`);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/10",
                className
            )}
            onClick={onClick}
        >
            {/* Background Glow Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image Section (Top Half) */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={document.imageUrl}
                    alt={document.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: `50% ${focalY}%` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

                {/* Curator's Focal Controller (Dev Only) */}
                {isDev && (
                    <div
                        className="absolute right-2 top-2 bottom-2 z-50 flex flex-col items-center justify-center gap-2 rounded-full bg-black/40 backdrop-blur-md p-1 opacity-0 transition-opacity group-hover:opacity-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="text-[10px] font-mono font-bold text-white">{focalY}%</span>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            className="h-full w-1 appearance-none bg-white/20 accent-primary outline-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                            style={{ writingMode: "vertical-lr", direction: "rtl" }}
                            value={focalY}
                            onChange={(e) => setFocalY(Number(e.target.value))}
                        />
                        <button
                            onClick={handleCopyConfig}
                            className="rounded-full bg-white/10 p-1 text-[8px] uppercase hover:bg-white/20"
                            title="Copy Config"
                        >
                            CPY
                        </button>
                    </div>
                )}

                <div className="absolute top-4 left-4 pointer-events-none">
                    <Badge variant="outline" className="bg-zinc-950/50 backdrop-blur-sm border-white/10 text-xs font-medium uppercase tracking-widest text-white/80">
                        {document.category}
                    </Badge>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-3 p-6">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        {document.year}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        {document.author}
                    </span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {document.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2">
                    {document.description}
                </p>
            </div>

            {/* Hover Line */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </motion.div>
    );
}
