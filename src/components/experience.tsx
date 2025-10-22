"use client";

import { EXPERIENCE } from "@/data/experience";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { animatedCardVariants } from "@/lib/animation-variants";

export const Experience = () => {
  return (
    <div className="relative">
      <div className="grid gap-4 relative z-10">
        {EXPERIENCE.map((exp, index) => (
          <Link
            href={exp.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={exp.company}
          >
            <motion.div
              {...animatedCardVariants(index)}
              className="group relative overflow-hidden rounded-xl bg-background/5 border border-border/50 backdrop-blur-xs p-4"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-md bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={36}
                        height={36}
                        className="size-8 object-contain rounded-sm"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-base text-foreground/80">
                        {exp.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60">{exp.dates}</p>
                </div>
                <p className="text-base text-foreground/80 mt-2">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};
