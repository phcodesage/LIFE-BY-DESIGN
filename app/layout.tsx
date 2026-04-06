import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.exceedlearning.com'),
  title: 'LIFE BY DESIGN — COMING SOON',
  description: '4-week course helps you discover your ideal future and create a clear plan.',
  openGraph: {
    images: ['/images/hero.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero.png'],
  },

  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
