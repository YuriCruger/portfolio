"use client";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.div className="mb-5 flex items-center justify-center gap-5 border-b-4 border-zinc-950 pb-5 dark:border-zinc-100">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 160, transition: { duration: 0.5 } }}
        className="h-1 rounded-md bg-zinc-950 dark:bg-zinc-100"
      />
      <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-300">
        {title}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 160, transition: { duration: 0.5 } }}
        className="h-1 rounded-md bg-zinc-950 dark:bg-zinc-100"
      />
    </motion.div>
  );
}
