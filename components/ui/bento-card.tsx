"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function BentoCard({ children, className, hover = true }: BentoCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -2 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "rounded-3xl border border-slate-800/30 bg-[rgba(1,1,1,0.6)] backdrop-blur-md p-6",
        "transition-all duration-300 ease-out",
        hover &&
          "hover:border-slate-700/50 hover:shadow-xl hover:shadow-primary/5",
        className
      )}
    >
      {children}
    </motion.div>
  );
}