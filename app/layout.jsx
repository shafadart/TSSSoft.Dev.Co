import './globals.css';
import ClientShell from './components/ClientShell';

export const metadata = {
  metadataBase: new URL('https://tsssoft.com'),
  title: 'TSS Soft. | Digital Systems & Software Architecture',
  description: 'Enterprise software, modern web platforms, and mobile applications engineered by TSS Soft.',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Anti-Flicker Theme Script: Default to Light mode, load dark only if explicitly chosen */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
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
      <body className="bg-[#f8fafc] text-slate-900 dark:bg-[#050916] dark:text-slate-100 font-sans antialiased min-h-screen overflow-x-hidden selection:bg-blue-600 selection:text-white transition-colors duration-200 relative">
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  );
}
