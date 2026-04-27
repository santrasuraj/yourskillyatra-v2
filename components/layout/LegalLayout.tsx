'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import PageHero from './PageHero';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <PageHero title={title} pill="Legal Document" />

      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="prose prose-lg prose-orange max-w-none text-brand-secondary prose-headings:text-brand-text prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h3:text-xl prose-a:text-brand-orange hover:prose-a:text-brand-orange/80 prose-strong:text-brand-text"
          >
            <div className="mb-12 pb-8 border-b border-brand-border/50 text-sm font-semibold text-brand-muted uppercase tracking-wider">
              Last Updated: {lastUpdated}
            </div>

            {children}

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-brand-text font-medium text-lg">Still have questions?</p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-brand-text rounded-full hover:bg-black transition-colors"
            >
              Contact Support
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
}
