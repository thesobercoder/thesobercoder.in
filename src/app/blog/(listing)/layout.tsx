import { ReactNode } from "react";
import { BlogLayout } from "@/components/blog/BlogLayout";

interface BlogListingLayoutProps {
  children: ReactNode;
}

export const BlogListingLayout = ({
  children,
}: BlogListingLayoutProps) => {
  return (
    <BlogLayout
      backHref="/"
      contentClassName="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pt-16 auto-rows-fr"
    >
      {children}
    </BlogLayout>
  );
};

export default BlogListingLayout;
