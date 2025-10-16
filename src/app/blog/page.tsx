import { Metadata } from "next";

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

export default function Blog() {
  return (
    <div className="col-span-full flex items-center justify-center min-h-96">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
        <p className="text-muted-foreground">
          Migrating to markdown-based blogging. Check back soon!
        </p>
      </div>
    </div>
  );
}
