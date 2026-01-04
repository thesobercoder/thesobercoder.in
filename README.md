# thesobercoder.in

A modern portfolio website built with Next.js 16, React 19, and TypeScript.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 with CSS variables for theming
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animation**: Framer Motion
- **Icons**: lucide-react
- **Theme**: next-themes for dark mode
- **Infrastructure**: Railway (automated CI/CD)
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- Bun and Node.js 22.x+

### Development

```bash
bun run dev              # Start dev server with Turbopack
```

Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── (portfolio)/       # Portfolio landing page
│   ├── blog/             # Blog section
│   ├── globals.css       # Global styles & CSS variables
│   └── layout.tsx        # Root layout
├── components/            # Shared React components
│   ├── ui/              # shadcn/ui primitives
│   ├── experience/      # Experience showcase
│   ├── skills/          # Skills display
│   └── globe/           # Interactive globe
├── data/                 # Content data files
│   ├── experience.ts    # Work experience
│   ├── skills.ts        # Technical skills
│   └── socials.tsx      # Social links
├── lib/                  # Utilities
│   ├── fonts.ts         # Geist fonts
│   ├── metadata.ts      # SEO metadata
│   └── utils.ts         # Helpers (cn, etc.)
└── public/              # Static assets
```

## Scripts

```bash
# Development
bun run dev              # Dev server with Turbopack

# Build & Test
bun run build            # Production build
bun run start            # Test production build locally

# Code Quality
bun run lint             # Run ESLint
bun run fmt              # Format with Prettier & Syncpack

# Utilities
bun run clean            # Remove build artifacts
```

## Development Guidelines

Follows strict architectural principles in `.specify/memory/constitution.md`:

- **Component-Driven**: Modular, single-responsibility components
- **TypeScript-First**: Strict mode, no `any` types
- **Styling**: Tailwind CSS with CSS variables
- **Performance**: Server Components default, Client Components when needed
- **Data-Driven**: Content in `/data` directory
- **Exact Versions**: No semver operators

**Pre-Commit**: `bun run lint` passes → `bun run fmt` executed → TypeScript compiles → changes verified

**Pre-Deployment**: All pre-commit checks → `bun run build` succeeds → visual/responsive/dark mode/performance verified

## Infrastructure & Deployment

- **Hosting**: Railway with automated CI/CD
- **Domain**: `thesobercoder.in` (configured via Railway)
- **Deployment**: Push to `main` branch triggers automatic deployment
- **Build Validation**: Railway CI runs `next build` before deploying

**Why Railway**: Automated deployments, simplified infrastructure, built-in CI/CD, optimized for Next.js standalone builds

## Governance

See `.specify/memory/constitution.md` for architectural decisions, technology choices, and development practices (single source of truth).

## License

MIT License - see [LICENSE](LICENSE) file for details.
