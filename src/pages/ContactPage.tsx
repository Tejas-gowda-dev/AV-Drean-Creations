import ContactSection from '../components/ContactSection';
import SEOHelper from '../components/SEOHelper';
// @ts-ignore
import Main from "../assets/main-image.webp";

export default function ContactPage() {
  return (
    <div id="contact-page-container">
      <SEOHelper
        title="Contact Us & Book | AV Dream Creations Bangalore"
        description="Connect with AV Dream Creations to book your wedding photography and cinematic shoot. Get high-end customizable digital quotes and session dates in Bangalore & Karnataka."
        keywords="contact wedding photographer Bangalore, book wedding videographer Karnataka, hire candid photographer, AV Dream Creations contact, wedding shoot reservation Bangalore"
      />

      {/* Subpage Header Banner */}
      <div className="relative py-28 bg-neutral-50/50 text-white overflow-hidden text-center">
        <img
          src={Main}
          alt="Contact us booking wedding photographer bangalore"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-100 scale-105 transition-transform duration-100 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-brand-gradient">
            Book Your Wedding Photographer
          </h1>
          <p className="font-serif text-neutral-300 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            Ready to secure your date? Fill out our 30-minute booking form below. Our experience director will call you back immediately to consult on your dream timeline.
          </p>
        </div>
      </div>

      {/* Embedded Working Contact Inquiry Section */}
      <ContactSection />
    </div>
  );
}
