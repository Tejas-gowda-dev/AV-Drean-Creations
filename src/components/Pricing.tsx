import { PACKAGES } from '../data';
import { Check, Flame, AlertCircle, Heart } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing-section" className="py-24 bg-white text-neutral-900 border-b border-neutral-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-2 font-sans">
            Transparent Investments
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4 tracking-tight leading-tight">
            Our Wedding Photography & <span className="italic text-gold">Film Packages</span>
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Beautifully curated collections designed to safeguard your family legacy. No hidden fees or surprise costs — just pure artistic commitment.
          </p>
        </div>

        {/* Urgency Alert Banner */}
        <div className="max-w-3xl mx-auto mb-12 bg-gold/10 border border-gold/20 p-4 rounded-sm flex items-center gap-3.5 text-gold">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-gold" />
          <p className="font-sans text-xs md:text-sm leading-relaxed">
            <strong className="font-bold text-neutral-800 uppercase tracking-wider font-mono mr-1">Urgency Alert:</strong> 
            Limited bookings for the 2026/2027 wedding season. Popular winter and spring auspicious dates are already filling up fast. Reserve yours today!
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, index) => (
            <div
              key={pkg.name}
              id={`pricing-card-${pkg.name.toLowerCase()}`}
              className={`relative rounded-sm p-8 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1.5 ${
                pkg.popular
                  ? 'bg-white border-gold shadow-2xl shadow-gold/10 z-10'
                  : 'bg-neutral-50/50 border-neutral-200 hover:border-neutral-300'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-gold text-white px-4 py-1.5 rounded-sm text-[9px] font-mono font-bold uppercase tracking-widest flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-white" /> Popular Selection
                </span>
              )}

              {/* Title, Tagline, Price */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-sans text-neutral-500">
                  {pkg.name} Collection
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 mt-1">
                  {pkg.name} <span className="italic">Production</span>
                </h3>
                <p className="font-sans text-neutral-500 text-xs mt-2 min-h-[40px] leading-relaxed">
                  {pkg.tagline}
                </p>

                <div className="my-6 border-y border-neutral-200 py-4 flex items-baseline gap-1.5">
                  <span className="text-4xl md:text-5xl font-mono font-bold text-gold">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-neutral-500 font-sans">
                    / Event
                  </span>
                </div>

                <p className="font-sans text-neutral-600 text-xs leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-600 leading-relaxed">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Now Action button */}
              <a
                id={`pricing-book-btn-${pkg.name.toLowerCase()}`}
                href="#contact"
                className={`w-full h-12 md:h-14 rounded-sm flex items-center justify-center font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  pkg.popular
                    ? 'bg-brand-gradient hover:bg-brand-gradient-hover text-white'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200'
                }`}
              >
                Book Your {pkg.name} Journey
              </a>
            </div>
          ))}
        </div>

        {/* Global Note banner */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-sm text-neutral-600 font-sans">
            Packages starting at <strong className="text-gold font-mono">₹25,000</strong>. Customizable premium add-ons (Pre-Wedding, Post-Wedding, extra days, album formats) are available on demand.
          </p>
          <p className="text-xs text-neutral-500 font-mono flex items-center justify-center gap-1">
            <Heart className="w-3 h-3 text-gold fill-gold" /> Crafted with uncompromised standards for Bangalore, Mysore, Mandya & Tumkur couples.
          </p>
        </div>

      </div>
    </section>
  );
}
