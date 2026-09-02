import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowRight, Heart } from 'lucide-react';
import { motion } from 'motion/react';
// @ts-ignore
import Main from "../assets/main-image.webp";

export default function ConnectPortfolio() {
  const navigate = useNavigate();

  const handleNavClick = useCallback((page: string) => {
    navigate(`/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <section
      id="connect-portfolio-section"
      className="relative py-6 lg:py-18  text-neutral-900 overflow-hidden border-b border-neutral-200/60"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-white/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* LEFT COLUMN: Video Portfolio + Overlapping Experience Card */}
          <div className="lg:col-span-7 relative">
            {/* Primary Hero Image Box */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative min-h-[520px] sm:min-h-[620px] lg:min-h-[680px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              {/* Image & Dark Editorial Overlay */}
              <img
                src={Main}
                alt="Bespoke Cinematic Wedding Archway Portfolio"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/20" />

              {/* Video Portfolio Content (Bottom Left) */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-12 text-white">
                <div className="max-w-md space-y-4">
                  <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide leading-none text-white drop-shadow-sm">
                    VIDEO PORTFOLIO
                  </h3>
                  <p className="font-serif italic text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
                    We are blessed to travel across Karnataka documenting beautiful weddings, but we also love to shoot weddings in Bangalore, Mysore, Mandya, and beyond. Have a look at our videography and photography portfolio pages where you will be able to see more of our work. Enjoy!
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => handleNavClick('films')}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-white transition-colors duration-300 group/btn cursor-pointer"
                    >
                      <span>VIDEO GALLERY</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* OVERLAPPING "EXPERIENCE" CARD */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 lg:mt-0 lg:absolute lg:bottom-8 lg:-right-6 z-20 max-w-full lg:max-w-[340px] p-7 sm:p-9 text-white shadow-2xl rounded-xl text-left flex flex-col justify-between space-y-6 bg-neutral-900/90 backdrop-blur-md border border-amber-500/30"
            >
              <div className="space-y-3">
                <h4 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-wide leading-none text-white">
                  EXPERIENCE
                </h4>
                <p className="font-serif italic text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
                  "At the end of the day, people won't remember what you said or did, they will remember how you made them feel"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="font-serif italic text-xs font-medium tracking-wide text-neutral-200">
                  We strive for unforgettable experiences!
                </p>
                <button
                  onClick={() => handleNavClick('about')}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-white hover:text-white transition-colors cursor-pointer group/more"
                >
                  <span>FIND OUT MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/more:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Let's Connect + Send Us A Message */}
          <div className="lg:col-span-5 flex flex-col justify-center py-4 lg:pl-6 text-left space-y-12 sm:space-y-14">

            {/* LET'S CONNECT block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3 max-w-md"
            >
              <h4 className="font-serif italic text-2xl md:text-3xl font-black uppercase tracking-widest text-brand-gradient">
                LET'S CONNECT
              </h4>
              <p className="font-serif italic text-xs md:text-sm text-neutral-600 leading-relaxed">
                Connection fosters experiences. We care about what we do and about our clients. That is why we put so much emphasis on building a connection with our couples. This is what makes our films so unique.
              </p>
            </motion.div>

            {/* SEND US A MESSAGE block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="space-y-6 max-w-md"
            >
              <div className="space-y-3">
                <h4 className="font-serif italic text-2xl md:text-3xl font-black uppercase tracking-widest text-brand-gradient">
                  SEND US A MESSAGE
                </h4>
                <p className="font-serif italic text-xs md:text-sm text-neutral-600 leading-relaxed">
                  We would love to hear from you and join you on your wedding journey!
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full sm:w-auto h-14 px-10 rounded-sm bg-brand-gradient hover:bg-brand-gradient-hover text-white font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"                >
                  <span>CONTACT NOW</span>
                  <Heart className="w-4 h-4 fill-white text-white" />
                </button>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}