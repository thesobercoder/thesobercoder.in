# Suggested Commands

## Development Commands
- `next dev --turbopack` - Start development server with Turbopack
- `bun run sst:dev` - Start SST development environment
- `next build` - Build for production
- `bun run sst:build` - Build with OpenNext for AWS deployment
- `next start` - Start production server locally

## Code Quality Commands
- `next lint` - Run ESLint with Next.js rules
- `bun run fmt` - Format code with Prettier and sync package.json
- TypeScript checking is integrated into Next.js build process

## Deployment Commands
- `bun run sst:deploy` - Deploy to production (thesobercoder.in)
- `bun run sst:remove` - Remove deployment infrastructure

## Utility Commands
- `bun run clean` - Clean build artifacts (.sst, .next, .open-next, .turbo, node_modules)
- `git status` - Check git status
- `git diff` - View changes
- `ls -la` - List files (Darwin/macOS)
- `find . -name "*.tsx" -type f` - Find TypeScript React files

## Package Management
- `bun install` - Install dependencies
- `bun add <package>` - Add new dependency
- `bun add -D <package>` - Add dev dependency
- `bun remove <package>` - Remove dependency

## System-Specific (Darwin/macOS)
- `grep -r "pattern" src/` - Search in source files
- `open .` - Open current directory in Finder
- `code .` - Open in VS Code