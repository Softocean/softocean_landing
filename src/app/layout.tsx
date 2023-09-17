import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Manrope, Open_Sans } from 'next/font/google';
import Footer from '@/components/footer';
import Header from '@/components/header/Header';

import './globals.css';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
});
const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-openSans',
});

export const metadata: Metadata = {
  title: 'SoftOcean',
  description: '',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${openSans.className} bg-white`}>
        <Header />
        <main className="min-h-[calc(100vh-322px)]">{children}</main>
        <section className="pt-[40px] h-[322px]">
          <Footer />
        </section>
      </body>
    </html>
  );
}
