'use client';

import PageHero from '@/components/layout/PageHero';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const articles = [
  {
    slug: 'ats-friendly-resume-2025',
    title: 'How to Write an ATS-Friendly Resume in 2025',
    category: 'Resumes',
    readTime: '5 min read',
    date: 'Apr 12, 2026',
    excerpt: 'Over 75% of resumes are rejected by ATS bots before a human ever sees them. Learn the precise formatting and keyword strategies to beat the system.',
  },
  {
    slug: 'first-impression-7-second-rule',
    title: 'Why First Impressions Matter (The 7-Second Rule)',
    category: 'Interviews',
    readTime: '4 min read',
    date: 'Apr 05, 2026',
    excerpt: 'Recruiters decide whether they like you in the first 7 seconds of an interview. Here is how body language and vocal tonality can make or break you.',
  },
  {
    slug: 'ai-tools-job-seekers-india',
    title: 'Top AI Tools for Job Seekers in India',
    category: 'AI & Tech',
    readTime: '7 min read',
    date: 'Mar 28, 2026',
    excerpt: 'Stop applying manually. Uncover the top AI automation tools that can tailor your cover letters and mass-apply to relevant jobs for you.',
  },
  {
    slug: 'group-discussion-tips',
    title: 'GD Tips: How to Stand Out Without Shouting',
    category: 'Group Discussions',
    readTime: '6 min read',
    date: 'Mar 15, 2026',
    excerpt: 'The biggest myth about Group Discussions is that the loudest person wins. Learn the frameworks to take control of the narrative gracefully.',
  },
  {
    slug: 'linkedin-optimization-recruiters',
    title: 'How LinkedIn Optimization Gets You Noticed',
    category: 'Networking',
    readTime: '5 min read',
    date: 'Mar 02, 2026',
    excerpt: 'Your LinkedIn headline is your digital billboard. Learn how to optimize your profile so recruiters message you with opportunities first.',
  },
  {
    slug: 'tier-3-college-jobs',
    title: 'The Tier-3 Jobs Problem (And How to Beat It)',
    category: 'Career Growth',
    readTime: '8 min read',
    date: 'Feb 18, 2026',
    excerpt: 'Students from Tier-3 colleges have significantly fewer campus recruitment opportunities. Here is the step-by-step off-campus strategy to secure a 10+ LPA package.',
  }
];

export default function BlogListingPage() {
  return (
    <>
      <PageHero
        title="Insights & Career Tips"
        description="Latest strategies on resume building, interview cracking, and corporate survival directly from our founders."
        pill="Our Blog"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {articles.map((article, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="group relative flex flex-col h-full bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/60 overflow-hidden transition-all duration-700 hover:border-brand-orange/30 hover:shadow-[0_40px_100px_rgba(249,115,22,0.06)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                
                <div className="p-10 flex flex-col flex-1 relative z-10">
                  
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-flex px-4 py-1.5 bg-brand-orange/5 text-brand-orange text-[10px] font-black rounded-full uppercase tracking-widest border border-brand-orange/10">
                      {article.category}
                    </span>
                    <span className="flex items-center text-[10px] font-black text-brand-muted gap-2 uppercase tracking-widest">
                      <Clock size={14} className="text-brand-orange/40" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-brand-text mb-4 leading-tight group-hover:text-brand-orange transition-colors tracking-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-brand-secondary text-[15px] leading-relaxed mb-10 flex-1 font-medium group-hover:text-brand-text transition-colors duration-500">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto pt-8 border-t border-brand-border/40 flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-muted uppercase tracking-tighter opacity-60">{article.date}</span>
                    <Link href={`/blog/${article.slug}`} className="group/btn inline-flex items-center text-sm font-black text-brand-text group-hover:text-brand-orange transition-all gap-2">
                      Go To Guide <ArrowRight size={18} className="transform group-hover/btn:translate-x-1.5 transition-transform duration-500 text-brand-orange" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}
