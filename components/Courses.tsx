'use client';

import { motion } from 'framer-motion';
import { fadeUp, revealScale, staggerContainer } from '@/lib/animations';
import { Check, Flame, Users } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// Data is now passed as props from CMS.

export default function Courses({ data }: { data?: any }) {
  if (data?.enabled === false) return null;
  const containerRef = useRef<HTMLDivElement>(null);
  const priceRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const plans = data?.items || [];

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 70%',
      once: true,
      onEnter: () => {
        priceRefs.current.forEach((el, index) => {
          if (el && plans[index]) {
            const targetPrice = parseInt(plans[index].price.replace(/,/g, ''), 10);
            gsap.to(el, { 
              innerText: targetPrice, 
              duration: 2, 
              ease: 'power3.out', 
              snap: { innerText: 1 }, 
              onUpdate: function() { 
                el.innerText = '₹' + Number(this.targets()[0].innerText).toLocaleString(); 
              } 
            });
          }
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="pricing" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      {/* Decorative Wave Separator top */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none transform rotate-180 z-20">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
          <path 
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,197.3C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
        
        {/* Section Header */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           variants={fadeUp}
           className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-brand-orange/20 shadow-sm mb-6">
             <span className="text-sm font-bold tracking-widest text-brand-orange uppercase">Transform Your Career</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text mb-6 tracking-tight">
            If you change Nothing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#FBBF24]">Nothing changes.</span>
          </h2>
          <p className="text-xl text-brand-secondary">
            Choose the comprehensive training track that fits your exact timeline.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
           variants={staggerContainer}
           className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan: any, index: number) => (
             <motion.div
               key={plan.id}
               variants={revealScale}
               className={`relative flex flex-col p-8 md:p-12 rounded-[3.5rem] border transition-all duration-700 overflow-hidden group ${
                 plan.popular 
                 ? 'bg-gradient-to-br from-orange-50/50 via-white to-amber-50/20 border-brand-orange/20 shadow-[0_30px_100px_rgba(249,115,22,0.06)] hover:shadow-[0_40px_120px_rgba(249,115,22,0.1)] hover:border-brand-orange/40' 
                 : 'bg-white border-brand-border/40 shadow-[0_20px_80px_rgba(0,0,0,0.02)] hover:border-brand-orange/20 hover:shadow-[0_30px_100px_rgba(0,0,0,0.04)]'
               }`}
             >
               <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               
               {plan.popular && (
                 <>
                   {/* Glow effect for popular card */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full mix-blend-multiply filter blur-[80px] opacity-10 animate-pulse pointer-events-none" />
                   
                   <div className="absolute top-6 right-8">
                     <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                        <span className="absolute inset-[-1000%] animate-[shimmer_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF_0%,#F97316_50%,#FFF_100%)]" />
                        <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-orange/90 to-[#FBBF24]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-3xl shadow-[0_8px_20px_rgba(249,115,22,0.2)]">
                          Most Popular
                        </span>
                     </div>
                   </div>
                 </>
               )}
               
               <div className="mb-10 relative z-10">
                 <div className="flex justify-between items-start mb-6 pr-32">
                   <h3 className="text-3xl font-extrabold text-brand-text leading-tight tracking-tight">{plan.name}</h3>
                 </div>
                 
                 <div className="inline-flex px-4 py-1.5 bg-brand-surface text-brand-text text-sm font-bold rounded-xl uppercase tracking-wider mb-6 border border-brand-border">
                   ⏳ {plan.duration}
                 </div>
                 
                 <div className="flex flex-col mb-4">
                   <span className="text-xl text-brand-muted font-semibold line-through decoration-brand-orange/30 decoration-2 mb-2">{plan.oldPrice}</span>
                   <div className="flex items-baseline gap-2">
                     <span ref={el => { priceRefs.current[index] = el; }} className="text-6xl md:text-7xl font-mono font-extrabold text-brand-text tracking-tighter">₹0</span>
                   </div>
                 </div>
                 
                 <div className="inline-block px-3 py-1 bg-green-100 border border-green-200 text-green-700 font-bold text-sm rounded-lg shadow-sm">
                   Save {plan.discount}
                 </div>
               </div>

               {/* Scarcity Indicator (Only for popular) */}
               {plan.popular && (
                 <div className="mb-10 p-5 bg-white/40 backdrop-blur-md rounded-3xl border border-orange-100/50 relative z-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                   <div className="flex items-center justify-between mb-3">
                     <span className="flex items-center gap-1.5 text-xs font-bold text-brand-orange uppercase tracking-wider">
                       <Flame size={14} className="animate-bounce" /> Fast Filling
                     </span>
                     <span className="text-xs font-bold text-brand-text flex items-center gap-1"><Users size={12} /> 12 / 15 Enrolled</span>
                   </div>
                   <div className="h-2.5 w-full bg-brand-surface border border-brand-border/50 rounded-full overflow-hidden p-[1px]">
                     <div className="h-full bg-gradient-to-r from-brand-orange via-[#FBBF24] to-brand-orange bg-[length:200%_100%] animate-shimmer rounded-full w-[80%]" />
                   </div>
                 </div>
               )}

               <div className="flex-1 relative z-10">
                 <h4 className="font-extrabold text-brand-text mb-6 pb-4 border-b border-brand-border tracking-tight uppercase text-sm">What's included:</h4>
                 <ul className="space-y-4">
                   {plan.features.map((feature: any, i: number) => (
                     <li key={i} className="flex gap-4">
                       <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 shadow-sm border ${plan.popular ? 'bg-orange-50 border-orange-200 text-brand-orange' : 'bg-brand-surface border-brand-border text-brand-text'}`}>
                         <Check className="w-3.5 h-3.5" />
                       </div>
                       <span className="text-brand-secondary font-medium leading-relaxed">{feature}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="mt-12 relative z-10">
                 <a
                   href={plan.link}
                   target="_blank"
                   rel="noreferrer"
                   className={`w-full flex items-center justify-center py-5 rounded-2xl font-bold text-lg transition-all duration-300 active:scale-[0.98] ${
                     plan.popular
                       ? 'bg-gradient-to-r from-brand-orange to-[#FBBF24] text-white shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.4)] hover:-translate-y-1'
                       : 'bg-brand-surface border-2 border-transparent text-brand-text hover:border-brand-border hover:bg-white hover:-translate-y-1 hover:shadow-xl'
                   }`}
                 >
                   Enroll into {plan.duration}
                 </a>
               </div>
             </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
