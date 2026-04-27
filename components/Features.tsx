'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, revealScale, staggerContainer } from '@/lib/animations';
import { Building2, FileText, Mail, Target, Star, Bot, CheckCircle2 } from 'lucide-react';

const bentoFeatures = [
  // Wide Hero Cards
  {
    title: 'Corporate Hiring Realities',
    desc: 'Understand exactly how modern hiring works. We decode the employer mindset, teach you to navigate the hidden job market, and set realistic salary expectations.',
    icon: Building2,
    size: 'col-span-1 md:col-span-2 lg:col-span-2',
    color: 'hover:border-blue-400/30 hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)] hover:bg-blue-50/30',
    iconColor: 'bg-blue-50 text-blue-600 border-blue-100',
    accentClass: 'text-blue-500/5'
  },
  {
    title: 'Resume & ATS Optimization',
    desc: 'Craft powerful resumes that actually pass the 7-second scan rule. Learn to highlight college projects as professional experience and build strong portfolios.',
    icon: FileText,
    size: 'col-span-1 md:col-span-2 lg:col-span-2 relative overflow-hidden',
    color: 'hover:border-orange-400/30 hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)] hover:bg-orange-50/30',
    iconColor: 'bg-orange-50 text-brand-orange border-orange-100',
    accentClass: 'text-brand-orange/5',
    hasMiniMockup: true // We'll render a small UI inside this card
  },
  // Square Standard Cards
  {
    title: 'Business Communication',
    desc: 'Master professional emails, cold outreach for referrals, and confident business writing.',
    icon: Mail,
    size: 'col-span-1 md:col-span-2 lg:col-span-1',
    color: 'hover:border-green-400/30 hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)] hover:bg-green-50/30',
    iconColor: 'bg-green-50 text-green-600 border-green-100',
    accentClass: 'text-green-500/5'
  },
  {
    title: 'Interview & GD Mastery',
    desc: 'Tactics to lead group discussions gracefully and answer behavioral (STAR) questions.',
    icon: Target,
    size: 'col-span-1 md:col-span-2 lg:col-span-1',
    color: 'hover:border-purple-400/50 hover:shadow-[0_8px_40px_rgba(168,85,247,0.12)] hover:bg-purple-50/50',
    iconColor: 'bg-purple-100 text-purple-600 border-purple-200',
    accentClass: 'text-purple-500/5'
  },
  {
    title: 'Soft Skills & Confidence',
    desc: 'Overcome impostor syndrome, improve grooming, and master storytelling.',
    icon: Star,
    size: 'col-span-1 md:col-span-2 lg:col-span-1',
    color: 'hover:border-pink-400/50 hover:shadow-[0_8px_40px_rgba(236,72,153,0.12)] hover:bg-pink-50/50',
    iconColor: 'bg-pink-100 text-pink-600 border-pink-200',
    accentClass: 'text-pink-500/5'
  },
  {
    title: 'AI Productivity Tools',
    desc: 'Use ChatGPT for prep, automate applications, and leverage AI for networking.',
    icon: Bot,
    size: 'col-span-1 md:col-span-2 lg:col-span-1',
    color: 'hover:border-cyan-400/50 hover:shadow-[0_8px_40px_rgba(6,182,212,0.12)] hover:bg-cyan-50/50',
    iconColor: 'bg-cyan-100 text-cyan-600 border-cyan-200',
    accentClass: 'text-cyan-500/5'
  },
];

export default function Features({ data }: { data?: any }) {
  if (data?.enabled === false) return null;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const features = data?.items || [];
  
  // Merge dynamic text with static visual styles
  const displayFeatures = bentoFeatures.map((feat, index) => {
    if (features[index]) {
      return {
        ...feat,
        title: features[index].title,
        desc: features[index].desc,
      };
    }
    return feat;
  });

  return (
    <section id="features" className="py-24 md:py-32 relative z-10 overflow-hidden" ref={ref}>
      
      {/* Background with soft radial gradient */}
      <div className="absolute inset-0 bg-brand-bg -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50/80 via-brand-surface/40 to-blue-50/30 -z-10" />
      <div className="bg-grain opacity-[0.03] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
           initial="hidden"
           animate={isInView ? 'visible' : 'hidden'}
           variants={fadeUp}
           className="mb-16 md:mb-20 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-orange/20 shadow-sm mb-6">
             <span className="text-sm font-bold tracking-widest text-brand-orange uppercase">Curriculum Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text mb-6 tracking-tight">
            Decode. Prepare. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#FBBF24]">Win.</span>
          </h2>
          <p className="text-xl text-brand-secondary">
            Everything you need to bridge the massive gap between college theory and corporate reality.
          </p>
        </motion.div>

        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
           variants={staggerContainer}
           className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {displayFeatures.map((feature, i) => (
             <motion.div
               key={i}
               variants={revealScale}
               className={`group bg-white/70 backdrop-blur-xl rounded-[3rem] p-8 md:p-10 border border-brand-border/40 transition-all duration-500 relative flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] ${feature.size} ${feature.color}`}
             >
               {/* Giant faint icon background watermark */}
               <feature.icon className={`absolute -right-6 -bottom-6 w-64 h-64 opacity-5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 pointer-events-none ${feature.accentClass}`} strokeWidth={0.5} />
               
               <div className="relative z-10 flex flex-col h-full">
                 <div className={`mb-8 inline-flex p-4 rounded-2xl border transition-transform duration-500 group-hover:scale-110 shadow-sm ${feature.iconColor}`}>
                   <feature.icon size={32} strokeWidth={2} />
                 </div>
                 
                 <h3 className="text-2xl font-bold text-brand-text mb-4 tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-text group-hover:to-brand-secondary transition-colors duration-300">
                    {feature.title}
                 </h3>
                 <p className="text-lg text-brand-secondary leading-relaxed max-w-sm mb-6">
                    {feature.desc}
                 </p>

                 {/* Mini Mockup rendering inside the Resume Card */}
                 {feature.hasMiniMockup && (
                    <div className="mt-4 p-4 bg-brand-surface/50 border border-brand-border rounded-xl hidden sm:block w-3/4 max-w-sm ml-auto opacity-80 group-hover:opacity-100 transition-opacity">
                       <div className="flex gap-3 mb-3 items-center">
                          <div className="w-8 h-8 rounded-full bg-orange-200"></div>
                          <div className="h-2 rounded bg-orange-200 w-24"></div>
                       </div>
                       <div className="h-1.5 rounded-full bg-brand-border w-full mb-2"></div>
                       <div className="h-1.5 rounded-full bg-brand-border w-4/5 mb-2"></div>
                       <div className="h-1.5 rounded-full bg-brand-border w-3/4 mb-4"></div>
                       
                       <div className="flex items-center gap-2 text-xs font-bold text-brand-orange border border-brand-orange/30 bg-orange-50 px-2 py-1 rounded inline-flex">
                          <CheckCircle2 size={12} /> ATS Approved
                       </div>
                    </div>
                 )}
               </div>
             </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
