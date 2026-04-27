'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import * as Accordion from '@radix-ui/react-accordion';

// FAQs data moved to CMS.

export default function FAQ({ data }: { data?: any }) {
  if (data?.enabled === false) return null;
  const [openItems, setOpenItems] = useState<string[]>([]);
  const faqs = data?.items || [];

  return (
    <section id="faq" className="py-32 md:py-40 bg-brand-surface relative overflow-hidden">
      
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-orange/5 via-brand-orange/2 to-transparent blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left Column - Header & Support Links */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={staggerContainer} 
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <motion.div variants={fadeUp} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border shadow-sm mb-6">
                 <span className="text-sm font-bold tracking-widest text-brand-secondary uppercase">Common Queries</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 tracking-tight leading-tight">
                Frequently Asked <span className="text-brand-orange">Questions</span>.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-brand-secondary leading-relaxed mb-12">
                Everything you need to know about our corporate readiness programs, training formats, and career guidance.
              </motion.p>
            </div>

            {/* Support Quick Links */}
            <motion.div variants={fadeUp} className="space-y-4">
              <h4 className="text-sm font-bold text-brand-text uppercase tracking-wider mb-4">Still need help?</h4>
              <Link href="/contact" className="group flex items-center justify-between p-5 bg-white rounded-2xl border border-brand-border hover:border-brand-orange hover:shadow-lg transition-all duration-300">
                <div>
                  <span className="block font-bold text-brand-text mb-1">Talk to Support</span>
                  <span className="block text-sm text-brand-secondary">Average response: 2 hours</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-surface text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </div>
              </Link>
              
              <Link href="/course-delivery-policy" className="group flex items-center justify-between p-5 bg-white rounded-2xl border border-brand-border hover:border-brand-blue hover:shadow-lg transition-all duration-300">
                <div>
                  <span className="block font-bold text-brand-text mb-1">Delivery Policy</span>
                  <span className="block text-sm text-brand-secondary">How you access course info</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-surface text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Premium Accordion */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={fadeUp} 
            className="lg:col-span-7"
          >
            <Accordion.Root
              type="multiple"
              value={openItems}
              onValueChange={setOpenItems}
              className="space-y-4"
            >
              {faqs.map((faq: any, i: number) => {
                const isOpen = openItems.includes(`item-${i}`);
                const paddingStr = (i + 1).toString().padStart(2, '0');

                return (
                  <Accordion.Item
                    key={i}
                    value={`item-${i}`}
                    className={`relative bg-white/40 backdrop-blur-3xl border rounded-[2.5rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group/item ${
                      isOpen 
                      ? 'border-brand-orange/30 shadow-[0_32px_80px_rgba(249,115,22,0.1)] bg-gradient-to-br from-orange-50/50 via-white to-transparent' 
                      : 'border-brand-border/40 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-brand-orange/20 hover:shadow-lg'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    {/* Watermark Number */}
                    <div className="absolute top-2 right-6 text-9xl font-extrabold text-brand-text/[0.01] select-none pointer-events-none leading-none tracking-tighter transition-all duration-700">
                      {paddingStr}
                    </div>

                    <Accordion.Header>
                      <Accordion.Trigger suppressHydrationWarning className="w-full relative z-10 flex text-left p-6 md:p-8 cursor-pointer focus:outline-none group">
                        <div className="flex-1 pr-8">
                          <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-brand-orange' : 'text-brand-text group-hover:text-brand-orange'}`}>
                            {faq.question}
                          </h3>
                        </div>
                        
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
                            isOpen ? 'bg-brand-orange text-white border-brand-orange rotate-180' : 'bg-brand-surface text-brand-secondary border-brand-border group-hover:border-brand-orange/50'
                          }`}>
                            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                          </div>
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <Accordion.Content forceMount asChild>
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pb-8 px-6 md:px-8 text-lg text-brand-secondary leading-relaxed font-medium relative z-10 w-11/12 border-t border-brand-border/50 pt-6">
                              {faq.answer}
                            </div>
                          </motion.div>
                        </Accordion.Content>
                      )}
                    </AnimatePresence>
                  </Accordion.Item>
                );
              })}
            </Accordion.Root>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
