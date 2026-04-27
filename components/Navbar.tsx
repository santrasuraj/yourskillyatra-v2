'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Link from 'next/link';

// navLinks data moved to CMS.

export default function Navbar({ data }: { data?: any }) {
  if (data?.enabled === false) return null;
  const navLinks = data?.links || [];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 80);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-2xl border-b border-brand-orange/10 shadow-[0_8px_32px_rgba(0,0,0,0.03)]'
          : 'bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-[#FBBF24] rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-[0_8px_20px_rgba(249,115,22,0.3)] transition-all group-hover:shadow-[0_12px_24px_rgba(249,115,22,0.4)] group-hover:scale-110 group-hover:rotate-3 duration-500">
              Y
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-brand-text group-hover:text-brand-orange transition-colors duration-500">
              <Link href="/">YourSkillYatra</Link>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link: any) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-bold text-brand-text hover:text-brand-orange transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            ))}
            
            <div className="flex items-center gap-4 pl-4 border-l border-brand-border h-8">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full shadow-sm cursor-default" title="Registration for the next cohort is currently open">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                BATCH OPEN
              </div>

              <a
                href="https://topmate.io/yourskill_yatra/1618442"
                className="relative overflow-hidden inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-brand-orange to-[#FBBF24] rounded-full transition-all hover:scale-105 active:scale-95 group shadow-md hover:shadow-brand-orange/30"
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] bg-[length:200%_100%] animate-shimmer" />
                <span className="relative z-10">Enroll Now</span>
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-text hover:text-brand-orange p-2 focus:outline-none"
              suppressHydrationWarning
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <motion.div
        className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-brand-border"
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link: any) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-bold text-brand-text hover:bg-orange-50 hover:text-brand-orange rounded-xl transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-6 pb-2 border-t border-brand-border">
            <a
              href="https://topmate.io/yourskill_yatra/1618442"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full justify-center px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-brand-orange to-[#FBBF24] rounded-xl shadow-lg shadow-brand-orange/20"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </motion.div>

      {/* Premium Global Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-orange/5 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange bg-[length:200%_100%] origin-left"
          style={{ scaleX }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full animate-shimmer"
          style={{ scaleX }}
        />
      </div>
    </motion.header>
  );
}
