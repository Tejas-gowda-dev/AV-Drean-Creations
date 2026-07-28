import Pricing from '../components/Pricing';
import SEOHelper from '../components/SEOHelper';
import { ShieldCheck, Heart, Sparkles, HelpCircle } from 'lucide-react';

export default function PricingPage() {
  const customAddons = [
    { name: 'Exclusive Pre-Wedding Portrait Session', desc: 'Up to 5 hours shoot in Bangalore locations, including styled costume recommendations and 40 retouched high-res frames.', price: '₹15,000' },
    { name: 'Premium Lay-Flat Flush-Mount Album (12x15 in)', desc: 'Extra 40-page hard-bound master print book designed by senior layout artists, with elegant acrylic leatherette gift box.', price: '₹12,000' },
    { name: '4K Cinema Drone Videography Add-on', desc: 'Professional aerial drone pilot filming grand outdoor rituals and venue landscape frames (1 day event coverage).', price: '₹10,000' },
    { name: 'Additional Event Day (Photography only)', desc: 'Full 1-day candid and traditional photo coverage of auxiliary pre-rituals (Haldi, Mehendi, Pooja) up to 5 hours.', price: '₹15,000' }
  ];

  return (
    <div id="pricing-page-container" className="pt-24 bg-white text-neutral-900">
      <SEOHelper
        title="Wedding Photography Cost & Packages Bangalore | AV Dream Creations"
        description="Explore our transparent pricing collections. Premium wedding packages start at ₹25,000 for Silver, Gold at ₹45,000, and Platinum full cinema coverage at ₹75,000. Custom plans tailored across Karnataka."
        keywords="wedding photography packages Bangalore, wedding videography pricing Karnataka, candid photography cost Bangalore, wedding video teaser price, pre-wedding shoot cost, low cost wedding photographer Bangalore, luxury wedding shooting price"
      />

      {/* Subpage Header Banner */}
      <div className="relative py-20 bg-neutral-950 text-white overflow-hidden text-center">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
          alt="Pricing investment background"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-neutral-950/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-widest text-amber-400">
            <ShieldCheck className="w-4.5 h-4.5 text-amber-400" /> Transparent Artistic Investments
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-tight">
            Investment & Packages
          </h1>
          <p className="font-sans text-neutral-300 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            Protecting your lifetime memories isn’t an expense; it is an heirloom investment. We offer simple, all-inclusive pricing tiers with zero hidden delivery gaps.
          </p>
        </div>
      </div>

      {/* Embedded Pricing Section */}
      <Pricing />

      {/* Custom Add-ons Section */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 mb-1 font-mono">
              Custom Tailored Details
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-medium text-neutral-900">
              Bespoke Add-ons & Extra Days
            </h2>
            <p className="font-sans text-neutral-500 text-xs md:text-sm mt-2">
              Every love story has distinct needs. Mix and match these special items to customize your perfect timeline package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customAddons.map((addon, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-neutral-200/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-base md:text-lg font-medium text-neutral-900">{addon.name}</h3>
                    <span className="font-mono text-xs font-bold text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {addon.price}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-neutral-500 mt-2 leading-relaxed">{addon.desc}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center gap-1 text-[10px] font-mono text-neutral-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Professional Grade Execution
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking terms callout */}
      <section className="py-16 bg-neutral-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-white flex items-center gap-2 justify-center">
            Ready to Secure Your Timelines?
          </h2>
          <p className="font-sans text-neutral-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Get your comprehensive customized PDF quote booklet sent directly to your WhatsApp in 30 minutes. Let’s start compiling your heirloom today.
          </p>
          <a
            id="pricing-page-cta-contact"
            href="#/contact"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-semibold font-mono text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg"
          >
            Submit Inquiry Now <Heart className="w-4 h-4 text-neutral-950 fill-neutral-950" />
          </a>
        </div>
      </section>
    </div>
  );
}
