import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
// @ts-ignore
import Main from "../assets/main-image.webp";
// @ts-ignore
import main1 from "../assets/main1-image.webp";
import { useNavigate } from 'react-router-dom';

export default function WeddingPhotographyPromo() {
  // const handleNavClick = (hash: string) => {
  //   window.location.hash = hash;
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

   const navigate = useNavigate();

  const handleNavClick = (page: string) => {
    navigate(`/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="wedding-photography-promo" className="py-14 bg-white text-neutral-900 overflow-hidden border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Three-Column Grid matching the uploaded layout precisely on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* COLUMN 1: GIANT TYPOGRAPHY */}
          <div className="lg:col-span-3 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h2 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black uppercase tracking-tight leading-[0.85] text-neutral-800">
                WEDDING <br />
                <span className="text-neutral-700">PHOTOGRAPHY</span>
              </h2>
            </motion.div>
          </div>

          {/* COLUMN 2: TWO OVERLAPPING PICTURES */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[350px] sm:min-h-[480px] lg:min-h-[580px] my-8 lg:my-0">
            
            {/* Background Layered Image (Larger) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute left-0 top-0 w-[72%] h-full z-0 overflow-hidden rounded-sm shadow-md"
            >
              <img
                src={main1}
                alt="Intimate Wedding Couple Portraits"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover grayscale brightness-95 contrast-105 hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Foreground Layered Image (Smaller, offset with white frame) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-0 top-[10%] w-[48%] h-[80%] z-10 overflow-hidden rounded-sm shadow-xl border-[8px] sm:border-[12px] border-white"
            >
              <img
                src={Main}
                alt="Couple celebrating at scenic terrace"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

          </div>

          {/* COLUMN 3: TEXT DESCRIPTION & FIND OUT MORE */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full py-4 text-left space-y-8 lg:space-y-0 lg:min-h-[500px]">
            
            {/* Philosophy text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 pt-4"
            >
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                As well as offering cinematic wedding videography for Bangalore and beyond, our wedding photography is all about real and natural moments. Our aim is to capture the essence of your day in timeless images.
              </p>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                Our photos are a combination of everything we are inspired by such as, documentary photography, street photography, portrait and fashion, nature, design, decor, music and food. If this resonates with you, make sure to check our photography page below.
              </p>
            </motion.div>

            {/* Bottom-right aligned "FIND OUT MORE" */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:self-end pt-4"
            >
              <button
                onClick={() => handleNavClick('/gallery')}
                className="inline-flex items-center gap-2 group text-xs font-bold uppercase tracking-[0.2em] text-brand-gradient hover:text-brand-gradient transition-colors duration-300 cursor-pointer"
              >
                <span>FIND OUT MORE</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
