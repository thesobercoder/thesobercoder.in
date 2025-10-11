# thesobercoder.in

A modern, performant portfolio website built with Next.js 15, React 19, and TypeScript. Features an interactive globe visualization, dark mode support, and a component-driven architecture.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 with CSS variables for theming
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animation**: Framer Motion
- **Icons**: lucide-react
- **Visualization**: cobe (interactive globe)
- **Theme**: next-themes for dark mode
- **Infrastructure**: SST for AWS deployment
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- Bun installed on your system
- Node.js 22.x or higher
- AWS credentials configured (for deployment)
- Cloudflare credentials (for DNS and deployment)

### Environment Setup

Create a `.env` file in the root directory based on `.env.example`:

```bash
cp .env.example .env
```

Required environment variables:

```env
# Dev.to API URL to fetch articles
DEV_TO_API_URL="https://dev.to/api/articles?username=your_username"

# Cloudflare credentials for SST deployment
# Get these from https://dash.cloudflare.com/
CLOUDFLARE_API_TOKEN="your_cloudflare_api_token_here"
CLOUDFLARE_DEFAULT_ACCOUNT_ID="your_cloudflare_account_id_here"

# AWS credentials for SST deployment
# Get these from https://aws.amazon.com/console/
AWS_ACCOUNT="your_aws_account_id_here"
AWS_PROFILE="your_aws_profile_name_here"
AWS_REGION="your_aws_region_here"
```

**Where to get credentials:**
- **Dev.to**: Get your username from https://dev.to/settings/account
- **Cloudflare**: Get API token and account ID from https://dash.cloudflare.com/
- **AWS**: Get account details from https://aws.amazon.com/console/

### Development

Run the development server with Turbopack:

```bash
bun run dev
```

Or run with SST and live AWS resources:

```bash
bun run sst:dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building

Build the production bundle:

```bash
bun run build
```

Build for SST deployment:

```bash
bun run sst:build
```

### Local Production Server

Test the production build locally:

```bash
bun run start
```

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

## Available Scripts

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build for production
- `bun run start` - Run production server locally
- `bun run lint` - Run ESLint
- `bun run fmt` - Format code with Prettier and Syncpack
- `bun run clean` - Remove build artifacts and dependencies
- `bun run sst:dev` - Start SST development with live AWS
- `bun run sst:build` - Build with OpenNext adapter
- `bun run sst:deploy` - Deploy to AWS (manual only)
- `bun run sst:remove` - Remove AWS resources
- `bun run aws:login` - Login to AWS via script

## Development Guidelines

This project follows strict architectural principles defined in `.specify/memory/constitution.md`. Key practices:

- **Component-Driven**: Modular, reusable components with single responsibility
- **TypeScript-First**: Strict mode enabled, no `any` types
- **Styling**: Tailwind CSS only, CSS variables for theming
- **Performance**: Server Components by default, Client Components when needed
- **Data-Driven**: Content managed in `/data` directory
- **Exact Versions**: All dependencies use exact versions (no semver operators)

### Pre-Commit Checklist

Before committing, ensure:

1. `bun run lint` passes
2. `bun run fmt` executed
3. TypeScript compilation succeeds
4. Changes verified in dev mode

### Pre-Deployment Checklist

Before deploying to production:

1. All pre-commit checks pass
2. `bun run build` succeeds
3. Visual regression testing completed
4. Responsive design verified (mobile, tablet, desktop)
5. Dark mode verified
6. Performance metrics checked

## Infrastructure

This project uses a hybrid infrastructure setup:

- **DNS Management**: Cloudflare manages DNS records for `thesobercoder.in`
- **Application Hosting**: AWS hosts the Next.js application via:
  - **Lambda**: Serverless function execution (via OpenNext adapter)
  - **CloudFront**: CDN for global content delivery
  - **S3**: Static asset storage
- **Infrastructure-as-Code**: SST manages AWS resources and integrates with Cloudflare DNS

**Why this architecture?**
- Cloudflare provides robust DNS management with DDoS protection
- AWS Lambda enables serverless scaling and cost efficiency
- SST simplifies infrastructure deployment with code-defined configuration

## Deployment

This site is deployed on AWS using SST (Infrastructure-as-Code) with DNS managed through Cloudflare. Deployments are **manual only** and performed by the project owner.

To deploy:

```bash
bun run sst:deploy
```

**Prerequisites for deployment:**
- Cloudflare credentials configured in `.env`
- AWS credentials configured in `.env`
- All pre-deployment checks passed (see Development Guidelines)

**Note**: Automated deployments and CI/CD pipelines are prohibited per project constitution.

## Project Governance

All architectural decisions, technology choices, and development practices are governed by the project constitution located at `.specify/memory/constitution.md`. This is the single source of truth for all project-related decisions.

## License

Private project - not licensed for public use.
