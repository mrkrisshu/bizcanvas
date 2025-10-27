# Development Notes

## Session State Management

The app uses Supabase's built-in session management. Session tokens are stored in cookies:
- `sb-access-token`: Short-lived access token
- `sb-refresh-token`: Long-lived refresh token

The middleware checks for these cookies to protect routes.

## Route Structure

- `/` - Landing page (public)
- `/auth/signup` - User registration
- `/auth/signin` - User login
- `/dashboard` - Protected dashboard (requires authentication)

## Protected Routes

The `middleware.ts` file handles route protection:
- Redirects unauthenticated users from `/dashboard` to `/auth/signin`
- Redirects authenticated users from `/auth/*` to `/dashboard`

## Styling

Custom TailwindCSS classes defined in `globals.css`:
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary action button
- `.input-field` - Form input styling
- `.auth-card` - Authentication card container

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## Future Enhancements

- [ ] Add password reset functionality
- [ ] Implement email verification reminder
- [ ] Add OAuth providers (Google, GitHub)
- [ ] Create Business Model Canvas generator
- [ ] Add canvas storage in Supabase database
- [ ] Implement canvas sharing functionality
- [ ] Add export to PDF/PNG
- [ ] Integrate AI for canvas suggestions
