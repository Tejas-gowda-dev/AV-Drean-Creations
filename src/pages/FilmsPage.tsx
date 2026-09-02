import { useState } from 'react';
import { Play, X,  Clock,  } from 'lucide-react';
import SEOHelper from '../components/SEOHelper';
import { WeddingFilm } from '../types';
// @ts-ignore
import Main from "../assets/main-image.webp";


export default function FilmsPage() {
  const [activeFilm, setActiveFilm] = useState<WeddingFilm | null>(null);

  const weddingFilms: WeddingFilm[] = [
    {
      id: 'kanak-vidhi',
   
      duration: '4:15 Mins',
      thumbnailUrl:Main , // image ursl
      youtubeId: 'JUKwwI0mPYQ', // Royal Indian Wedding Film
     
    },
    {
      id: 'kriti-aditya',
   
      duration: '3:50 Mins',
      thumbnailUrl: 'https://image.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1000&auto=format&fit=crop',
      youtubeId: 'qN_7m-O8gB4', // Traditional wedding cinematic
     
    },
    {
      id: 'tejas-divya',
   
      duration: '5:20 Mins',
      thumbnailUrl: 'https://images.unsplash.com/photo-15191497674-611481863552?q=80&w=1000&auto=format&fit=crop',
      youtubeId: 'yOorH5l6n-M', // Cinematic wedding
    
    },
    {
      id: 'shreya-rohan',
     
      duration: '4:45 Mins',
      thumbnailUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop',
      youtubeId: '8pIuYqDfe2w', // Beautiful Indian wedding film
    },
    {
      id: 'ananya-vikram',
     
      duration: '3:10 Mins',
      thumbnailUrl: 'https://images.unsplash.com/photo-1507504038482-7621abf8c310?q=80&w=1000&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ', // Placeholder / standard
    },
    {
      id: 'meera-siddharth',
     
      duration: '4:30 Mins',
      thumbnailUrl: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=1000&auto=format&fit=crop',
      youtubeId: 'W3M3fF67bW4',
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
    <div id="films-page-container" className="min-h-screen bg-white text-neutral-900 ">
      <SEOHelper
        title="Cinematic Wedding Films & Video Portfolio | AV Dream Creations"
        description="Experience luxury in motion. Watch real wedding highlights, high-resolution teaser clips, and epic candid love stories filmed by AV Dream Creations across Karnataka."
        keywords="wedding films Bangalore, cinematic wedding videography Karnataka, professional wedding teasers, high-end wedding videos, drone wedding filming Bangalore, marriage video editing, AV Dream Creations portfolio"
        schema={pageSchema}
      />

      {/* Hero Banner Section */}
      <section className="relative h-[45vh] min-h-[500px] bg-neutral-950 flex items-center justify-center overflow-hidden">
        {/* Ambient Blurred Background Image */}
        <div className="absolute inset-0">
          <img
            src={Main}
            alt="Cinematic Wedding Films Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30 brightness-[0.9]"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
         
          <h1 className="font-serif text-4xl md:text-6xl font-light text-white mb-4 tracking-tight leading-none">
            Love in <span className="italic text-brand-gradient">Motion</span>
          </h1>
        
        </div>
      </section>

      {/* Main Films Grid Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-gradient mb-2 font-sans">
            OUR PORTFOLIO
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light  mb-4 tracking-tight">
            Cinematic Highlights & Wedding Films
          </h2>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-4 rounded-xl">
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
                  // alt={film.title}
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
                width="0%"
                height="0%"
                src={`https://www.youtube.com/embed/${activeFilm.youtubeId}?autoplay=1&rel=0`}
                // title={`${activeFilm.title} - Cinematic Wedding Film`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

            {/* Modal Info Footbar */}
      
          </div>
        </div>
      )}
    </div>
  );
}
