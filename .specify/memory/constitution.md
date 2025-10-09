<!--
  SYNC IMPACT REPORT
  ==================
  Version: 1.0.1 → 1.1.0 (MINOR: Constitution becomes single source of truth)
  Date: 2025-10-09

  Changes:
  - Added TECHNICAL STACK section with all mandatory technology choices and exact versions
  - Added PROJECT ARCHITECTURE section with complete file structure and organization patterns
  - Added CONFIGURATION STANDARDS section with specifications for all config files
  - Elevated all implementation details from CLAUDE.md into constitutional authority
  - Added "Prohibited Technologies" subsection (CSS-in-JS, Redux, alternative bundlers, etc.)
  - Added complete file path specifications for all data, config, and component files
  - Added metadata strategy requirements (centralized in /lib/metadata.ts)
  - Enhanced Project Commands with "next start" and "sst:remove"
  - Replaced "Runtime Guidance" with "Constitutional Supremacy" asserting sole authority
  - Constitution now contains ALL project decisions (architecture, tech stack, file paths)

  Modified Principles:
  - None (principles unchanged)

  Added Sections (MAJOR expansion):
  - Technical Stack (NON-NEGOTIABLE) - Complete tech stack with versions
  - Project Architecture - File structure, naming conventions, organization patterns
  - Configuration Standards - Specifications for tsconfig, tailwind, shadcn/ui, SST, PostCSS

  Removed Sections:
  - None

  Templates Requiring Updates:
  - ✅ .specify/templates/plan-template.md (reviewed - compatible)
  - ✅ .specify/templates/spec-template.md (reviewed - compatible)
  - ✅ .specify/templates/tasks-template.md (reviewed - compatible)

  Follow-up TODOs:
  - Update CLAUDE.md to become quick-reference guide that defers to constitution
  - Consider adding accessibility standards section in future amendment
  - Consider adding security standards section in future amendment

  ---
  Version History:

  v1.0.1 (PATCH: Clarifications for dependency management and deployment)
  Date: 2025-10-09
  - Clarified Principle VII (Deployment Discipline) as NON-NEGOTIABLE
  - Emphasized manual-only deployment by project owner (no automation/CI/CD)
  - Expanded Dependency Management section with strict versioning requirements
  - Explicitly prohibited semver range operators (^, ~, >=)
  - Added case-by-case package upgrade requirements
  - Prohibited npm/yarn/pnpm (Bun exclusively)

  v1.0.0 (MAJOR: Initial constitution establishment)
  Date: 2025-10-09
  - Created initial constitution from template
  - Established 7 core principles for thesobercoder.in portfolio project
  - Defined governance model and compliance requirements
-->

# thesobercoder.in Portfolio Constitution

## Core Principles

### I. Component-Driven Architecture

All UI functionality MUST be implemented as modular, reusable components following the established project structure. Components MUST be organized in `/components` (shared), `/components/ui` (shadcn/ui primitives), with page-specific components co-located in app routes. Each component MUST have a single, clear responsibility and be independently testable.

**Rationale**: Component modularity enables rapid iteration, consistent design patterns, easier maintenance, and clear separation of concerns across the portfolio and blog features.

### II. TypeScript-First Development

All code MUST be written in TypeScript with strict mode enabled. Component props MUST use interfaces with a `Props` suffix (e.g., `ExperienceCardProps`). No `any` types without explicit justification. Type safety is NON-NEGOTIABLE.

**Rationale**: TypeScript prevents runtime errors, provides excellent IDE support, documents interfaces, and ensures data contract integrity between components and data sources.

### III. Styling Consistency

Tailwind CSS MUST be used for all styling with the `cn()` utility (from `tailwind-merge`) for conditional class merging. CSS variables MUST be used for theming (defined in `globals.css`). Direct style objects or separate CSS files are prohibited except for complex animations requiring keyframes.

**Rationale**: Tailwind ensures consistent spacing, colors, and responsive behavior. CSS variables enable seamless dark mode switching. The `cn()` utility prevents class conflicts.

### IV. Performance & Modern Practices

Code MUST leverage React 19 and Next.js 15 App Router capabilities including Server Components by default, Client Components only when interactive features require them (marked with `"use client"`), metadata API for SEO, and image optimization via `next/image`.

