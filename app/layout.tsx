import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ModalProvider from '@/providers/ModalProvider';
import ToastProvider from '@/providers/ToastProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Frontend para ecommerce application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={urbanist.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          <ModalProvider />
          <ToastProvider />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
