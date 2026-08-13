// // import { useState, useEffect } from 'react';
// import { useState } from 'react';
// import { Camera, Menu, X, Heart, Phone, ArrowRight } from 'lucide-react';
// import Logo from './Logo';

// interface NavbarProps {
//   currentRoute: string;
//   onChangeRoute: (route: string) => void;
// }

// export default function Navbar({ currentRoute, onChangeRoute }: NavbarProps) {
//   // const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     if (window.scrollY > 50) {
//   //       setIsScrolled(true);
//   //     } else {
//   //       setIsScrolled(false);
//   //     }
//   //   };
//   //   window.addEventListener('scroll', handleScroll);
//   //   return () => window.removeEventListener('scroll', handleScroll);
//   // }, []);

//   const navItems = [
//     { label: 'About', route: 'about' },
//     { label: 'Films', route: 'films' },
//     { label: 'Gallery', route: 'gallery' },
//     { label: 'Question?', route: 'question' },
//   ];

//   const handleNavClick = (route: string) => {
//     onChangeRoute(route);
//     setMobileMenuOpen(false);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     // <nav
//     //   id="main-navigation"
//     //   className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//     //     isScrolled
//     //       ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-neutral-900 border-b border-neutral-100'
//     //       : 'bg-gradient-to-b from-black/60 to-transparent py-0 text-white'
//     //   }`}
//     // >
//     <nav
//   id="main-navigation"
//   className="fixed top-0 left-0 right-0 z-40 bg-transparent text-white py-6 transition-none"
// >
//       <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
//       {/* <div className="max-w-[1500px] mx-auto px-8 lg:px-12 h-24 flex items-center justify-between"> */}
        
//         {/* Brand Logo */}
//         <button
//           id="navbar-logo"
//           onClick={() => handleNavClick('home')}
//           className="flex items-center gap-2 group cursor-pointer text-left transition-transform active:scale-95 duration-150"
//         >
//           {/* <Logo isScrolled={isScrolled} showTagline={false} /> */}
//           <Logo
//     isScrolled={false}
//     showTagline={false}
// />
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center gap-6 ml-auto mr-8">
//         {/* <div className="hidden lg:flex items-center gap-10"> */}
//           {navItems.map((item) => {
//             const isActive = currentRoute === item.route;
//             return (
//               <button
//                 key={item.route}
//                 id={`nav-item-${item.route}`}
//                 onClick={() => handleNavClick(item.route)}
//                 // className={`relative px-3 py-2 text-xs uppercase tracking-widest font-mono font-medium transition-colors cursor-pointer hover:text-gold ${
//                 //   isActive
//                 //     ? isScrolled ? 'text-gold' : 'text-gold font-bold'
//                 //     : isScrolled ? 'text-neutral-700' : 'text-white/90'
//                 // }`}
//                 className={`relative uppercase tracking-[4px] text-[11px] font-medium transition duration-300 hover:text-gold ${
//     isActive
//         ? "text-gold"
//         : "text-white"
// }`}
//               >
//                 {item.label}
//                 {isActive && (
//                   <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gold"></span>
//                 )}
//               </button>
//             );
//           })}
//         </div>

//         {/* Action Button & Menu Icon */}
//         <div className="flex items-center gap-4">
//           <button
//             id="nav-cta-btn"
//             onClick={() => handleNavClick('contact')}
//             className="hidden sm:flex items-center gap-2 h-11 px-5 text-[11px] font-mono uppercase tracking-widest transition-all cursor-pointer font-semibold bg-brand-gradient hover:bg-brand-gradient-hover text-white rounded-sm"
//             // className="hidden lg:flex items-center justify-center h-12 px-8 rounded-full border border-white/30 backdrop-blur-sm text-white uppercase tracking-[3px] text-[11px] hover:bg-white hover:text-black transition-all duration-500". contect button
//           >
//             Contact <ArrowRight className="w-3.5 h-3.5" />
//           </button>

