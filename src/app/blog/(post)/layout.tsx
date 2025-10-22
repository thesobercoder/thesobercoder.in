import Link from "next/link";
import { ReactNode } from "react";

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto min-h-screen max-w-(--breakpoint-2xl) px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="flex items-center justify-between lg:pt-24">
        <span className="text-4xl lg:text-5xl block font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/20 bg-opacity-50 pb-1">
          <h1>Blog</h1>
        </span>
        <Link
          href="/blog"
          className="text-sm font-bold uppercase text-foreground/80 hover:underline"
        >
          Back
        </Link>
      </div>
      <div className="pt-16">{children}</div>
    </div>
  );
}
