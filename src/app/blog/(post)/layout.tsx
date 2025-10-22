import { ReactNode } from "react";
import { BlogLayout } from "@/components/blog/BlogLayout";

interface BlogPostLayoutProps {
  children: ReactNode;
}

export const BlogPostLayout = ({ children }: BlogPostLayoutProps) => {
  return (
    <BlogLayout backHref="/blog">
      {children}
    </BlogLayout>
  );
};

export default BlogPostLayout;
