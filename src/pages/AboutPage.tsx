import MeetTheTeam from '../components/MeetTheTeam';
import About from '../components/About';
import SEOHelper from '../components/SEOHelper';
import { Camera, Heart, HelpCircle, Sparkles } from 'lucide-react';
// @ts-ignore
import Main from "../assets/main-image.webp";


export default function AboutPage() {
  return (
    <div id="about-page-container" className=" bg-white text-neutral-900">
      <SEOHelper
        title="About Us | AV Dream Creations - Professional Wedding Storytellers"
        description="Meet the visionaries behind AV Dream Creations. Learn about our candid wedding photographers, traditional ritual directors, and expert film editors serving Bangalore and Karnataka."
        keywords="about AV Dream Creations, wedding photographers team Bangalore, expert cinematic videographers Karnataka, candid photo studio Bangalore, professional wedding shoot crew, photography artists Karnataka"
      />

      {/* Subpage Header Banner */}
      <div className="relative py-28 bg-neutral-950 text-white overflow-hidden text-center">
        <img
          src={Main}
          alt="Meet the storytellers behind AV Dream Creations"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 transition-transform duration-700 hover:scale-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            Meet the Team Behind <span className="italic text-brand-gradient">AV Dream Creations</span>
          </h1>
          <p className="font-sans text-neutral-300 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            Get to know our dedicated founders, candid directors, and cinematic layout artists. We combine classical training with state-of-the-art cinematic equipment to deliver cinematic timelines.
          </p>
        </div>
      </div>

      {/* Shared About Components */}
      <About />

      {/* Shared Meet the Team component */}
      <MeetTheTeam />

      {/* Bottom Callout */}
      <section className="py-16 bg-neutral-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-white flex items-center gap-2 justify-center">
            Want to Collaborate on Your <span className="italic text-brand-gradient">Timeline</span>?
          </h2>
          <p className="font-sans text-neutral-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Let’s craft a bespoke, warm visual storyboard that perfectly aligns with your traditional family values and auspicious dates. Expect custom quotes in 30 minutes.
          </p>
          <a
            id="about-page-cta"
            href="/contact"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-sm bg-brand-gradient hover:bg-brand-gradient-hover text-white font-bold font-sans text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg"
          >
            Connect With Our Directors <Heart className="w-4 h-4 fill-white text-white" />
          </a>
        </div>
      </section>
    </div>
  );
}
