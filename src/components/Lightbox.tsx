import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { Photo } from '../types';

interface LightboxProps {
  photo: Photo | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ photo, onClose, onNext, onPrev }: LightboxProps) {
  if (!photo) return null;

  return (
    <AnimatePresence>
      <div id="lightbox-overlay" className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 select-none">
        {/* Close Button */}
        <button
          id="lightbox-close"
          onClick={onClose}
          className="absolute top-6 right-6 z-55 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer h-12 w-12 flex items-center justify-center"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev Button */}
        <button
          id="lightbox-prev"
          onClick={onPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-55 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer h-12 w-12 flex items-center justify-center"
          aria-label="Previous Photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          id="lightbox-next"
          onClick={onNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-55 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer h-12 w-12 flex items-center justify-center"
          aria-label="Next Photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content Container */}
        <div className="max-w-5xl w-full flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[70vh] flex items-center justify-center overflow-hidden"
          >
            <img
              src={photo.url}
              alt={photo.alt}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full max-w-2xl bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-xl p-5 text-center text-white"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 mb-1">
              {photo.category.replace('-', ' ')}
            </span>
            <h3 className="font-serif text-xl md:text-2xl font-medium mb-2">{photo.title}</h3>
            <p className="text-sm text-neutral-300 font-sans mb-4">{photo.description}</p>
            <div className="flex items-center justify-center gap-6 text-xs text-neutral-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {photo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                {photo.date}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
