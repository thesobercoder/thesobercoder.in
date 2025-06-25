import dynamicImport from "next/dynamic";
import Link from "next/link";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

const DynamicImageWithSkeleton = dynamicImport(
  () => import("@/components/image-with-skeleton"),
);

interface DevToArticle {
  readonly type_of: string;
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly readable_publish_date: string;
  readonly slug: string;
  readonly path: string;
  readonly url: string;
  readonly comments_count: number;
  readonly public_reactions_count: number;
  readonly collection_id: number | null;
  readonly published_timestamp: string;
  readonly positive_reactions_count: number;
  readonly cover_image: string;
  readonly social_image: string;
  readonly canonical_url: string;
  readonly created_at: string;
  readonly edited_at: string | null;
  readonly crossposted_at: string | null;
  readonly published_at: string;
  readonly last_comment_at: string;
  readonly reading_time_minutes: number;
  readonly tag_list: readonly string[];
  readonly tags: string;
  readonly user: {
    readonly name: string;
    readonly username: string;
    readonly twitter_username: string;
    readonly github_username: string;
    readonly user_id: number;
    readonly website_url: string;
    readonly profile_image: string;
    readonly profile_image_90: string;
  };
}

type Articles = readonly DevToArticle[];

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
  try {
    const res = await fetch(process.env.DEV_TO_API_URL!, {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch articles: ${res.status}`);
    }

    const data = await res.json();
    const articles = data as Articles;

    return (
      <>
        {articles.map((article) => (
          <article key={article.id} className="relative group">
            <Link
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Read article: ${article.title}`}
              href={article.url}
              className="block overflow-hidden rounded-lg border border-foreground/20"
            >
              <DynamicImageWithSkeleton
                src={article.social_image}
                alt={article.title}
                height={190}
                width={380}
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black bg-opacity-25 group-hover:opacity-100 group-hover:bg-opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block size-8"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </article>
        ))}
      </>
    );
  } catch (error) {
    console.error("Failed to fetch blog articles:", error);
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">
            Unable to load articles
          </h2>
          <p className="text-muted-foreground">Please try again later.</p>
        </div>
      </div>
    );
  }
}
