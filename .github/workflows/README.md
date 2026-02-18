# GitHub Actions Workflows

Ini adalah dokumentasi untuk CI/CD workflows yang setup untuk project portfolio.

## 1. Build and Deploy Workflow (`build-deploy.yml`)

Workflow ini otomatis membangun dan deploy project ke branch `master` (GitHub Pages).

### Trigger:
- Push ke branch `develop` atau `main`
- Pull request ke branch `develop` atau `main`

### Steps:
1. **Checkout** - Clone repository
2. **Setup Node.js** - Setup environment dengan Node.js 20.x
3. **Install Dependencies** - Install npm packages dengan cache
4. **Lint** - Run ESLint (non-blocking, tidak fail jika error)
5. **Build** - Run `npm run build` (TypeScript + Vite build)
6. **Upload Artifacts** - Store build hasil di artifacts (5 hari retention)
7. **Deploy** - Deploy ke master branch via GitHub Pages (hanya untuk push events)
8. **Status** - Log build status

### Deploy Configuration:
```yaml
publish_branch: master        # Deploy ke branch master (GitHub Pages)
cname: shirokun20.com        # Custom domain (jika tersedia)
publish_dir: ./dist          # Folder hasil build
commit_message: 'chore: auto build from {branch}'
```

## 2. Test and Validate Workflow (`test.yml`)

Workflow ini run untuk PR validation.

### Trigger:
- Pull request ke branch `develop` atau `main`

### Steps:
1. **Checkout** - Clone repository
2. **Setup Node.js** - Setup environment
3. **Install Dependencies** - Install npm packages
4. **Lint** - Run ESLint (akan fail jika ada error)
5. **Type Check** - Build TypeScript + Vite
6. **Summary** - Generate GitHub job summary

## Configuration Details

### Cache Strategy:
- Menggunakan npm cache untuk faster installations
- Cache key: `node_modules` based on `package-lock.json`

### Build Output:
- Output folder: `dist/`
- Artifacts retention: 5 hari
- Deployed ke GitHub Pages

### Environment:
- Node.js: 20.x (LTS)
- OS: ubuntu-latest
- Runner: GitHub-hosted

## Setup Requirements

1. **CNAME Requirement** (untuk custom domain):
   - Edit workflow file: ubah `shirokun20.com` dengan domain kalian
   - Atau hapus line `cname:` jika tidak pakai custom domain

2. **GitHub Pages Settings**:
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: `master` (atau sesuai workflow)

3. **Permissions**:
   - Workflow sudah menggunakan `${{ secrets.GITHUB_TOKEN }}`
   - Tidak perlu personal access token tambahan

## Usage

### Push ke develop/main:
```bash
git push origin develop
# atau
git push origin main
```

Workflow otomatis trigger dan deploy ke master branch jika build berhasil.

### Create Pull Request:
```bash
git push origin feature-branch
# Buat PR dari GitHub UI
```

Pull request akan divalidasi dengan test workflow.

## Monitoring

### GitHub Actions Dashboard:
- Go to repo → Actions tab
- Lihat workflow run status
- Check logs untuk debugging

### Artifacts:
- Each successful build uploads `dist/` folder
- Download dari Actions → specific run → Artifacts

### Deployment Status:
- Check GitHub Pages section di repo Settings
- Atau akses langsung: `https://shirokun20.github.io/`

## Troubleshooting

### Workflow fails with "npm not found":
- Ensure `node-version` matches LTS versions
- Check `package.json` for correct scripts

### Build fails:
- Check TypeScript errors: `tsc -b`
- Check ESLint errors: `npm run lint`

### Deploy tidak trigger:
- Ensure push to `develop` atau `main`
- Check branch protection rules tidak block merges
- Verify `GITHUB_TOKEN` permissions

## Best Practices

1. **Always create PR** untuk changes di develop/main
2. **Monitor workflow** sebelum merge
3. **Keep dependencies updated** dengan `npm update`
4. **Test locally** sebelum push: `npm run lint && npm run build`
5. **Review artifacts** sebelum deploy ke production

## Future Enhancements

Possible improvements:
- [ ] Add Node.js version matrix testing
- [ ] Add security scanning (CodeQL)
- [ ] Add performance benchmarks
- [ ] Add Lighthouse CI untuk performance metrics
- [ ] Add automated versioning dan releases
- [ ] Add Slack/Discord notifications
- [ ] Add staging environment deploy
