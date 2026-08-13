import { motion } from 'motion/react';
import { PORTFOLIO } from '../data';
import { Sparkles } from 'lucide-react';

export default function PortfolioPreview() {
  const handlePhotoClick = (category: string) => {
    window.location.hash = `#/gallery?category=${category}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="portfolio-preview-section" className="py-14 bg-white text-neutral-900 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-gradient mb-2 font-sans">
            Captured True Love Stories
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-neutral-900 mb-4 tracking-tight leading-tight">
            Our Fine-Art Masterpiece <span className="italic text-brand-gradient">Gallery</span>
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Every single image represents a genuine family, a real traditional ritual, and a customized color-graded masterpiece. Click any story to explore our complete gallery.
          </p>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 "
        >
          {PORTFOLIO.map((photo) => (
            <motion.button
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              key={photo.id}
              id={`photo-thumb-${photo.id}`}
              onClick={() => handlePhotoClick(photo.category)}
              className="group relative h-96 w-full rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-neutral-100 text-left block"
            >
              {/* Image */}
              <img
                src={photo.url}
                alt={photo.alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Vignette Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Info Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] uppercase tracking-widest font-sans text-gold font-bold mb-1 block">
                  {photo.category.replace('-', ' ')}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-medium tracking-tight mb-2 group-hover:text-gold transition-colors">
                  {photo.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-neutral-300 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  <span>{photo.location}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Explore More Button for SPA navigation */}
        <div className="text-center mt-12">
          <a
            id="portfolio-cta-viewall"
            href="/gallery"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-sm bg-brand-gradient hover:bg-brand-gradient-hover text-white font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-lg cursor-pointer"
          >
            Explore Complete Gallery <Sparkles className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
