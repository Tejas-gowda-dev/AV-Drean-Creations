import { useState } from 'react';
import { Questions } from '../data';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Question() {
  const [openId, setOpenId] = useState<string | null>('Question-1');

  const toggleQuestion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="Question-section" className="py-24 bg-white text-neutral-900 border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-gradient mb-2 font-sans">
            Clear Answers
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-neutral-900 mb-4 tracking-tight leading-tight">
            Frequently Answered <span className="italic text-brand-gradient">Inquiries</span>
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Everything you need to know about locking down your date, delivery timelines, planning regional travels, and printed coffee table album customizations.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {Questions.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={item.id}
                className={`border rounded-sm transition-all duration-300 ${
                  isOpen
                    ? 'bg-neutral-50/80 border-gold/30 shadow-sm'
                    : 'bg-white border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <button
                  id={`btn-${item.id}`}
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base md:text-lg font-medium text-neutral-900 flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? 'text-gold' : 'text-neutral-400'}`} />
                    {item.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 font-sans text-xs md:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 mt-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic CTA box */}
        <div className="mt-12 bg-neutral-50 border border-neutral-150 p-6 rounded-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-start gap-3">
            <MessageSquare className="w-6 h-6 text-brand-gradient flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-base font-semibold text-brand-gradient">Have a custom ritual or offbeat venue idea?</h4>
              <p className="font-sans text-xs text-neutral-500 mt-0.5">Let’s customize a bespoke wedding narrative that matches your specific timeline.</p>
            </div>
          </div>
          <a
            id="Question-cta-chat"
            href="contact"
            className="h-11 px-5 rounded-sm bg-neutral-950  hover:text-white text-white font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center transition-all whitespace-nowrap cursor-pointer"
          >
            Ask Us Directly
          </a>
        </div>

      </div>
    </section>
  );
}
