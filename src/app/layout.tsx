import type { Metadata, Viewport } from 'next';
import { Anton, Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-tech',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://naajiahmeda.github.io/naajisportfolio'),
  title: 'Naaji Ahmed Ali — AI & ML Developer | Creative',
  description:
    'Artificial Intelligence & Machine Learning Student, Developer & Creative. Building intelligent solutions and interactive experiences.',
  keywords: [
    'Naaji Ahmed Ali',
    'AI Engineer',
    'Machine Learning',
    'Computer Vision',
    'Creative Developer',
    'Portfolio',
  ],
  openGraph: {
    title: 'Naaji Ahmed Ali — Portfolio',
    description: 'AI & Machine Learning Student | Developer | Creative',
    images: ['/naaji-tight.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#050605',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${anton.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="bg-[#050605] text-[#FFFFFF] font-sans antialiased selection:bg-[#B7FF00] selection:text-[#050605] overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
