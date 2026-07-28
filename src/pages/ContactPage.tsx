import ContactSection from '../components/ContactSection';
import SEOHelper from '../components/SEOHelper';
import { Mail, Calendar, Phone, Sparkles } from 'lucide-react';

export default function ContactPage() {
  return (
    <div id="contact-page-container" className="pt-24 bg-white text-neutral-900">
      <SEOHelper
        title="Contact Us & Book | AV Dream Creations Bangalore"
        description="Connect with AV Dream Creations to book your wedding photography and cinematic shoot. Get high-end customizable digital quotes and session dates in Bangalore & Karnataka."
        keywords="contact wedding photographer Bangalore, book wedding videographer Karnataka, hire candid photographer, AV Dream Creations contact, wedding shoot reservation Bangalore"
      />

      {/* Subpage Header Banner */}
      <div className="relative py-28 bg-neutral-950 text-white overflow-hidden text-center">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop"
          alt="Contact us booking wedding photographer bangalore"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 transition-transform duration-700 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-widest text-gold">
            <Mail className="w-4.5 h-4.5 text-gold" /> Let’s Lock Down Your Date
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-tight">
            Book Your Wedding Photographer
          </h1>
          <p className="font-sans text-neutral-300 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            Ready to secure your date? Fill out our 30-minute booking form below. Our experience director will call you back immediately to consult on your dream timeline.
          </p>
        </div>
      </div>

      {/* Embedded Working Contact Inquiry Section */}
      <ContactSection />
    </div>
  );
}
