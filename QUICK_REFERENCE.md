# 🎯 BizCanvas Quick Reference Card

**One-page reference for everything you need!**

---

## 🚀 Quick Start Commands

```powershell
# Setup
npm install
Copy-Item .env.local.example .env.local
# Edit .env.local with Supabase credentials

# Run
npm run dev

# Build
npm run build

# Deploy
git push  # Auto-deploys on Vercel
```

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Landing page |
| `app/auth/signin/page.tsx` | Sign in |
| `app/auth/signup/page.tsx` | Sign up |
| `app/dashboard/page.tsx` | Dashboard (start building here!) |
| `lib/supabase.ts` | Supabase client |
| `middleware.ts` | Route protection |
| `.env.local` | Environment variables (create this!) |

---

## 🌐 URLs (Local Development)

| URL | Page |
|-----|------|
| `http://localhost:3000` | Landing |
| `http://localhost:3000/auth/signup` | Sign Up |
| `http://localhost:3000/auth/signin` | Sign In |
| `http://localhost:3000/dashboard` | Dashboard |

---

## 📚 Documentation Quick Links

| Need | Read |
|------|------|
| **Getting Started** | [START_HERE.md](./START_HERE.md) |
| **Quick Setup (5 min)** | [QUICKSTART.md](./QUICKSTART.md) |
| **Step-by-Step** | [CHECKLIST.md](./CHECKLIST.md) |
| **File Structure** | [STRUCTURE.md](./STRUCTURE.md) |
| **All Commands** | [SCRIPTS.md](./SCRIPTS.md) |
| **Deploy Guide** | [DEPLOYMENT.md](./DEPLOYMENT.md) |
| **All Docs** | [INDEX.md](./INDEX.md) |

---

## 🔑 Environment Variables

Required in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Get from: **Supabase Dashboard** → Settings → API

---

## 🎨 Custom CSS Classes

```css
.btn-primary      /* Primary button (blue) */
.btn-secondary    /* Secondary button (gray) */
.input-field      /* Form input styling */
.auth-card        /* Auth page card container */
```

---

## 🛠️ npm Scripts

```powershell
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Run production build
npm run lint      # Check code quality
```

---

## 🔐 Supabase Setup Checklist

- [ ] Create Supabase project
- [ ] Copy Project URL
- [ ] Copy anon public key
- [ ] Add to `.env.local`
- [ ] Set Site URL: `http://localhost:3000`
- [ ] Add Redirect URL: `http://localhost:3000/dashboard`

---

## 📊 Project Structure (Quick View)

```
bizcanvas/
├── app/               # Pages
│   ├── auth/         # Authentication
│   ├── dashboard/    # Protected area
│   └── page.tsx      # Landing
├── lib/              # Utilities
└── middleware.ts     # Protection
```

---

## ✅ Testing Checklist

- [ ] Landing page loads
- [ ] Sign up works
- [ ] Email confirmation received
- [ ] Sign in works
- [ ] Dashboard shows
- [ ] Sign out works
- [ ] Protected routes redirect

---

## 🐛 Quick Troubleshooting

**Can't sign in?**
→ Check email confirmation

**Styles not showing?**
→ `Remove-Item -Recurse -Force .next; npm run dev`

**Environment variables not working?**
→ Restart dev server

**Port 3000 in use?**
→ Kill the process or use different port

---

## 🎯 Common Tasks

### Add New Page
1. Create `app/newpage/page.tsx`
2. Add route protection in `middleware.ts` (if needed)

### Update Styles
Edit `app/globals.css` or use Tailwind classes

### Change Colors
Edit `tailwind.config.ts`

### Add Database Table
1. Go to Supabase Dashboard → Table Editor
2. Create table
3. Update `lib/database.types.ts`

---

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

Full guide: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 📞 Get Help

**Documentation:** Check [INDEX.md](./INDEX.md)

**Errors:** See [CHECKLIST.md](./CHECKLIST.md) troubleshooting

**Commands:** Reference [SCRIPTS.md](./SCRIPTS.md)

**Setup:** Follow [SETUP.md](./SETUP.md)

---

## ⚡ Power User Tips

- Use `Ctrl+C` to stop dev server
- Changes hot reload automatically
- TypeScript errors show in terminal
- Check browser console for runtime errors
- Use VS Code extensions for better DX

---

## 🎨 Tech Stack at a Glance

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Auth:** Supabase
- **Deploy:** Vercel

---

## 📝 Quick Notes

- Restart server after `.env.local` changes
- All routes auto-protected by middleware
- Dark mode supported out of the box
- Mobile-first responsive design
- Production-ready from day one

---

## 🎯 Next Steps

1. ✅ Read [START_HERE.md](./START_HERE.md)
2. ✅ Follow [CHECKLIST.md](./CHECKLIST.md)
3. ✅ Build features in `app/dashboard/page.tsx`
4. ✅ Deploy with [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Print this page for quick reference! 🖨️**

**Bookmark:** [INDEX.md](./INDEX.md) for all documentation

**Start:** [START_HERE.md](./START_HERE.md)

🚀 **Happy coding!**
