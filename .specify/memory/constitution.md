<!--
SYNC IMPACT REPORT
==================
Version: 1.3.0 → 1.3.1 (PATCH: Added explicit testing policy)
Date: 2025-10-21

Changes:
- Added dedicated "Testing Policy" section clarifying NO automated tests
- Updated Pre-Deployment Gates to reflect manual-only testing approach
- Added testing policy verification to Code Review guidelines
- Clarified that manual testing by project owner is the sole testing approach

Modified Sections:
- Quality Assurance: Pre-Deployment Gates updated
- Code Review: Added testing policy verification

Added Sections:
- Testing Policy (new, NON-NEGOTIABLE)

Removed Sections:
- None

Templates Requiring Updates:
- ⚠ .specify/templates/tasks-template.md (pending: remove test task examples, add clarification)
- ✅ .specify/templates/plan-template.md (reviewed - no test requirements, compatible)
- ✅ .specify/templates/spec-template.md (reviewed - no test requirements, compatible)

Follow-up TODOs:
- Update tasks-template.md to remove optional test task examples per new policy

---
Version History:

v1.3.1 (PATCH: Added explicit testing policy)
Date: 2025-10-21
- Added dedicated "Testing Policy" section clarifying NO automated tests
- Updated Pre-Deployment Gates to emphasize manual-only testing
- Added testing policy verification to Code Review guidelines
- Rationale: Explicitly document that this project uses manual testing only

v1.3.0 (MINOR: Constitution language condensed)
Date: 2025-10-11
- Reduced verbosity while preserving all data/requirements
- Converted paragraphs to bullet points throughout
- Merged Development Standards into Technical Stack
- Compressed all sections for maximum information density
- ~43% reduction in file size (460→260 lines)

v1.2.2 (PATCH: Document Cloudflare DNS management)
Date: 2025-10-11
- Added Cloudflare to Infrastructure & Deployment section
- Clarified DNS managed by Cloudflare, application hosted on AWS via SST
- Documented Cloudflare credentials requirement for deployment

v1.2.1 (PATCH: Clarified Syncpack usage - formatting only)
Date: 2025-10-11
- Corrected Syncpack description to reflect actual usage (package.json formatting only)

v1.2.0 (MINOR: Removed ephemeral package versions)
Date: 2025-10-11
- Removed specific package version numbers from Technical Stack
- Constitution governs versioning STRATEGY (exact versions, no semver operators)

v1.1.0 (MINOR: Constitution becomes single source of truth)
Date: 2025-10-09
- Added TECHNICAL STACK section
- Added PROJECT ARCHITECTURE section
- Added CONFIGURATION STANDARDS section

v1.0.1 (PATCH: Clarifications for dependency management)
Date: 2025-10-09
- Clarified Principle VII (Deployment Discipline) as NON-NEGOTIABLE
- Expanded Dependency Management section

v1.0.0 (MAJOR: Initial constitution establishment)
Date: 2025-10-09
- Created initial constitution from template
-->

# thesobercoder.in Portfolio Constitution

## Core Principles

### I. Component-Driven Architecture

**Requirements**:

- All UI as modular, reusable components in established structure
- Shared: `/components`, primitives: `/components/ui`, page-specific: co-located in app routes
- Single responsibility, independently testable

**Rationale**: Modularity enables rapid iteration, consistent patterns, easier maintenance, clear separation.

### II. TypeScript-First Development

**Requirements**:

- TypeScript strict mode, no `any` without justification
- Component props use `Props` suffix interfaces (e.g., `ExperienceCardProps`)

**Rationale**: Prevents runtime errors, provides IDE support, documents interfaces, ensures data contract integrity.

### III. Styling Consistency

**Requirements**:

- Tailwind CSS with `cn()` utility (tailwind-merge) for class merging
- CSS variables for theming (`globals.css`)
- No style objects/separate CSS files except complex animations (keyframes)

**Rationale**: Consistent spacing/colors/responsive behavior, seamless dark mode, prevents class conflicts.

### IV. Performance & Modern Practices

**Requirements**:

- React 19 + Next.js 15 App Router
- Server Components default, Client Components only for interactivity (`"use client"`)
- Metadata API for SEO, `next/image` for optimization

**Rationale**: Reduced bundle size, improved page load, optimized SEO, automatic optimization.

### V. Code Quality Standards

**Requirements**:

- Naming: PascalCase (components/types), camelCase (vars/functions), ALL_CAPS (constants)
- Import order: React/Next → third-party → local (grouped by functionality)
- Prettier formatting, defensive null checks, early returns

**Rationale**: Reduces cognitive load, prevents bugs, ensures maintainability.

