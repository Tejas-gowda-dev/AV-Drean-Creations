import React from 'react';
import { motion } from 'motion/react';

export default function CraftVsCommodity() {
  return (
    <section
      id="craft-vs-commodity"
      className="py-16 sm:py-20 md:py-10 text-neutral-900 border-b border-neutral-100 flex items-center justify-center text-center bg-neutral-50/40"
      // style={{ backgroundColor: '#ffffff.' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Header styled exactly like the provided image: Tall, bold, narrow display sans */}
          <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl lg:text-[3.5rem] font-semibold uppercase tracking-tight text-[#2E2A27] leading-none text-brand-gradient">
            CRAFT VS COMMODITY
          </h2>

          {/* Main philosophy text */}
          <p className="font-['Inter'] text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed max-w-5xl mx-auto font-light tracking-wide text-justify sm:text-center">            We don't sell videos, we craft films. Amid all the beauty, the laughter, the love and tears of any wedding day, we create a celebration of you in a beautiful film crafted in our unique style. Our films tell the story of your love and express who you are. We strive to capture those special moments as they happen. It means being alive to the present, honouring the past, creating real treasures for the future. It is about transforming the events of your wedding into a living, lasting memory.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