**Rationale**: Modern React features reduce bundle size, improve initial page load, optimize SEO, and provide better user experience through automatic optimization.

### V. Code Quality Standards

Code MUST follow established naming conventions: PascalCase for components/types, camelCase for variables/functions, ALL_CAPS for constants. Import order MUST be: React/Next → third-party → local (grouped by functionality). Prettier MUST be used for formatting. All code MUST include defensive null checks and early returns.

**Rationale**: Consistent code style reduces cognitive load, prevents bugs through defensive programming, and ensures codebase maintainability as the project grows.

### VI. Data-Driven Content

Portfolio content (experience, skills, social links) MUST be managed in data files (`/data` directory) with TypeScript interfaces. Content MUST be separated from presentation logic. Changes to content MUST NOT require component modifications.

**Rationale**: Separating data from components enables content updates without code changes, supports future CMS integration, and maintains type safety across content.

### VII. Deployment Discipline (NON-NEGOTIABLE)

Production deployments MUST use SST framework as Infrastructure-as-Code (IaC) for AWS deployment. Domain configuration for `thesobercoder.in` MUST be centralized in `sst.config.ts`. All deployments are MANUAL-ONLY and MUST be performed exclusively by the project owner. Automated deployments, CI/CD pipelines for production deployment, or agent-initiated deployments are PROHIBITED. All deployments MUST pass build, lint, and type-check gates before execution.

**Rationale**: Manual deployment control ensures deliberate releases, prevents accidental production changes, maintains deployment accountability, and allows final human verification before infrastructure changes go live.

## Technical Stack (NON-NEGOTIABLE)

This section defines the mandatory technology choices for the project. Substitutions require constitutional amendment.

### Core Framework

- **React**: Version 19.1.0 - Latest stable React with concurrent features
- **Next.js**: Version 15.3.0 - App Router architecture (NOT Pages Router)
- **TypeScript**: Version 5.8.3 - Strict mode enabled
- **Bun**: Package manager and runtime

### Styling & Theming

- **Tailwind CSS**: Version 4.1.3 - Utility-first CSS framework
- **PostCSS**: Version 8.5.3 - CSS processing with `@tailwindcss/postcss`
- **next-themes**: Version 0.4.6 - Dark mode implementation (default: dark)
- **CSS Variables**: Defined in `globals.css` for theme tokens
- **Geist Fonts**: Sans and mono variants from `/lib/fonts.ts`

### UI & Animation

- **shadcn/ui**: Component system using Radix UI primitives
  - `@radix-ui/react-slot`: Version 1.2.0
  - `@radix-ui/react-tooltip`: Version 1.2.0
- **Framer Motion**: Version 12.6.5 - Animation library for transitions and interactions
- **lucide-react**: Version 0.487.0 - Icon system
- **cobe**: Version 0.6.3 - Interactive globe visualization
- **tw-animate-css**: Version 1.3.4 - Additional Tailwind animations
- **Particles**: Background particle effects (implementation in components)
- **Grid Patterns**: Geometric background patterns

### Utilities

- **clsx**: Version 2.1.1 - Conditional class names
- **tailwind-merge**: Version 3.2.0 - Class name merging via `cn()` utility
- **class-variance-authority**: Version 0.7.1 - Component variant management

### Infrastructure & Deployment

- **SST**: Version 3.13.10 - Infrastructure-as-Code for AWS
- **@opennextjs/aws**: Version 3.5.6 - Next.js adapter for AWS Lambda
- **Domain**: thesobercoder.in (configured in `sst.config.ts`)

### Development Tools

- **ESLint**: Version 9.24.0 with `eslint-config-next` 15.3.0
- **Prettier**: Version 3.5.3 - Code formatting
- **Syncpack**: Version 13.0.3 - Package version consistency

### Prohibited Technologies

The following are explicitly PROHIBITED without constitutional amendment:

- Alternative package managers (npm, yarn, pnpm)
- CSS-in-JS libraries (styled-components, emotion) - use Tailwind only
- Alternative animation libraries - use Framer Motion exclusively
- State management libraries (Redux, Zustand) - use React state and Server Components
- Alternative bundlers - use Next.js built-in (Turbopack in dev)

## Project Architecture

