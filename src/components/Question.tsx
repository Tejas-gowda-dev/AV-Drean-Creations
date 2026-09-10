import { useState } from 'react';
import { Questions } from '../data';
import { Plus, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Question() {
  const [openId, setOpenId] = useState<string | null>('Question-1');

  const toggleQuestion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="Question-section" 
      className="relative py-8 md:py-8 bg-[#FCFBFA] text-neutral-900 border-b border-neutral-200/60 overflow-hidden"
    >
      {/* Subtle Editorial Background Accent */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-100/25 via-stone-100/10 to-transparent blur-3xl opacity-70" 
      />

      <div className="relative max-w-3xl mx-auto px-5 md:px-8">
        
        {/* Header */}
        {/* <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/70 inline-block" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-gradient font-sans">
              Clear Answers
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 mb-5 tracking-tight leading-[1.18]">
            Frequently Answered <span className="italic font-normal text-brand-gradient">Inquiries</span>
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-[15px] leading-relaxed font-light">
            Everything you need to know about locking down your date, delivery timelines, planning regional travels, and printed coffee table album customizations.
          </p>
        </div> */}

        {/* Minimal Accordion List */}
        <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
          {Questions.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={item.id}
                className="group transition-colors duration-300 hover:bg-white/60"
              >
                <button
                  id={`btn-${item.id}`}
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full text-left py-6 sm:py-7 flex items-start justify-between gap-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded-sm"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-neutral-400 group-hover:text-gold transition-colors duration-300 select-none">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-serif text-base sm:text-lg md:text-xl font-medium tracking-tight transition-colors duration-300 ${
                      isOpen ? 'text-neutral-950' : 'text-neutral-800 group-hover:text-neutral-950'
                    }`}>
                      {item.question}
                    </span>
                  </div>

                  {/* Elegant Expanding Plus/Cross Icon */}
                  <div className={`mt-0.5 flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isOpen 
                      ? 'bg-neutral-900 border-neutral-900 text-white rotate-45' 
                      : 'border-neutral-200 text-neutral-400 group-hover:border-neutral-400 group-hover:text-neutral-700'
                  }`}>
                    <Plus className="w-3.5 h-3.5 transition-transform" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1, 
                        transition: { height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.25, delay: 0.1 } } 
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0, 
                        transition: { height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.15 } } 
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pl-9 sm:pl-12 pr-4 pb-7 text-xs sm:text-sm text-serif italic leading-relaxed font-serif font-light">
                        <p className="max-w-2xl border-l-2 border-gold/30 pl-4 py-0.5">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Floating Callout Card */}
        {/* <div className="mt-14 p-6 sm:p-8 rounded-xl bg-white border border-neutral-200/80 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.08)]">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-150 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-brand-gradient" />
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg font-medium text-brand-gradient leading-snug">
                Have a custom ritual or offbeat venue idea?
              </h4>
              <p className="font-sans text-xs sm:text-[13px] text-neutral-500 mt-1 leading-normal font-light">
                Let’s customize a bespoke wedding narrative that matches your specific timeline.
              </p>
            </div>
          </div>

          <a
            id="Question-cta-chat"
            href="contact"
            className="group h-11 px-6 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-[11px] uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all duration-200 whitespace-nowrap shadow-sm active:scale-[0.98]"
          >
            <span>Ask Us Directly</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-400 group-hover:text-white" />
          </a>
        </div> */}

      </div>
    </section>
  );
}