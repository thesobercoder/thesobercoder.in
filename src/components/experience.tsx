"use client";

import { EXPERIENCE } from "@/data/experience";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Experience = () => {
  return (
    <div className="relative space-y-12">
      {EXPERIENCE.map((exp, index) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative pl-8 border-l border-border/40 hover:border-primary/50 transition-colors"
        >
          <div className="absolute -left-[5px] top-0 size-2.5 rounded-full bg-border group-hover:bg-primary transition-colors" />

          <Link
            href={exp.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex gap-4 items-start">
              {exp.logo && (
                <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-border/50 bg-background mt-1">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-cover transition-all duration-300"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-1">
                  <h3 className="text-xl font-serif font-medium text-foreground group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  <span className="text-sm font-mono text-muted-foreground/80">
                    {exp.dates}
                  </span>
                </div>

                <p className="text-base font-medium text-muted-foreground mb-3">
                  {exp.title}
                </p>

                <p className="text-base text-muted-foreground/80 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
