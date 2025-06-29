# Project Structure

## Root Directory
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration with strict mode
- `next.config.ts` - Next.js configuration
- `sst.config.ts` - SST deployment configuration
- `components.json` - shadcn/ui configuration
- `postcss.config.mjs` - PostCSS configuration for Tailwind
- `.eslintrc.json` - ESLint configuration
- `CLAUDE.md` - Project-specific Claude instructions

## Source Structure (`src/`)
```
src/
├── app/                    # Next.js App Router
│   ├── (portfolio)/        # Portfolio route group
│   │   └── page.tsx        # Main portfolio page
│   ├── blog/               # Blog section
│   │   ├── layout.tsx      # Blog layout
│   │   ├── loading.tsx     # Loading component
│   │   └── page.tsx        # Blog listing page
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles and CSS variables
│   ├── opengraph-image.tsx # OG image generation
│   ├── twitter-image.tsx   # Twitter card image
│   ├── icon.tsx            # Favicon
│   └── apple-icon.tsx      # Apple touch icon
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx      # Button component
│   │   ├── card.tsx        # Card component
│   │   ├── tooltip.tsx     # Tooltip component
│   │   ├── skeleton.tsx    # Loading skeleton
│   │   ├── particles.tsx   # Particle effects
│   │   └── grid-pattern.tsx # Grid background
│   ├── experience.tsx      # Experience section
│   ├── skills.tsx          # Skills section
│   ├── globe.tsx           # 3D globe component
│   ├── footer.tsx          # Footer component
│   ├── theme-provider.tsx  # Theme context provider
│   └── image-with-skeleton.tsx # Image with loading state
├── lib/                    # Utilities and configurations
│   ├── utils.ts            # Utility functions (cn helper)
│   ├── fonts.ts            # Font configurations (Geist)
│   └── metadata.ts         # Metadata configurations
└── data/                   # Static data
    ├── experience.ts       # Professional experience data
    ├── skills.ts           # Skills and technologies
    └── socials.tsx         # Social media links
```

## Key Architectural Patterns
- App Router with route groups for organization
- Component co-location with related utilities
- Centralized metadata and font management
- Separation of data, components, and utilities
- shadcn/ui component system integration