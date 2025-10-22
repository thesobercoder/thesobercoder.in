import { Metadata } from "next";
import { getPublishedPosts } from "@/lib/blog";
import { BlogList } from "@/components/blog/BlogList";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog - Soham Dasgupta",
    description:
      "Technical articles and insights on cloud architecture, enterprise solutions, and modern development practices.",
    openGraph: {
      title: "Blog - Soham Dasgupta",
      description:
        "Technical articles and insights on cloud architecture, enterprise solutions, and modern development practices.",
      type: "website",
    },
  };
}

export default async function Blog() {
  const posts = await getPublishedPosts();

  return <BlogList posts={posts} />;
}
