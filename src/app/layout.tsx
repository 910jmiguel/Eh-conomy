import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from './components/navbar';
//import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eh-conomy | Local Canadian Farm Finder',
  description: 'Find local farms and farmers markets in Ontario to support the Canadian economy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <Toaster /> */}
      </body>
    </html>
  );
}