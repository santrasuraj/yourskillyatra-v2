'use client';

import PageHero from '@/components/layout/PageHero';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Award, Briefcase, Users, Mail, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const mentors = [
  {
    name: 'Rahul Mishra',
    role: 'Communication Coach & Public Speaking Expert',
    emoji: '🎤',
    focus: ['Corporate Communication', 'Presentation Skills', 'Impromptu Speaking'],
    description: 'Expert in transforming anxious freshers into confident communicators. Rahul specializes in corporate communication frameworks and public speaking mastery.',
    color: 'from-orange-500 to-amber-400'
  },
  {
    name: 'Arman Baweja',
    role: 'Resume Optimization & LinkedIn Strategist',
    emoji: '📄',
    focus: ['ATS Resumes', 'Personal Branding', 'Networking'],
    description: 'Master of the 7-second resume rule. Arman helps students build powerful LinkedIn profiles and craft ATS-beating resumes that recruiters love.',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    name: 'Lakshay Sharma',
    role: 'Corporate Trainer – Interview Skills & AI',
    emoji: '💼',
    focus: ['Interview Mastery', 'AI Job Search', 'Salary Negotiation'],
    description: 'Bridges the gap between technical skills and interview performance. Lakshay integrates modern AI search tools with traditional interview prep.',
    color: 'from-emerald-500 to-teal-400'
  },
  {
    name: 'Tech Head',
    role: 'Platform & Technology Lead',
    emoji: '💻',
    focus: ['Technical Architecture', 'Platform UX', 'Student Portal'],
    description: 'Ensuring seamless delivery of all live sessions, workshops, and resources through our robust EdTech platform.',
    color: 'from-indigo-500 to-purple-400'
  }
];

export default function TrainersPage() {
  return (
    <>
      <PageHero
        title="Meet Your Industry Experts"
        description="Learn from veterans with over 15 years of combined experience who have successfully guided 15,000+ freshers into corporate roles."
        pill="Our Mentors"
      />

      <section className="py-24 bg-brand-bg relative overflow-hidden">
        
        {/* Subtle noise and gradients */}
        <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid lg:grid-cols-2 gap-8 mb-32">
            {mentors.map((mentor, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="group relative bg-white/40 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-10 border border-white/60 hover:border-brand-orange/30 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(249,115,22,0.1)] hover:-translate-y-2 overflow-hidden"
              >
                {/* Refined Liquid Glow */}
                <div className={`absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br ${mentor.color} rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-all duration-1000 -z-10`} />
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                <div className="flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center justify-center text-4xl md:text-5xl border border-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">
                      {mentor.emoji}
                    </div>
                    <a href={`mailto:support@yourskillyatra.com?subject=Mentorship inquiry for ${mentor.name}`} className="w-12 h-12 rounded-full border border-brand-border/40 flex items-center justify-center text-brand-muted hover:bg-brand-text hover:border-brand-text hover:text-white transition-all duration-500 hover:scale-110">
                      <ArrowUpRight size={20} />
                    </a>
                  </div>

                  <h3 className="text-3xl font-extrabold text-brand-text leading-tight mb-2 tracking-tight">
                    {mentor.name}
                  </h3>
                  <p className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-6 px-4 py-1.5 bg-orange-50/50 border border-brand-orange/10 rounded-full self-start">
                    {mentor.role}
                  </p>
                  
                  <p className="text-brand-secondary text-base md:text-lg leading-relaxed mb-8 flex-1 font-medium group-hover:text-brand-text transition-colors duration-500">
                    {mentor.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 mt-auto">
                    {mentor.focus.map((tag, j) => (
                      <span key={j} className="text-[10px] font-bold px-4 py-2 bg-white/60 border border-brand-border/40 rounded-xl text-brand-secondary uppercase tracking-wider group-hover:border-brand-orange/20 group-hover:text-brand-orange transition-all duration-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Epic Stats Banner */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative bg-brand-text w-full rounded-[3rem] p-10 md:p-16 overflow-hidden">
            {/* Background elements for dark banner */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-orange/20 via-transparent to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              <motion.div variants={fadeUp} className="flex flex-col items-center justify-center pt-8 md:pt-0">
                <Briefcase className="w-10 h-10 text-brand-orange mb-6" />
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tighter">15+</div>
                <p className="text-sm font-bold text-white/50 uppercase tracking-[0.2em]">Years Experience</p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col items-center justify-center pt-12 md:pt-0">
                <Users className="w-10 h-10 text-brand-orange mb-6" />
                <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-2 tracking-tighter">15,000+</div>
                <p className="text-sm font-bold text-white/50 uppercase tracking-[0.2em]">Freshers Trained</p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col items-center justify-center pt-12 md:pt-0">
                <Award className="w-10 h-10 text-brand-orange mb-6" />
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tighter">4</div>
                <p className="text-sm font-bold text-white/50 uppercase tracking-[0.2em]">Core Domains</p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
