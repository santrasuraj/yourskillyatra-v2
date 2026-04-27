'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutHome({ data }: { data?: any }) {
  if (data?.enabled === false) return null;
  const content = data || {
    title: "Deciphering the <span class='text-brand-orange'>Corporate Code</span>",
    description: "We don’t just teach skills; we engineer corporate readiness. Degrees get you past the threshold, but understanding the hidden rules of hiring gets you the offer. We bridge that massive gap with tactical, industry-grade preparation.",
    ctaText: "Our Story",
    ctaLink: "/about",
    kpis: [
      { value: "15k+", label: "Community" },
      { value: "30+", label: "Corporate Partners" },
      { value: "95%", label: "Success Rate" }
    ]
  };

  const icons = [ShieldCheck, Zap, Globe];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] -z-10 translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-brand-orange font-bold text-sm tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
              Why YourSkillYatra?
            </motion.div>

            <motion.h2 
              variants={fadeUp} 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text leading-[1.1] tracking-tight"
              dangerouslySetInnerHTML={{ __html: content.title }}
            />

            <motion.p variants={fadeUp} className="text-xl text-brand-secondary leading-relaxed max-w-xl">
              {content.description}
            </motion.p>

            <motion.div variants={fadeUp} className="pt-4">
              <Link 
                href={content.ctaLink}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-text text-white rounded-2xl font-bold text-lg hover:bg-brand-orange transition-all duration-300 shadow-xl shadow-brand-text/10"
              >
                {content.ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: KPI Cards / Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6 relative"
          >
            {content.kpis.map((kpi: any, i: number) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`p-8 rounded-[2.5rem] border border-brand-border bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group ${i === 0 ? 'sm:col-span-2' : ''}`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${i === 0 ? 'bg-orange-50 text-brand-orange' : i === 1 ? 'bg-blue-50 text-brand-blue' : 'bg-emerald-50 text-emerald-600'}`}>
                    <Icon size={28} />
                  </div>
                  <div className="text-4xl md:text-5xl font-extrabold text-brand-text mb-2 tracking-tighter">
                    {kpi.value}
                  </div>
                  <div className="text-sm font-bold text-brand-secondary uppercase tracking-widest">
                    {kpi.label}
                  </div>
                </motion.div>
              );
            })}
            
            {/* Visual accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-dashed border-brand-orange/20 rounded-full animate-spin-slow opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