This section defines the mandatory file structure and organization patterns.

### Repository Structure

```
/
├── .specify/                    # Speckit workflow and constitution
│   ├── memory/
│   │   └── constitution.md     # THIS FILE - source of truth
│   └── templates/              # Spec, plan, tasks templates
├── app/                        # Next.js App Router
│   ├── (portfolio)/
│   │   └── page.tsx           # Main portfolio landing page
│   ├── blog/                  # Blog section
│   ├── opengraph-image.tsx    # Open Graph image generation
│   ├── twitter-image.tsx      # Twitter card image generation
│   ├── globals.css            # Global styles and CSS variables
│   └── layout.tsx             # Root layout
├── components/                 # Shared React components
│   ├── ui/                    # shadcn/ui primitives (Button, Card, etc.)
│   ├── experience/            # Experience showcase components
│   ├── skills/                # Skills display components
│   └── globe/                 # Interactive globe component
├── data/                      # Content data files
│   ├── experience.ts          # Work experience data
│   ├── skills.ts              # Technical skills data
│   └── socials.tsx            # Social media links
├── lib/                       # Utility functions
│   ├── fonts.ts               # Geist font configuration
│   ├── metadata.ts            # Centralized metadata with metadataBase
│   └── utils.ts               # Utility functions (cn, etc.)
├── public/                    # Static assets
├── sst.config.ts              # SST infrastructure configuration
├── components.json            # shadcn/ui configuration
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies (exact versions only)
└── CLAUDE.md                  # Quick reference (defers to constitution)
```

### Path Aliases

TypeScript path mapping configured in `tsconfig.json`:

- `@/*` → `./src/*` (if using src directory)
- Absolute imports preferred over relative paths for cross-directory imports

### File Naming Conventions

