import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Blog() {
  type Articles = Array<{
    type_of: string;
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    slug: string;
    path: string;
    url: string;
    comments_count: number;
    public_reactions_count: number;
    collection_id: number | null;
    published_timestamp: string;
    positive_reactions_count: number;
    cover_image: string;
    social_image: string;
    canonical_url: string;
    created_at: string;
    edited_at: string | null;
    crossposted_at: string | null;
    published_at: string;
    last_comment_at: string;
    reading_time_minutes: number;
    tag_list: Array<string>;
    tags: string;
    user: {
      name: string;
      username: string;
      twitter_username: string;
      github_username: string;
      user_id: number;
      website_url: string;
      profile_image: string;
      profile_image_90: string;
    };
  }>;

  const res = await fetch(process.env.DEV_TO_API_URL!, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const data = await res.json();
  const articles = data as Articles;

  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="flex items-center justify-between lg:pt-24">
        <span className="text-4xl lg:text-5xl block font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/20 bg-opacity-50 pb-1">
          <h1>Blog</h1>
        </span>
        <Link
          href="/"
          className="text-sm font-bold uppercase text-foreground/80 hover:underline"
        >
          Back
        </Link>
      </div>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-16">
        {articles.map((article) => (
          <article key={article.id} className="relative group">
            <Link
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Read more..."
              href={article.url}
              className="block overflow-hidden rounded-lg border border-foreground/20"
            >
              <Image
                src={article.social_image}
                alt={article.title}
                height={500}
                width={1000}
                className="w-full object-cover transition-transform transform group-hover:scale-105 filter brightness-75 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black bg-opacity-25 group-hover:opacity-100 group-hover:bg-opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-8 w-8"
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
      </section>
    </div>
  );
}
