import React from 'react';
import { Camera, Film, Sparkles, Clock, Heart } from 'lucide-react';
import { motion } from 'motion/react';
// @ts-ignore
import Main from "../assets/main-image.webp";

const differentiators = [
  {
    icon: Camera,
    title: 'Unobtrusive Candid Art',
    description: 'We blend into the background to preserve authentic emotions, private glances, and raw joy without forced posing.'
  },
  {
    icon: Film,
    title: 'Cinematic Visual Tone',
    description: 'Bespoke, warm color grading tailored to your venue and palette, crafted to feel like heirloom cinema.'
  },
  {
    icon: Sparkles,
    title: 'Aerial Drone Cinema',
    description: 'Sweeping 4K perspectives capturing your mandap, venue architecture, and grand guest entrances.'
  },
  {
    icon: Clock,
    title: 'Rapid Teaser Delivery',
    description: 'Receive your signature editorial highlight reel within 72 hours for instant social sharing.'
  }
];

export default function About() {
  return (
    <section id="about-section" className="relative  py-20 lg:py-10  text-neutral-900 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Visual Storytelling Collage */}
          <motion.div
            aria-label="Wedding photography gallery showcase"
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border-4 border-white aspect-[4/5] sm:w-4/5">
                <img
                  src={Main}
                  alt="Bride and groom intimate portrait"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Offset Overlapping Image */}
              <div className="hidden sm:block absolute -bottom-10 -right-4 z-20 w-3/5 aspect-[3/4] overflow-hidden rounded-xl shadow-2xl border-4 border-white">
                <img
                  src={Main}
                  alt="Detailed shot of Indian wedding rituals"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy & Differentiators */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1">
                <Heart className="w-3.5 h-3.5 text-amber-700 fill-amber-700" />
                <span className="text-xl font-serif italic ">
                  AV Dream Creations
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-3xl lg:text-5xl font-light text-neutral-900 leading-[1.15]">
                Timeless Romance, Told with <span className="italic font-normal text-brand-gradient">Cinematic Grace</span>.
              </h2>

              <p className="font-serif italic text-sm text-neutral-600">
                At AV Dream Creations, we believe that a weddingphotography is more than a moment in time it’s a lasting memory that can be cherished for years to come. We specialize in capturing beautiful and creative moments, whether it’s a wedding, a family portrait, or a special event. Our team of professional photographers work with you to bring your vision to life. We use a variety of techniques and equipment to ensure you get the highest quality photos that you’ll be proud to look back on. Visit our website to learn more and book your session today!              </p>
            </motion.div>

            {/* Differentiator Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
              {differentiators.map((diff, index) => {
                const IconComponent = diff.icon;
                return (
                  <motion.div
                    key={diff.title}
                    className="p-5 rounded-xl bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-base font-medium text-neutral-900 mb-1">
                      {diff.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {diff.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Editorial Quote */}
            <motion.div
              className="border-l-2 border-amber-700/60 pl-4 py-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="font-serif italic text-sm text-neutral-600">
                "Our mission is simple: to make sure that fifty years from today, you can look at your wedding album and feel your heart race exactly the same way it did on your wedding morning."
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}