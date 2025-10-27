# 🚀 BizCanvas - AI-Powered Business Model Canvas Generator

Generate professional Business Model Canvases using AI (Gemini 2.5 Flash). Free users get 3 generations, Pro users get unlimited access for ₹299/month.

## ✨ Features

- 🤖 **AI-Powered Generation**: Uses Gemini 2.5 Flash to generate comprehensive business model canvases
- 📊 **9-Block Canvas**: Complete business model canvas with all standard components
- 💾 **Auto-Save**: Changes are automatically saved after 2 seconds
- 📥 **Export**: Export canvases as PDF or PNG
- 🔒 **User Authentication**: Secure sign-up and sign-in with Supabase
- 💳 **Stripe Integration**: Upgrade to Pro for unlimited canvases
- 🎨 **Dark Modern UI**: Beautiful dark theme with Tailwind CSS

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- A Supabase account and project
- A Google AI (Gemini) API key
- A Stripe account (for payments)

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd bizcanvas
npm install
```

### 2. Configure Supabase

#### Create Tables

Run these SQL queries in your Supabase SQL Editor:

```sql
-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  subscription_status TEXT DEFAULT 'free' CHECK (subscription_status IN ('free', 'premium')),
  generation_count INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create canvases table
CREATE TABLE canvases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE canvases ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can insert own data" ON users
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Canvases policies
CREATE POLICY "Users can read own canvases" ON canvases
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own canvases" ON canvases
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own canvases" ON canvases
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own canvases" ON canvases
  FOR DELETE USING (auth.uid() = user_id);
```

### 3. Get API Keys

#### Supabase
1. Go to your Supabase project settings
2. Copy the Project URL and anon/public key
3. Generate a service role key (Settings → API → service_role key)

#### Gemini AI
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the API key

#### Stripe
1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your Secret Key from Dashboard → Developers → API keys
3. Create a product for ₹299/month recurring subscription
4. Copy the Price ID
5. Set up a webhook endpoint pointing to `https://your-domain.com/api/webhooks`
6. Copy the webhook signing secret

### 4. Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Copy from .env.example
cp .env.example .env.local
```

Fill in your actual values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

GEMINI_API_KEY=your-gemini-api-key

STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
NEXT_PUBLIC_STRIPE_PRICE_ID=price_your-price-id
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
/app
 ├─ /api
 │   ├─ /generate/route.ts       # AI generation endpoint
 │   ├─ /checkout/route.ts       # Stripe checkout
 │   └─ /webhooks/route.ts       # Stripe webhooks
 ├─ /dashboard/page.tsx          # Main dashboard
 ├─ /canvas/[id]/page.tsx        # Canvas editor
 └─ /auth                        # Auth pages
/components
 ├─ CanvasGrid.tsx               # 9-block editable grid
 ├─ CanvasCard.tsx               # Canvas list item
 └─ UpgradeModal.tsx             # Upgrade to Pro modal
/lib
 ├─ supabase.ts                  # Supabase client
 ├─ geminiClient.ts              # Gemini AI client
 └─ database.types.ts            # TypeScript types
```

## 🎯 Usage

### For Users

1. **Sign Up**: Create an account at `/auth/signup`
2. **Generate Canvas**: Enter your business idea and select an industry
3. **Edit**: Modify the AI-generated content in the 9-block grid
4. **Export**: Download as PDF or PNG
5. **Upgrade**: Get unlimited generations for ₹299/month

### Free Tier
- 3 AI-generated canvases
- Full editing capabilities
- PDF & PNG export

### Pro Tier (₹299/month)
- Unlimited AI generations
- All free tier features
- Priority support

## 🔧 Stripe Webhook Setup

For production, set up Stripe CLI for testing:

```bash
stripe listen --forward-to localhost:3000/api/webhooks
```

For production deployment, add your webhook URL in Stripe Dashboard:
- URL: `https://your-domain.com/api/webhooks`
- Events: `checkout.session.completed`

## 📦 Deployment

### Deploy to Vercel

```bash
vercel
```

Don't forget to add all environment variables in Vercel Dashboard → Settings → Environment Variables.

## 🐛 Troubleshooting

### Database Connection Issues
- Verify your Supabase URL and keys
- Check that RLS policies are correctly set up
- Ensure tables are created with correct schema

### AI Generation Errors
- Verify Gemini API key is valid
- Check API quota limits
- Ensure you're using Gemini 2.5 Flash model

### Stripe Payment Issues
- Use test mode keys for development
- Verify webhook secret matches
- Check webhook endpoint is publicly accessible

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

Built with ❤️ using Next.js, Supabase, Gemini AI, and Stripe
