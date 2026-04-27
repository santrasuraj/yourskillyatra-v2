'use client';

import PageHero from '@/components/layout/PageHero';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Mail, Phone, Clock, MapPin, Send } from 'lucide-react';
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        description="Have questions about our corporate training programs? Need assistance with course enrollment? Our team is ready to help."
        pill="Contact Us"
      />

      <section className="py-24 bg-brand-bg relative overflow-hidden">
        
        {/* Cinematic Grid Lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Left: Contact Info (Takes up 2 columns) */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-2 space-y-8">
              
              <motion.div variants={fadeUp}>
                <h2 className="text-4xl font-extrabold text-brand-text mb-4 tracking-tight">How can we help?</h2>
                <p className="text-lg text-brand-secondary leading-relaxed">
                  Whether you're a student looking to enroll in our Career Launchpad, or a professional looking for 1-on-1 coaching, our support team responds within hours.
                </p>
              </motion.div>

              <div className="space-y-4">
                {/* Phone */}
                <motion.a href="tel:+916291000136" variants={fadeUp} className="group flex items-center gap-6 p-6 bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/60 hover:border-brand-orange/40 hover:shadow-[0_40px_100px_rgba(249,115,22,0.1)] transition-all duration-700">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-orange shadow-sm border border-brand-border/40 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-secondary text-xs uppercase tracking-widest mb-1">Direct Line</h3>
                    <p className="text-xl font-black text-brand-text">+91 62910 00136</p>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a href="mailto:support@yourskillyatra.com" variants={fadeUp} className="group flex items-center gap-6 p-6 bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/60 hover:border-brand-blue/40 hover:shadow-[0_40px_100px_rgba(59,130,246,0.1)] transition-all duration-700">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-blue shadow-sm border border-brand-border/40 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="font-bold text-brand-secondary text-xs uppercase tracking-widest mb-1">Support Email</h3>
                    <p className="text-lg md:text-xl font-black text-brand-text truncate">support@yourskillyatra.com</p>
                  </div>
                </motion.a>

                {/* Hours */}
                <motion.div variants={fadeUp} className="flex items-center gap-6 p-6 bg-white/20 backdrop-blur-md rounded-[2.5rem] border border-white/40">
                  <div className="w-14 h-14 bg-white/40 border border-white/60 rounded-2xl flex items-center justify-center text-brand-green">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-secondary text-xs uppercase tracking-widest mb-1">Support Hours</h3>
                    <p className="text-sm font-bold text-brand-text">Mon - Sat <span className="text-brand-muted font-black mx-2">•</span> 10am - 7pm</p>
                  </div>
                </motion.div>
              </div>

              {/* Socials */}
              <motion.div variants={fadeUp} className="pt-4">
                <h3 className="text-sm font-bold text-brand-secondary uppercase tracking-wider mb-6">Stay Connected</h3>
                <div className="flex gap-4">
                  {[
                    { Icon: FaInstagram, href: '#', color: 'hover:bg-pink-600 hover:text-white hover:border-pink-600 text-pink-600' },
                    { Icon: FaTwitter, href: '#', color: 'hover:bg-sky-500 hover:text-white hover:border-sky-500 text-sky-500' },
                    { Icon: FaFacebookF, href: '#', color: 'hover:bg-blue-600 hover:text-white hover:border-blue-600 text-blue-600' },
                    { Icon: FaYoutube, href: '#', color: 'hover:bg-red-600 hover:text-white hover:border-red-600 text-red-600' },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className={`w-14 h-14 rounded-full border border-brand-border/80 flex items-center justify-center transition-colors duration-300 bg-white shadow-sm ${social.color}`}
                    >
                      <social.Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Premium Form (Takes up 3 columns) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-brand-text/5 border border-brand-border/60 relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px] -z-10 pointer-events-none translate-x-1/4 -translate-y-1/4" />
              
              <h3 className="text-3xl font-extrabold text-brand-text mb-8 tracking-tight">Send a Direct Message</h3>
              
              <form 
                action="mailto:support@yourskillyatra.com" 
                method="post" 
                encType="text/plain"
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Floating Label Input */}
                  <div className="relative group">
                    <input type="text" id="name" name="name" required placeholder=" " className="peer w-full px-6 py-4 rounded-2xl bg-brand-surface/50 border border-brand-border focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-brand-text font-medium" />
                    <label htmlFor="name" className="absolute text-brand-muted duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-brand-orange left-4 font-semibold text-sm">Full Name</label>
                  </div>
                  
                  <div className="relative group">
                    <input type="tel" id="phone" name="phone" required placeholder=" " className="peer w-full px-6 py-4 rounded-2xl bg-brand-surface/50 border border-brand-border focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-brand-text font-medium" />
                    <label htmlFor="phone" className="absolute text-brand-muted duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-brand-orange left-4 font-semibold text-sm">Phone Number</label>
                  </div>
                </div>

                <div className="relative group">
                  <input type="email" id="email" name="email" required placeholder=" " className="peer w-full px-6 py-4 rounded-2xl bg-brand-surface/50 border border-brand-border focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-brand-text font-medium" />
                  <label htmlFor="email" className="absolute text-brand-muted duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-brand-orange left-4 font-semibold text-sm">Email Address</label>
                </div>

                <div className="space-y-2">
                  <label htmlFor="program" className="text-sm font-bold text-brand-text px-2">I am interested in...</label>
                  <select id="program" name="program" className="w-full px-6 py-4 rounded-2xl bg-brand-surface/50 border border-brand-border focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-brand-text font-medium appearance-none cursor-pointer">
                    <option value="4-week">The Job Hunt Accelerator (4 Weeks)</option>
                    <option value="8-week">Career Launchpad (8 Weeks)</option>
                    <option value="1-on-1">1-on-1 VIP Mentorship</option>
                    <option value="other">General Partnership / Inquiry</option>
                  </select>
                </div>

                <div className="relative group pt-2">
                  <textarea id="message" name="message" rows={5} required placeholder=" " className="peer w-full px-6 py-4 rounded-2xl bg-brand-surface/50 border border-brand-border focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all resize-none text-brand-text font-medium"></textarea>
                  <label htmlFor="message" className="absolute text-brand-muted duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-brand-orange left-4 font-semibold text-sm">Tell us about your career goals</label>
                </div>

                <button type="submit" className="group w-full py-5 bg-brand-text text-white rounded-2xl font-bold text-lg hover:bg-black transition-all duration-300 shadow-xl shadow-brand-text/20 hover:shadow-brand-orange/20 active:scale-[0.98] flex items-center justify-center gap-3">
                  Transmit Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
