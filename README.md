# thesobercoder.in

Soham Dasgupta’s personal portfolio: [thesobercoder.in](https://thesobercoder.in). Includes an introduction, work experience, technical skills, social links, and a downloadable resume.

## Stack

- **Next.js 16** (App Router), **React 19**, and **TypeScript** in strict mode
- **Tailwind CSS 4**, shadcn/ui components, and Radix UI primitives
- **Framer Motion** for animation and **Lucide** for icons
- **next-themes** for theme management, with dark mode as the default
- **Bun** for dependency management and scripts
- **Railway** deployment configuration

Exact dependency versions are recorded in [`package.json`](package.json) and [`bun.lock`](bun.lock).

## Local development

### Prerequisites

- Node.js 22 or newer
- A current Bun release (`package.json` declares a minimum of 1.0.0)

```bash
git clone https://github.com/thesobercoder/thesobercoder.in.git
cd thesobercoder.in
bun install --frozen-lockfile
bun run dev
```

Open [localhost:3000](http://localhost:3000). The application currently requires no environment variables for local development.

### Commands

| Command              | Purpose                                                                               |
| -------------------- | ------------------------------------------------------------------------------------- |
| `bun run dev`        | Start the development server with Turbopack                                           |
| `bun run lint`       | Run ESLint with Next.js Core Web Vitals and TypeScript rules                          |
| `bun run type-check` | Check TypeScript without emitting files                                               |
| `bun run build`      | Create a production build                                                             |
| `bun run start`      | Serve a production build locally, after building                                      |
| `bun run fmt`        | Format files with Prettier and normalize `package.json` with Syncpack; modifies files |
| `bun run clean`      | Delete dependency and build directories, including ignored files within those paths   |

Linting uses the ESLint CLI with flat configuration in [`eslint.config.mjs`](eslint.config.mjs). The Next.js presets exclude generated output (`.next/`, `out/`, `build/`) and `next-env.d.ts`.

TypeScript is pinned to **6.0.2** for compatibility with the ESLint TypeScript tooling. Dependencies use exact versions without `npm:` aliases; keep TypeScript on a supported version when reviewing updates.

## Editing content

- **Introduction and page sections:** [`src/app/page.tsx`](src/app/page.tsx)
- **Work experience:** [`src/data/experience.ts`](src/data/experience.ts)
- **Technical skills:** [`src/data/skills.ts`](src/data/skills.ts)
- **Social links:** [`src/data/socials.tsx`](src/data/socials.tsx)
- **Resume:** [`public/resume.pdf`](public/resume.pdf)
- **Profile photo:** [`public/profile.webp`](public/profile.webp)
- **SEO and social metadata:** [`src/lib/metadata.ts`](src/lib/metadata.ts)
- **Fonts:** [`src/lib/fonts.ts`](src/lib/fonts.ts)
- **Global styles and theme tokens:** [`src/app/globals.css`](src/app/globals.css)

## Project structure

```text
src/
├── app/
│   ├── api/health/route.ts   # JSON health endpoint
│   ├── layout.tsx           # Root layout, theme provider, and shared effects
│   ├── page.tsx             # Portfolio landing page
│   ├── globals.css          # Global styles and theme tokens
│   ├── opengraph-image.tsx  # Generated social preview
│   ├── twitter-image.tsx    # Generated Twitter card
│   ├── icon.tsx             # Generated site icon
│   └── apple-icon.tsx       # Generated Apple touch icon
├── components/              # Sections, visual effects, footer, and UI primitives
├── data/                    # Experience, skills, and social links
└── lib/                     # Fonts, metadata, and shared utilities
public/                      # Resume, profile photos, logos, and other assets
.github/dependabot.yml       # Dependency-update PR configuration
railway.json                 # Railway build and deployment settings
```

## Dependency updates and validation

Dependabot checks Bun dependencies **daily** and can keep up to **10 update PRs** open. Updates are **reviewed and merged manually**; there is no auto-merge workflow or automated seven-day release-age gate.

Before merging updates, review the dependency and lockfile changes, then validate the combined result:

```bash
bun install --frozen-lockfile
bun run lint
bun run type-check
bun run build
```

Also check the site in the browser for layout, responsive behavior, animations, and theme rendering. Keep `package.json` and `bun.lock` in sync. There is currently no automated test suite or GitHub Actions validation workflow in the repository.

## Deployment

[`railway.json`](railway.json) configures:

- The **Nixpacks** builder
- A deployment health check at **`/api/health`**, with a **100-second timeout**
- An **`ON_FAILURE`** restart policy

`GET /api/health` returns JSON containing `status: "ok"` and an ISO timestamp. It checks that the application can respond, not the health of external services.

Repository connection, deployment branch, automatic deployment settings, and domain configuration are managed in Railway, not defined by this repository. Confirm those settings in Railway rather than assuming every push deploys automatically.

## License

[MIT](LICENSE)
