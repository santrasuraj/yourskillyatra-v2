'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { charReveal, fadeUp, revealScale, staggerContainer } from '@/lib/animations';
import { Building2, Award, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import Link from 'next/link';

function FloatingParticles() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{ top: string; left: string; duration: number; delay: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    const newParticles = [...Array(15)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-brand-orange/20 rounded-full"
          style={{
            top: p.top,
            left: p.left,
          }}
          suppressHydrationWarning
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}

gsap.registerPlugin(ScrollTrigger);

const partners = ['Accenture', 'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Capgemini', 'HCL', 'Tech Mahindra', 'IBM', 'Deloitte', 'PwC', 'EY', 'KPMG'];

export default function Hero({ data }: { data?: any }) {
  if (data?.enabled === false) return null;
  const heroRef = useRef<HTMLElement>(null);
  const content = data || {
    headline: 'Designed for <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#FBBF24]">Ambitious Minds.</span>',
    subheadline: 'Bridging the gap between degrees and careers. We engineer 1% day-one hires.',
    ctaText: 'Start Your Yatra',
    ctaLink: '/courses',
    stat1: { value: '24/7', label: 'Mentorship' },
    stat2: { value: '100%', label: 'Assured' }
  };

  useGSAP(() => {
    gsap.to('.hero-parallax', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-center pt-40 pb-20 overflow-hidden bg-brand-bg isolate"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-brand-bg -z-20" />

      <div className="hero-parallax absolute inset-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-brand-orange/30 to-amber-300/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob shadow-2xl" />
        <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-gradient-to-bl from-brand-blue/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[10%] left-[20%] w-[800px] h-[800px] bg-gradient-to-t from-emerald-300/20 to-transparent rounded-full mix-blend-multiply filter blur-[140px] animate-blob animation-delay-4000" />
      </div>

      {/* Floating Decorative Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <FloatingParticles />
      </div>

      <div className="bg-grain opacity-50 -z-10" />

      {/* Giant Background Watermark Text */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full flex justify-center overflow-hidden pointer-events-none select-none -z-10">
        <span className="text-[15rem] md:text-[20rem] font-extrabold text-brand-orange/[0.03] whitespace-nowrap tracking-tighter leading-none hero-parallax">
          YATRA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-[0_8px_20px_rgba(249,115,22,0.08)] mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                <span className="text-sm font-bold tracking-widest text-brand-text uppercase">Your Journey Begins Here</span>
              </motion.div>

              <motion.h1 
                variants={fadeUp}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-extrabold tracking-[-0.04em] text-brand-text leading-[1.02]"
                dangerouslySetInnerHTML={{ __html: content.headline }}
              />
              
              <motion.p
                variants={fadeUp}
                className="text-xl sm:text-2xl text-brand-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
                dangerouslySetInnerHTML={{ __html: content.subheadline }}
              />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link
                href="#pricing"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-brand-orange to-[#FBBF24] rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(249,115,22,0.3)] active:scale-95 w-full sm:w-auto border border-orange-400/50"
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] bg-[length:200%_100%] animate-shimmer" />
                <span className="relative z-10">Start Your Journey</span>
                <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-text bg-white border border-brand-border rounded-full hover:bg-brand-surface hover:border-brand-text/20 transition-all active:scale-95 shadow-sm w-full sm:w-auto"
              >
                View Curriculum
              </Link>
            </motion.div>
          </div>

          {/* Premium Right Side Visual */}
          <div className="lg:col-span-5 relative hidden lg:block h-[600px]">
             
            {/* Main Floating Mockup Card */}
            <motion.div 
              variants={revealScale}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white/40 backdrop-blur-3xl border border-white/40 rounded-[3rem] p-10 shadow-[0_32px_64px_rgba(0,0,0,0.1)] flex flex-col z-20 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[3rem]" />
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-brand-orange border border-brand-orange/20">
                  <GraduationCap size={24} />
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-green-50 text-brand-green border border-brand-green/20 rounded-full uppercase tracking-widest">Live</span>
              </div>
              
              <h3 className="text-2xl font-extrabold text-brand-text mb-2">Resume Mastery</h3>
              <p className="text-sm font-medium text-brand-secondary mb-6">Week 2 • ATS Optimization</p>
              
              <div className="space-y-3 mb-8">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="h-2 w-full bg-brand-surface rounded-full overflow-hidden">
                    <div className="h-full bg-brand-orange rounded-full" style={{ width: `${80 - (i * 15)}%` }}></div>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto px-4 py-3 bg-brand-surface rounded-2xl border border-brand-border flex items-center justify-between">
                <span className="text-sm font-bold text-brand-text">Joined by 152+ today</span>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-green-100"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-[10px] font-bold text-brand-text">+4</div>
                </div>
              </div>
            </motion.div>

            {/* Smaller floating elements */}
          <motion.div 
              variants={revealScale}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="absolute top-[15%] -right-[5%] bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white shadow-xl flex items-center gap-4 z-30 animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center">
                <Briefcase size={20} />
              </div>
              <div>
                <div className="text-xl font-extrabold text-brand-text leading-none mb-1">{content.stat1.value}</div>
                <div className="text-xs font-bold text-brand-muted uppercase tracking-wider">{content.stat1.label}</div>
              </div>
            </motion.div>

            <motion.div 
              variants={revealScale}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="absolute bottom-[20%] -left-[10%] bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white shadow-xl flex items-center gap-4 z-30 animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                <Award size={20} />
              </div>
              <div>
                <div className="text-xl font-extrabold text-brand-text leading-none mb-1">{content.stat2.value}</div>
                <div className="text-xs font-bold text-brand-muted uppercase tracking-wider">{content.stat2.label}</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
