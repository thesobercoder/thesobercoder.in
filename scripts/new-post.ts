import {
  cancel,
  confirm,
  intro,
  isCancel,
  outro,
  spinner,
  text,
} from "@clack/prompts";
import fs from "fs";
import path from "path";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function slugExists(slug: string): boolean {
  const contentDir = path.join(process.cwd(), "content/blog");
  const mdxPath = path.join(contentDir, `${slug}.mdx`);
  const mdPath = path.join(contentDir, `${slug}.md`);
  return fs.existsSync(mdxPath) || fs.existsSync(mdPath);
}

async function createPostInteractive() {
  intro("Create new blog post");

  const title = await text({
    message: "Post title?",
    placeholder: "My Awesome Post",
    validate: (value) => {
      if (!value) return "Title is required";
    },
  });

  if (isCancel(title)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  const slug = generateSlug(title as string);

  if (slugExists(slug)) {
    cancel(`Error: Post with slug "${slug}" already exists.`);
    process.exit(1);
  }

  const excerpt = await text({
    message: "Excerpt (optional)?",
    placeholder: "A brief description...",
  });

  if (isCancel(excerpt)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  const tags = await text({
    message: "Tags (comma-separated, optional)?",
    placeholder: "Next.js, React, TypeScript",
  });

  if (isCancel(tags)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  const published = await confirm({
    message: "Publish immediately?",
  });

  if (isCancel(published)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  const s = spinner();
  s.start("Creating post...");

  const contentDir = path.join(process.cwd(), "content/blog");
  const filePath = path.join(contentDir, `${slug}.md`);

  const tagsArray =
    tags && typeof tags === "string"
      ? tags.split(",").map((t) => t.trim())
      : [];

  const frontmatter = `---
title: "${title}"
slug: "${slug}"
date: "${new Date().toISOString()}"
excerpt: "${excerpt || ""}"
author: "Soham Dasgupta"
tags: [${tagsArray.map((t) => `"${t}"`).join(", ")}]
published: ${published}
---

# Introduction

Write your post content here...

## Section

More content...

## Conclusion

Wrap up your thoughts...
`;

  fs.writeFileSync(filePath, frontmatter);
  s.stop("Post created!");

  outro(`Created: ${filePath}\nSlug: ${slug}`);
}

async function createPostFromTitle(title: string) {
  const slug = generateSlug(title);

  if (slugExists(slug)) {
    console.error(`Error: Post with slug "${slug}" already exists.`);
    process.exit(1);
  }

  const contentDir = path.join(process.cwd(), "content/blog");
  const filePath = path.join(contentDir, `${slug}.md`);

  const frontmatter = `---
title: "${title}"
slug: "${slug}"
date: "${new Date().toISOString()}"
excerpt: ""
author: "Soham Dasgupta"
tags: []
published: false
---

# Introduction

Write your post content here...

## Section

More content...

## Conclusion

Wrap up your thoughts...
`;

  fs.writeFileSync(filePath, frontmatter);
  console.log(`Post created: ${filePath}`);
  console.log(`Slug: ${slug}`);
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length > 0) {
    const title = args.join(" ");
    await createPostFromTitle(title);
  } else {
    await createPostInteractive();
  }
}

main().catch(console.error);
