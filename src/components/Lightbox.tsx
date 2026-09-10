import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Photo } from "../types";

interface LightboxProps {
  photo: Photo | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  photo,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  if (!photo) return null;

  return (
    <div
      id="lightbox-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 z-50 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Prevent overlay click */}
      <div
        className="max-w-5xl w-full flex justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={photo.id ?? photo.url}
            src={photo.url}
            alt={photo.alt}
            referrerPolicy="no-referrer"
            className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}