import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// @ts-ignore
import Main from "../assets/main-image.webp";
// @ts-ignore
import main1 from "../assets/main1-image.webp";
interface HeroProps {
  onNavigate: (route: string) => void;
}

const BACKGROUND_IMAGES = [
  Main,
  main1
];

export default function Hero({ onNavigate }: HeroProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative h-screen flex items-end justify-center overflow-hidden bg-neutral-950"
    >
      {/* Background Image with beautiful cinematic dark overlay and motion transition */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIdx}
            src={BACKGROUND_IMAGES[currentIdx]}
            alt="Wedding photography bangalore"
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.65, scale: 1.02 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/60 z-10"></div>

        {/* Fine-art geometric frame overlay */}
        {/* <div className="absolute inset-8 pointer-events-none hidden md:block rounded-2xl z-5"></div> */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pb-10 md:pb-14 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light tracking-tight leading-[1.2] text-white">
            Your Wedding Story <br className="hidden md:inline" />
            Deserves <span className="font-normal italic text-brand-gradient ">Timeless Memories</span>
          </h1>

          <p className="font-serif italic text-neutral-200 max-w-3xl mx-auto text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.2em] leading-relaxed uppercase">
            CAPTURING THE SOUL OF YOUR CELEBRATION WITH AN EMOTIONAL LENS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
