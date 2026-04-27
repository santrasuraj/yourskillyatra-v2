import PageHero from '@/components/layout/PageHero';
import Link from 'next/link';
import { ArrowLeft, Share2 } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { slug: 'ats-friendly-resume-2025' },
    { slug: 'first-impression-7-second-rule' },
    { slug: 'ai-tools-job-seekers-india' },
    { slug: 'group-discussion-tips' },
    { slug: 'linkedin-optimization-recruiters' },
    { slug: 'tier-3-college-jobs' },
  ];
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Normally you'd fetch the article from a CMS. 
  // Here we use static placeholders depending on the slug.
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <>
      <PageHero
        title={title}
        pill="Career Insight"
      />

      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <Link href="/blog" className="inline-flex items-center text-sm font-bold text-brand-muted hover:text-brand-orange transition-colors gap-2">
              <ArrowLeft size={16} /> Back to all articles
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-16">
            
            {/* Main Content Area */}
            <article className="prose prose-lg prose-orange max-w-none text-brand-secondary prose-headings:text-brand-text prose-headings:font-extrabold prose-a:text-brand-orange hover:prose-a:text-brand-orange/80">
              
              <div className="flex items-center gap-6 mb-12 pb-8 border-b border-brand-border text-sm font-semibold text-brand-text">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-xl">
                    🎤
                  </div>
                  <div>
                    <div className="leading-tight">Rahul Mishra</div>
                    <div className="text-brand-muted text-xs font-medium">Communication Coach</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-brand-border"></div>
                <div className="text-brand-muted">April 2026</div>
                <div className="w-px h-8 bg-brand-border"></div>
                <div className="text-brand-orange bg-orange-50 px-3 py-1 rounded-full text-xs">5 min read</div>
              </div>

              <h2>Introduction</h2>
              <p>
                In today's highly competitive corporate landscape, getting noticed is half the battle. You might have the perfect degree and the exact skill set required, but if your presentation lacks impact, your application will likely fall through the cracks.
              </p>
              
              <figure className="my-10 bg-brand-surface rounded-3xl border border-brand-border overflow-hidden p-8 flex items-center justify-center h-64 shadow-sm">
                <p className="text-brand-muted font-mono text-sm">(Article Featured Image Placeholder)</p>
              </figure>

              <h2>The Core Strategy</h2>
              <p>
                Recruiters spend an average of 7 seconds scanning a resume. The Applicant Tracking Systems (ATS) are even more ruthless, automatically discarding up to 75% of applications before a human even sees them.
              </p>
              <ul>
                <li><strong>Keywords are King:</strong> Tailor your content matching the exact phrases used in the job description.</li>
                <li><strong>Formatting Matters:</strong> Avoid complex tables or multi-column layouts that confuse parsing software.</li>
                <li><strong>Quantify Results:</strong> Never just list duties. Use numbers to show the impact you made (e.g., "Increased efficiency by 20%").</li>
              </ul>

              <blockquote>
                "If you change nothing, nothing changes. The first step to a corporate career is learning how to speak the corporate language." – Rahul Mishra
              </blockquote>

              <h2>Implementation Steps</h2>
              <p>
                Start by auditing your current profile. Do a side-by-side comparison with your dream role's job description. What's missing? How can you bridge that gap using the terminology the recruiter expects?
              </p>
              <p>
                If you need hands-on help implementing these strategies, our mentors cover this extensively in Week 2 of the Job Hunt Accelerator program.
              </p>

              {/* Share block */}
              <div className="mt-16 pt-8 border-t border-brand-border flex items-center gap-6">
                <span className="text-sm font-bold text-brand-text flex items-center gap-2">
                  <Share2 size={16} /> Share this article:
                </span>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-muted hover:text-[#1877F2] hover:border-[#1877F2] transition-colors"><FaFacebookF size={18} /></button>
                  <button className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-muted hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors"><FaTwitter size={18} /></button>
                  <button className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-muted hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors"><FaLinkedinIn size={18} /></button>
                </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              
              <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border">
                <h3 className="font-bold text-brand-text text-lg mb-4">Ready to accelerate? 🚀</h3>
                <p className="text-sm text-brand-secondary mb-6 leading-relaxed">
                  Join 15,000+ freshers who cracked their dream roles using our proven corporate readiness frameworks.
                </p>
                <a href="/courses" className="block w-full py-3 px-4 bg-gradient-to-r from-brand-orange to-[#FBBF24] text-white font-bold text-center rounded-xl hover:scale-105 active:scale-95 transition-transform shadow-md shadow-brand-orange/20">
                  View Programs
                </a>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-brand-border shadow-sm">
                <h3 className="font-bold text-brand-text text-lg mb-4">Table of Contents</h3>
                <ul className="space-y-3 text-sm font-medium text-brand-secondary">
                  <li><a href="#" className="hover:text-brand-orange transition-colors block">Introduction</a></li>
                  <li><a href="#" className="hover:text-brand-orange transition-colors block">The Core Strategy</a></li>
                  <li><a href="#" className="hover:text-brand-orange transition-colors block pl-4 text-brand-muted">» Keywords are King</a></li>
                  <li><a href="#" className="hover:text-brand-orange transition-colors block pl-4 text-brand-muted">» Formatting Matters</a></li>
                  <li><a href="#" className="hover:text-brand-orange transition-colors block">Implementation Steps</a></li>
                </ul>
              </div>

            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
