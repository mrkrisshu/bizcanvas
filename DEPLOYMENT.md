# 🚀 Deploy to Vercel

Deploy your BizCanvas app to Vercel in minutes!

## Prerequisites

- GitHub account
- Vercel account (free tier works!)
- Completed local setup (working locally)

## Step 1: Push to GitHub

1. **Initialize Git Repository**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: BizCanvas setup"
   ```

2. **Create GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it `bizcanvas`
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Push Your Code**
   ```powershell
   git remote add origin https://github.com/yourusername/bizcanvas.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in with GitHub

2. **Import Project**
   - Click "Add New" → "Project"
   - Select your `bizcanvas` repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Leave build settings as default

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   
   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key |

   Get these from your Supabase project > Settings > API

5. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes for the build
   - You'll get a URL like `bizcanvas-xyz.vercel.app`

## Step 3: Configure Supabase for Production

1. **Add Production URL to Supabase**
   - Go to Supabase Dashboard > Authentication > URL Configuration
   - Add your Vercel URL to:
     - **Site URL**: `https://your-app.vercel.app`
     - **Redirect URLs**: `https://your-app.vercel.app/dashboard`

2. **Test Your Deployment**
   - Visit your Vercel URL
   - Try signing up with a new account
   - Check that email confirmation works
   - Sign in and access the dashboard

## Step 4: Custom Domain (Optional)

1. **Add Custom Domain in Vercel**
   - Go to your project settings
   - Click "Domains"
   - Add `bizcanvas.vercel.app` or your own domain

2. **Update Supabase**
   - Add your custom domain to Site URL and Redirect URLs
   - Format: `https://bizcanvas.vercel.app`

## 🔄 Continuous Deployment

Vercel automatically deploys:
- ✅ Every push to `main` branch → Production
- ✅ Every pull request → Preview deployment

To deploy updates:
```powershell
git add .
git commit -m "Add new feature"
git push
```

Vercel will automatically build and deploy!

## 🐛 Troubleshooting

**Build Failed**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set

**Authentication Not Working**
- Verify Supabase redirect URLs include your Vercel domain
- Check environment variables are correct
- Look at browser console for errors

**Styles Not Loading**
- Vercel should handle this automatically
- If issues persist, check PostCSS and Tailwind config

## 📊 Vercel Dashboard Features

- **Analytics**: Track page views and performance
- **Logs**: Real-time server and edge function logs
- **Deployment History**: Rollback to previous versions
- **Environment Variables**: Manage secrets securely
- **Domains**: Add custom domains and SSL

## 🎯 Production Checklist

- [ ] Environment variables set in Vercel
- [ ] Supabase URLs updated for production
- [ ] Test sign up flow
- [ ] Test sign in flow
- [ ] Test dashboard access
- [ ] Test sign out
- [ ] Check mobile responsiveness
- [ ] Verify email confirmations work
- [ ] Test protected routes

## 🚀 You're Live!

Your BizCanvas app is now deployed and accessible worldwide!

**Production URL**: `https://your-app.vercel.app`

Next steps:
- Share your app
- Add more features
- Monitor analytics
- Collect user feedback

---

**Need help?** Check:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Supabase Production Checklist](https://supabase.com/docs/guides/platform/going-into-prod)
