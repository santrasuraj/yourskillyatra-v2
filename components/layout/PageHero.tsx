'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface PageHeroProps {
  title: string;
  description?: string;
  pill?: string;
}

export default function PageHero({ title, description, pill }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden isolate flex items-center justify-center min-h-[40vh]">
      
      {/* 
        High-End Background Aesthetics 
        - We use fixed background blobs with intense blurring and CSS animation for a liquid flow effect.
        - Noise grain overlay for texture.
      */}
      <div className="absolute inset-0 bg-brand-bg -z-20" />
      
      {/* Liquid Mesh Gradient Orbs */}
      <div className="absolute top-0 left-[-10%] w-[50vw] h-[50vw] bg-brand-orange/15 rounded-full mix-blend-multiply filter blur-[100px] animate-blob -z-10" />
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-brand-blue/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000 -z-10" />
      <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-[#FBBF24]/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000 -z-10" />
      
      {/* Texture */}
      <div className="bg-grain opacity-40 -z-10" />

      {/* Floating Glass Graphic (Abstract geometry) */}
      <motion.div 
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 md:top-32 md:right-32 w-32 h-32 bg-white/10 border border-white/40 shadow-xl backdrop-blur-md rounded-3xl -z-10 hidden md:block"
      />
      <motion.div 
        animate={{ 
          y: [10, -10, 10],
          rotate: [0, -10, 10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-24 h-24 bg-brand-orange/5 border border-brand-orange/20 shadow-lg backdrop-blur-md rounded-full -z-10 hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Back Button - Glassmorphic Pill */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 hover:bg-white/90 backdrop-blur-md border border-white transition-all duration-300 rounded-full text-sm font-bold text-brand-secondary hover:text-brand-orange shadow-sm hover:shadow-md hover:-translate-y-0.5">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Cinematic Content Reveal */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-6 text-center"
        >
          {pill && (
            <motion.div variants={fadeUp} className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 border border-brand-orange/20 text-brand-orange text-xs font-bold tracking-widest uppercase shadow-sm">
                <Sparkles size={14} />
                {pill}
              </span>
            </motion.div>
          )}
          
          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-text leading-[1.1] tracking-tight pt-2"
          >
            {title}
          </motion.h1>
          
          {description && (
            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-2xl text-brand-secondary font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm mt-6"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Required CSS for blob animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}} />
    </section>
  );
}
