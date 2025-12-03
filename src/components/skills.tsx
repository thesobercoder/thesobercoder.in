"use client";

import { SKILLS } from "@/data/skills";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <div className="flex flex-wrap gap-3 relative z-10">
      {SKILLS.map((skill, index) => {
        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="px-4 py-2 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-medium border border-border/40 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors cursor-default"
          >
            {skill.name}
          </motion.div>
        );
      })}
    </div>
  );
};
