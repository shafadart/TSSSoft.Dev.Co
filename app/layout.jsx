import './globals.css';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'TSS Soft | Crafting the Future of Digital Experiences',
  description: 'Enterprise software, modern web platforms, and mobile applications engineered by TSS Soft.',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700&family=Hanken+Grotesk:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#050814] text-slate-100 font-body-md antialiased min-h-screen overflow-x-hidden flex flex-col selection:bg-blue-600 selection:text-white relative">
        <Preloader />
        <Navbar />
        <div className="flex-grow pt-4">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
