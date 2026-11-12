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
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Hanken+Grotesk:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#050916] text-slate-100 font-body-md antialiased min-h-screen overflow-x-hidden selection:bg-blue-600 selection:text-white relative">
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  );
}
