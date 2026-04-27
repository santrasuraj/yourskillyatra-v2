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
  title: 'YourSkillYatra — Partnering Your Skill Journey | Career Skills Training',
  description: 'Join 15,000+ freshers trained by industry experts. Master interviews, resume, LinkedIn, AI tools & communication. Enroll in 4-week or 8-week programs.',
  keywords: ['campus recruitment', 'interview skills', 'resume optimization', 'LinkedIn', 'career training India'],
  openGraph: {
    title: 'YourSkillYatra',
    description: 'Partnering Your Skill Journey | Career Skills Training',
    type: 'website',
  },
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
