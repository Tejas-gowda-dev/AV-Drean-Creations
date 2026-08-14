import { useState, useEffect } from 'react';
import { PORTFOLIO } from '../data';
import { Photo } from '../types';
import Lightbox from '../components/Lightbox';
import SEOHelper from '../components/SEOHelper';
import { Sparkles, LayoutGrid, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  const categories = [
    { label: 'All Work', id: 'all' },
    { label: 'Weddings', id: 'wedding' },
    { label: 'Pre-Weddings', id: 'pre-wedding' },
    { label: 'Bride Photography', id: 'bride' },
    { label: 'House Warming', id: 'house-warming' },
    { label: 'Baby Shower', id: 'baby-shower' },
    { label: 'Candid Videography', id: 'candid-videography' },
    { label: 'Birthday Events', id: 'birthday' },
    { label: 'Album Designing', id: 'album-designing' },
  ];

  // Sync category state with URL hash query params (e.g., /gallery?category=wedding)
  useEffect(() => {
    const syncCategoryFromHash = () => {
      const hash = window.location.hash;
      if (hash.includes('?')) {
        const queryStr = hash.split('?')[1];
        const params = new URLSearchParams(queryStr);
        const cat = params.get('category');
        if (cat) {
          setSelectedCategory(cat);
        } else {
          setSelectedCategory('all');
        }
      } else {
        setSelectedCategory('all');
      }
    };

    syncCategoryFromHash();
    window.addEventListener('hashchange', syncCategoryFromHash);
    return () => window.removeEventListener('hashchange', syncCategoryFromHash);
  }, []);

  const handleCategoryChange = (id: string) => {
    setSelectedCategory(id);
    if (id === 'all') {
      window.location.hash = '/gallery';
    } else {
      window.location.hash = `/gallery?category=${id}`;
    }
  };

  const filteredPhotos = selectedCategory === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter(p => p.category === selectedCategory);

  const handleNext = () => {
    if (!lightboxPhoto) return;
    const idx = filteredPhotos.findIndex(p => p.id === lightboxPhoto.id);
    const nextIdx = (idx + 1) % filteredPhotos.length;
    setLightboxPhoto(filteredPhotos[nextIdx]);
  };

  const handlePrev = () => {
    if (!lightboxPhoto) return;
    const idx = filteredPhotos.findIndex(p => p.id === lightboxPhoto.id);
    const prevIdx = (idx - 1 + filteredPhotos.length) % filteredPhotos.length;
    setLightboxPhoto(filteredPhotos[prevIdx]);
  };

  return (
    <div id="gallery-page-container" className="bg-white text-neutral-900">
      <SEOHelper
        title="Fine-Art Wedding Photography Gallery | AV Dream Creations"
        description="Browse our masterfully compiled, high-resolution photography collections. Discover beautiful candid portraits, pre-wedding couple shoots, traditional bridal albums, and festive event photos."
        keywords="wedding photography gallery, candid portraits Bangalore, pre-wedding shoot pictures, bridal portrait photography, South Indian wedding photos, professional album design samples, family event photography Karnataka"
      />

      {/* Hero Banner */}
      <div className="relative py-28 bg-neutral-950 text-white overflow-hidden text-center">
        <img
          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1920&auto=format&fit=crop"
          alt="Full photo portfolio catalog"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 transition-transform duration-700 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          
          <h1 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            The Complete Story <span className="italic text-brand-gradient">Portfolio</span>
          </h1>
          <p className="font-sans text-neutral-300 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            Delve into every single captured family vow, celebration, and intimate dynamic. Every photograph here is color graded, retouched, and processed under our elite signature guidelines.
          </p>
        </div>
      </div>

      {/* Main Grid & Filters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Filters List */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4.5 py-2.5 rounded-sm text-[10px] uppercase tracking-widest font-sans font-bold transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-brand-gradient text-white border-transparent shadow-md font-bold'
                      : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Album Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo) => (
                <motion.button
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={photo.id}
                  onClick={() => setLightboxPhoto(photo)}
                  className="group relative h-96 w-full rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-neutral-100 text-left"
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] uppercase tracking-widest font-sans text-gold font-bold block mb-1">{photo.category.replace('-', ' ')}</span>
                    <h3 className="font-serif text-lg font-medium">{photo.title}</h3>
                    <p className="text-xs text-neutral-300 font-mono mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{photo.location}</p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state handles */}
          {filteredPhotos.length === 0 && (
            <div className="text-center py-20 bg-neutral-50 rounded-sm border border-dashed border-neutral-200 max-w-xl mx-auto">
              <LayoutGrid className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
              <p className="font-serif text-lg text-neutral-600">No photos available in this filter.</p>
              <p className="font-sans text-xs text-neutral-400 mt-1">Please custom brief our designers to create one!</p>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        photo={lightboxPhoto}
        onClose={() => setLightboxPhoto(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
