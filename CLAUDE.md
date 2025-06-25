# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Build**: `next build` or `bun run sst:build` (for SST)
- **Dev**: `next dev --turbopack` or `bun run sst:dev` (for SST)
- **Start**: `next start` (production server)
- **Lint**: `next lint`
- **Format**: `bun run fmt` (prettier + syncpack-format)
- **Deploy**: `bun run sst:deploy`
- **Remove Deployment**: `bun run sst:remove`
- **Clean**: `bun run clean` (removes .sst, .next, .open-next, .turbo, node_modules)

## Code Style

- **Naming**: PascalCase (components), camelCase (variables/functions), ALL_CAPS (constants)
- **Imports**: React/Next → third-party → local, grouped by functionality
- **Typing**: Use TypeScript interfaces with Props suffix for component props
- **Components**: "use client" directive for client components
- **Styling**: Tailwind CSS with `cn()` utility for class merging
- **Architecture**: Components in `/components`, UI in `/components/ui`, utils in `/lib`, data in `/data`
- **Error Handling**: Defensive coding with null checks and early returns
- **Formatting**: Prettier with consistent indentation and line-breaks

## Project Structure

- **Next.js App Router**: Modern Next.js 15+ setup with App Router
- **SST Deployment**: AWS deployment using SST framework with domain configuration for thesobercoder.in
- **Portfolio Structure**: Main portfolio page at `/(portfolio)/page.tsx`, blog at `/blog`
- **Metadata**: Centralized in `/lib/metadata.ts` with `metadataBase` for environment flexibility
- **Images**: OpenGraph/Twitter images in `/app/opengraph-image.tsx` and `/app/twitter-image.tsx`
- **UI Components**: Using shadcn/ui component system with custom components for experience, skills, globe
- **Theming**: Dark mode by default with `next-themes` and CSS variables
- **Typography**: Geist font family (sans and mono) from `/lib/fonts.ts`
- **Animation**: Framer Motion for animations, particles background, and grid patterns
- **Data Management**: Experience data in `/data/experience.ts`, skills in `/data/skills.ts`, socials in `/data/socials.tsx`
- **Configuration**: PostCSS config in `postcss.config.mjs`, shadcn/ui config in `components.json`
- **TypeScript**: Path aliases configured (`@/*` → `./src/*`) with strict mode enabled
- **Dependencies**: Uses Bun package manager, React 19, Next.js 15, and Tailwind CSS 4
