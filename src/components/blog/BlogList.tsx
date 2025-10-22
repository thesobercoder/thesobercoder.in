import { BlogPostPreview } from "@/lib/blog";
import { BlogCard } from "./BlogCard";

export interface BlogListProps {
  posts: BlogPostPreview[];
}

export const BlogList = ({ posts }: BlogListProps) => {
  if (posts.length === 0) {
    return <p className="text-muted-foreground col-span-full">No posts yet.</p>;
  }

  return (
    <>
      {posts.map((post, index) => (
        <BlogCard key={post.slug} post={post} index={index} />
      ))}
    </>
  );
};
