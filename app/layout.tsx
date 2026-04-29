import type { Metadata } from 'next';
import { Outfit, Space_Grotesk } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const outfit = Outfit({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'YourSkillYatra — Partnering Your Skill Journey',
    template: '%s | YourSkillYatra'
  },
  description: 'Join 15,000+ freshers trained by industry experts. Master interviews, resume, LinkedIn, AI tools & communication. Enroll in 4-week or 8-week programs.',
  metadataBase: new URL('https://yourskillyatra.com'),
  keywords: ['campus recruitment', 'interview skills', 'resume optimization', 'LinkedIn', 'career training India', 'Day 1 Hires'],
  authors: [{ name: 'YourSkillYatra' }],
  creator: 'YourSkillYatra',
  publisher: 'YourSkillYatra',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'YourSkillYatra — Career Skills Training',
    description: 'Bridging the gap between degrees and careers. We engineer 1% day-one hires.',
    url: 'https://yourskillyatra.com',
    siteName: 'YourSkillYatra',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YourSkillYatra',
    description: 'Master the hidden job market with industry experts.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`}>
      <body suppressHydrationWarning className="relative min-h-full flex flex-col font-sans text-brand-text bg-brand-bg selection:bg-brand-orange/20 selection:text-brand-orange">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
