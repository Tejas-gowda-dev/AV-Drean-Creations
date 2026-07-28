import { TEAM } from '../data';
import { Instagram, Camera, Sparkles } from 'lucide-react';

export default function MeetTheTeam() {
  return (
    <section id="team-section" className="py-24 bg-white text-neutral-900 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-2 font-sans">
            The Visionaries
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-neutral-900 mb-4 tracking-tight leading-tight">
            Meet the Team Behind <span className="italic text-gold">AV Dream Creations</span>
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Our talented guild of master candid photographers, cinematic directors, and editors combine experience and technology to tell your emotional narrative.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member) => (
            <div
              key={member.id}
              id={`team-card-${member.id}`}
              className="group bg-neutral-50 border border-neutral-100 rounded-sm p-6 hover:shadow-xl hover:border-gold/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Photo Wrap */}
                <div className="relative h-72 w-full rounded-sm overflow-hidden bg-neutral-100">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Floating Instagram link */}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 h-10 w-10 bg-white hover:bg-gold hover:text-white text-neutral-900 rounded-sm flex items-center justify-center shadow-md transition-colors"
                      aria-label={`${member.name} Instagram portfolio`}
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Bio text */}
                <div className="space-y-2 text-left">
                  <span className="inline-block text-[10px] uppercase tracking-widest font-sans text-gold font-bold">
                    {member.role}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-neutral-900">
                    {member.name}
                  </h3>
                  <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Skill markers */}
              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center gap-3 text-[10px] font-mono text-neutral-400">
                <span className="flex items-center gap-1"><Camera className="w-3.5 h-3.5 text-gold" /> Professional Grade</span>
                <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-gold" /> Storyteller</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
