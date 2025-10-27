# 🎯 npm Scripts Reference

Quick reference for all available npm commands in BizCanvas.

## 🏃 Development

### Start Development Server
```powershell
npm run dev
```
- Starts Next.js development server
- Runs on `http://localhost:3000`
- Hot reload enabled
- Use for local development

## 🏗️ Building

### Build for Production
```powershell
npm run build
```
- Creates optimized production build
- Outputs to `.next` directory
- Run before deploying manually
- Vercel runs this automatically

### Start Production Server
```powershell
npm run start
```
- Runs the production build
- Must run `npm run build` first
- Use to test production locally

## 🔍 Code Quality

### Run Linter
```powershell
npm run lint
```
- Checks code for errors and style issues
- Uses ESLint with Next.js config
- Fix issues before committing

## 📦 Dependencies

### Install Dependencies
```powershell
npm install
```
- Installs all packages from `package.json`
- Run this first after cloning

### Update Dependencies
```powershell
npm update
```
- Updates packages to latest versions
- Be careful with major version updates

### Add New Package
```powershell
npm install package-name
```
- Installs and saves to dependencies

### Add Dev Package
```powershell
npm install --save-dev package-name
```
- Installs and saves to devDependencies

## 🧹 Cleanup

### Clean Build
```powershell
Remove-Item -Recurse -Force .next
npm run build
```
- Removes previous build
- Creates fresh build
- Use if build issues occur

### Clean Install
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```
- Removes all dependencies
- Fresh install
- Use for dependency issues

## 🔧 Common Workflows

### First Time Setup
```powershell
# 1. Install dependencies
npm install

# 2. Copy environment file
Copy-Item .env.local.example .env.local

# 3. Edit .env.local with your credentials

# 4. Start development
npm run dev
```

### Before Committing
```powershell
# 1. Lint your code
npm run lint

# 2. Build to check for errors
npm run build

# 3. Commit if successful
git add .
git commit -m "Your message"
git push
```

### Testing Production Locally
```powershell
# 1. Build
npm run build

# 2. Start production server
npm run start

# 3. Visit http://localhost:3000
```

## 🚀 Deployment

### Via Vercel (Recommended)
- Just push to GitHub
- Vercel automatically runs `npm run build`
- No manual deployment needed

### Manual Deployment
```powershell
# 1. Build
npm run build

# 2. Deploy .next folder to your host
# 3. Set environment variables on host
# 4. Run npm start on host
```

## 📊 Useful Package Scripts

### Check Outdated Packages
```powershell
npm outdated
```

### View Dependency Tree
```powershell
npm list
```

### Audit Security
```powershell
npm audit
```

### Fix Security Issues
```powershell
npm audit fix
```

## 🎨 Development Tips

**Fast Refresh**
- Save any file to see instant updates
- No need to restart server

**Clear Cache**
```powershell
Remove-Item -Recurse -Force .next
```

**Check TypeScript**
- TypeScript errors show in terminal
- Also visible in VS Code

**Hot Reload Issues?**
```powershell
# Restart dev server
# Press Ctrl+C, then
npm run dev
```

## 📝 Environment Variables

**Load .env.local Changes**
- Restart dev server after changing `.env.local`
- Variables must start with `NEXT_PUBLIC_` for client access

## 🐛 Troubleshooting

**Port 3000 Already in Use**
```powershell
# Find and kill the process
# Or use different port:
$env:PORT=3001; npm run dev
```

**Build Fails**
- Check lint errors: `npm run lint`
- Check TypeScript errors in terminal
- Verify all files are saved

**Styles Not Applying**
- Check Tailwind config
- Verify `globals.css` is imported in `layout.tsx`
- Try clearing `.next` folder

---

**Quick Start**: `npm install` → Edit `.env.local` → `npm run dev` → Visit `localhost:3000` 🚀
