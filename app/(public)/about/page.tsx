'use client';

import PageHero from '@/components/layout/PageHero';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Brain, Target, Shield, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Bridging the Gap Between Campus and Corporate"
        description="We are on a mission to empower ambitious dreamers to step into the corporate world prepared, confident, and highly skilled."
        pill="About Us"
      />

      {/* Stats / The Problem - Bento Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-orange/5 via-brand-blue/5 to-transparent blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-brand-orange font-bold text-sm tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                The Corporate Reality Check
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text leading-[1.1]">
                Degrees get you past the threshold. <span className="text-brand-orange">Skills get you the job.</span>
              </h2>
              
              <p className="text-lg text-brand-secondary leading-relaxed">
                Every year, lack of corporate readiness holds back talented freshers. We dug deep into hiring metrics and what we found was eye-opening.
              </p>
              
              <ul className="space-y-5 pt-4">
                {[
                  "Degrees don't teach ATS-optimized resume writing.",
                  "Colleges rarely focus on high-impact business communication.",
                  "Students completely miss the 7-second resume scanning rule.",
                  "Fear of Group Discussions eliminates 70% of potential candidates."
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 items-start group"
                  >
                    <span className="w-8 h-8 rounded-full bg-white border border-brand-orange/20 shadow-sm flex items-center justify-center flex-shrink-0 text-brand-orange font-bold text-sm group-hover:scale-110 transition-transform">✓</span>
                    <span className="text-brand-text font-medium mt-1">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Content - Asymmetrical Bento Box */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 gap-4 lg:gap-6 relative">
              
              {/* Box 1 - Top Left */}
              <motion.div variants={fadeUp} className="relative bg-white/40 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-700 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue mb-8 border border-blue-100 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div className="text-5xl font-extrabold text-brand-text mb-2 tracking-tighter">20<span className="text-brand-blue">%</span></div>
                  <p className="font-bold text-brand-secondary text-xs uppercase tracking-widest">Stage: Interview</p>
                </div>
              </motion.div>
              
              {/* Box 2 - Top Right (Taller & Highlighted) */}
              <motion.div variants={fadeUp} className="bg-[#111] p-10 rounded-[2.5rem] text-white shadow-2xl shadow-black/10 row-span-2 flex flex-col hover:-translate-y-2 transition-all duration-700 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-brand-orange mb-8 border border-white/20 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all">
                  <Target className="w-7 h-7" />
                </div>
                <div className="mt-auto relative z-10">
                  <div className="text-7xl font-extrabold mb-4 tracking-tighter bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">7s</div>
                  <p className="font-bold text-white/90 text-xl leading-snug">The exact time recruiters take to judge your resume.</p>
                </div>
                
                {/* Decorative flare */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange rounded-full filter blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-1000" />
              </motion.div>
              
              {/* Box 3 - Bottom Left */}
              <motion.div variants={fadeUp} className="relative bg-white/40 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(16,185,129,0.1)] hover:-translate-y-2 transition-all duration-700 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-brand-green mb-8 border border-emerald-100 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-extrabold text-brand-text mb-2 tracking-tighter">33%</div>
                  <p className="font-bold text-brand-secondary text-xs uppercase tracking-widest">90s Decision</p>
                </div>
              </motion.div>
              
              {/* Box 4 - Bottom Span */}
              <motion.div variants={fadeUp} className="bg-gradient-to-r from-brand-orange to-amber-400 p-8 rounded-[2.5rem] text-brand-text shadow-[0_20px_50px_rgba(249,115,22,0.2)] col-span-2 flex items-center justify-between group cursor-pointer overflow-hidden relative border border-white/20">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="font-extrabold text-2xl mb-1 flex items-center gap-2">
                    YourSkillYatra <span className="text-white">🚀</span>
                  </div>
                  <p className="font-bold text-brand-text/80 uppercase tracking-widest text-xs">The Career Accelerator</p>
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-orange group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                  <ArrowRight className="w-7 h-7" />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Our Mission - Dramatic Reveal */}
      <section className="py-32 bg-[#0A0A0A] text-white relative overflow-hidden">
        
        {/* Deep cinematic background */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,1),rgba(30,41,59,0.3))]" />
        <div className="bg-grain opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="inline-block">
              <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] pb-2 border-b border-brand-orange/30">Our Core Philosophy</h2>
            </div>
            
            <p className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.2] font-sans tracking-tight text-white/90">
              "Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Preparation</span>, we build skills.<br/>
              With <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Awareness</span>, we unlock opportunities.<br/>
              Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Resilience</span>, we turn challenges into corporate success."
            </p>

            <div className="pt-8 flex justify-center">
              <Link href="/courses" className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-text rounded-full font-bold hover:bg-brand-orange hover:text-white transition-colors duration-300">
                View Our Curriculum
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
