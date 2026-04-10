import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Raghvendra Pratap Singh',
  description: 'Second-year medical student building Python scraping systems, AI tooling, and research-oriented data workflows.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrains.variable} font-mono min-h-screen flex flex-col selection:bg-primary selection:text-black`}>
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 z-50"></div>
        <Navbar />
        <main className="flex-grow w-full px-4 md:px-12 lg:px-16 py-8 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