### VI. Data-Driven Content

**Requirements**:

- Portfolio content in `/data` directory with TypeScript interfaces
- Content separated from presentation
- Content changes don't require component modifications

**Rationale**: Enables updates without code changes, supports future CMS, maintains type safety.

### VII. Deployment Discipline (NON-NEGOTIABLE)

**Requirements**:

- SST (IaC) for AWS deployment, Cloudflare for DNS (`thesobercoder.in`)
- Domain config in `sst.config.ts`, Cloudflare creds in `.env`
- MANUAL-ONLY deployments by project owner (no CI/CD, no agent-initiated)
- Pass build/lint/type-check gates before deployment

**Rationale**: Deliberate releases, prevents accidental changes, deployment accountability, final human verification.

## Technical Stack (NON-NEGOTIABLE)

Substitutions require constitutional amendment. Versions tracked in `package.json`.

### Core & Styling

- **React 19.x**: Concurrent features
- **Next.js 15.x**: App Router (NOT Pages Router)
- **TypeScript 5.x**: Strict mode
- **Bun**: Package manager/runtime
- **Tailwind CSS 4.x**: Utility-first, PostCSS (`@tailwindcss/postcss`)
- **next-themes**: Dark mode (default: dark)
- **CSS Variables**: Theme tokens in `globals.css`
- **Geist Fonts**: Sans/mono from `/lib/fonts.ts`

### UI & Animation

- **shadcn/ui**: Radix UI primitives (`@radix-ui/react-slot`, `@radix-ui/react-tooltip`)
- **Framer Motion**: Animations
- **lucide-react**: Icons
- **cobe**: Interactive globe
- **tw-animate-css**: Additional animations
- **Particles & Grid Patterns**: Background effects

### Utilities

- **clsx**: Conditional class names
- **tailwind-merge**: Class merging via `cn()`
- **class-variance-authority**: Component variants

### Infrastructure

- **SST**: AWS IaC
- **@opennextjs/aws**: Next.js AWS Lambda adapter
- **AWS**: Lambda + CloudFront + S3
- **Cloudflare**: DNS for thesobercoder.in
- **Environment**: `.env` (AWS, Cloudflare, Dev.to credentials)

### Development

- **ESLint**: `eslint-config-next`
- **Prettier**: Formatting
- **Syncpack**: Package.json formatting (via `syncpack-format` in fmt script)

### Prohibited Technologies

- Alternative package managers (npm, yarn, pnpm)
- CSS-in-JS (styled-components, emotion)
- Alternative animation libraries
- State management (Redux, Zustand) - use React state + Server Components
- Alternative bundlers - use Next.js (Turbopack in dev)

### Commands

- **Dev**: `next dev --turbopack` or `bun run sst:dev`
- **Build**: `next build` or `bun run sst:build`
- **Production Server**: `next start`
- **Lint**: `next lint` (MUST pass before commits)
- **Format**: `bun run fmt` (MUST run before commits - Prettier + Syncpack)
- **Deploy**: `bun run sst:deploy` (MANUAL-ONLY by owner)
- **Remove**: `bun run sst:remove` (destroy AWS resources)
- **Clean**: `bun run clean` (removes build artifacts)

### Dependency Management (NON-NEGOTIABLE)

- **Bun exclusively** - npm/yarn/pnpm PROHIBITED
- **Exact versions only** - no semver operators (^, ~, >=, \*)
  - ✅ `"react": "19.1.0"`
  - ❌ `"react": "^19.1.0"`
- **Version upgrades**: Case-by-case with justification
  1. Test in dev
  2. Verify no breaking changes
  3. Check bundle impact
  4. Pass all gates
- **New dependencies**: Justify, review bundle size, maintenance, TypeScript support, compatibility
- **Note**: Version numbers in `package.json` may evolve; constitution governs STRATEGY (exact versions)

## Project Architecture

### Repository Structure

```
/
├── .specify/memory/constitution.md    # THIS FILE
├── app/                               # Next.js App Router
│   ├── (portfolio)/page.tsx          # Portfolio landing
│   ├── blog/                         # Blog section
│   ├── opengraph-image.tsx           # OG image gen
│   ├── twitter-image.tsx             # Twitter card gen
│   ├── globals.css                   # Global styles + CSS vars
│   └── layout.tsx                    # Root layout
├── components/                        # Shared components
│   ├── ui/                           # shadcn/ui primitives
│   ├── experience/                   # Experience components
│   ├── skills/                       # Skills components
│   └── globe/                        # Globe component
├── data/                             # Content data files
│   ├── experience.ts                 # Work experience
│   ├── skills.ts                     # Technical skills
│   └── socials.tsx                   # Social links
├── lib/                              # Utilities
│   ├── fonts.ts                      # Geist fonts
│   ├── metadata.ts                   # Centralized metadata
│   └── utils.ts                      # cn(), etc.
├── public/                           # Static assets
├── sst.config.ts                     # SST infrastructure
├── components.json                   # shadcn/ui config
├── postcss.config.mjs                # PostCSS config
├── tailwind.config.ts                # Tailwind config
├── tsconfig.json                     # TypeScript config
└── package.json                      # Dependencies (exact versions)
```

