import { Metadata } from "next";
import { getPublishedPosts } from "@/lib/server";
import { BlogList } from "@/components/blog/BlogList";

export const generateMetadata = async (): Promise<Metadata> => {
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
};

export const BlogPage = async () => {
  const posts = await getPublishedPosts();

  return <BlogList posts={posts} />;
};

export default BlogPage;
