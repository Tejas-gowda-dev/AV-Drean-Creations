import { useState, useEffect, useRef } from 'react';
import { Award, Camera, Heart, Star, Map, Trophy } from 'lucide-react';

export default function TrustBadges() {
  const [counts, setCounts] = useState({
    years: 0,
    weddings: 0,
    clients: 0,
    rating: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate counts
          const duration = 1500; // ms
          const start = performance.now();

          const animate = (timestamp: number) => {
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (easeOutQuad)
            const ease = progress * (2 - progress);

            setCounts({
              years: Math.floor(ease * 6),
              weddings: Math.floor(ease * 250),
              clients: Math.floor(ease * 1000),
              rating: parseFloat((ease * 4.9).toFixed(1)),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({
                years: 6,
                weddings: 250,
                clients: 1000,
                rating: 4.9,
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const badges = [
    {
      icon: Award,
      value: `${counts.years}+`,
      label: 'Years Experience',
      sub: 'Of fine-art storytelling'
    },
    {
      icon: Camera,
      value: `${counts.weddings}+`,
      label: 'Weddings Shot',
      sub: 'Across all communities'
    },
    {
      icon: Heart,
      value: `${counts.clients}+`,
      label: 'Happy Families',
      sub: 'Eternal emotional bonds'
    },
    {
      icon: Star,
      value: counts.rating === 0 ? '4.9' : counts.rating.toString(),
      label: 'Google Rating',
      sub: 'Based on 450+ detailed reviews'
    },
    {
      icon: Map,
      value: 'All',
      label: 'Karnataka Served',
      sub: 'Free travel within Bangalore'
    }
  ];

  return (
    <section
      id="trust-badges-bar"
      ref={sectionRef}
      className="relative py-20 sm:py-24 overflow-hidden border-y border-neutral-200/60"
      style={{ backgroundColor: 'rgba(251, 246, 239, 0.85)' }}
    >
      {/* Decorative absolute background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-brand-purple/10 via-brand-pink/5 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-brand-pink/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Editorial Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-purple font-sans">
            <Trophy className="w-3.5 h-3.5" /> Our Legacy & Calibre
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight">
            The Trust Behind Your <span className="italic font-light ">Timeless Stories</span>
          </h2>
          {/* <div className="h-[1px] w-16 bg-gradient-to-r from-brand-purple to-brand-pink mx-auto mt-2"></div> */}
        </div>

        {/* Dynamic, Elegant Badge Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {badges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={idx}
                id={`trust-badge-${idx}`}
                className="relative bg-white/75 backdrop-blur-md p-8 rounded-sm shadow-[0_4px_20px_-4px_rgba(130,101,175,0.06)] hover:shadow-[0_12px_30px_-10px_rgba(130,101,175,0.15)] transition-all duration-500 ease-out group border border-neutral-100 hover:border-brand-purple/25 flex flex-col items-center text-center space-y-4"
              >
                {/* Decorative gold-accent top line on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-gradient group-hover:w-full transition-all duration-500 ease-out rounded-t-sm"></div>

                {/* Exquisite circular icon badge */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-purple/5 text-brand-purple group-hover:bg-brand-gradient group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Animated value text */}
                <div className="space-y-1">
                  <div className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight">
                    {badge.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-black font-sans text-neutral-800 leading-tight">
                    {badge.label}
                  </div>
                </div>

                {/* Description subtext */}
                <div className="text-[11px] text-neutral-500 font-sans font-light leading-relaxed">
                  {badge.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
