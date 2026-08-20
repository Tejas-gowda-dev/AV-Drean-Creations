import { INSTAGRAM_POSTS } from '../data';
import { Heart, MessageCircle, Instagram, Sparkles } from 'lucide-react';

export default function InstagramFeed() {
  const profileUrl = 'https://www.instagram.com/avdreamcreations?igsh=Zm9sMndiMHY3cHhu'; // Real profile URL

  return (
    <section id="instagram-feed-section" className="py-24 bg-white text-neutral-900 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-gradient mb-2 font-sans">
            Social & Behind the Scenes
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-neutral-900 mb-4 tracking-tight leading-tight">
            Follow Our Narrative On <span className="italic text-brand-gradient">Instagram</span>
          </h2>
          <p className="font-serif text-neutral-600 text-sm md:text-base leading-relaxed">
            We actively post real behind-the-scenes moments, daily wedding reels, previews of physical coffee table albums, and fine-art retouches on our social feeds.
          </p>
        </div>

        {/* Instagram Grid */}
        <div id="instagram-grid" className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-sm overflow-hidden bg-neutral-100 shadow-sm border border-neutral-100"
            >
              <img
                src={post.url}
                alt="Instagram feed snapshot from AV Dream Creations Bangalore"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay with Likes & Comments */}
              <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white text-sm font-mono">
                <span className="flex items-center gap-1.5 font-bold text-gold">
                  <Heart className="w-4 h-4 text-gold fill-gold" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1.5 font-bold text-gold">
                  <MessageCircle className="w-4 h-4 text-gold fill-gold" />
                  {post.comments}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Follow us CTA */}
        <div className="text-center mt-12">
          <a
            id="instagram-follow-btn"
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 h-14 px-8 rounded-sm bg-brand-gradient hover:bg-brand-gradient-hover text-white font-bold font-sans text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-lg shadow-neutral-950/5"
          >
            <Instagram className="w-4 h-4" /> Follow @avdreamcreations <Sparkles className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
