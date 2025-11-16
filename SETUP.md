# Setup Instructions for ModelKatte

## 🚀 Quick Start

Your 3D Model Marketplace is ready! Follow these steps to complete the setup:

## ✅ What's Already Done

- ✓ Next.js 15 application initialized
- ✓ TypeScript and Tailwind CSS configured
- ✓ All dependencies installed
- ✓ Complete application structure created
- ✓ Sample 3D models data
- ✓ Development server running at http://localhost:3000

## 🔧 Required: Google OAuth Setup

To enable user authentication, you need to configure Google OAuth:

### Step 1: Create Google Cloud Project

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name it "ModelKatte" and click "Create"

### Step 2: Configure OAuth Consent Screen

1. In the left sidebar, go to "APIs & Services" → "OAuth consent screen"
2. Select "External" user type and click "Create"
3. Fill in the required fields:
   - App name: **ModelKatte**
   - User support email: Your email
   - Developer contact: Your email
4. Click "Save and Continue"
5. Skip "Scopes" and "Test users" (click "Save and Continue")
6. Click "Back to Dashboard"

### Step 3: Create OAuth Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth 2.0 Client ID"
3. Choose "Web application" as Application type
4. Name it "ModelKatte Web Client"
5. Add Authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
6. Click "Create"
7. Copy the **Client ID** and **Client Secret**

### Step 4: Update Environment Variables

1. Open `.env.local` in the project root
2. Replace the placeholder values:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<generate-a-secret>
GOOGLE_CLIENT_ID=<your-client-id>
GOOGLE_CLIENT_SECRET=<your-client-secret>
```

3. Generate a secure NEXTAUTH_SECRET:

```bash
openssl rand -base64 32
```

### Step 5: Restart the Server

After updating `.env.local`:

1. Stop the server (Ctrl+C in terminal)
2. Run `npm run dev` again
3. Visit http://localhost:3000

## 🎯 Testing the Application

### 1. Browse Without Login

- ✅ Visit homepage: http://localhost:3000
- ✅ Browse catalog: http://localhost:3000/catalog
- ✅ View model details: Click any model
- ✅ Search and filter models

### 2. Test Authentication

- Click "Sign In" in the header
- Sign in with your Google account
- You should be redirected back to homepage
- Your profile should appear in the header

### 3. Test Protected Purchase Flow

- While **not signed in**, click "Buy" on any model
- You'll be redirected to the sign-in page
- After signing in, you can access the purchase page

## 📁 Project Structure

```
model-katte/
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── auth/signin/    # Google sign-in page
│   │   ├── catalog/        # Browse all models
│   │   ├── models/[id]/    # Model detail pages
│   │   └── purchase/[id]/  # Protected purchase pages
│   ├── components/
│   │   ├── Header.tsx      # Navigation with auth
│   │   ├── ModelCard.tsx   # Model display card
│   │   └── ModelViewer.tsx # 3D preview (React Three Fiber)
│   └── lib/
│       ├── auth.ts         # Authentication setup
│       └── models.ts       # Sample model data
├── .env.local              # Your secrets (not committed)
└── README.md               # Full documentation
```

## 🎨 Customization

### Add Your Own Models

Edit `src/lib/models.ts`:

```typescript
{
  id: '9',
  name: 'Your Model Name',
  description: 'Description',
  price: 99.99,
  category: 'Characters', // or Vehicles, Architecture, Props, Nature
  thumbnail: 'https://your-image-url.com/image.jpg',
  fileUrl: '/models/your-model.fbx',
  fileFormat: 'FBX',
  polyCount: 50000,
  createdAt: '2024-11-16',
  featured: true,
  tags: ['tag1', 'tag2', 'tag3'],
}
```

### Modify Styling

- Edit Tailwind classes in any component
- Update colors in `tailwind.config.ts`
- The design uses purple/blue gradient theme

## 🚀 Deployment (Optional)

### Deploy to Vercel

1. Push code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. Visit [Vercel](https://vercel.com) and import your repository

3. Add environment variables in Vercel dashboard

4. Update Google OAuth:
   - Add production redirect URI: `https://your-domain.vercel.app/api/auth/callback/google`
   - Update `NEXTAUTH_URL` to your production URL

## 🐛 Troubleshooting

### "Sign in failed" error

- Check that your Google Client ID and Secret are correct
- Verify redirect URI matches exactly
- Make sure you restarted the server after updating .env.local

### Images not loading

- The sample images use Unsplash
- If blocked, replace with your own image URLs in `src/lib/models.ts`

### TypeScript errors

- Run `npm run build` to check for build errors
- All current code should compile without errors

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 💡 Next Steps

1. Complete Google OAuth setup above
2. Test the authentication flow
3. Customize the model data with your own 3D models
4. Adjust styling to match your brand
5. Add actual payment processing (Stripe, PayPal, etc.)
6. Implement file downloads for purchased models
7. Add user dashboard for purchased models

## 🎉 You're All Set!

Your 3D Model Marketplace is ready to use. Once you complete the Google OAuth setup, all features will be fully functional!

Need help? Check the README.md for more detailed information.
