# 🎨 BizCanvas Visual Guide

A visual walkthrough of the BizCanvas app!

## 🌟 Landing Page Layout

```
┌─────────────────────────────────────────────────┐
│                                                 │
│              🎨 BizCanvas                       │
│   AI-Powered Business Model Canvas Generator   │
│                                                 │
│   Create, visualize, and refine your business  │
│   model with the power of AI                   │
│                                                 │
│   [Get Started Free]  [Sign In]                │
│                                                 │
├─────────────────┬─────────────────┬─────────────┤
│                 │                 │             │
│   🤖 AI-Powered │ 📊 Visual Canvas│ 💾 Save     │
│   Generate      │ Interactive     │ Export in   │
│   comprehensive │ business model  │ multiple    │
│   models        │ canvas          │ formats     │
│                 │                 │             │
└─────────────────┴─────────────────┴─────────────┘
```

## 🔐 Sign Up Page

```
┌────────────────────────────────────┐
│                                    │
│       Create Account               │
│   Join BizCanvas and start         │
│   creating your business models    │
│                                    │
│   ┌──────────────────────────┐    │
│   │ Email                    │    │
│   │ you@example.com          │    │
│   └──────────────────────────┘    │
│                                    │
│   ┌──────────────────────────┐    │
│   │ Password                 │    │
│   │ ••••••••                 │    │
│   └──────────────────────────┘    │
│   Minimum 6 characters             │
│                                    │
│   ┌──────────────────────────┐    │
│   │     Sign Up              │    │
│   └──────────────────────────┘    │
│                                    │
│   Already have an account?         │
│   Sign In                          │
│                                    │
└────────────────────────────────────┘
```

## 🔑 Sign In Page

```
┌────────────────────────────────────┐
│                                    │
│       Welcome Back                 │
│   Sign in to continue to BizCanvas │
│                                    │
│   ┌──────────────────────────┐    │
│   │ Email                    │    │
│   │ you@example.com          │    │
│   └──────────────────────────┘    │
│                                    │
│   ┌──────────────────────────┐    │
│   │ Password                 │    │
│   │ ••••••••                 │    │
│   └──────────────────────────┘    │
│                                    │
│   ┌──────────────────────────┐    │
│   │      Sign In             │    │
│   └──────────────────────────┘    │
│                                    │
│   Don't have an account?           │
│   Sign Up                          │
│                                    │
└────────────────────────────────────┘
```

## 📊 Dashboard Layout

```
┌─────────────────────────────────────────────────────────────┐
│  BizCanvas                               [Sign Out]         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Welcome to your Dashboard                                 │
│  user@example.com                                          │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │ My Canvases  │  │  Templates   │  │ AI Assistant │    │
│  │      0       │  │      📋      │  │      🤖      │    │
│  │              │  │              │  │              │    │
│  │ Create and   │  │ Browse pre-  │  │ Get AI-      │    │
│  │ manage your  │  │ built        │  │ powered      │    │
│  │ business     │  │ templates    │  │ suggestions  │    │
│  │ model        │  │ for different│  │ for your     │    │
│  │ canvases     │  │ industries   │  │ business     │    │
│  │              │  │              │  │ model        │    │
│  │ [Create New  │  │ [Browse      │  │ [Try AI      │    │
│  │  Canvas]     │  │  Templates]  │  │  Assistant]  │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ Getting Started                                     │  │
│  │                                                     │  │
│  │ ① Create your first canvas                         │  │
│  │    Start with a blank canvas or choose from        │  │
│  │    our templates                                   │  │
│  │                                                     │  │
│  │ ② Use AI assistance                                │  │
│  │    Let our AI help you fill in the details and     │  │
│  │    refine your model                               │  │
│  │                                                     │  │
│  │ ③ Share and export                                 │  │
│  │    Share your canvas with your team or export      │  │
│  │    it in various formats                           │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## 🗺️ User Flow Diagram

```
    START
      ↓
┌─────────────┐
│   Landing   │ ← Not authenticated
│    Page     │
└─────────────┘
      ↓
    Choice
   /      \
  /        \
Sign Up   Sign In
  │          │
  ↓          │
Email        │
Confirmation │
  │          │
  └────┬─────┘
       ↓
┌─────────────┐
│  Dashboard  │ ← Authenticated
│  (Protected)│
└─────────────┘
       ↓
    Actions
    /  |  \
   /   |   \
Create  │  Sign Out
Canvas  │     ↓
     View   Back to
   Templates Landing
```

## 🔒 Route Protection Flow

```
User tries to access /dashboard
         ↓
   Has valid session?
    /            \
  YES            NO
   ↓              ↓
Show          Redirect to
Dashboard     /auth/signin
   ↓
