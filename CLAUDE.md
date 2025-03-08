# Project Commands and Guidelines

## Commands

- **Build**: `next build` or `open-next build` (for SST)
- **Dev**: `next dev --turbopack` or `sst dev` (for SST)
- **Lint**: `next lint`
- **Format**: `prettier '**/*' -wu && syncpack-format`
- **Deploy**: `sst deploy --stage production`
- **Remove Deployment**: `sst remove --stage production`
- **Clean**: `git clean -xdf .sst .next .open-next .turbo node_modules`

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
- **SST Deployment**: AWS deployment using SST framework
- **Metadata**: Use relative URLs with `metadataBase` for environment flexibility
- **Images**: OpenGraph/Twitter images in `/app/opengraph-image.tsx` and `/app/twitter-image.tsx`
- **UI Components**: Using shadcn/ui component system
- **Theming**: Dark/light mode with `next-themes` and CSS variables
- **Typography**: Geist font family (sans and mono)
- **Animation**: Framer Motion for animations and transitions
