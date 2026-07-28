import { Camera, Eye, Zap, Flame, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const differentiators = [
    {
      icon: Eye,
      title: 'Invisible Candid Style',
      description: 'We don’t force stiff, uncomfortable poses. We float silently through your crowd, capturing genuine family laughter, silent tears, and secret shared glances.'
    },
    {
      icon: Flame,
      title: 'Cinematic Drone Cover',
      description: 'A grand perspective for a grand milestone. Our premium drone filmmakers map your complete outdoor rituals and magnificent venue designs from the heavens.'
    },
    {
      icon: Camera,
      title: 'Color Grading',
      description: 'Your memories shouldn’t look washed out. We meticulously process every pixel, color-grading your wedding pictures into deep, warm, cinematic heirlooms.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery Promise',
      description: 'No endless months of waiting. Your custom wedding teaser reel lands on your phone in 3-5 days, and your complete high-resolution collection is fully ready in 4-6 weeks.'
    }
  ];

  return (
    <section id="about-section" style={{ backgroundColor: 'rgba(251, 246, 239, 1)' }} className="relative overflow-hidden py-24 text-neutral-900 border-b border-neutral-100">
      {/* Subtle brand logo watermark background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[350px] h-[350px] md:w-[600px] md:h-[600px] pointer-events-none opacity-[0.03] md:opacity-[0.05] select-none z-0">
        <svg viewBox="0 0 100 85" className="w-full h-full">
          <defs>
            <linearGradient id="about-logo-camera-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8265AF" />
              <stop offset="100%" stopColor="#D17B92" />
            </linearGradient>
          </defs>
          <path
            d="M 22 25
               C 22 22, 24 20, 27 20
               L 35 20
               C 37 15, 40 13, 44 13
               L 56 13
               C 60 13, 63 15, 65 20
               L 73 20
               C 76 20, 78 22, 78 25
               L 78 68
               C 78 72, 76 74, 73 74
               L 27 74
               C 24 74, 22 72, 22 68
               Z"
            fill="none"
            stroke="url(#about-logo-camera-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="50"
            cy="47"
            r="17"
            fill="none"
            stroke="url(#about-logo-camera-gradient)"
            strokeWidth="3.5"
          />
          <circle
            cx="50"
            cy="47"
            r="11"
            fill="url(#about-logo-camera-gradient)"
          />
          <text
            x="50"
            y="51.5"
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontFamily='"Alex Brush", "Great Vibes", cursive'
          >
            A
          </text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Brand Story Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold font-sans">
              The Keepers of Your Vows
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-neutral-900 leading-tight">
              You Dreamed of This Day. Let’s Make It <span className="italic text-gold">Eternal</span>.
            </h2>
            <div className="space-y-4 font-sans text-neutral-600 text-sm leading-relaxed">
              <p>
              At AV Dream Creations, we believe that a weddingphotography is more than a moment in time it’s a lasting memory that can be cherished for years to come. We specialize in capturing beautiful and creative moments, whether it’s a wedding, a family portrait, or a special event. Our team of professional photographers work with you to bring your vision to life. We use a variety of techniques and equipment to ensure you get the highest quality photos that you’ll be proud to look back on. Visit our website to learn more and book your session today!
              </p>
              
              <p className="italic font-serif text-neutral-500 border-l-2 border-gold pl-4">
                "Our mission is simple: to make sure that fifty years from today, you can look at your wedding album and feel your heart race exactly the same way it did on your wedding morning."
              </p>
            </div>
          </div>

          {/* Differentiators Grid Column */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.map((diff, index) => {
                const IconComponent = diff.icon;
                return (
                  <motion.div
                    key={index}
                    id={`diff-card-${index}`}
                    className="p-6 rounded-sm bg-luxury-cream border border-gray-100 shadow-sm hover:shadow-md hover:border-gold/30 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="p-3 bg-gold/10 text-gold rounded-sm inline-block mb-4 group-hover:bg-gold group-hover:text-white transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-neutral-900 mb-2">
                      {diff.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                      {diff.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
