# 📁 BizCanvas Folder Structure

```
bizcanvas/
│
├── 📄 Configuration Files
│   ├── .env.local.example          # Environment variables template
│   ├── .eslintrc.json              # ESLint configuration
│   ├── .gitignore                  # Git ignore rules
│   ├── next.config.js              # Next.js configuration
│   ├── package.json                # Dependencies and scripts
│   ├── postcss.config.js           # PostCSS configuration
│   ├── tailwind.config.ts          # TailwindCSS configuration
│   └── tsconfig.json               # TypeScript configuration
│
├── 📚 Documentation
│   ├── README.md                   # Project overview
│   ├── SETUP.md                    # Detailed setup instructions
│   ├── QUICKSTART.md               # Quick start guide
│   ├── NOTES.md                    # Development notes
│   └── STRUCTURE.md                # This file
│
├── 🔐 Route Protection
│   └── middleware.ts               # Middleware for protected routes
│
├── 📱 Application (app/)
│   ├── layout.tsx                  # Root layout component
│   ├── page.tsx                    # Landing page (/)
│   ├── globals.css                 # Global styles & Tailwind
│   │
│   ├── 🔒 auth/                    # Authentication routes
│   │   ├── signin/
│   │   │   └── page.tsx            # Sign in page (/auth/signin)
│   │   └── signup/
│   │       └── page.tsx            # Sign up page (/auth/signup)
│   │
│   └── 📊 dashboard/               # Protected routes
│       └── page.tsx                # Dashboard page (/dashboard)
│
└── 🛠️ Utilities (lib/)
    ├── supabase.ts                 # Supabase client instance
    └── database.types.ts           # TypeScript types for database
```

## 🎨 Key Files Explained

### Configuration

- **`.env.local`** (create this!): Your Supabase credentials
- **`tailwind.config.ts`**: Custom color scheme (primary blues)
- **`middleware.ts`**: Protects `/dashboard` routes, redirects auth logic

### Application Pages

- **`app/page.tsx`**: Landing page with feature cards
- **`app/auth/signup/page.tsx`**: User registration with email confirmation
- **`app/auth/signin/page.tsx`**: User login
- **`app/dashboard/page.tsx`**: Protected dashboard with sign out

### Styling

- **`app/globals.css`**: Custom utility classes:
  - `.btn-primary` - Blue primary button
  - `.btn-secondary` - Gray secondary button
  - `.input-field` - Styled form inputs
  - `.auth-card` - Card container for auth forms

### Utilities

- **`lib/supabase.ts`**: Configured Supabase client
- **`lib/database.types.ts`**: TypeScript types (extend as needed)

## 🔄 User Flow

```
Landing (/) 
    ↓
Sign Up (/auth/signup)
    ↓
Email Confirmation
    ↓
Sign In (/auth/signin)
    ↓
Dashboard (/dashboard) [Protected]
    ↓
Sign Out → Back to Landing
```

## 🛡️ Route Protection

The middleware automatically:
- ✅ Blocks `/dashboard` access without authentication
- ✅ Redirects authenticated users away from `/auth/*`
- ✅ Uses Supabase session cookies for state

## 🎨 Styling System

### Colors (TailwindCSS)
- **Primary**: Blue scale (50-900) - for CTAs and branding
- **Gray**: For secondary actions and text
- **Dark Mode**: Supported via `dark:` prefix

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Grid layouts for feature cards

## 🚀 Next Steps

1. **Install**: `npm install`
2. **Configure**: Copy `.env.local.example` to `.env.local`
3. **Run**: `npm run dev`
4. **Build**: Ready for Business Model Canvas features!

---

**Happy Coding! 🎉**
