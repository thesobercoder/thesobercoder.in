"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

export interface BlogPostContentProps {
  title: ReactNode;
  metadata: ReactNode;
  coverImage?: ReactNode;
  children: ReactNode;
}

export const BlogPostContent = ({
  title,
  metadata,
  coverImage,
  children,
}: BlogPostContentProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <article className="max-w-3xl mx-auto">
      <motion.header
        className="mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl font-bold mb-4" variants={itemVariants}>
          {title}
        </motion.h1>
        <motion.div className="flex items-center gap-4 text-sm text-muted-foreground" variants={itemVariants}>
          {metadata}
        </motion.div>
      </motion.header>

      {coverImage && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.4,
          }}
        >
          {coverImage}
        </motion.div>
      )}

      <motion.div
        className="prose dark:prose-invert max-w-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: coverImage ? 0.4 : 0.2,
          duration: 0.5,
        }}
      >
        {children}
      </motion.div>
    </article>
  );
};
