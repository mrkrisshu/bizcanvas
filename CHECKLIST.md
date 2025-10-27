# 🚀 BizCanvas - Getting Started Checklist

Use this checklist to get your BizCanvas app up and running!

## ☑️ Prerequisites

- [ ] Node.js 18+ installed ([Download](https://nodejs.org))
- [ ] Git installed ([Download](https://git-scm.com))
- [ ] Code editor (VS Code recommended)
- [ ] Supabase account ([Sign up](https://supabase.com))

## 📦 Step 1: Install Dependencies (2 min)

```powershell
cd c:\Users\mrkri\Desktop\bizcanvas
npm install
```

**Wait for installation to complete...**

- [ ] Dependencies installed successfully
- [ ] No error messages in terminal

## 🔑 Step 2: Supabase Setup (5 min)

### Create Supabase Project
- [ ] Go to [supabase.com](https://supabase.com)
- [ ] Sign in or create account
- [ ] Click "New Project"
- [ ] Fill in:
  - Name: `BizCanvas`
  - Database Password: (save this!)
  - Region: (choose nearest)
- [ ] Click "Create new project"
- [ ] Wait for project to be ready (~2 min)

### Get API Credentials
- [ ] In Supabase dashboard, go to Settings (gear icon)
- [ ] Click "API" in settings menu
- [ ] Copy **Project URL** (starts with `https://`)
- [ ] Copy **anon public** key (long string under "Project API keys")

### Configure Environment Variables
- [ ] Copy `.env.local.example` to `.env.local`:
  ```powershell
  Copy-Item .env.local.example .env.local
  ```
- [ ] Open `.env.local` in your editor
- [ ] Replace `your-project-url` with your Project URL
- [ ] Replace `your-anon-key` with your anon public key
- [ ] Save the file

### Configure Authentication
- [ ] In Supabase dashboard, go to **Authentication**
- [ ] Click **URL Configuration**
- [ ] Set **Site URL** to: `http://localhost:3000`
- [ ] Add to **Redirect URLs**: `http://localhost:3000/dashboard`
- [ ] Click **Save**

## ▶️ Step 3: Run the App (1 min)

```powershell
npm run dev
```

- [ ] Server started successfully
- [ ] No error messages
- [ ] Terminal shows: `Ready on http://localhost:3000`

## 🧪 Step 4: Test Authentication (5 min)

### Open the App
- [ ] Visit [http://localhost:3000](http://localhost:3000)
- [ ] Landing page loads correctly
- [ ] Styling looks good

### Test Sign Up
- [ ] Click "Get Started Free"
- [ ] Enter your email address
- [ ] Enter a password (min 6 characters)
- [ ] Click "Sign Up"
- [ ] See success message: "Check your email..."

### Confirm Email
- [ ] Check your email inbox
- [ ] Look for Supabase confirmation email
- [ ] Check spam folder if not in inbox
- [ ] Click confirmation link in email
- [ ] Redirected to confirmation page

### Test Sign In
- [ ] Go to [http://localhost:3000/auth/signin](http://localhost:3000/auth/signin)
- [ ] Enter your email
- [ ] Enter your password
- [ ] Click "Sign In"
- [ ] Redirected to dashboard

### Test Dashboard
- [ ] Dashboard loads correctly
- [ ] Your email is displayed
- [ ] All cards are visible
- [ ] "Sign Out" button visible

### Test Sign Out
- [ ] Click "Sign Out" button
- [ ] Redirected to landing page
- [ ] Try accessing [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
- [ ] Should redirect to sign in page (protected route working!)

## ✅ Verification Checklist

### Core Features Working
- [ ] Landing page displays
- [ ] Sign up creates account
- [ ] Email confirmation works
- [ ] Sign in authenticates
- [ ] Dashboard is protected
- [ ] Sign out works
- [ ] Redirects work correctly

### UI/UX
- [ ] Responsive on mobile
- [ ] Responsive on desktop
- [ ] Dark mode toggle works
- [ ] Forms are styled correctly
- [ ] Buttons work and look good
- [ ] Error messages display
- [ ] Loading states show

## 🐛 Troubleshooting

### Dependencies Won't Install
```powershell
# Clear npm cache and try again
npm cache clean --force
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Environment Variables Not Working
- [ ] Restart dev server after editing `.env.local`
- [ ] Check file is named exactly `.env.local` (not `.env.local.txt`)
- [ ] Verify no extra spaces in variable values
- [ ] Check variables start with `NEXT_PUBLIC_`

### Can't Sign In
- [ ] Verify email is confirmed (check inbox/spam)
- [ ] Check Supabase credentials in `.env.local`
- [ ] Verify redirect URLs in Supabase dashboard
- [ ] Try signing up with different email

### Dashboard Redirects to Sign In
- [ ] This is normal if not signed in (working correctly!)
- [ ] Sign in first, then access dashboard
- [ ] Check browser cookies are enabled

### Styles Not Showing
```powershell
# Clear Next.js cache
Remove-Item -Recurse -Force .next
npm run dev
```

## 📚 Next Steps

### Learn the Codebase
- [ ] Read [STRUCTURE.md](./STRUCTURE.md) - understand folder structure
- [ ] Read [NOTES.md](./NOTES.md) - development notes
- [ ] Review `app/dashboard/page.tsx` - main app area

### Start Building Features
- [ ] Plan Business Model Canvas layout
- [ ] Design canvas data structure
- [ ] Create Supabase tables (if needed)
- [ ] Build canvas editor component

### Deploy to Production
- [ ] Read [DEPLOYMENT.md](./DEPLOYMENT.md)
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Configure production URLs in Supabase

## 🎯 Quick Reference

### Start Development
```powershell
npm run dev
```

### Stop Development
Press `Ctrl+C` in terminal

### View Logs
Check terminal where `npm run dev` is running

### Common URLs
- **App**: http://localhost:3000
- **Sign In**: http://localhost:3000/auth/signin
- **Sign Up**: http://localhost:3000/auth/signup
- **Dashboard**: http://localhost:3000/dashboard
- **Supabase Dashboard**: https://app.supabase.com

## ✨ You're All Set!

If all checkboxes are ticked, you're ready to build! 🎉

### What You Have Now:
- ✅ Working authentication system
- ✅ Protected dashboard
- ✅ Beautiful, responsive UI
- ✅ Development environment ready
- ✅ Documentation and guides

### Start Building:
Focus on `app/dashboard/page.tsx` to add your Business Model Canvas features!

---

**Need Help?**
- Check [COMPLETE.md](./COMPLETE.md) for overview
- Read [SETUP.md](./SETUP.md) for detailed instructions
- Review [SCRIPTS.md](./SCRIPTS.md) for npm commands

**Ready to Deploy?**
- Follow [DEPLOYMENT.md](./DEPLOYMENT.md)

🚀 **Happy coding!**
