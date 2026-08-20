import { SERVICES } from '../data';
import { CalendarCheck, Heart } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
// Use require for image to avoid missing .webp type declaration errors in TS
// @ts-ignore
import NewONe from "../assets/8775889-uhd_3840_2160_25fps.mp4";

// Custom high-quality line-art SVG icons matching the reference image exactly, adapted for light/white theme
function getServiceCustomIcon(id: string) {
  switch (id) {
    case 'wedding-shoot':
      return (
        <svg viewBox="0 0 64 64" className="w-14 h-14 md:w-16 md:h-16 text-neutral-800 group-hover:text-brand-purple transition-colors duration-500 stroke-current fill-none stroke-[1.25]">
          {/* Groom suit outline */}
          <path d="M24 36 L24 60 M32 36 L32 60 M20 28 Q24 24 28 28 L32 20 Q34 18 36 22 L38 28" />
          {/* Bride dress outline */}
          <path d="M38 32 L46 60 L34 60 Z M40 22 C44 20 46 25 40 32" />
          {/* Groom head */}
          <circle cx="28" cy="14" r="4" />
          {/* Bride head */}
          <circle cx="39" cy="16" r="3.5" />
          {/* Veils & dress details */}
          <path d="M39 19.5 C43 22 45 28 45 36 M41 38 L43 60 M37 38 L35 60" />
          {/* Groom tie */}
          <path d="M28 18 L28 22" />
        </svg>
      );
    case 'pre-wedding-shoot':
      return (
        <svg viewBox="0 0 64 64" className="w-14 h-14 md:w-16 md:h-16 text-neutral-800 group-hover:text-brand-purple transition-colors duration-500 stroke-current fill-none stroke-[1.25]">
          {/* Head for groom & bride */}
          <circle cx="27" cy="15" r="4.5" />
          <circle cx="37" cy="15" r="4" />
          {/* Embracing body outline */}
          <path d="M22 30 C22 22, 32 22, 32 30 L32 60 M42 30 C42 22, 32 22, 32 30 L32 60" />
          {/* Dress flare */}
          <path d="M32 30 C36 34, 45 42, 45 60 L19 60 C19 42, 28 34, 32 30" />
          {/* Floating heart above */}
          <path d="M32 6 C32 6, 30 4, 30 2 C30 0, 32 0, 32 2 C32 0, 34 0, 34 2 C34 4, 32 6, 32 6 Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'bride-photography':
      return (
        <svg viewBox="0 0 64 64" className="w-14 h-14 md:w-16 md:h-16 text-neutral-800 group-hover:text-brand-purple transition-colors duration-500 stroke-current fill-none stroke-[1.25]">
          {/* Single bride silhouette with beautiful gown */}
          <circle cx="32" cy="12" r="4" />
          {/* Veil */}
          <path d="M32 15 C26 20, 24 35, 24 55 M32 15 C38 20, 40 35, 40 55" strokeDasharray="2,2" />
          {/* Shoulders and waist */}
          <path d="M27 22 Q32 20 37 22 L35 32 Q32 34 29 32 Z" />
          {/* Big ballgown bottom */}
          <path d="M29 32 Q14 42, 14 60 L50 60 Q50 42, 35 32 Z" />
          {/* Flowers/Bouquet */}
          <path d="M32 28 Q34 26 32 24 Q30 26 32 24" fill="currentColor" />
        </svg>
      );
    case 'house-warming':
      return (
        <svg viewBox="0 0 64 64" className="w-14 h-14 md:w-16 md:h-16 text-neutral-800 group-hover:text-brand-purple transition-colors duration-500 stroke-current fill-none stroke-[1.25]">
          {/* Main House structure */}
          <path d="M12 28 L32 10 L52 28 L52 54 L12 54 Z" />
          {/* Elegant Door */}
          <path d="M26 38 L38 38 L38 54 L26 54 Z" />
          {/* Traditional Kalasha or diya detail in door center */}
          <circle cx="32" cy="45" r="2.5" />
          <path d="M30 45 C30 41, 34 41, 34 45" />
          {/* Mango leaves / Torana garland above the door */}
          <path d="M24 34 Q32 30 40 34" />
          <path d="M28 33.5 L28 36 M32 32 L32 35.5 M36 33.5 L36 36" />
          {/* Cozy Window */}
          <circle cx="32" cy="22" r="4" />
          <path d="M32 18 L32 26 M28 22 L36 22" />
        </svg>
      );
    case 'baby-shower':
      return (
        <svg viewBox="0 0 64 64" className="w-14 h-14 md:w-16 md:h-16 text-neutral-800 group-hover:text-brand-purple transition-colors duration-500 stroke-current fill-none stroke-[1.5]">
          {/* Head */}
          <circle cx="44" cy="24" r="5" />
          {/* Crawling body */}
          <path d="M16 38 C16 34, 24 30, 34 30 C38 30, 42 34, 40 38" />
          {/* Arms / crawling hands */}
          <path d="M35 34 L38 46" />
          <path d="M38 34 L41 46" />
          {/* Legs / knees */}
          <path d="M22 36 L18 46" />
          <path d="M18 38 L14 46" />
        </svg>
      );
    case 'candid-videography':
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-14 md:h-14 text-neutral-800 group-hover:text-brand-purple transition-colors duration-500 fill-current stroke-none">
          <circle cx="12" cy="12" r="3.2" className="fill-white" />
          <path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
        </svg>
      );
    case 'birthday-events':
      return (
        <svg viewBox="0 0 64 64" className="w-14 h-14 md:w-16 md:h-16 text-neutral-800 group-hover:text-brand-purple transition-colors duration-500 stroke-current fill-none stroke-[1.25]">
          {/* Three balloons on strings */}
          <ellipse cx="24" cy="22" rx="6" ry="8" />
          <path d="M24 30 L26 32 L22 48" />
          <ellipse cx="32" cy="18" rx="7" ry="9" />
          <path d="M32 27 L32 29 L32 48" />
          <ellipse cx="40" cy="24" rx="6" ry="8" />
          <path d="M40 32 L38 34 L42 48" />
          <path d="M23 30 L25 30 L24 31 Z" fill="currentColor" />
          <path d="M31 27 L33 27 L32 28 Z" fill="currentColor" />
          <path d="M39 32 L41 32 L40 33 Z" fill="currentColor" />
        </svg>
      );
    case 'album-designing':
      return (
        <svg viewBox="0 0 64 64" className="w-14 h-14 md:w-16 md:h-16 text-neutral-800 group-hover:text-brand-purple transition-colors duration-500 stroke-current fill-none stroke-[1.5]">
          {/* Notebook binder cover */}
          <rect x="22" y="12" width="28" height="40" rx="2" />
          {/* Spiral loops on the left */}
          <path d="M18 16 L22 16 M18 24 L22 24 M18 32 L22 32 M18 40 L22 40 M18 48 L22 48" />
          <path d="M18 14 C18 12, 22 12, 22 14 M18 22 C18 20, 22 20, 22 22 M18 30 C18 28, 22 28, 22 30 M18 38 C18 36, 22 36, 22 38 M18 46 C18 44, 22 44, 22 46" />
          {/* Heart on cover */}
          <path d="M36 28 C36 28, 34 26, 34 24 C34 22, 36 22, 36 24 C36 22, 38 22, 38 24 C38 26, 36 28, 36 28 Z" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14 text-neutral-800 fill-none stroke-current stroke-1">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export default function Services() {
  // Container motion variants for stagger-animating from right-to-left
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // Card motion variants - sliding in beautifully from right to left
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 60, // shifted to the right initially
    },
    visible: {
      opacity: 1,
      x: 0, // snaps beautifully into place (sliding to the left)
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section 
      id="services-section" 
      className="relative py-14 text-neutral-900 overflow-hidden bg-neutral-50/40"
    >
      {/* Background Video with subtle overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[500] scale-100"
        >
          <source src={NewONe} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/90 via-neutral-50/50 to-neutral-50/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-[15px] font-bold uppercase tracking-[0.3em] text-brand-gradient mb-3 font-mono">
            OUR SERVICES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-neutral-900 mb-5 tracking-tight leading-tight">
            Crafting Art Across Your <span className="italic text-brand-gradient">Milestones</span>
          </h2>
          {/* <div className="w-12 h-[1px] bg-brand-purple/30 mx-auto mb-5"></div> */}
          <p className="font-sans text-neutral-500 text-xs md:text-sm tracking-wide leading-relaxed">
            From the emotional vows of your Wedding Shoot to storytelling Pre-Weddings, Griha Pravesha, and festive baby showers. Click any service to book or inquire.
          </p>
        </div>

        {/* Services Glassmorphic Grid with right-to-left entrance on scroll */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl"
        >
          {SERVICES.map((srv) => (
            <motion.div 
              key={srv.id} 
              variants={cardVariants}
              className="w-full"
            >
              <a
                id={`service-card-${srv.id}`}
                href={srv.link}
                className="group relative flex flex-col items-center justify-center p-8 bg-neutral-50/50 border border-neutral-200/60 hover:border-brand-purple/40 rounded-sm text-center h-[280px] overflow-hidden transition-all duration-500 cursor-pointer  shadow-sm hover:shadow-md"
              >
                {/* Micro-reflective corner glow */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-neutral-200 rounded-tl-sm transition-all duration-500 group-hover:border-brand-purple/30"></div>

                {/* Animated Icon Container */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-5 flex items-center justify-center h-20">
                  {getServiceCustomIcon(srv.id)}
                </div>
                
                {/* Small horizontal divider line under icon matching image */}
                <div className="w-6 h-[1.5px] bg-neutral-300 my-4 transition-all duration-500 group-hover:scale-x-150 group-hover:bg-brand-purple"></div>
                
                {/* Title in Capital, italic, spacious font exactly like reference */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-3">
                  <h3 className="font-sans italic uppercase text-[11px] md:text-xs tracking-[0.25em] text-neutral-800 font-semibold group-hover:text-brand-purple transition-colors">
                    {srv.title}
                  </h3>
                </div>

                {/* Service description fading in gracefully on hover */}
                <p className="absolute bottom-6 left-6 right-6 font-sans text-[10px] md:text-[11px] text-neutral-600 leading-relaxed opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {srv.description}
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Lead Urgency Booking Banner at Bottom */}
        <div className="mt-20  border border-neutral-200/80 rounded-sm p-8 md:p-12 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3.5 max-w-2xl text-left">
              <span className="inline-flex items-center gap-1.5  border border-brand-purple/20 text-brand-gradient px-3 py-1 rounded-sm text-[10px] uppercase font-mono tracking-wider font-bold">
                <CalendarCheck className="w-3.5 h-3.5" /> Booking slots open
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-light tracking-tight text-neutral-900 leading-snug">
                Av Dream Creations specializs in creating beautiful and powerful images with an Artisic touch...!
              </h3>
            </div>
            <a
              id="services-cta-consult"
              href="contact"
              className="w-full md:w-auto text-center h-14 px-8 rounded-sm bg-brand-gradient hover:bg-brand-gradient-hover text-white font-bold font-mono text-xs uppercase tracking-widest flex items-center justify-center whitespace-nowrap transition-all duration-300 shadow-xl cursor-pointer"
            >
              Get Free Consultation
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
