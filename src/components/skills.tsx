"use client";

import { SKILLS } from "@/data/skills";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 relative z-10">
      {SKILLS.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.02,
              duration: 0.2,
              ease: "easeOut",
            }}
            whileHover={{
              y: -4,
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              transition: {
                duration: 0.1,
                ease: "easeInOut",
              },
            }}
            className="group relative overflow-hidden rounded-xl bg-background/5 border border-border/70 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center p-3 gap-2">
              <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                <Icon className="size-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