- **Components**: PascalCase (e.g., `ExperienceCard.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Data files**: camelCase (e.g., `experience.ts`)
- **Config files**: kebab-case or specified by framework (e.g., `sst.config.ts`)
- **Route files**: Next.js conventions (`page.tsx`, `layout.tsx`, `route.ts`)

### Component Organization

- **Shared components**: `/components` (reusable across routes)
- **UI primitives**: `/components/ui` (shadcn/ui only)
- **Feature components**: `/components/{feature}` (grouped by domain)
- **Page-specific components**: Co-located with route in `/app`
- **Custom shadcn/ui components**: Experience cards, Skills grids, Globe visualization

### Data Management

- **Content files**: `/data` directory with `.ts` or `.tsx` extension
- **Type definitions**: Interfaces defined alongside data
- **Required data files**:
  - `experience.ts`: Employment history, projects
  - `skills.ts`: Technical skills and proficiencies
  - `socials.tsx`: Social media links with icons (from lucide-react)

### Metadata Strategy

- **Centralized**: `/lib/metadata.ts` exports metadata objects
- **Environment-aware**: Uses `metadataBase` for URL resolution
- **Image generation**: Dynamic OG/Twitter images via `opengraph-image.tsx` and `twitter-image.tsx`
- **Per-route metadata**: Export `metadata` object from `page.tsx` or `generateMetadata()` function

## Configuration Standards

All configuration files MUST follow these specifications.

### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "strict": true, // NON-NEGOTIABLE
    "target": "ES2022",
    "lib": ["ES2023", "DOM"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*"] // Path aliases
    }
  }
}
```

### Tailwind Configuration (`tailwind.config.ts`)

- Must use Tailwind CSS 4.x syntax with PostCSS plugin
- Custom theme variables defined in `globals.css`
- Dark mode strategy: `class` (via next-themes)
- Must extend with `tw-animate-css` for additional animations

### shadcn/ui Configuration (`components.json`)

```json
{
  "style": "default",
  "rsc": true, // React Server Components enabled
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### SST Configuration (`sst.config.ts`)

- Infrastructure-as-Code for AWS deployment
- Domain configuration for `thesobercoder.in`
- Environment variable management
- Lambda function configuration for Next.js

### PostCSS Configuration (`postcss.config.mjs`)

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### Package Configuration (`package.json`)

- **Exact versions only**: No semver operators
- **Scripts**: Must include all commands from Development Standards
- **Private**: Must be `true` (not published to npm)
- **Engines**: Should specify Bun version if needed

## Development Standards

### Project Commands

Development workflow MUST use standardized commands:

- **Development**: `next dev --turbopack` or `bun run sst:dev` (SST with live AWS resources)
- **Production Server**: `next start` (local production server testing)
- **Build**: `next build` or `bun run sst:build` (verify before deployment)
- **Lint**: `next lint` (MUST pass before commits)
- **Format**: `bun run fmt` (MUST run before commits - includes Prettier and Syncpack)
- **Deploy**: `bun run sst:deploy` (MANUAL-ONLY by project owner - never automated)
- **Remove Deployment**: `bun run sst:remove` (destroy AWS resources - use with caution)
- **Clean**: `bun run clean` (removes .sst, .next, .open-next, .turbo, node_modules)

### Dependency Management (NON-NEGOTIABLE)

**Package Manager**: Bun MUST be used exclusively as the package manager. Use of npm, yarn, or pnpm is PROHIBITED. All package operations (install, add, remove, update) MUST use `bun` commands.

**Strict Versioning**: All dependencies in `package.json` MUST use exact versions (e.g., `"react": "19.1.0"`). Semver range operators (`^`, `~`, `>=`, etc.) are PROHIBITED. This ensures reproducible builds and prevents unexpected breaking changes.

**Version Upgrades**: Package version upgrades MUST be evaluated case-by-case with explicit justification. Mass upgrades are prohibited. Each upgrade MUST:

1. Be tested in development environment
2. Verify no breaking changes
3. Check bundle size impact
4. Pass all build and type-check gates

**Version Consistency**: Syncpack MUST be used to ensure version consistency across all package.json files. The `bun run fmt` command includes `syncpack-format` for automated formatting.

**New Dependencies**: New dependencies MUST be justified with clear rationale and reviewed for:

- Bundle size impact
- Maintenance status and community support
- TypeScript support
- Compatibility with existing stack

### Git Workflow

Commits MUST be atomic with clear messages. Feature branches MUST follow naming convention `feature/description` or `fix/description`. Main branch (`main`) MUST always be deployable.

## Quality Assurance

### Pre-Commit Gates

Before any commit, the following MUST pass:

1. `next lint` (no errors)
2. `bun run fmt` (code formatted)
3. TypeScript compilation (no type errors)
4. Manual verification of changes in dev mode

### Pre-Deployment Gates

Before any production deployment, the following MUST pass:

1. All pre-commit gates
2. `next build` succeeds
3. Visual regression testing (manual)
4. Responsive design verification (mobile, tablet, desktop)
5. Dark mode verification
6. Performance metrics check (Lighthouse score)

### Code Review Requirements

All changes MUST be reviewed for:

- Adherence to Core Principles I-VII
- Component reusability and single responsibility
- TypeScript type safety
- Tailwind class usage (no style duplication)
- Performance implications (bundle size, runtime)
- Accessibility (WCAG 2.1 AA minimum)

## Governance

### Amendment Process

Constitution amendments require:

1. Documented proposal with rationale
2. Impact assessment on existing codebase
3. Update to this constitution file with incremented version
4. Migration plan for affected code (if applicable)
5. Update to dependent templates (plan, spec, tasks)

### Versioning Policy

Constitution version follows semantic versioning:

- **MAJOR**: Principle removal, redefinition, or backward-incompatible changes
- **MINOR**: New principle addition or material guidance expansion
- **PATCH**: Clarifications, wording improvements, non-semantic refinements

### Compliance Review

All feature specifications, implementation plans, and task lists MUST include a Constitution Check section verifying compliance with applicable principles. Violations MUST be justified in a Complexity Tracking section.

### Constitutional Supremacy

This constitution is the SOLE source of truth for all project decisions, architecture, technology choices, and development practices. All other documentation (`CLAUDE.md`, README, inline comments) MUST defer to this constitution. In case of any conflict, this constitution takes absolute precedence.

The file `CLAUDE.md` may exist as a quick-reference guide for agents but MUST NOT contain any authoritative guidance that conflicts with or extends beyond this constitution. It should only provide convenient command references and direct readers to this constitution.

**Version**: 1.1.0 | **Ratified**: 2025-10-09 | **Last Amended**: 2025-10-09
