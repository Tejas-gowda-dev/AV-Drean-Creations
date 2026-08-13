import { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto scroll every 7 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews-section" className="py-24 bg-neutral-50 text-neutral-900 border-b border-neutral-100 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-2 font-sans">
            Love Letters & Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-neutral-900 mb-4 leading-tight">
            What Our Beautiful <span className="italic text-gold">Couples Say</span>
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            There is no greater seal of trust than the genuine letters sent to us by couples whose dreams we secured. Explore our 100% 5-star Google review experiences.
          </p>
        </div>

        {/* Carousel Outer */}
        <div id="testimonials-carousel" className="relative max-w-4xl mx-auto bg-white border border-neutral-100 rounded-sm p-8 md:p-14 shadow-lg">
          <Quote className="absolute top-6 right-8 md:top-10 md:right-12 w-16 h-16 text-neutral-100 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 md:space-y-8 text-center md:text-left"
            >
              {/* Star Rating & Event Badge */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex justify-center md:justify-start gap-1">
                  {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 self-center md:self-start bg-gold/10 border border-gold/20 text-gold px-3 py-1 rounded-sm text-[9px] uppercase font-sans tracking-wider font-bold">
                  <Heart className="w-3 h-3 fill-gold text-gold" /> {TESTIMONIALS[activeIndex].event}
                </span>
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-lg md:text-2xl font-light text-neutral-800 leading-relaxed italic">
                "{TESTIMONIALS[activeIndex].text}"
              </blockquote>

              {/* Couple Info Card */}
              <div className="flex flex-col md:flex-row items-center gap-4 border-t border-neutral-100 pt-6">
                <img
                  src={TESTIMONIALS[activeIndex].image}
                  alt={`${TESTIMONIALS[activeIndex].coupleName} Wedding Review`}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold shadow-md"
                />
                <div className="text-center md:text-left">
                  <h4 className="font-serif text-lg font-medium text-neutral-900">
                    {TESTIMONIALS[activeIndex].coupleName}
                  </h4>
                  <p className="font-mono text-[11px] tracking-wider text-neutral-500 uppercase mt-0.5">
                    Married in {TESTIMONIALS[activeIndex].location} • {TESTIMONIALS[activeIndex].date}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute right-8 bottom-8 md:right-12 md:bottom-12 flex gap-2">
            <button
              id="testimonial-prev-btn"
              onClick={prevTestimonial}
              className="h-12 w-12 bg-neutral-100 hover:bg-gold hover:text-white text-neutral-800 rounded-sm flex items-center justify-center transition-all shadow-sm hover:shadow-md cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={nextTestimonial}
              className="h-12 w-12 bg-neutral-100 hover:bg-gold hover:text-white text-neutral-800 rounded-sm flex items-center justify-center transition-all shadow-sm hover:shadow-md cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-1.5 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-sm transition-all cursor-pointer ${idx === activeIndex ? 'w-8 bg-gold' : 'w-2 bg-neutral-300'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
