import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

export default function ConnectPortfolio() {
  const handleNavClick = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="connect-portfolio-section" className="py-24 bg-white text-neutral-900 overflow-hidden border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Dynamic Layout: Grid with Left Image & Right Connect block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT COLUMN: Video Portfolio + Experience Overlapping Card */}
          <div className="lg:col-span-7 relative flex flex-col justify-between min-h-[580px] sm:min-h-[650px] lg:min-h-[720px] rounded-sm overflow-visible">
            
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-sm shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1200&auto=format&fit=crop"
                alt="Bespoke Cinematic Wedding Archway Portfolio"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              {/* Dark Linear Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/50 to-transparent"></div>
            </div>

            {/* Overlaid Video Portfolio Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-8 sm:p-12 text-white">
              {/* Text content & CTA positioned at bottom left of the image */}
              <div className="max-w-md space-y-6 text-left mt-auto lg:pr-8">
                <h3 className="font-sans text-4xl md:text-5xl font-black uppercase tracking-wide leading-none text-white">
                  VIDEO PORTFOLIO
                </h3>
                <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
                  We are blessed to travel across Karnataka documenting beautiful weddings, but we also love to shoot weddings in Bangalore, Mysore, Mandya, and beyond. Have a look at our videography and photography portfolio pages where you will be able to see more of our work. Enjoy!
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => handleNavClick('films')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gradient hover:text-white transition-colors duration-300 group cursor-pointer"
                  >
                    <span>VIDEO GALLERY</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* OVERLAPPING "EXPERIENCE" CARD */}
            {/* Positioned absolute at bottom-right corner of the left section on desktop */}
            <div 
              style={{ backgroundColor: '#8c8a87' }} 
              className="relative lg:absolute lg:bottom-0 lg:right-0 lg:translate-y-8 lg:translate-x-10 z-20 mt-8 lg:mt-0 max-w-full lg:max-w-[340px] p-8 sm:p-10 text-white shadow-2xl rounded-sm text-left flex flex-col justify-between space-y-6 border border-white/10"
            >
              <div className="space-y-4">
                <h4 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-wide leading-none text-white">
                  EXPERIENCE
                </h4>
                <div className="space-y-3 font-sans">
                  <p className="text-xs sm:text-sm italic font-light leading-relaxed text-neutral-100">
                    "At the end of the day, people won't remember what you said or did, they will remember how you made them feel"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="font-sans text-xs font-medium tracking-wide text-neutral-100">
                  We strive for unforgettable experiences!
                </p>
                <button
                  onClick={() => handleNavClick('/about')}
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-gradient hover:text-white transition-colors cursor-pointer"
                >
                  <span>FIND OUT MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Let's Connect + Send Us A Message */}
          <div className="lg:col-span-5 flex flex-col justify-center py-8 lg:pl-8 text-left space-y-16">
            
            {/* LET'S CONNECT block */}
            <div className="space-y-4 max-w-md">
              <h4 className="font-sans text-2xl font-black uppercase tracking-widest text-brand-gradient">
                LET'S CONNECT
              </h4>
              <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed">
                Connection fosters experiences. We care about what we do and about our clients. That is why we put so much emphasis on building a connection with our couples. This is what makes our films so unique.
              </p>
            </div>

            {/* SEND US A MESSAGE block */}
            <div className="space-y-6 max-w-md">
              <div className="space-y-3">
                <h4 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-widest text-brand-gradient">
                  SEND US A MESSAGE
                </h4>
                <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed">
                  We would love to hear from you and join you on your wedding journey!
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('/contact')}
                  className="w-full sm:w-auto h-14 px-10 rounded-sm bg-brand-gradient hover:bg-brand-gradient-hover text-white font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>CONTACT NOW</span>
                  <Heart className="w-4 h-4 fill-white text-white" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
