'use client';

import PageHero from '@/components/layout/PageHero';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Check, Zap, Target } from 'lucide-react';
import CoursesComponent from '@/components/Courses';
import { useRef } from 'react';

const curriculum = [
  {
    week: '01',
    title: 'Understanding Corporate Hiring & Realities',
    topics: [
      'Decoding employer expectations vs campus reality',
      'Understanding the hidden job market',
      'The 7-second resume scanning rule',
      'Setting realistic salary and role expectations'
    ]
  },
  {
    week: '02',
    title: 'Resume & ATS Optimization Mastery',
    topics: [
      'Crafting an Applicant Tracking System (ATS) friendly resume',
      'Highlighting college projects as professional experience',
      'Writing high-impact cover letters',
      'Portfolio building for non-tech and tech roles'
    ]
  },
  {
    week: '03',
    title: 'LinkedIn Profile Building & Networking',
    topics: [
      'Setting up a recruiter-magnet LinkedIn profile',
      'Cold emailing strategies for referrals',
      'Building professional networks from scratch',
      'Content creation basics for visibility'
    ]
  },
  {
    week: '04',
    title: 'Business Communication & Email Etiquette',
    topics: [
      'Professional email writing frameworks',
      'Handling difficult conversations at work',
      'Meeting etiquettes and reporting',
      'Effective follow-up strategies post-interview'
    ]
  },
  {
    week: '05',
    title: 'Group Discussion (GD) Strategies',
    topics: [
      'How to open, lead, and conclude a GD',
      'Handling aggressive participants tactfully',
      'Structuring arguments on the spot',
      'Body language during Group Discussions'
    ]
  },
  {
    week: '06',
    title: 'Interview Preparation & Mock Sessions',
    topics: [
      'Answering "Tell me about yourself"',
      'Behavioral interview questions (STAR method)',
      'Handling technical screening confidently',
      'Live 1-on-1 mock interviews with feedback'
    ]
  },
  {
    week: '07',
    title: 'Soft Skills & Body Language',
    topics: [
      'Non-verbal communication mastery',
      'Overcoming impostor syndrome',
      'Professional grooming and video-interview setups',
      'Salary negotiation tactics for freshers'
    ]
  },
  {
    week: '08',
    title: 'AI Tools for Job Search (Launchpad Only)',
    topics: [
      'Using ChatGPT for interview prep and resume editing',
      'Automating job applications securely',
      'AI tools for email tracking and follow-ups',
      'Final portfolio review and certification'
    ]
  }
];

export default function CoursesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <PageHero
        title="Transform Your Career Track"
        description="We offer two comprehensive tracks tailored to your timeline. Re-use the proven framework that helped 15,000+ freshers land their dream jobs."
        pill="Curriculum"
      />

      <CoursesComponent />

      {/* Detailed Curriculum Section - Interactive Timeline */}
      <section className="py-32 bg-white relative z-10 border-t border-brand-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 tracking-tight">Complete Masterclass <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">Curriculum</span></h2>
            <p className="text-lg text-brand-secondary max-w-2xl mx-auto">
              A week-by-week breakdown of our intensive corporate readiness program. 
              (4-week Accelerator covers Weeks 1-4. 8-week Launchpad covers all 8 weeks).
            </p>
          </motion.div>

          {/* Epic Timeline */}
          <div ref={containerRef} className="relative">
            
            {/* The Track Line Background */}
            <div className="absolute left-[39px] md:left-[59px] top-0 bottom-0 w-1 bg-brand-surface border-x border-brand-border/50 z-0"></div>
            
            {/* The Active Glowing Line */}
            <motion.div 
              className="absolute left-[39px] md:left-[59px] top-0 w-1 bg-gradient-to-b from-brand-orange via-[#FBBF24] to-brand-green z-10 origin-top shadow-[0_0_15px_rgba(249,115,22,0.5)]"
              style={{ height: lineHeight }}
            />

            <div className="space-y-16 md:space-y-24">
              {curriculum.map((module, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative z-20 flex gap-6 md:gap-12"
                >
                  {/* Timeline Node */}
                  <div className="w-[80px] md:w-[120px] flex-shrink-0 flex justify-center mt-2">
                    <div className="relative w-22 h-22">
                      <div className="absolute inset-0 bg-brand-orange/20 rounded-full blur-xl animate-pulse" />
                      <div className="relative w-20 h-20 bg-white/40 backdrop-blur-xl border-2 border-white rounded-full flex items-center justify-center shadow-xl shadow-brand-orange/10 z-10 group-hover:scale-110 transition-transform duration-700">
                        <span className="text-2xl font-black text-brand-text">
                          {module.week}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="flex-1 bg-white/40 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-10 border border-white/60 hover:border-brand-orange/30 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(249,115,22,0.08)] group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                    <h3 className="text-2xl md:text-3xl font-extrabold text-brand-text mb-6 group-hover:text-brand-orange transition-colors tracking-tight relative z-10">
                      {module.title}
                    </h3>
                    
                    <ul className="space-y-4 relative z-10">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex gap-4 items-start group/item">
                          <div className="w-6 h-6 rounded-full bg-white/60 border border-brand-border/40 shadow-sm flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:border-brand-orange/50 transition-colors">
                            <Check className="w-3.5 h-3.5 text-brand-orange" />
                          </div>
                          <span className="text-brand-secondary font-bold text-[15px] leading-relaxed group-hover/item:text-brand-text transition-colors">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Formats highlight */}
          <div className="mt-40 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-brand-text to-gray-800 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center flex-shrink-0 mb-6 group-hover:scale-110 transition-transform">
                <Target size={32} />
              </div>
              <h4 className="font-extrabold text-white text-2xl mb-3 tracking-tight">1-on-1 VIP Mentorship</h4>
              <p className="text-base text-white/70 leading-relaxed font-medium">Highly personalized sessions focusing strictly on your unique weaknesses, resume gaps, and tailored career trajectories.</p>
            </div>

            <div className="bg-gradient-to-br from-brand-orange to-[#FBBF24] p-10 rounded-[2.5rem] shadow-2xl shadow-brand-orange/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center flex-shrink-0 mb-6 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h4 className="font-extrabold text-white text-2xl mb-3 tracking-tight">Hybrid Learning Model</h4>
              <p className="text-base text-white/90 leading-relaxed font-medium">A perfect psychological blend of precisely recorded theoretical modules combined with intense live practical application workshops.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
