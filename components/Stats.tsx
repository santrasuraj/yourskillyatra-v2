'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { fadeUp, revealScale, staggerContainer } from '@/lib/animations';
import { Users, Clock, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Arrays have been moved to CMS parameters.

export default function Stats({ data: testimonialsData, mentors: mentorsData }: { data?: any, mentors?: any }) {
  const mentors = mentorsData?.items || [];
  const testimonials = testimonialsData?.items || [];

  const containerRef = useRef<HTMLElement>(null);
  const studentsRef = useRef<HTMLDivElement>(null);
  const yearsRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        if (studentsRef.current) {
          gsap.to(studentsRef.current, { innerText: 15000, duration: 2.5, ease: 'power3.out', snap: { innerText: 1 }, onUpdate: function() { studentsRef.current!.innerText = Number(this.targets()[0].innerText).toLocaleString() + '+' } });
        }
        if (yearsRef.current) {
          gsap.to(yearsRef.current, { innerText: 15, duration: 2, ease: 'power3.out', snap: { innerText: 1 }, onUpdate: function() { yearsRef.current!.innerText = this.targets()[0].innerText + '+' } });
        }
        if (percentRef.current) {
          gsap.to(percentRef.current, { innerText: 20, duration: 2, ease: 'power3.out', snap: { innerText: 1 }, onUpdate: function() { percentRef.current!.innerText = this.targets()[0].innerText + '%' } });
        }
      }
    });
  }, { scope: containerRef });

  if (testimonialsData?.enabled === false && mentorsData?.enabled === false) return null;

  return (
    <section ref={containerRef} id="mentors" className="py-24 bg-white relative overflow-hidden">
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Stats Banner --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={revealScale}
          className="relative mb-32 rounded-[2.5rem] bg-gradient-to-r from-orange-50 via-brand-surface to-blue-50/50 p-1"
        >
          <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[2.5rem] -z-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/60 bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/80 shadow-2xl shadow-brand-text/5 py-12 md:py-16">
            <div className="flex flex-col items-center text-center relative group px-8">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="mb-4 p-3 bg-white rounded-2xl shadow-sm border border-brand-border flex items-center justify-center text-brand-orange">
                <Users size={24} strokeWidth={2} />
              </div>
              <div ref={studentsRef} className="text-6xl md:text-7xl lg:text-[5rem] font-bold font-mono tracking-tighter text-brand-text mb-2">0+</div>
              <div className="text-sm font-bold text-brand-secondary uppercase tracking-widest px-4 py-1.5 bg-white/80 rounded-full border border-white">Freshers Trained</div>
            </div>
            <div className="flex flex-col items-center text-center relative group px-8 pt-12 md:pt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="mb-4 p-3 bg-white rounded-2xl shadow-sm border border-brand-border flex items-center justify-center text-brand-blue">
                <Clock size={24} strokeWidth={2} />
              </div>
              <div ref={yearsRef} className="text-6xl md:text-7xl lg:text-[5rem] font-bold font-mono tracking-tighter text-brand-text mb-2">0+</div>
              <div className="text-sm font-bold text-brand-secondary uppercase tracking-widest px-4 py-1.5 bg-white/80 rounded-full border border-white">Yrs Experience</div>
            </div>
            <div className="flex flex-col items-center text-center relative group px-8 pt-12 md:pt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="mb-4 p-3 bg-white rounded-2xl shadow-sm border border-brand-border flex items-center justify-center text-brand-green">
                <Zap size={24} strokeWidth={2} />
              </div>
              <div ref={percentRef} className="text-6xl md:text-7xl lg:text-[5rem] font-bold font-mono tracking-tighter text-brand-text mb-2">0%</div>
              <div className="text-sm font-bold text-brand-secondary uppercase tracking-widest px-4 py-1.5 bg-white/80 rounded-full border border-white">Only Reach Interviews</div>
            </div>
          </div>
        </motion.div>

        {/* --- Mentors --- */}
        {mentorsData?.enabled !== false && (
          <div className="mb-32">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={revealScale} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4 tracking-tight">Meet Your Mentors</h2>
              <p className="text-brand-secondary text-xl max-w-2xl mx-auto">Industry experts guiding you strictly with practical, real-world corporate frameworks.</p>
            </motion.div>
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.1 }} 
              variants={staggerContainer} 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {mentors.map((mentor: any, i: number) => (
                <motion.div 
                  key={i} 
                  variants={revealScale} 
                  className="group relative bg-white/40 backdrop-blur-3xl rounded-[2.5rem] p-10 text-center border border-white/60 hover:border-brand-orange/30 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(249,115,22,0.1)] hover:-translate-y-3 transition-all duration-700 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                  <div className="relative z-10">
                    <div className={`w-24 h-24 mx-auto ${mentor.bg} rounded-[2rem] flex items-center justify-center text-5xl shadow-sm mb-8 border ${mentor.border} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700`}>
                      {mentor.emoji}
                    </div>
                    <h3 className="font-extrabold text-brand-text text-2xl mb-2 tracking-tight">{mentor.name}</h3>
                    <div className={`inline-block px-4 py-1.5 rounded-full ${mentor.bg} ${mentor.text} text-xs font-bold uppercase tracking-widest mb-6 border ${mentor.border} shadow-sm`}>Expertise</div>
                    <p className="font-bold text-brand-secondary text-[15px] leading-relaxed max-w-[200px] mx-auto opacity-80 group-hover:opacity-100 transition-opacity">{mentor.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>

      {/* --- Success Stories Parallax Scroll --- */}
      {testimonialsData?.enabled !== false && (
        <div id="testimonials" ref={scrollRef} className="bg-[#FFFDF7] py-24 md:py-32 relative overflow-hidden border-y border-brand-orange/10">
          <div className="absolute inset-0 bg-grain opacity-10 mix-blend-multiply pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight mb-4">Success Stories</h2>
              <p className="text-xl text-brand-secondary font-medium">Join thousands of students who cracked their dream jobs.</p>
            </div>
            
            <div className="relative h-[800px] md:h-[1000px] overflow-hidden rounded-[3rem] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 h-full">
              {/* Column 1 */}
              <motion.div style={{ y: y1 }} className="flex flex-col gap-6 md:gap-8">
                {[...testimonials, ...testimonials].map((t: any, i: number) => (
                  <div key={`col1-${i}`} className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-brand-border/40 hover:shadow-xl transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-6">
                      <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                      <div>
                        <div className="font-extrabold text-brand-text group-hover:text-brand-orange">{t.name}</div>
                        <div className="text-brand-secondary text-xs font-bold uppercase tracking-wider">{t.badge}</div>
                      </div>
                    </div>
                    <p className="text-brand-text text-lg font-medium leading-relaxed italic">"{t.quote}"</p>
                  </div>
                ))}
              </motion.div>

              {/* Column 2 */}
              <motion.div style={{ y: y2 }} className="hidden md:flex flex-col gap-6 md:gap-8">
                {[...testimonials, ...testimonials].map((t: any, i: number) => (
                  <div key={`col2-${i}`} className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-brand-border/40 hover:shadow-xl transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-6">
                      <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                      <div>
                        <div className="font-extrabold text-brand-text group-hover:text-brand-orange">{t.name}</div>
                        <div className="text-brand-secondary text-xs font-bold uppercase tracking-wider">{t.badge}</div>
                      </div>
                    </div>
                    <p className="text-brand-text text-lg font-medium leading-relaxed italic">"{t.quote}"</p>
                  </div>
                ))}
              </motion.div>

              {/* Column 3 */}
              <motion.div style={{ y: y3 }} className="hidden lg:flex flex-col gap-6 md:gap-8">
                {[...testimonials, ...testimonials].map((t: any, i: number) => (
                  <div key={`col3-${i}`} className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-brand-border/40 hover:shadow-xl transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-6">
                      <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                      <div>
                        <div className="font-extrabold text-brand-text group-hover:text-brand-orange">{t.name}</div>
                        <div className="text-brand-secondary text-xs font-bold uppercase tracking-wider">{t.badge}</div>
                      </div>
                    </div>
                    <p className="text-brand-text text-lg font-medium leading-relaxed italic">"{t.quote}"</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
