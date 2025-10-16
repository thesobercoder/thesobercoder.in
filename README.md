# thesobercoder.in

A modern portfolio website built with Next.js 15, React 19, and TypeScript.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 with CSS variables for theming
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animation**: Framer Motion
- **Icons**: lucide-react
- **Theme**: next-themes for dark mode
- **Infrastructure**: SST for AWS deployment
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- Bun and Node.js 22.x+
- AWS and Cloudflare credentials (for deployment)

### Environment Setup

Copy `.env.example` to `.env.local` and configure:

```env
# Dev.to API (username from https://dev.to/settings/account)
DEV_TO_API_URL="https://dev.to/api/articles?username=your_username"

# Cloudflare (from https://dash.cloudflare.com/)
CLOUDFLARE_API_TOKEN="your_token"
CLOUDFLARE_DEFAULT_ACCOUNT_ID="your_account_id"

# AWS (from https://aws.amazon.com/console/)
AWS_ACCOUNT="your_account_id"
AWS_PROFILE="your_profile"
AWS_REGION="your_region"
```

### Development

```bash
bun run dev              # Start dev server with Turbopack
bun run sst:dev          # Start with live AWS resources
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
bun run sst:dev          # Dev with live AWS resources

# Build & Test
bun run build            # Production build
bun run sst:build        # Build with OpenNext adapter
bun run start            # Test production build locally

# Code Quality
bun run lint             # Run ESLint
bun run fmt              # Format with Prettier & Syncpack

# Deployment
bun run sst:deploy       # Deploy to AWS (manual only)
bun run sst:remove       # Remove AWS resources
bun run aws:login        # Login to AWS

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

## Infrastructure

- **DNS**: Cloudflare manages `thesobercoder.in` DNS records
- **Hosting**: AWS (Lambda + CloudFront + S3) via SST Infrastructure-as-Code
- **Why**: Cloudflare DDoS protection, AWS serverless scaling, SST simplified deployment

## Deployment

Manual deployments only (no automation/CI/CD per constitution):

```bash
bun run sst:deploy
```

**Requirements**: Cloudflare + AWS credentials in `.env`, all pre-deployment checks passed

## Governance

See `.specify/memory/constitution.md` for architectural decisions, technology choices, and development practices (single source of truth).

## License

MIT License - see [LICENSE](LICENSE) file for details.
