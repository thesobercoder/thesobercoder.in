import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import { getPostBySlug, getPublishedPosts, formatDate } from "@/lib/blog";
import CodeBlock from "@/components/blog/CodeBlock";

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} by ${post.author}`,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date.toISOString(),
      authors: [post.author],
      images: post.coverImage ? [post.coverImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <time dateTime={post.date.toISOString()}>
            {formatDate(post.date)}
          </time>
          <span>{post.readingTime}</span>
        </div>
      </header>

      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg mb-8"
        />
      )}

      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote
          source={post.content}
          components={{
            pre: CodeBlock,
          }}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                rehypeSlug,
                [
                  rehypeAutolinkHeadings,
                  {
                    behavior: "wrap",
                    properties: { className: ["anchor"] },
                  },
                ],
                [
                  rehypeExternalLinks,
                  {
                    target: "_blank",
                    rel: ["noopener", "noreferrer"],
                  },
                ],
                [
                  rehypePrettyCode,
                  {
                    theme: {
                      light: "github-light",
                      dark: "github-dark",
                    },
                    keepBackground: true,
                    defaultLang: "plaintext",
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
