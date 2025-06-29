# Task Completion Checklist

When completing any coding task in this project, follow these steps:

## 1. Code Quality Checks
- Run `next lint` to check for linting errors
- Verify TypeScript compilation (integrated in Next.js build)
- Check that components follow established patterns

## 2. Build Verification
- Run `next build` to ensure production build succeeds
- For SST deployment changes, run `bun run sst:build`
- Verify no build errors or warnings

## 3. Code Formatting
- Run `bun run fmt` to format code with Prettier and sync package.json
- Ensure consistent code style across the project

## 4. Testing Considerations
- No formal testing framework is currently configured
- Manual testing should be performed in development mode
- Verify functionality in both light and dark themes

## 5. Git Workflow
- Stage changes with descriptive commit messages
- Follow conventional commit format if applicable
- Do not commit unless explicitly requested by user

## 6. Deployment Ready
- Ensure all environment-specific configurations are correct
- Verify domain configurations in sst.config.ts if needed
- Test locally before deployment with `next start`

## Additional Considerations
- Verify responsive design on different screen sizes
- Check accessibility compliance where applicable
- Ensure proper error boundaries for client components
- Validate that animations and interactions work correctly