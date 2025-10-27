# 🚀 BizCanvas - Setup Instructions

## Prerequisites
- Node.js 18+ installed
- A Supabase account (free tier works!)

## Step 1: Install Dependencies

```powershell
npm install
```

## Step 2: Set Up Supabase

1. **Create a Supabase Project**
   - Go to [https://supabase.com](https://supabase.com)
   - Click "Start your project"
   - Sign in or create an account
   - Click "New Project"
   - Fill in your project details and create the project

2. **Get Your API Keys**
   - Once your project is ready, go to **Settings** (gear icon in sidebar)
   - Click on **API** in the settings menu
   - You'll see:
     - `Project URL` - your Supabase URL
     - `anon public` key - your anonymous key (under Project API keys)

3. **Configure Environment Variables**
   - Copy the `.env.local.example` file to `.env.local`:
     ```powershell
     Copy-Item .env.local.example .env.local
     ```
   - Open `.env.local` and replace the placeholder values:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
     ```

## Step 3: Configure Supabase Authentication

1. In your Supabase dashboard, go to **Authentication** > **URL Configuration**
2. Add your site URL:
   - For development: `http://localhost:3000`
   - For production (later): `https://bizcanvas.vercel.app`
3. Add redirect URLs:
   - `http://localhost:3000/dashboard`
   - `https://bizcanvas.vercel.app/dashboard` (for production)

## Step 4: Run the Development Server

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

## 🎉 You're All Set!

### Testing the App

1. **Sign Up**: Go to `/auth/signup` and create a new account
2. **Check Email**: Supabase sends a confirmation email (check spam!)
3. **Sign In**: After confirming, go to `/auth/signin`
4. **Dashboard**: You'll be redirected to `/dashboard`

## 🚀 Next Steps

- Customize the styling in `app/globals.css`
- Add more features to the dashboard
- Implement the Business Model Canvas generator
- Deploy to Vercel

## 📁 Project Structure

```
bizcanvas/
├── app/
│   ├── auth/
│   │   ├── signin/page.tsx       # Sign in page
│   │   └── signup/page.tsx       # Sign up page
│   ├── dashboard/page.tsx        # Protected dashboard
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
├── lib/
│   └── supabase.ts               # Supabase client
├── middleware.ts                 # Route protection
├── .env.local                    # Environment variables (create this!)
└── package.json
```

## 🔒 Features Included

- ✅ Email/Password authentication with Supabase
- ✅ Protected routes (middleware)
- ✅ Responsive design with TailwindCSS
- ✅ Sign up with email confirmation
- ✅ Sign in/Sign out functionality
- ✅ Dashboard with user session

## 🐛 Troubleshooting

**"Invalid login credentials"**
- Make sure you've confirmed your email
- Check that your credentials are correct

**Environment variables not working**
- Restart the dev server after adding `.env.local`
- Make sure variable names start with `NEXT_PUBLIC_`

**Redirect issues**
- Check Supabase dashboard > Authentication > URL Configuration
- Make sure redirect URLs are properly configured

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
