import './globals.css';
import ClientShell from './components/ClientShell';

export const metadata = {
  title: 'TSS Soft. | Digital Systems & Software Architecture',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050916] text-slate-100 font-sans antialiased min-h-screen overflow-x-hidden selection:bg-blue-600 selection:text-white relative">
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  );
}
