// import { useState } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Instagram, Facebook, Youtube, Heart, MapPin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const navigate = useNavigate();


  const handleNavClick = (route: string, sectionId?: string) => {
  switch (route) {
    case "home":
      navigate("/");
      break;

    case "about":
      navigate("/about");
      break;

    case "films":
      navigate("/films");
      break;

    case "gallery":
      navigate("/gallery");
      break;

    case "question":
      navigate("/question");
      break;

    case "contact":
      navigate("/contact");
      break;

    default:
      navigate("/");
  }

  // Keep parent callback if needed
  onNavigate(route);

  if (sectionId) {
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

  return (
    <footer id="main-footer" style={{ backgroundColor: 'rgb(246, 246, 244)' }} className="text-neutral-600 pt-20 pb-6 border-t border-neutral-200 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-4 border-b border-neutral-200">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-4 space-y-6 text-left">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-neutral-900 group cursor-pointer text-left transition-transform active:scale-95 duration-150"
            >
              <Logo showTagline={true} isScrolled={true} />
            </button>

            <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed">
              We capture the raw, sacred emotions of weddings and compile premium visual masterpieces. Based in Bangalore, serving Mysore, Mandya, Tumkur, and all of Karnataka.
            </p>

            {/* Social handles with real icons and authentic branding colors */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/avdreamcreations?igsh=Zm9sMndiMHY3cHhu"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-sm bg-white border border-neutral-200 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent hover:scale-105 flex items-center justify-center transition-all text-neutral-600"
                aria-label="AV Dream Creations Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/avdreamcreations/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-sm bg-white border border-neutral-200 hover:bg-[#1877F2] hover:text-white hover:border-transparent hover:scale-105 flex items-center justify-center transition-all text-neutral-600"
                aria-label="AV Dream Creations Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@avdreamcreations"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-sm bg-white border border-neutral-200 hover:bg-[#FF0000] hover:text-white hover:border-transparent hover:scale-105 flex items-center justify-center transition-all text-neutral-600"
                aria-label="AV Dream Creations YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-[10px] font-sans uppercase tracking-[0.2em] text-neutral-900 font-bold">
              Offerings
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-neutral-600">
              <li>
                <button onClick={() => handleNavClick('films')} className="hover:text-gold transition-colors cursor-pointer text-left">
                  Cinematic Wedding Films
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gallery')} className="hover:text-gold transition-colors cursor-pointer text-left">
                  Full Story Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('home', 'services-section')} className="hover:text-gold transition-colors cursor-pointer text-left">
                  OUR SERVICES
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-[10px] font-sans uppercase tracking-[0.2em] text-neutral-900 font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-neutral-600">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-gold transition-colors cursor-pointer text-left">
                  Homepage
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-gold transition-colors cursor-pointer text-left">
                  About Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gallery')} className="hover:text-gold transition-colors cursor-pointer text-left">
                  Story Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('question')} className="hover:text-gold transition-colors cursor-pointer text-left">
                  Help Center Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Studio */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-[10px] font-sans uppercase tracking-[0.2em] text-neutral-900 font-bold">
              The Bangalore Studio
            </h4>
            <ul className="space-y-3.5 text-xs font-sans text-neutral-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-neutral-600">98/2, 12th Main Rd, JC Nagar, Kurubarahalli, Kamala Nagar, Bengaluru, Karnataka 560086</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+919743644065" className="hover:text-gold transition-colors text-neutral-800 font-semibold font-mono">+91 97436 44065</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:avdream518@gmail.com" className="hover:text-gold transition-colors text-neutral-800 font-semibold font-mono">avdream518@gmail.com</a>
              </li>
            </ul>

          </div>

        </div>

        {/* Lower Row: Copyright, Policy & Credits */}
        <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <div className="space-y-2">
            <p>© 2020 AV Dream Creations. All Rights Preserved across Karnataka.</p>
            {showPrivacy && (
              <p className="text-neutral-600 text-[10px] leading-relaxed max-w-md text-left transition-all duration-300">
                Privacy Promise: We respect your digital boundaries. We never sell, lease, or share your contact info, family guest-lists, or wedding itinerary sheets with external marketers. All pre-production briefs are saved in our encrypted local storage.
              </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setShowPrivacy(!showPrivacy)} className="hover:text-gold transition-colors cursor-pointer text-neutral-500">
              Privacy Policy {showPrivacy ? '▲' : '▼'}
            </button>
            <span>•</span>
            <span className="flex items-center gap-1 text-neutral-500">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in Bangalore
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
