# 🚀 BizCanvas

**BizCanvas** is a free AI-powered web application for generating Business Model Canvases.

Built with Next.js 14, TypeScript, TailwindCSS, and Supabase.

---

## ⚡ Quick Start

**New to BizCanvas?** Start here: **[START_HERE.md](./START_HERE.md)** ⭐

```powershell
# 1. Install dependencies
npm install

# 2. Set up environment
Copy-Item .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# 3. Run development server
npm run dev
```

**Full guide:** [QUICKSTART.md](./QUICKSTART.md) or [CHECKLIST.md](./CHECKLIST.md)

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| **[START_HERE.md](./START_HERE.md)** ⭐ | **Read this first!** Entry point to all documentation |
| [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) | One-page cheat sheet |
| [QUICKSTART.md](./QUICKSTART.md) | 5-minute setup guide |
| [CHECKLIST.md](./CHECKLIST.md) | Step-by-step setup checklist |
| [SETUP.md](./SETUP.md) | Detailed setup instructions |
| [COMPLETE.md](./COMPLETE.md) | Complete feature overview |
| [STRUCTURE.md](./STRUCTURE.md) | Folder structure guide |
| [VISUAL_GUIDE.md](./VISUAL_GUIDE.md) | Visual layouts & diagrams |
| [SCRIPTS.md](./SCRIPTS.md) | npm commands reference |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Deploy to Vercel |
| [NOTES.md](./NOTES.md) | Development notes |
| [INDEX.md](./INDEX.md) | Complete documentation index |
| [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) | Full project summary |

---

## 🔧 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.0.4 | React framework with App Router |
| **TypeScript** | 5.x | Type safety |
| **TailwindCSS** | 3.3.0 | Styling framework |
| **Supabase** | 2.39.0 | Authentication & database |
| **Vercel** | - | Hosting (ready to deploy) |

---

## ✨ Features

### ✅ Implemented
- Email/password authentication with Supabase
- Sign up with email confirmation
- Sign in with session management
- Protected dashboard route
- Responsive design (mobile, tablet, desktop)
- Dark mode support
- Beautiful TailwindCSS UI
- Route protection middleware
- Sign out functionality

### 🔮 Coming Soon
- Business Model Canvas editor
- AI-powered suggestions
- Canvas templates
- Save & export functionality
- Team collaboration
- Analytics

---

## 📁 Project Structure

```
bizcanvas/
├── app/                      # Next.js App Router
│   ├── auth/
│   │   ├── signin/          # Sign in page
│   │   └── signup/          # Sign up page
│   ├── dashboard/           # Protected dashboard
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── lib/
│   ├── supabase.ts          # Supabase client
│   └── database.types.ts    # TypeScript types
├── middleware.ts            # Route protection
└── [Config files...]        # Next.js, Tailwind, TypeScript configs
```

**Full structure:** [STRUCTURE.md](./STRUCTURE.md)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Supabase account ([Sign up free](https://supabase.com))

### Setup Steps
1. **Install:** `npm install`
2. **Configure:** Copy `.env.local.example` to `.env.local`
3. **Supabase:** Add your credentials to `.env.local`
4. **Run:** `npm run dev`
5. **Visit:** [http://localhost:3000](http://localhost:3000)

**Detailed guide:** [SETUP.md](./SETUP.md)

---

## 🌐 Deploy to Production

Deploy to Vercel in minutes:

```powershell
# 1. Push to GitHub
git push

# 2. Import to Vercel
# 3. Add environment variables
# 4. Deploy!
```

**Full guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

---

## 🤝 Contributing

This is a foundational template. Build on it and make it your own!

---

## 📝 License

MIT

---

**Built with ❤️ using Next.js, TypeScript, TailwindCSS, and Supabase**

**Ready to build?** → [START_HERE.md](./START_HERE.md) 🚀
