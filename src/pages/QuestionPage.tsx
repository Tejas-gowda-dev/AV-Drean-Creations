import Question from '../components/Question';
import SEOHelper from '../components/SEOHelper';
import { HelpCircle, Heart, Sparkles } from 'lucide-react';

export default function QuestionPage() {
  return (
    <div id="question-page-container" className="pt-24 bg-white text-neutral-900">
      <SEOHelper
        title="Frequently Asked Questions | AV Dream Creations Questions"
        description="Find answers to common questions about booking, album layouts, delivery timelines, candid shoot procedures, and travel policies for weddings across Bangalore and Karnataka."
        keywords="wedding photography Question, videography Questions Bangalore, photo album delivery timeline, hiring wedding photographer questions, candid versus traditional style, photography crew details"
      />

      {/* Subpage Header Banner */}
      <div className="relative py-28 bg-neutral-950 text-white overflow-hidden text-center">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop"
          alt="Frequently Asked Questions Background"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 transition-transform duration-700 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            <HelpCircle className="w-4.5 h-4.5 text-gold" /> Clear & Transparent
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            Frequently Answered <span className="italic text-gold">Inquiries</span>
          </h1>
          <p className="font-sans text-neutral-300 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            Have questions about booking, payments, delivery times, or our creative process? Find detailed responses curated by our production directors.
          </p>
        </div>
      </div>

      {/* Shared Question Component */}
      <Question />

      {/* Bottom Callout */}
      <section className="py-16 bg-neutral-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-white flex items-center gap-2 justify-center">
            Have a Specific <span className="italic text-gold">Question</span>?
          </h2>
          <p className="font-sans text-neutral-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Our team is always happy to jump on a quick call or chat on WhatsApp to guide you through your planning and customized requirements.
          </p>
          <a
            id="question-page-cta"
            href="#/contact"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-sm bg-brand-gradient hover:bg-brand-gradient-hover text-white font-bold font-sans text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg"
          >
            Ask Us Directly <Heart className="w-4 h-4 fill-white text-white" />
          </a>
        </div>
      </section>
    </div>
  );
}
