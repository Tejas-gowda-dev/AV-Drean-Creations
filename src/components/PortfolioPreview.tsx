import { motion } from 'motion/react';
import { PORTFOLIO } from '../data';
import { Sparkles, Images } from 'lucide-react';

// @ts-ignore
import main1 from "../assets/main1-image.webp";

export default function PortfolioPreview() {

  /*
   * CATEGORY LIST
   *
   * Same category structure used in GalleryPage.
   */
  const categories = [
    {
      id: 'wedding',
      label: 'Weddings',
      description:
        'Sacred moments, timeless emotions and beautiful wedding stories.',
    },
    {
      id: 'pre-wedding',
      label: 'Pre-Weddings',
      description:
        'Romantic couple portraits captured before the big day.',
    },
    {
      id: 'bride',
      label: 'Bride Photography',
      description:
        'Elegant bridal portraits, details and traditional moments.',
    },
    {
      id: 'house-warming',
      label: 'House Warming',
      description:
        'Beautiful memories from Griha Pravesha and family celebrations.',
    },
    {
      id: 'baby-shower',
      label: 'Baby Shower',
      description:
        'Joyful Seemantha, Valaikappu and maternity celebrations.',
    },
    {
      id: 'candid-videography',
      label: 'Candid Videography',
      description:
        'Natural emotions transformed into cinematic memories.',
    },
    {
      id: 'birthday',
      label: 'Birthday Events',
      description:
        'Fun, candid and memorable birthday celebrations.',
    },
    {
      id: 'album-designing',
      label: 'Album Designing',
      description:
        'Premium albums designed to preserve your memories.',
    },
  ];

  /*
   * GET FIRST PHOTO OF CATEGORY
   *
   * This automatically becomes the category card cover.
   */
  const getCategoryCover = (categoryId: string) => {
    const photo = PORTFOLIO.find(
      (photo) => photo.category === categoryId
    );

    return photo?.url || main1;
  };

  /*
   * GET TOTAL PHOTOS IN CATEGORY
   */
  const getCategoryCount = (categoryId: string) => {
    return PORTFOLIO.filter(
      (photo) => photo.category === categoryId
    ).length;
  };

  /*
   * CATEGORY CLICK
   */
  const handleCategoryClick = (category: string) => {
    window.location.hash = `/gallery?category=${category}`;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="portfolio-preview-section"
      className="py-14 bg-white text-neutral-900 border-b border-neutral-100"
    >

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="text-center max-w-2xl mx-auto mb-16">

          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-gradient mb-2 font-sans">
            Captured True Love Stories
          </span>

          <h2 className="font-serif text-3xl md:text-5xl font-light text-neutral-900 mb-4 tracking-tight leading-tight">
            Our Fine-Art Masterpiece{' '}
            <span className="italic text-brand-gradient">
              Gallery
            </span>
          </h2>

          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Every single image represents a genuine family, a real traditional ritual, and a customized color-graded masterpiece. Click any story to explore our complete gallery.
          </p>

        </div>


        {/* =====================================================
            CATEGORY GRID
        ===================================================== */}

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
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
                  handleCategoryClick(category.id)
                }

                className="group relative h-[420px] w-full overflow-hidden rounded-sm bg-neutral-900 text-left cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
              >

                {/* =================================================
                    COVER IMAGE
                ================================================= */}

                <img
                  src={coverImage}
                  alt={category.label}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />


                {/* =================================================
                    OVERLAY
                ================================================= */}

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>


                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="absolute inset-x-0 bottom-0 p-7 text-white">

                  {/* PHOTO COUNT */}

                  <div className="flex items-center gap-2 mb-3">

                    <Images className="w-4 h-4 text-brand-gradient" />

                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gradient">

                      {photoCount}{' '}

                      {photoCount === 1
                        ? 'Photo'
                        : 'Photos'}

                    </span>

                  </div>


                  {/* CATEGORY NAME */}

                  <h3 className="font-serif text-xl font-medium">
                    {category.label}
                  </h3>


                  {/* DESCRIPTION */}

                  {/* <p className="text-xs text-neutral-300 mt-2 max-w-sm leading-relaxed">
                    {category.description}
                  </p> */}


                  {/* HOVER CTA */}

                  <div className="mt-5 text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    View Collection →
                  </div>

                </div>

              </motion.button>

            );
          })}

        </motion.div>


        {/* =====================================================
            EXPLORE MORE BUTTON
        ===================================================== */}

        <div className="text-center mt-12">

          <a
            id="portfolio-cta-viewall"
            href="/gallery"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-sm bg-brand-gradient hover:bg-brand-gradient-hover text-white font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-lg cursor-pointer"
          >
            Explore Complete Gallery

            <Sparkles className="w-4 h-4" />

          </a>

        </div>

      </div>

    </section>
  );
}