### File Conventions

- **Components**: PascalCase (`ExperienceCard.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Data files**: camelCase (`experience.ts`)
- **Config**: kebab-case or framework convention (`sst.config.ts`)
- **Routes**: Next.js convention (`page.tsx`, `layout.tsx`, `route.ts`)

### Component Organization

- **Shared**: `/components` (reusable across routes)
- **Primitives**: `/components/ui` (shadcn/ui only)
- **Feature**: `/components/{feature}` (grouped by domain)
- **Page-specific**: Co-located with route in `/app`

### Data Management

- **Location**: `/data` with `.ts` or `.tsx`
- **Types**: Interfaces alongside data
- **Required**: `experience.ts`, `skills.ts`, `socials.tsx`

### Metadata Strategy

- **Centralized**: `/lib/metadata.ts`
- **Environment-aware**: Uses `metadataBase`
- **Dynamic images**: `opengraph-image.tsx`, `twitter-image.tsx`
- **Per-route**: Export `metadata` object or `generateMetadata()`

## Configuration Standards

### TypeScript (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "strict": true, // NON-NEGOTIABLE
    "target": "ES2022",
    "lib": ["ES2023", "DOM"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

### Tailwind (`tailwind.config.ts`)

- Tailwind 4.x with PostCSS plugin
- Custom theme in `globals.css`
- Dark mode: `class` (via next-themes)
- Extend with `tw-animate-css`

### shadcn/ui (`components.json`)

```json
{
  "style": "default",
  "rsc": true,
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

### SST (`sst.config.ts`)

- AWS IaC deployment
- Domain: `thesobercoder.in` (Cloudflare DNS)
- Required env vars: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_DEFAULT_ACCOUNT_ID`, `AWS_ACCOUNT`, `AWS_PROFILE`, `AWS_REGION`

### PostCSS (`postcss.config.mjs`)

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### Package (`package.json`)

- Exact versions only (no ^, ~, >=)
- Must include all commands from Technical Stack
- `"private": true`
- Specify Bun version in `engines` if needed

## Testing Policy

**This project uses MANUAL TESTING ONLY.**

- No automated unit/integration/E2E tests
- No test suites or test runners in codebase
- All verification done manually by project owner
- Rationale: Portfolio project with single developer; manual testing ensures deliberate feature validation and maintains focus on code quality over test coverage

## Quality Assurance

### Pre-Commit Gates

1. `next lint` passes
2. `bun run fmt` executed
3. TypeScript compiles
4. Manual verification in dev

### Pre-Deployment Gates

1. All pre-commit gates pass
2. `next build` succeeds
3. Manual smoke testing (page loads, links work, content displays)
4. Responsive verification (mobile/tablet/desktop)
5. Dark mode verification
6. Performance check (Lighthouse)

### Code Review

- Core Principles I-VII adherence
- Component reusability + single responsibility
- TypeScript type safety
- Tailwind usage (no duplication)
- Performance (bundle/runtime)
- Accessibility (WCAG 2.1 AA minimum)
- Manual verification against Testing Policy (no test code added)

## Governance

### Amendment Process

1. Document proposal with rationale
2. Impact assessment on codebase
3. Update constitution with incremented version
4. Migration plan (if applicable)
5. Update dependent templates (plan, spec, tasks)

### Versioning Policy

- **MAJOR**: Principle removal/redefinition, backward-incompatible
- **MINOR**: New principle or material guidance expansion
- **PATCH**: Clarifications, wording, non-semantic refinements

### Compliance Review

All specs/plans/tasks MUST include Constitution Check verifying compliance. Violations justified in Complexity Tracking section.

### Constitutional Supremacy

This constitution is the SOLE source of truth for all project decisions. All other docs (`CLAUDE.md`, README, comments) MUST defer to this. In conflicts, constitution takes absolute precedence.

`CLAUDE.md` may exist as quick-reference but MUST NOT contain authoritative guidance conflicting with or extending this constitution. It should only provide command references and direct to constitution.

**Version**: 1.3.1 | **Ratified**: 2025-10-09 | **Last Amended**: 2025-10-21
