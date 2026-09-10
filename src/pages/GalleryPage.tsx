import { useState, useEffect } from 'react';
import { PORTFOLIO } from '../data';
import { Photo } from '../types';
import Lightbox from '../components/Lightbox';
import SEOHelper from '../components/SEOHelper';
import { LayoutGrid, ArrowLeft, Images } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// @ts-ignore
import main1 from "../assets/Weddings1.webp";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  /*
   * CATEGORY LIST
   *
   * You can add/remove categories here.
   * The photos themselves are controlled by PORTFOLIO.category.
   */
  const categories = [
    {
      id: 'wedding',
      label: 'Weddings',
      description: 'Sacred moments, timeless emotions and beautiful wedding stories.',
    },
    {
      id: 'pre-wedding',
      label: 'Pre-Weddings',
      description: 'Romantic couple portraits captured before the big day.',
    },
    {
      id: 'bride',
      label: 'Bride Photography',
      description: 'Elegant bridal portraits, details and traditional moments.',
    },
    {
      id: 'house-warming',
      label: 'House Warming',
      description: 'Beautiful memories from Griha Pravesha and family celebrations.',
    },
    {
      id: 'baby-shower',
      label: 'Baby Shower',
      description: 'Joyful Seemantha, Valaikappu and maternity celebrations.',
    },
    {
      id: 'candid-videography',
      label: 'Candid Videography',
      description: 'Natural emotions transformed into cinematic memories.',
    },
    {
      id: 'birthday',
      label: 'Birthday Events',
      description: 'Fun, candid and memorable birthday celebrations.',
    },
    {
      id: 'album-designing',
      label: 'Album Designing',
      description: 'Premium albums designed to preserve your memories.',
    },
  ];

  /*
   * GET COVER IMAGE FOR EACH CATEGORY
   *
   * It automatically takes the first photo
   * belonging to that category.
   */
  const getCategoryCover = (categoryId: string) => {
    const photo = PORTFOLIO.find(
      (photo) => photo.category === categoryId
    );

    return photo?.url || main1;
  };

  /*
   * GET PHOTO COUNT FOR EACH CATEGORY
   */
  const getCategoryCount = (categoryId: string) => {
    return PORTFOLIO.filter(
      (photo) => photo.category === categoryId
    ).length;
  };

  /*
   * SYNC CATEGORY WITH URL HASH
   *
   * Example:
   * #/gallery
   * #/gallery?category=wedding
   */
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

    window.addEventListener(
      'hashchange',
      syncCategoryFromHash
    );

    return () => {
      window.removeEventListener(
        'hashchange',
        syncCategoryFromHash
      );
    };
  }, []);

  /*
   * OPEN CATEGORY
   */
  const handleCategoryChange = (id: string) => {
    setSelectedCategory(id);

    if (id === 'all') {
      window.location.hash = '/gallery';
    } else {
      window.location.hash = `/gallery?category=${id}`;
    }

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /*
   * GO BACK TO ALL CATEGORIES
   */
  const handleBackToCategories = () => {
    handleCategoryChange('all');
  };

  /*
   * FILTER PHOTOS
   *
   * Only photos belonging to selected category
   * will be displayed.
   */
  const filteredPhotos =
    selectedCategory === 'all'
      ? []
      : PORTFOLIO.filter(
        (photo) => photo.category === selectedCategory
      );

  /*
   * CURRENT CATEGORY INFORMATION
   */
  const currentCategory = categories.find(
    (category) => category.id === selectedCategory
  );

  /*
   * LIGHTBOX NEXT
   */
  const handleNext = () => {
    if (!lightboxPhoto || filteredPhotos.length === 0) return;

    const idx = filteredPhotos.findIndex(
      (p) => p.id === lightboxPhoto.id
    );

    const nextIdx =
      (idx + 1) % filteredPhotos.length;

    setLightboxPhoto(filteredPhotos[nextIdx]);
  };

  /*
   * LIGHTBOX PREVIOUS
   */
  const handlePrev = () => {
    if (!lightboxPhoto || filteredPhotos.length === 0) return;

    const idx = filteredPhotos.findIndex(
      (p) => p.id === lightboxPhoto.id
    );

    const prevIdx =
      (idx - 1 + filteredPhotos.length) %
      filteredPhotos.length;

    setLightboxPhoto(filteredPhotos[prevIdx]);
  };

  return (
    <div
      id="gallery-page-container"
      className="bg-white text-neutral-900"
    >
      <SEOHelper
        title="Fine-Art Wedding Photography Gallery | AV Dream Creations"
        description="Browse our masterfully compiled photography collections including weddings, pre-weddings, bridal portraits, baby showers, birthdays and special events."
        keywords="wedding photography gallery, candid portraits Bangalore, pre-wedding shoot pictures, bridal portrait photography, South Indian wedding photos, baby shower photography, birthday photography Bangalore"
      />

      {/* =====================================================
          HERO BANNER
      ===================================================== */}

      <div className="relative py-28 bg-neutral-950 text-white overflow-hidden text-center">

        <img
          src={main1}
          alt="Photography portfolio background"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-70  scale-105" // opacity-70 scale-105 is image colore make chage here 
        />

        {/* <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40"></div> */}

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">

          <h1 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            The Complete Story{' '}
            <span className="italic text-brand-gradient">
              Portfolio
            </span>
          </h1>

          <p className="font-serif italic text-neutral-300 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            Explore our photography collections and discover
            beautifully captured moments from weddings,
            celebrations and unforgettable occasions.
          </p>

        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="py-8">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* =================================================
              CATEGORY VIEW
          ================================================= */}

          {selectedCategory === 'all' && (
            <>
              <div className="text-center mb-14">

                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gradient font-bold">
                  Explore Our Work
                </span>

                <h2 className="font-serif text-3xl md:text-4xl mt-3">
                  Photography{' '}
                  <span className="italic text-brand-gradient">
                    Collections
                  </span>
                </h2>

                <p className="text-sm text-serif italic  max-w-xl mx-auto mt-4">
                  Choose a collection to explore the complete
                  gallery from that category.
                </p>

              </div>

              {/* CATEGORY CARDS */}

              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
              >

                {categories.map((category) => {

                  const coverImage =
                    getCategoryCover(category.id);

                  const photoCount =
                    getCategoryCount(category.id);

                  return (
                    <motion.button
                      key={category.id}
                      layout
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      onClick={() =>
                        handleCategoryChange(category.id)
                      }
                      className="group relative h-[420px] w-full overflow-hidden rounded-sm bg-neutral-900 text-left cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                    >

                      {/* COVER IMAGE */}

                      <img
                        src={coverImage}
                        alt={category.label}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      {/* OVERLAY */}

                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>

                      {/* CONTENT */}

                      <div className="absolute inset-x-0 bottom-0 p-7 text-white">

                        <div className="flex items-center gap-2 mb-3">

                          <Images className="w-4 h-4 text-white/70" />

                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">
                            {photoCount}{' '}
                            {photoCount === 1
                              ? 'Photo'
                              : 'Photos'}
                          </span>

                        </div>

                        <h3 className="font-serif text-2xl font-medium">
                          {category.label}
                        </h3>

                        <p className="text-xs text-neutral-300 mt-2 max-w-sm leading-relaxed">
                          {category.description}
                        </p>

                        <div className="mt-5 text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          View Collection →
                        </div>

                      </div>

                    </motion.button>
                  );
                })}

              </motion.div>
            </>
          )}

          {/* =================================================
              PHOTO COLLECTION VIEW
          ================================================= */}

          {selectedCategory !== 'all' && (
            <>

              {/* BACK BUTTON */}

              <div className="mb-8">

                <button
                  onClick={handleBackToCategories}
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-neutral-200 rounded-sm text-[10px] uppercase tracking-widest font-bold text-neutral-600 hover:bg-neutral-950 hover:text-white transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Collections
                </button>

              </div>

              {/* CATEGORY TITLE */}

              <div className="text-center mb-8">

                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gradient font-bold">
                  Photography Collection
                </span>

                <h2 className="font-serif italic text-3xl md:text-5xl mt-3">
                  {currentCategory?.label}
                </h2>

                <p className="text-sm text-serif italic max-w-xl mx-auto mt-4">
                  {currentCategory?.description}
                </p>

                <div className="mt-5 text-[10px] uppercase tracking-widest text-brand-gradient">
                  {filteredPhotos.length}{' '}
                  {filteredPhotos.length === 1
                    ? 'Photograph'
                    : 'Photographs'}
                </div>

              </div>

              {/* PHOTO GRID */}
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-3"
              >
                <AnimatePresence mode="popLayout">
                  {filteredPhotos.map((photo, index) => {
                    const layouts = [
                      "lg:col-span-2 lg:row-span-2", // Large left image
                      "lg:col-span-2 lg:row-span-1", // Top right
                      "lg:col-span-1 lg:row-span-1", // Small
                      "lg:col-span-1 lg:row-span-1", // Small
                      "lg:col-span-4 lg:row-span-2", // Bottom full-width
                    ];

                    return (
                      <motion.button
                        key={photo.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setLightboxPhoto(photo)}
                        className={`group relative overflow-hidden rounded-sm cursor-pointer border border-neutral-100 shadow-sm hover:shadow-xl transition-all ${layouts[index % layouts.length]
                          }`}
                      >
                        <img
                          src={photo.url}
                          alt={photo.alt}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </motion.div>



            </>
          )}

        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <Lightbox
        photo={lightboxPhoto}
        onClose={() => setLightboxPhoto(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />

    </div>
  );
}