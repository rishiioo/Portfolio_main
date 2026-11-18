# Portfolio

A modern, interactive personal portfolio website built with Next.js 15, React 19, and TypeScript. Features 3D graphics, animations, and a polished dark/light theme.

## ✨ Features

- **3D Hero Section** - Interactive Three.js scene with custom shaders
- **Animated Components** - Framer Motion page transitions and micro-interactions
- **Blog System** - MDX-powered blog with search, filters, and syntax highlighting
- **Guestbook** - Visitor messages with NextAuth authentication
- **Projects Showcase** - Interactive project cards with image galleries
- **Skills & Tools** - Visual tech stack with categorized skills
- **Testimonials** - Carousel with client feedback
- **Booking Integration** - Calendly embed for scheduling calls
- **Responsive Design** - Mobile-first with Tailwind CSS
- **Theme Support** - Dark/light mode with system detection

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4, CSS Modules
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: Framer Motion
- **Authentication**: NextAuth.js
- **Database**: MongoDB (via Mongoose)
- **Content**: MDX for blog posts
- **Deployment**: Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn
- MongoDB database (for guestbook/auth)

### Installation

```bash
# Clone the repository
git clone https://github.com/rishiioo/Portfolio_main.git
cd Portfolio_main

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🔧 Environment Variables

Create a `.env.local` file with:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# OAuth Providers (optional)
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret
```

## 📁 Project Structure

```
├── app/
│   ├── api/              # API routes (auth, guestbook)
│   ├── blogs/            # Blog pages (list, detail, search)
│   ├── components/       # React components
│   ├── data/             # Static data (blogs, globe config)
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components.json       # shadcn/ui config
├── lib/                  # Utilities (auth, db, models)
├── public/               # Static assets (images, logos)
├── .gitignore
├── next.config.ts        # Next.js configuration
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Key Components

| Component | Description |
|-----------|-------------|
| `HeroSection` / `HeroSection2` | Animated landing hero with 3D elements |
| `CubeHero` / `PremiumCube` | Interactive 3D cube with shaders |
| `Projects` | Project showcase with filtering |
| `BlogList` / `BlogGrid` | Blog post listings with search |
| `SkillsSection` | Animated skill categories |
| `Testimonials` | Client testimonial carousel |
| `Navbar` | Responsive navigation with theme toggle |
| `Guestbook` | Visitor message wall |

## 📝 Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript compiler check
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual Build

```bash
pnpm build
pnpm start
```

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 🤝 Contributing

Issues and PRs welcome. For major changes, please open an issue first.

---

Built with ❤️ using Next.js, Three.js, and Tailwind CSS