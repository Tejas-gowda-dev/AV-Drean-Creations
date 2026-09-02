import { Play, Heart, Film, Sparkles, Volume2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// @ts-ignore
import Main from "../assets/main-image.webp";

export default function FeaturedFilm() {
  const [isPlaying, setIsPlaying] = useState(false);

  // YouTube embed URL with autoplay enabled upon click
  const videoId = "JNKZN8uq1H8";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <section
      id="featured-film-section"
      className="relative py-6 lg:py-16"
    >
      {/* Ambient Luxury Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">


          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-2xl md:text-4xl font-light mb-2 leading-tight"
          >
            Watch Our Latest <span className="italic text-brand-gradient">Wedding Film</span>
          </motion.h2>
        </div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden aspect-video shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-neutral-800/80 bg-neutral-950 group"
        >
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div
                key="poster"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                {/* Poster Background */}
                <img
                  src={Main}
                  alt="Wedding Film - New and Divya"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.45] group-hover:scale-105 group-hover:brightness-[0.35] transition-all duration-700 ease-out"
                />

                {/* Film Meta Badges */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center gap-2.5">
                  <span className="px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase bg-black/60 backdrop-blur-md border border-white/10 rounded-md text-neutral-300">
                    4K Ultra HD
                  </span>
                </div>

                {/* Pulsing Luxury Play Button */}
                <div className="relative z-20 flex items-center justify-center">
                  <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/20 animate-ping pointer-events-none" />

                  <button
                    id="play-film-btn"
                    aria-label="Play Wedding Film"
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-white via-white to-white text-neutral-950 flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.4)] group-hover:scale-110 active:scale-95 transition-transform duration-300 ease-out"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                  </button>
                </div>

                {/* Couple Info & Subtitle */}
                <div className="relative z-20 mt-6 text-center space-y-1.5 px-4">
                  <p className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-white flex items-center justify-center gap-2.5 drop-shadow-md">
                    <Heart className="w-4 h-4 text-white fill-white" />
                    Mikasa & Maa
                    <Heart className="w-4 h-4 text-white fill-white" />
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light tracking-widest uppercase">
                    Palace Grounds · Bengaluru, India
                  </p>
                </div>

                {/* Bottom Sound Indication */}
                <div className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-2 text-xs text-neutral-400 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/5">
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Click to play with sound</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="player"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full"
              >
                <iframe
                  id="youtube-film-iframe"
                  width="100%"
                  height="100%"
                  src={embedUrl}
                  title="Latest Wedding Film By AV Dream Creations"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}