# Deployment Guide

Panduan lengkap untuk setup dan manage deployment process menggunakan GitHub Actions CI/CD.

## Overview

Portfolio website ini menggunakan **GitHub Actions** untuk continuous integration dan deployment otomatis. 

### Automatic Workflow:
```
Push ke develop/main
    ↓
GitHub Actions (build-deploy.yml)
    ↓
✅ Lint code
✅ Build project (TypeScript + Vite)
✅ Deploy ke master branch (GitHub Pages)
    ↓
🚀 Live di https://shirokun20.github.io
```

## Branch Strategy

| Branch | Purpose | Auto Deploy |
|--------|---------|------------|
| `develop` | Main development | ✅ Yes (to master) |
| `main` | Production-ready | ✅ Yes (to master) |
| `master` | GitHub Pages | ⚠️ Auto-generated (NO PUSH) |
| `feature/*` | Feature branches | ❌ No (PR to develop) |

## Development Workflow

### 1. Create Feature Branch
```bash
git checkout develop
git pull origin develop
git checkout -b feature/add-component
```

### 2. Make & Test Changes
```bash
# Make your changes
nano src/components/MyComponent.tsx

# Test locally
npm run lint     # ESLint check
npm run build    # TypeScript + Vite build
npm run preview  # Preview production build

# If all pass, commit
git add .
git commit -m "feat: add new component with styling"
```

### 3. Push & Create PR
```bash
git push origin feature/add-component
# Go to GitHub → Create Pull Request
# Base: develop, Compare: feature/add-component
```

### 4. GitHub Actions Test
```
PR created
    ↓
test.yml workflow triggers automatically
    ↓
✅ Lint check
✅ Build check
✅ Type check
    ↓
Review results in PR
```

### 5. Merge to Develop
```bash
# After PR review & approval
# Click "Merge pull request" on GitHub
# OR:
git checkout develop
git merge feature/add-component
git push origin develop
```

### 6. Deploy
```bash
# Once develop is stable, merge to main
git checkout main
git pull origin main
git merge develop
git push origin main

# build-deploy.yml triggers automatically
# Builds and deploys to master branch (GitHub Pages)
```

## GitHub Actions Workflows

### `build-deploy.yml` - Production Build & Deploy

**When it runs:**
- Push to `develop` branch
- Push to `main` branch
- Pull requests to `develop` or `main`

**What it does:**
1. Checkout code
2. Setup Node.js 20.x with npm cache
3. Install dependencies
4. Lint code (ESLint) - non-blocking
5. Build project (TypeScript + Vite)
6. Upload artifacts to GitHub
7. Deploy to `master` branch (GitHub Pages)

**Deployment Configuration:**
```yaml
- Uses: peaceiris/actions-gh-pages
- Target branch: master
- Source directory: ./dist
- Custom domain: shirokun20.com  # Edit ini untuk custom domain
```

### `test.yml` - PR Validation

**When it runs:**
- Pull request to `develop` branch
- Pull request to `main` branch

**What it does:**
1. Checkout code
2. Setup Node.js 20.x
3. Install dependencies
4. Lint code - **BLOCKING** (PR fails if errors)
5. Build project - **BLOCKING** (PR fails if build errors)
6. Generate summary report

## Setup Instructions

### Step 1: Configure GitHub Pages

Go to repo **Settings** → **Pages**:
- Source: `Deploy from branch`
- Branch: `master` (atau `gh-pages`)
- Folder: `/ (root)`
- Click **Save**

### Step 2: (Optional) Setup Custom Domain

Edit `.github/workflows/build-deploy.yml`:
```yaml
cname: yourdomain.com  # Replace dengan domain kalian
```

ATAU hapus line itu jika tidak pakai custom domain.

### Step 3: Verify Workflow Permissions

Repo **Settings** → **Actions** → **General**:
- ✅ `Read and write permissions`
- ✅ `Allow GitHub Actions to create pull requests`

### Step 4: Test Workflow

Push ke `develop` atau `main` branch & check Actions tab untuk verify.

## Monitoring & Debugging

### View Workflow Runs
```
Repo → Actions → Select workflow
Monitor build progress in real-time
```

### Check Build Logs
```
Actions → Specific run → Expand each step
View detailed logs for debugging
```

### Download Build Artifacts
```
Actions → Specific run → Artifacts section
Download "build-dist" folder
```

### Verify Deployment
```
Visit https://shirokun20.github.io
Check Settings → Pages for deployment status
```

## Troubleshooting

### ❌ Build fails (ESLint errors)

**Local fix:**
```bash
npm run lint
# Fix errors shown
git add .
git commit -m "fix: resolve lint errors"
git push origin feature/branch
```

### ❌ Build fails (TypeScript/Vite errors)

**Local fix:**
```bash
npm run build
# Check error messages
# Fix in src/ files
git add .
git commit -m "fix: resolve build errors"
git push origin feature/branch
```

### ❌ Deploy fails (GitHub Pages error)

**Check:**
1. Settings → Pages → Source is set to `master`
2. Settings → Actions → Permissions are correct
3. Workflow logs for specific error

### ❌ Custom domain not working

**Fix:**
1. Update `cname:` in workflow file
2. Check DNS settings if using external domain
3. Wait 5-10 minutes for DNS propagation

## Best Practices

### ✅ DO:
```bash
# Always create PR
git push origin feature/branch
# Then create PR on GitHub

# Test locally before push
npm run lint && npm run build

# Write clear commit messages
git commit -m "feat: add new component"
git commit -m "fix: resolve styling issue"
git commit -m "docs: update README"

# Keep commits organized
# (one feature per PR when possible)
```

### ❌ DON'T:
```bash
# DON'T push directly to main/master
git push origin main  # ❌ Bad

# DON'T force push
git push --force  # ❌ Bad

# DON'T commit dist/ folder
# (it's gitignored for a reason)

# DON'T merge PRs without review
# (ensure tests pass first)
```

## Performance Notes

- **Build time:** ~30-60 seconds
- **Deploy time:** ~1-2 minutes
- **Artifact retention:** 5 days (auto-deleted)
- **Cache:** npm packages cached for faster installs

## Useful Commands

```bash
# Local setup
npm install

# Local development (http://localhost:5173)
npm run dev

# Before pushing
npm run lint
npm run build
npm run preview

# Git operations
git clone <repo-url>
git checkout develop
git checkout -b feature/name
git add .
git commit -m "message"
git push origin feature/name
```

## FAQ

**Q: Berapa lama sampai live setelah push?**  
A: ~1-2 menit. Check Actions tab untuk progress.

**Q: Bisa pushback artifact dari master ke main?**  
A: Tidak perlu. Workflow handle semuanya otomatis.

**Q: Gimana jika perlu rollback?**  
A: Revert last commit di main, push lagi. Workflow rebuild dengan versi sebelumnya.

**Q: Bisa deploy ke staging dulu?**  
A: Saat ini langsung production. Bisa di-enhance ke multi-environment.

**Q: Workflow tidak trigger setelah push?**  
A: Check branch name, permissions, dan workflow file status.

---

**Last Updated:** February 18, 2026  
**Status:** ✅ Active & Configured  
**Version:** 1.0
