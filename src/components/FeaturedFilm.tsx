import { Play, Sparkles, Film, Heart } from 'lucide-react';
import { useState } from 'react';
// Use require for image to avoid missing .webp type declaration errors in TS
// @ts-ignore
import Main from "../assets/main-image.webp";


export default function FeaturedFilm() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="featured-film-section" className="py-8 bg-white text-neutral-900 relative overflow-hidden border-b border-neutral-100 pb-14">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-2xl md:text-5xl font-light mb-4 leading-tight">
            Watch Our Latest <span className="italic text-brand-gradient">Wedding Film</span>
          </h2>
          {/* <p className="font-sans text-italic text-sm md:text-base leading-relaxed ">
            We don’t just record footage; we compile premium cinematic symphonies. Press play and feel the raw, nervous heartbeat of an actual AV Dream Creations wedding.
          </p> */}
        </div>

        {/* Video Player Container */}
        <div id="video-player-container" className="max-w-5xl mx-auto relative rounded-sm overflow-hidden aspect-video shadow-2xl border border-neutral-200 bg-neutral-100">
          {!isPlaying ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
              {/* Poster Image */}
              <img
                src={Main}
                alt="Latest Wedding Film Poster"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
              />
              
              {/* Play Button Trigger */}
              <button
                id="play-film-btn"
                onClick={() => setIsPlaying(true)}
                className="relative z-20 h-20 w-20  text-white rounded-full flex items-center justify-center cursor-pointer shadow-2xl active:scale-95 hover:scale-105 transition-all duration-300"
                aria-label="Play Wedding Film"
              >
                <Play className="w-8 h-8 fill-white ml-1" />
              </button>

              <div className="relative z-20 mt-6 text-center">
                <p className="font-serif text-xl md:text-2xl font-medium text-white flex items-center gap-2 justify-center">
                  New & Divya <Heart className="w-4 h-4 text-white fill-white" />
                </p>
                {/* <p className="font-mono text-xs text-neutral-400 tracking-widest uppercase mt-2">
                  The Palace Grounds Cinema Show • 4K HDR Teaser
                </p> */}
              </div>

              {/* Quality Badges */}
              {/* <div className="absolute bottom-6 left-6 z-20 flex gap-2 font-mono text-[10px] tracking-widest text-white/50">
                <span className="border border-white/20 px-2 py-1 rounded-sm">ULTRA HD 4K</span>
                <span className="border border-white/20 px-2 py-1 rounded-sm">60 FPS</span>
                <span className="border border-white/20 px-2 py-1 rounded-sm">DOLBY AUDIO</span>
              </div> */}
            </div>
          ) : (
            <iframe
              id="youtube-film-iframe"
              width="100%"
              height="100%"
              src="https://youtu.be/JNKZN8uq1H8?si=q-LrJ5fYYsaiZeaO" // Standard fallback, can be easily replaced by user
              title="Latest Wedding Film By AV Dream Creations"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          )}
        </div>

        {/* Cinematic Stats/Features Callout */}
        {/* <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center border-t border-neutral-100 pt-10">
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gold font-sans">Premium Same-Day Edits</h4>
            <p className="text-xs text-neutral-600 leading-relaxed font-sans">We edit and showcase a 2-minute teaser of your morning rituals live during your evening reception.</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gold font-sans">True 4K Cinematic Grade</h4>
            <p className="text-xs text-neutral-600 leading-relaxed font-sans">Filmed on advanced Netflix-approved full-frame cinema cameras and masterfully color-graded by experts.</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gold font-sans">Custom Audio Symphonies</h4>
            <p className="text-xs text-neutral-600 leading-relaxed font-sans">Every film features custom licensed sound tracks paired with the genuine, touching family vows and speeches.</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
