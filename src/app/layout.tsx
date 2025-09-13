import AntdProvider from '@/components/AntdProvider';
import I18nProvider from '@/components/I18nProvider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
// import './globals.css';
import '@/css/layout.css';
import '@/css/font.css';
import '@/css/page.css';
import '@/css/style.css';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: 'Talkit - AI language learning in immersive scenes',
  description:
    'Learn languages with AI tutors through immersive conversations and gamified practice. Connect with global learners on Talkit for free.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body>
        <I18nProvider>
          <AntdProvider>{children}</AntdProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
