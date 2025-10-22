---
title: "Welcome to My Blog"
slug: "example-post"
date: "2025-10-21T10:00:00Z"
excerpt: "Learn how this blog was built using Next.js 15, MDX, and modern web technologies."
author: "Soham Dasgupta"
tags: ["Next.js", "React", "TypeScript", "MDX"]
published: true
---

# Introduction

Welcome to my technical blog! This first post demonstrates the capabilities of the MDX-based blogging system built with Next.js 15.

## Features

This blog includes several powerful features:

- **MDX Support**: Write content in Markdown with embedded React components
- **Syntax Highlighting**: Beautiful code blocks powered by Shiki
- **Dark Mode**: Seamless theme switching
- **Static Generation**: Lightning-fast page loads
- **SEO Optimized**: Full metadata and Open Graph support

## Code Examples

Here's a simple TypeScript example:

```typescript
interface BlogPost {
  title: string;
  slug: string;
  date: Date;
  content: string;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
```

## Technical Stack

This blog is built with:

1. **Next.js 15**: Latest App Router with Server Components
2. **MDX**: Markdown with JSX for rich content
3. **TypeScript**: Type-safe development
4. **Tailwind CSS**: Utility-first styling
5. **Rehype Pretty Code**: Shiki-based syntax highlighting

## Why MDX?

MDX combines the simplicity of Markdown with the power of React components:

> MDX is an authorable format that lets you seamlessly write JSX in your markdown documents. You can import components, such as interactive charts or alerts, and embed them within your content.

This means you can:

- Write regular Markdown for content
- Import and use React components
- Keep content separate from presentation
- Maintain type safety with TypeScript

## Conclusion

This blog represents a modern approach to technical writing, combining simplicity with power. Stay tuned for more articles on cloud architecture, web development, and software engineering best practices.

---

_This is an example post to demonstrate the blog's capabilities. Future posts will cover real technical topics!_
