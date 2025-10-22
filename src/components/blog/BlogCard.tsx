import Link from "next/link";
import Image from "next/image";
import { BlogPostPreview, formatDate } from "@/lib/blog";
import { cn } from "@/lib/utils";

export interface BlogCardProps {
  post: BlogPostPreview;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article
      className={cn(
        "border rounded-lg p-6 hover:shadow-lg transition-shadow",
        "h-full flex flex-col",
      )}
    >
      <Link href={`/blog/${post.slug}`}>
        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={post.title}
            width={400}
            height={200}
            className="rounded-lg mb-4"
          />
        )}
        <h2 className="text-2xl font-bold mb-2 hover:underline">
          {post.title}
        </h2>
      </Link>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
        <time dateTime={post.date.toISOString()}>{formatDate(post.date)}</time>
        <span>{post.readingTime}</span>
      </div>

      {post.excerpt && (
        <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
      )}

      {post.tags.length > 0 && (
        <div className="flex gap-2 flex-wrap mt-auto">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};
