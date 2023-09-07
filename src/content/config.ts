import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  date: z.date(),
});

const blogCollection = defineCollection({ schema: blogSchema });

export type BlogSchema = z.infer<typeof blogSchema>;
export const collections = {
  blog: blogCollection,
};
