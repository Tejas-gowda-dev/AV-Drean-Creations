import { useState } from 'react';
import { Play, X, Film, Heart, MapPin, Clock, Sparkles } from 'lucide-react';
import SEOHelper from '../components/SEOHelper';

interface WeddingFilm {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  thumbnailUrl: string;
  youtubeId: string;
  tags: string[];
}

export default function FilmsPage() {
  const [activeFilm, setActiveFilm] = useState<WeddingFilm | null>(null);

  const weddingFilms: WeddingFilm[] = [
    {
      id: 'kanak-vidhi',
      title: 'KANAK & VIDHI',
      subtitle: 'The Royal Heritage Sangeet & Wedding Trailer',
      location: 'Udaipur Palace, Rajasthan',
      duration: '4:15 Mins',
      thumbnailUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
      youtubeId: 'W3M3fF67bW4', // Royal Indian Wedding Film
      tags: ['Sangeet', 'Royal Wedding', 'Palace Shoot']
    },
    {
      id: 'kriti-aditya',
      title: 'KRITI & ADITYA',
      subtitle: 'Modern Minimalist South-Indian Traditional Saga',
      location: 'Bangalore Palace, Karnataka',
      duration: '3:50 Mins',
      thumbnailUrl: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1000&auto=format&fit=crop',
      youtubeId: 'qN_7m-O8gB4', // Traditional wedding cinematic
      tags: ['Tradition', 'Silk & Flowers', 'Palace Muhurtham']
    },
    {
      id: 'tejas-divya',
      title: 'TEJAS & DIVYA',
      subtitle: 'A Royal Mysore Raj Mahal Celebration',
      location: 'Mysore Heritage Lawn, Karnataka',
      duration: '5:20 Mins',
      thumbnailUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
      youtubeId: 'yOorH5l6n-M', // Cinematic wedding
      tags: ['Royal Wedding', 'Teaser', 'Tradition']
    },
    {
      id: 'shreya-rohan',
      title: 'SHREYA & ROHAN',
      subtitle: 'Traditional Coconut Grove Muhurtham & Reception',
      location: 'Mandya Heritage Estate, Karnataka',
      duration: '4:45 Mins',
      thumbnailUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop',
      youtubeId: '8pIuYqDfe2w', // Beautiful Indian wedding film
      tags: ['Coconut Grove', 'Traditional', 'Grand Entrance']
    },
    {
      id: 'ananya-vikram',
      title: 'ANANYA & VIKRAM',
      subtitle: 'Sunset Hilltop Pre-Wedding & Sangeet Symphony',
      location: 'Tumkur Hilltop & Resort, Karnataka',
      duration: '3:10 Mins',
      thumbnailUrl: 'https://images.unsplash.com/photo-1507504038482-7621abf8c310?q=80&w=1000&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ', // Placeholder / standard
      tags: ['Pre-Wedding', 'Sunset', 'Cinematic Drone']
    },
    {
      id: 'meera-siddharth',
      title: 'MEERA & SIDDHARTH',
      subtitle: 'Misty Coorg Valley Reception & Marriage Highlights',
      location: 'Coorg Valley Orchards, Karnataka',
      duration: '4:30 Mins',
      thumbnailUrl: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=1000&auto=format&fit=crop',
      youtubeId: 'W3M3fF67bW4',
      tags: ['Coorg Hills', 'Reception', 'Western Look']
    }
  ];

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Cinematic Wedding Films - AV Dream Creations',
    'description': 'Watch our high-end, premium cinematic wedding films and teasers. Capturing beautiful, real-life love stories in motion across Bangalore, Mysore, Mandya, and Tumkur.',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'AV Dream Creations',
      'telephone': '+91-9743644065'
    }
  };

  return (
    <div id="films-page-container" className="pt-24 min-h-screen bg-white text-neutral-900 pb-20">
      <SEOHelper
        title="Cinematic Wedding Films & Video Portfolio | AV Dream Creations"
        description="Experience luxury in motion. Watch real wedding highlights, high-resolution teaser clips, and epic candid love stories filmed by AV Dream Creations across Karnataka."
        keywords="wedding films Bangalore, cinematic wedding videography Karnataka, professional wedding teasers, high-end wedding videos, drone wedding filming Bangalore, marriage video editing, AV Dream Creations portfolio"
        schema={pageSchema}
      />

      {/* Hero Banner Section */}
      <section className="relative h-[45vh] min-h-[320px] bg-neutral-950 flex items-center justify-center overflow-hidden">
        {/* Ambient Blurred Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
            alt="Cinematic Wedding Films Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30 brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-neutral-950/40 to-neutral-950"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3 font-sans justify-center">
            <Film className="w-4 h-4 text-gold" /> Love in Motion
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-white mb-4 tracking-tight leading-none">
            Love in <span className="italic text-gold">Motion</span>
          </h1>
          <p className="font-sans text-neutral-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            We don’t just record events — we craft beautiful, cinematic films that make your heart race exactly the way it did on your wedding morning.
          </p>
        </div>
      </section>

      {/* Main Films Grid Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-2 font-sans">
            OUR PORTFOLIO
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 mb-4 tracking-tight">
            Cinematic Highlights & Wedding Films
          </h2>
          <div className="w-12 h-0.5 bg-gold/50 mx-auto mt-4"></div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {weddingFilms.map((film) => (
            <div
              key={film.id}
              id={`film-card-${film.id}`}
              className="group bg-neutral-50 rounded-sm overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Thumbnail Area */}
              <div className="relative aspect-video overflow-hidden bg-neutral-900 cursor-pointer" onClick={() => setActiveFilm(film)}>
                <img
                  src={film.thumbnailUrl}
                  alt={film.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.8] group-hover:brightness-[0.7]"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 bg-white/95 text-neutral-950 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 active:scale-95 transition-all duration-300">
                    <Play className="w-6 h-6 fill-neutral-950 ml-0.5 text-neutral-950" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono text-white rounded-sm tracking-wider">
                  <Clock className="w-3 h-3 inline-block mr-1 -mt-0.5" />
                  {film.duration}
                </div>

                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                  {film.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="bg-neutral-950/65 backdrop-blur-md px-2 py-0.5 text-[9px] font-sans font-bold text-white uppercase tracking-widest rounded-sm border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text Meta Area */}
              <div className="p-6 md:p-8 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl md:text-2xl font-light text-neutral-900 tracking-tight group-hover:text-gold transition-colors duration-300">
                    {film.title}
                  </h3>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-neutral-400 tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> {film.location.split(',')[0]}
                  </span>
                </div>
                
                <p className="font-sans text-neutral-600 text-sm italic">
                  "{film.subtitle}"
                </p>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-gold fill-gold" /> Authentic Emotions
                  </span>
                  <button
                    onClick={() => setActiveFilm(film)}
                    className="text-gold font-bold uppercase tracking-wider text-[10px] hover:underline"
                  >
                    Watch Film Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Play Modal / Overlay */}
      {activeFilm && (
        <div className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          {/* Close Area */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveFilm(null)}></div>
          
          <div className="relative w-full max-w-5xl bg-neutral-950 rounded-sm border border-neutral-800 shadow-2xl z-10 overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold">
                  Now Playing • {activeFilm.location}
                </span>
                <h3 className="font-serif text-xl text-white font-medium tracking-tight mt-0.5">
                  {activeFilm.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveFilm(null)}
                className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 transition-colors cursor-pointer"
                aria-label="Close Film Player"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Aspect Ratio Box */}
            <div className="relative aspect-video bg-black">
              <iframe
                id="modal-youtube-iframe"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeFilm.youtubeId}?autoplay=1&rel=0`}
                title={`${activeFilm.title} - Cinematic Wedding Film`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

            {/* Modal Info Footbar */}
            <div className="p-6 bg-neutral-900/60 text-neutral-300 text-sm leading-relaxed border-t border-neutral-900">
              <p className="font-sans text-neutral-400 flex items-center gap-2 mb-2 font-semibold">
                <Sparkles className="w-4 h-4 text-gold" />
                {activeFilm.subtitle}
              </p>
              <p className="text-xs text-neutral-500 font-sans">
                Filmed entirely in premium 4K resolution using full-frame cinema bodies. Color graded beautifully to render skin-tones authentically with emotional sound design incorporating the couple's true speeches, vows, and ritual mantras.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
