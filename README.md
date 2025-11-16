# ModelKatte - 3D Model MarketplaceThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

A modern 3D model marketplace built with Next.js 15, featuring Google authentication, interactive 3D previews, and a beautiful user interface.## Getting Started

## FeaturesFirst, run the development server:

- 🎨 **Beautiful UI** - Modern, responsive design with Tailwind CSS```bash

- 🔐 **Google Authentication** - Secure sign-in with NextAuth.jsnpm run dev

- 🎮 **3D Model Previews** - Interactive 3D viewer using React Three Fiber# or

- 🛒 **Protected Purchases** - Authentication required for purchasesyarn dev

- 🔍 **Advanced Search** - Filter and search through the model catalog# or

- 📱 **Fully Responsive** - Works perfectly on all devicespnpm dev

- ⚡ **Fast & Modern** - Built with Next.js 15 App Router# or

bun dev

## Tech Stack```

- **Framework:** Next.js 15 (App Router)Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- **Language:** TypeScript

- **Styling:** Tailwind CSSYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- **Authentication:** NextAuth.js v5 with Google OAuth

- **3D Rendering:** React Three Fiber + Three.jsThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- **Icons:** React Icons

## Learn More

## Getting Started

To learn more about Next.js, take a look at the following resources:

### Prerequisites

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- Node.js 18+ installed- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- A Google Cloud Project with OAuth credentials

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### 1. Google OAuth Setup

## Deploy on Vercel

1. Go to [Google Cloud Console](https://console.cloud.google.com/)

2. Create a new project or select an existing oneThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

3. Enable the Google+ API

4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

5. Configure the OAuth consent screen
6. Create OAuth 2.0 Client ID:
   - Application type: Web application
   - Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
7. Copy the Client ID and Client Secret

### 2. Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### 3. Environment Variables

Update the `.env.local` file with your Google OAuth credentials:

```env
# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-this-in-production

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
```

To generate a secure `NEXTAUTH_SECRET`, run:

```bash
openssl rand -base64 32
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── about/              # About page
│   ├── api/
│   │   └── auth/          # NextAuth API routes
│   ├── auth/
│   │   └── signin/        # Sign-in page
│   ├── catalog/           # Model catalog page
│   ├── models/
│   │   └── [id]/          # Individual model detail pages
│   ├── purchase/
│   │   └── [id]/          # Protected purchase pages
│   ├── layout.tsx         # Root layout with header
│   └── page.tsx           # Homepage
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── ModelCard.tsx      # Model card component
│   └── ModelViewer.tsx    # 3D model viewer
├── lib/
│   ├── auth.config.ts     # NextAuth configuration
│   ├── auth.ts            # Auth instance
│   └── models.ts          # Model data and types
└── middleware.ts          # Authentication middleware
```

## Key Features Explained

### Authentication Flow

1. **Public Access:** All users can browse the homepage and catalog
2. **Protected Routes:** Purchase pages require authentication
3. **Auto-Redirect:** Unauthenticated users are redirected to sign-in
4. **Google Sign-In:** One-click authentication with Google account

### 3D Model Viewer

The application includes an interactive 3D viewer powered by React Three Fiber:

- Orbit controls for rotation
- Ambient and directional lighting
- Smooth animations
- Studio environment presets

### Model Catalog

- Search by name, description, or tags
- Filter by category (Characters, Vehicles, Architecture, Props, Nature)
- Responsive grid layout
- Real-time filtering

## Sample Data

The application comes with 8 sample 3D models across different categories:

- Characters (Warrior, Dragon)
- Vehicles (Spaceship, Motorcycle)
- Architecture (Castle, City Block)
- Props (Sword)
- Nature (Tree Pack)

Edit `src/lib/models.ts` to add your own models.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Update Google OAuth redirect URI to include your production domain
5. Deploy!

### Environment Variables for Production

Make sure to update these for production:

- `NEXTAUTH_URL` - Your production domain
- `NEXTAUTH_SECRET` - Generate a new secure secret
- Update Google OAuth redirect URIs to include production domain

## Customization

### Adding New Models

Edit `src/lib/models.ts` and add new model objects:

```typescript
{
  id: '9',
  name: 'Your Model',
  description: 'Model description',
  price: 99.99,
  category: 'Characters',
  thumbnail: 'https://...',
  fileUrl: '/models/your-model.fbx',
  fileFormat: 'FBX',
  polyCount: 50000,
  createdAt: '2024-05-20',
  featured: true,
  tags: ['tag1', 'tag2'],
}
```

### Styling

The project uses Tailwind CSS. Customize colors in `tailwind.config.ts`.

## License

This project is created for demonstration purposes. Feel free to use it as a starting point for your own marketplace.

## Support

For questions or issues, please open an issue on GitHub.

## Acknowledgments

- Sample images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- 3D rendering powered by [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
