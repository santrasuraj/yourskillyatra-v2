'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import { revealScale } from '@/lib/animations';

export default function Footer({ data }: { data?: any }) {
  if (data?.enabled === false) return null;
  const content = data || {
    tagline: 'We decode the corporate world for freshers. Through deep tactical preparation, we bridge the gap between degree and career.',
    ctaHeadline: 'Join the elite 1% of <span class="text-brand-orange">Day 1</span> hires.',
    contact: {
      phone: "+91 62910 00136",
      email: "support@yourskillyatra.com"
    }
  };
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const logoOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <footer ref={footerRef} className="relative bg-white pt-20 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive Premium CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={revealScale}
          className="mb-24 rounded-[3.5rem] bg-white border border-brand-orange/20 shadow-[0_32px_80px_rgba(249,115,22,0.1)] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-orange/10 to-transparent rounded-full mix-blend-multiply filter blur-[100px] group-hover:bg-brand-orange/20 transition-all duration-1000 pointer-events-none -translate-y-1/2 translate-x-1/4" />
          
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-text mb-6 tracking-tight leading-[1.1]" dangerouslySetInnerHTML={{ __html: content.ctaHeadline }} />
            <p className="text-xl text-brand-secondary font-medium leading-relaxed mb-4">No more "applying to void". Master the hidden job market and get referred into top product companies.</p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <a
              href="https://topmate.io/yourskill_yatra/1618442"
              className="inline-flex items-center justify-center gap-3 px-10 py-6 text-xl font-bold text-white bg-brand-text rounded-3xl hover:bg-brand-orange transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-brand-orange/40 hover:-translate-y-2 group"
            >
              Start Your Yatra <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Logo Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-[#FBBF24] rounded-2xl flex items-center justify-center font-bold text-white text-2xl shadow-xl shadow-brand-orange/20">
                Y
              </div>
              <span className="font-extrabold text-3xl tracking-tighter text-brand-text">
                YourSkillYatra
              </span>
            </div>
            <p className="text-brand-secondary text-lg font-medium leading-relaxed max-w-sm">
              {content.tagline}
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: FaInstagram, href: '#' },
                { Icon: FaTwitter, href: '#' },
                { Icon: FaFacebookF, href: '#' },
                { Icon: FaYoutube, href: '#' },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-secondary shadow-sm border border-brand-border hover:border-brand-orange hover:text-brand-orange transition-all duration-300"
                >
                  <social.Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-sm font-bold text-brand-text uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Trainers', 'Courses', 'Blog'].map((item) => {
                const href = item === 'Home' ? '/' : item === 'About Us' ? '/about' : `/${item.toLowerCase().replace(' ', '-')}`;
                return (
                  <li key={item}>
                    <Link href={href} className="text-brand-secondary hover:text-brand-orange transition-colors font-semibold">{item}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-sm font-bold text-brand-text uppercase tracking-widest">Support</h4>
            <ul className="space-y-4">
              {['Contact', 'Privacy', 'Delivery', 'Refunds', 'Terms'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-brand-secondary hover:text-brand-orange transition-colors font-semibold">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 space-y-8 pl-0 lg:pl-10">
            <h4 className="text-sm font-bold text-brand-text uppercase tracking-widest text-center lg:text-left">Stay Updated</h4>
            <form 
              action="https://formsubmit.co/santrasuraj228@gmail.com" 
              method="POST"
              className="relative group"
              suppressHydrationWarning
            >
              <input type="hidden" name="_subject" value="New Newsletter Subscription - YourSkillYatra" />
              <input 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                required
                className="w-full h-16 px-6 rounded-2xl bg-brand-surface border border-brand-border focus:border-brand-orange focus:ring-0 outline-none font-medium transition-all group-hover:shadow-lg"
                suppressHydrationWarning
              />
              <button type="submit" className="absolute right-2 top-2 h-12 px-6 bg-brand-text text-white font-bold rounded-xl hover:bg-brand-orange transition-all" suppressHydrationWarning>
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Final Line */}
        <div className="pt-10 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-muted text-sm font-bold">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> YourSkillYatra. Build with ❤️ for the ambitious.
          </p>
          <div className="flex gap-8 text-sm text-brand-muted font-bold tracking-tight">
            <Link href="#" className="hover:text-brand-orange transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-brand-orange transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-brand-orange transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