//           <button
//             id="mobile-menu-toggle"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             // className="lg:hidden p-2 rounded-lg transition-colors cursor-pointer"
//             className="lg:hidden p-2 text-white"
//             aria-label="Toggle navigation menu"
//           >
//             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {mobileMenuOpen && (
//         <div
//           id="mobile-navigation-dropdown"
//           className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl py-6 px-4 space-y-2 flex flex-col z-50 text-neutral-950 animate-fadeIn"
//           // className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl py-8 px-6 flex flex-col gap-5 text-white"
//         >
//           {navItems.map((item) => {
//             const isActive = currentRoute === item.route;
//             return (
//               <button
//                 key={item.route}
//                 id={`mobile-nav-item-${item.route}`}
//                 onClick={() => handleNavClick(item.route)}
//                 className={`w-full text-left py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-mono font-medium transition-colors cursor-pointer ${
//                 // className={`w-full text-left uppercase tracking-[3px] text-sm py-2 transition-all ${
//                   isActive
//                     ? 'bg-gold/10 text-gold font-semibold'
//                     : 'hover:bg-neutral-50 text-neutral-700'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             );
//           })}
//           <div className="pt-4 border-t border-gray-100 mt-2 space-y-3">
//             <button
//               onClick={() => handleNavClick('contact')}
//               className="w-full bg-brand-gradient text-white text-xs font-mono uppercase tracking-widest font-semibold py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer h-12"
//             >
//               Contact
//             </button>
//             <a
//               href="tel:+919743644065"
//               className="w-full border border-neutral-200 text-neutral-800 text-xs text-white font-mono uppercase tracking-widest font-semibold py-4 rounded-xl flex items-center justify-center gap-2 h-12"
//             >
//               <Phone className="w-4 h-4" /> Call Studio
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState, useEffect, useRef } from 'react';
import { Camera, Menu, X, Heart, Phone, ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  currentRoute: string;
  onChangeRoute: (route: string) => void;
}

export default function Navbar({ currentRoute, onChangeRoute }: NavbarProps) {
  // Track visibility of the navbar bar wrapper
  const [isVisible, setIsVisible] = useState(true);
  // Track if page is scrolled past hero banner threshold
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Manage layout blending (Transparent vs Frosted Background)
      if (currentScrollY > 20) {
        setIsScrolled(false);
      } else {
        setIsScrolled(false);
      }

      // 2. Manage reveal-on-scroll-up behavior (Matches Knottingbells structural interaction)
      if (currentScrollY < 120) {
        // Always show navigation framework at the topmost part of hero section
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling Down: instantly hide navbar out of user workspace view
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling Up: immediately snap navigation panels back to sight
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', route: 'about' },
    { label: 'Films', route: 'films' },
    { label: 'Gallery', route: 'gallery' },
    { label: 'Question?', route: 'question' },
  ];

  const handleNavClick = (route: string) => {
    onChangeRoute(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? ' backdrop-blur-md py-4 text-white border-b border-white/10 shadow-lg' 
          : 'bg-gradient-to-b from-black/70 to-transparent py-6 text-white'
      }`}
    >
      <div className="max-w-10xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="navbar-logo"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group cursor-pointer text-left transition-transform active:scale-95 duration-150"
        >
          <Logo isScrolled={isScrolled} showTagline={false} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 ml-auto mr-8">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                id={`nav-item-${item.route}`}
                onClick={() => handleNavClick(item.route)}
                className={`relative uppercase tracking-[4px] text-[11px] font-medium transition duration-300 hover:text-gold ${
                  isActive ? 'text-gold' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gold"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button & Menu Icon */}
        <div className="flex items-center gap-4">
          <button
            id="nav-cta-btn"
            onClick={() => handleNavClick('contact')}
            className="hidden sm:flex items-center gap-1Av Dream Creations specializs h-11 px-5 text-[11px] font-mono uppercase tracking-widest transition-all cursor-pointer font-semibold  text-white rounded-sm"
          >
            Contact
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gold transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-dropdown"
          className="lg:hidden absolute top-full left-0 right-0 bg-black/95 text-white border-b border-neutral-800 py-6 px-4 space-y-2 flex flex-col z-50 animate-fadeIn"
        >
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                id={`mobile-nav-item-${item.route}`}
                onClick={() => handleNavClick(item.route)}
                className={`w-full text-left py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-mono font-medium transition-colors cursor-pointer ${
                  isActive ? 'bg-gold/10 text-gold font-semibold' : 'hover:bg-neutral-800 text-neutral-200'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-neutral-800 mt-2 space-y-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-brand-gradient text-white text-xs font-mono uppercase tracking-widest font-semibold py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer h-12"
            >
              Contact
            </button>
            <a
              href="tel:+919594341765"
              className="w-full border border-neutral-700 text-white text-xs font-mono uppercase tracking-widest font-semibold py-4 rounded-xl flex items-center justify-center gap-2 h-12"
            >
              <Phone className="w-4 h-4" /> Call Studio
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
