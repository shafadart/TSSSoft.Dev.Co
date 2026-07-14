import './globals.css';

import Preloader from './components/Preloader';
import Footer from './components/Footer';

export const metadata = {
  title: 'T.S.S. Soft Agency',
  description: 'Crafting the Future of Digital Experiences',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@600&family=Hanken+Grotesk:wght@700;800&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body-md antialiased min-h-screen overflow-x-hidden flex flex-col">
        <Preloader />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
