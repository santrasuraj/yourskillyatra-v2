'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

// Audiences data is moved to CMS.

export default function WhoIsItFor({ data }: { data?: any }) {
  if (data?.enabled === false) return null;
  const containerRef = useRef<HTMLDivElement>(null);
  const audiences = data?.items || [];

  // Spotlight effect logic tracking coordinates
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="relative py-32 bg-brand-bg overflow-hidden isolate">

      {/* Premium subtle warm grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBzdHJva2U9InJnYmEoMjQ1LDI0MCwyMzIsIDAuNikiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-orange/20 shadow-sm mb-6">
            <span className="text-sm font-bold tracking-widest text-brand-orange uppercase">Your Target Audience</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text mb-6 tracking-tight">
            Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#FBBF24]">Ambitious Minds.</span>
          </h2>
          <p className="text-xl text-brand-secondary">
            Our training methodologies adapt strictly to your specific stage of the career journey, ensuring zero wasted effort.
          </p>
        </motion.div>

        {/* Aceternity UI Style Spotlight Cards (Light Mode) */}
        <motion.div
          ref={containerRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative group/container"
        >
          {audiences.map((aud: any, i: number) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative rounded-[2rem] overflow-hidden group/card bg-white border border-brand-border/80 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-transparent"
            >
              {/* The radial spotlight following cursor */}
              <div
                className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                style={{
                  background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${aud.colorRgb}, 0.15), transparent 40%)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col items-start bg-white/60 backdrop-blur-3xl m-[1px] rounded-[1.95rem]">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner" style={{ backgroundColor: `rgba(${aud.colorRgb}, 0.1)` }}>
                  {aud.icon}
                </div>

                <h4 className="text-2xl font-bold text-brand-text mb-3 tracking-tight group-hover/card:text-brand-orange transition-colors duration-300">{aud.title}</h4>

                <p className="text-brand-secondary font-medium leading-relaxed">
                  {aud.desc}
                </p>
              </div>

              {/* Subtle border glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none border-2 rounded-[2rem] z-20"
                style={{ borderColor: `rgba(${aud.colorRgb}, 0.2)` }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
