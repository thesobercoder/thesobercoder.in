import { z } from "zod";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Blog Types
export const frontmatterSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  date: z
    .string()
    .datetime()
    .or(z.date())
    .transform((val) => (typeof val === "string" ? new Date(val) : val)),
  excerpt: z.string().optional(),
  author: z.string().optional().default("Soham Dasgupta"),
  tags: z.array(z.string()).optional().default([]),
  published: z.boolean().optional().default(false),
  coverImage: z.string().optional(),
});

export type BlogFrontmatter = z.infer<typeof frontmatterSchema>;

export interface BlogPost extends BlogFrontmatter {
  content: string;
  readingTime: string;
}

export type BlogPostPreview = Omit<BlogPost, "content">;

// Date Formatting
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

// Reading Time Calculation
export function calculateReadingTime(content: string): string {
  const WPM = 250;
  const CODE_WPM = 125;

  let codeWords = 0;
  const contentWithoutCode = content.replace(/```[\s\S]*?```/g, (match) => {
    codeWords += match.split(/\s+/).length;
    return "";
  });

  const textWords = contentWithoutCode.split(/\s+/).filter(Boolean).length;

  const imageCount = (content.match(/!\[.*?\]\(.*?\)/g) || []).length;
  let imageTime = 0;
  for (let i = 1; i <= imageCount; i++) {
    imageTime += i < 10 ? 12 - (i - 1) : 3;
  }

  const textMinutes = textWords / WPM;
  const codeMinutes = codeWords / CODE_WPM;
  const imageMinutes = imageTime / 60;

  const totalMinutes = Math.ceil(textMinutes + codeMinutes + imageMinutes);

  return `${totalMinutes} min read`;
}

// Blog Post Functions
const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export async function getAllPosts(): Promise<BlogPostPreview[]> {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR);
  const posts: BlogPostPreview[] = [];

  for (const file of files) {
    if (!file.endsWith(".md") && !file.endsWith(".mdx")) continue;

    try {
      const filePath = path.join(CONTENT_DIR, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);

      const frontmatter = frontmatterSchema.parse(data);
      const readingTime = calculateReadingTime(content);

      posts.push({
        ...frontmatter,
        readingTime,
      });
    } catch (error) {
      console.error(`Error parsing ${file}:`, error);
    }
  }

  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export async function getPublishedPosts(): Promise<BlogPostPreview[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.published);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`);
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);

  let filePath: string | null = null;
  if (fs.existsSync(mdPath)) filePath = mdPath;
  else if (fs.existsSync(mdxPath)) filePath = mdxPath;

  if (!filePath) return null;

  try {
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);

    const frontmatter = frontmatterSchema.parse(data);
    const readingTime = calculateReadingTime(content);

    return {
      ...frontmatter,
      content,
      readingTime,
    };
  } catch (error) {
    console.error(`Error parsing ${slug}:`, error);
    return null;
  }
}
