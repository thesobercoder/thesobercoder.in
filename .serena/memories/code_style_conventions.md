# Code Style & Conventions

## Naming Conventions
- **PascalCase**: Components and classes
- **camelCase**: Variables, functions, and methods
- **ALL_CAPS**: Constants and environment variables
- **kebab-case**: File names and directories

## TypeScript Standards
- Strict mode enabled in tsconfig.json
- Interface naming with `Props` suffix for component props
- Path aliases configured: `@/*` maps to `./src/*`
- Target ES2017 for broad compatibility

## Import Organization
1. React/Next.js imports first
2. Third-party library imports
3. Local imports grouped by functionality
4. Relative imports last

## Component Structure
- Use `"use client"` directive for client components
- Functional components with TypeScript interfaces
- Props destructuring in function parameters
- Default exports for page components

## Styling Approach
- Tailwind CSS with `cn()` utility for class merging
- CSS variables for theming support
- Component variants using class-variance-authority
- Dark mode support via CSS variables

## File Organization
- Components in `/components` directory
- UI primitives in `/components/ui`
- Utilities in `/lib` directory
- Static data in `/data` directory
- Page components in app router structure

## Error Handling
- Defensive coding with null checks
- Early returns for error conditions
- TypeScript strict mode for compile-time safety