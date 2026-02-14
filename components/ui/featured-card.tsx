"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface FeaturedCardProps {
  title: string;
  description: string;
  year: string;
  author: string;
  imageUrl: string;
  category: string;
  className?: string;
}

export function FeaturedCard({
  title,
  description,
  year,
  author,
  imageUrl,
  category,
  className,
}: FeaturedCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-slate-800/50 bg-[rgba(1,1,1,0.7)] backdrop-blur-xl",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(1,1,1,0.95)] via-[rgba(1,1,1,0.4)] to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <Badge
          variant="glass"
          className="mb-4"
        >
          {category}
        </Badge>

        <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-2">
          {title}
        </h3>

        <p className="font-sans text-sm text-muted-foreground/80 mb-3 line-clamp-2">
          {description}
        </p>

        <p className="font-sans text-xs text-muted-foreground/60">
          {year} · {author}
        </p>
      </div>

      {/* Subtle inner glow on hover */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}