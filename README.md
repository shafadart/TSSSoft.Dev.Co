# T.S.S. Soft - Enterprise Web Architecture

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-black?style=for-the-badge&logo=framer)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

**T.S.S. Soft** is a premium digital agency specializing in high-performance web applications, enterprise software, and cloud architecture. This repository contains the source code for our official corporate website.

## 🚀 Features

- **Next.js 14 App Router**: Utilizing the latest React server components for blazingly fast load times and optimized SEO.
- **Premium UI/UX**: A highly polished, dark-themed interface built with Tailwind CSS, featuring subtle glows, glassmorphism, and enterprise-grade typography.
- **Fluid Animations**: Smooth transitions, staggered reveals, and interactive elements powered by Framer Motion.
- **Fully Responsive**: Flawless experience across desktop, tablet, and mobile devices.
- **Global Design System**: Reusable components (`Preloader`, `Footer`, `Navbar`) ensuring brand consistency across all pages.
- **Custom Pages**: Includes tailored solutions for Portfolio, Services, Careers, Blog, Contact, and Legal policies (Privacy & Terms).

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) (and custom SVGs)
- **Deployment**: Optimized for Vercel / Cloudflare Pages

## 📦 Local Development

Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/tsssoft.com.git
cd tsssoft.com
```

### 2. Install dependencies
Ensure you have Node.js (v18+) installed.
```bash
npm install
# or
yarn install
```

### 3. Start the development server
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
├── app/
│   ├── about/          # About Us page
│   ├── blog/           # Engineering Insights
│   ├── careers/        # Hiring page
│   ├── components/     # Reusable UI components (Footer, Preloader, etc.)
│   ├── contact/        # Contact details & form
│   ├── portfolio/      # Case studies & previous work
│   ├── privacy/        # Privacy Policy
│   ├── services/       # Services offered
│   ├── terms/          # Terms of Service
│   ├── globals.css     # Global Tailwind styles & tokens
│   ├── layout.jsx      # Root layout & global providers
│   └── page.jsx        # Landing page
├── public/             # Static assets (images, icons)
├── tailwind.config.js  # Theme, typography, and styling configuration
└── package.json        # Project dependencies
```

## 🎨 Design System Principles

- **Colors**: Deep slate backgrounds (`slate-950`) combined with striking blue primary accents.
- **Typography**: Inter (Body), Hanken Grotesk (Headlines), Geist (Monospace/Technical).
- **Aesthetics**: Avoiding flat design by using subtle radial gradients, background blurs (`backdrop-blur`), and glowing borders.

## 📄 License

Copyright © 2026 T.S.S. Soft. Dev. Co. All rights reserved.
This repository is proprietary. Unauthorized copying, distribution, or modification is strictly prohibited.
