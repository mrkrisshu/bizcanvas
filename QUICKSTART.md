# 🎯 Quick Start Guide

Get BizCanvas running in 5 minutes!

## 1️⃣ Install Dependencies (1 min)

```powershell
npm install
```

## 2️⃣ Set Up Supabase (2 min)

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Get your credentials from Settings > API
3. Create `.env.local`:

```powershell
Copy-Item .env.local.example .env.local
```

4. Edit `.env.local` with your Supabase credentials

## 3️⃣ Configure Redirect URLs (1 min)

In Supabase Dashboard > Authentication > URL Configuration, add:
- Site URL: `http://localhost:3000`
- Redirect URL: `http://localhost:3000/dashboard`

## 4️⃣ Run the App (1 min)

```powershell
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) 🎉

## ✅ Test It Out

1. Click "Get Started Free"
2. Sign up with your email
3. Confirm your email (check inbox/spam)
4. Sign in and see your dashboard!

---

**Need more details?** Check [SETUP.md](./SETUP.md) for complete instructions.
