# Deployment Guide for GitHub Pages

This guide explains how to deploy the portfolio website to GitHub Pages.

## Quick Deploy

Since this repository is named `shirokun20.github.io`, GitHub Pages will automatically serve it as a user site at `https://shirokun20.github.io`.

### Steps to Deploy

1. **Merge the PR** to the `main` branch (or your default branch)
2. **Go to Repository Settings** → Pages
3. **Configure Source**:
   - Source: Deploy from a branch
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
4. **Save** the settings

GitHub Pages will automatically build and deploy your site within a few minutes.

## Verifying Deployment

After deployment:
1. Visit `https://shirokun20.github.io`
2. You should see your beautiful portfolio website!

## Updating the Site

To update your portfolio:

1. Make changes to the source files in `src/`
2. Run `npm run build` to generate new production files
3. Commit the changes (including updated files in `dist/` and `assets/`)
4. Push to the main branch
5. GitHub Pages will automatically update

## Development Workflow

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### Site not loading
- Check GitHub Pages settings
- Ensure the repository is public
- Wait a few minutes for deployment to complete

### Styles not loading
- Clear browser cache
- Ensure all asset files are committed
- Check that paths in index.html are correct

### 404 errors
- Verify the base path in `vite.config.ts` is set to `/`
- Check that index.html is in the root directory

## Custom Domain (Optional)

To use a custom domain:
1. Go to Settings → Pages
2. Add your custom domain
3. Configure DNS records as instructed by GitHub
4. Update `vite.config.ts` base path if needed

## Notes

- Built files (in `assets/` and root) must be committed for GitHub Pages to work
- This is different from typical CI/CD workflows but necessary for GitHub Pages static hosting
- The `dist/` folder is gitignored to avoid duplication, but its contents are copied to root for deployment