Protected
Content
```

```
Authenticated user tries to access /auth/signin
         ↓
   Has valid session?
    /            \
  YES            NO
   ↓              ↓
Redirect to    Show Sign
/dashboard     In Page
```

## 🎨 Color Scheme

```
Primary Colors (Blues):
┌────┬────┬────┬────┬────┬────┬────┬────┬────┐
│ 50 │100 │200 │300 │400 │500 │600 │700 │800 │
├────┼────┼────┼────┼────┼────┼────┼────┼────┤
│ □  │ □  │ □  │ □  │ □  │ ■  │ ■  │ ■  │ ■  │
└────┴────┴────┴────┴────┴────┴────┴────┴────┘
 Lighter                              Darker
 
Primary-600: Main brand color
Primary-700: Hover states
Primary-500: Focus rings
Primary-100: Subtle backgrounds
```

## 📱 Responsive Breakpoints

```
Mobile         Tablet        Desktop        Wide
0-639px        640-767px     768-1023px     1024px+

┌──────┐      ┌──────────┐  ┌─────────────┐ ┌──────────────────┐
│      │      │          │  │             │ │                  │
│  📱  │      │    📱    │  │   💻        │ │    🖥️            │
│      │      │          │  │             │ │                  │
└──────┘      └──────────┘  └─────────────┘ └──────────────────┘

1 column      2 columns     3 columns       3 columns (wider)
```

## 🎯 Component Hierarchy

```
App
└── Layout (Root)
    ├── Landing Page (/)
    │   ├── Hero Section
    │   ├── CTA Buttons
    │   └── Feature Cards (3)
    │
    ├── Auth Pages (/auth/*)
    │   ├── Sign Up (/auth/signup)
    │   │   ├── Form
    │   │   │   ├── Email Input
    │   │   │   ├── Password Input
    │   │   │   └── Submit Button
    │   │   └── Link to Sign In
    │   │
    │   └── Sign In (/auth/signin)
    │       ├── Form
    │       │   ├── Email Input
    │       │   ├── Password Input
    │       │   └── Submit Button
    │       └── Link to Sign Up
    │
    └── Dashboard (/dashboard)
        ├── Header
        │   ├── Logo
        │   └── Sign Out Button
        ├── Welcome Section
        │   └── User Email
        ├── Feature Cards (3)
        │   ├── My Canvases
        │   ├── Templates
        │   └── AI Assistant
        └── Getting Started Guide
            ├── Step 1
            ├── Step 2
            └── Step 3
```

## 🔄 State Management

```
Authentication State:
┌─────────────┐
│   Loading   │ ← Initial state
└─────────────┘
      ↓
   Check session
    /        \
  Valid    Invalid
   ↓          ↓
Authenticated  Guest
   │            │
   ↓            ↓
Dashboard   Auth Pages
```

## 📦 Data Flow

```
User Action
    ↓
Component Event Handler
    ↓
Supabase Client
    ↓
Supabase Server
    ↓
Response
    ↓
Update Component State
    ↓
Re-render UI
```

## 🎨 Styling Classes

```
Custom Utility Classes (globals.css):

.btn-primary
├── Full width
├── Blue background (primary-600)
├── White text
├── Rounded corners
├── Hover effect (darker blue)
└── Smooth transition

.btn-secondary
├── Full width
├── Gray background
├── White text
├── Rounded corners
├── Hover effect (darker gray)
└── Smooth transition

.input-field
├── Full width
├── Border
├── Rounded corners
├── Focus ring (blue)
└── Padding

.auth-card
├── White background (dark mode: dark gray)
├── Padding
├── Rounded corners
├── Shadow
└── Max width (responsive)
```

## 🗂️ File Organization

```
Feature-based Structure:

app/
├── Global (layout, page, styles)
│   └── Used across entire app
│
├── auth/ (feature)
│   └── All authentication-related pages
│       ├── signup/
│       └── signin/
│
└── dashboard/ (feature)
    └── Protected user area
        └── page.tsx

lib/
└── Shared utilities
    ├── supabase.ts (client)
    └── database.types.ts (types)
```

## 🎯 Key Interactions

```
Sign Up Flow:
User fills form → Submit → Supabase creates account
→ Email sent → User confirms → Account active

Sign In Flow:
User fills form → Submit → Supabase validates
→ Session created → Redirect to dashboard

Sign Out Flow:
User clicks button → Supabase destroys session
→ Redirect to landing page

Protected Route:
User tries to access → Middleware checks session
→ If valid: allow → If invalid: redirect to signin
```

---

**Visual Guide Complete!** 🎨

Use this guide to understand the layout, structure, and user flows of BizCanvas.

**Next:** Check [STRUCTURE.md](./STRUCTURE.md) for detailed file organization.
