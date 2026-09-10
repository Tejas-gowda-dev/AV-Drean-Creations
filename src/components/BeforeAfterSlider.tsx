import { useState, useRef, useEffect } from 'react';
import { Sparkles, Sliders } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="before-after-slider-section" className="py-20 bg-neutral-50 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-gradient mb-2 font-sans">
          The Art of Fine-Art Retouching
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 mb-4 tracking-tight">
          Visual Alchemy: Raw vs. <span className="italic text-brand-gradient">Masterpiece</span>
        </h2>
        <p className="font-serif italic  max-w-2xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
          Observe how we carefully balance warm shadows, deep contrast, and natural Indian skin tones to transform a beautiful candid shot into an everlasting work of fine-art heirloom.
        </p>

        {/* Interactive Stage */}
        <div
          id="slider-stage-container"
          ref={containerRef}
          className="relative h-[300px] sm:h-[450px] md:h-[500px] w-full overflow-hidden rounded-sm shadow-xl select-none cursor-ew-resize border border-gray-200"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* Before Image (Raw) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=50&w=1200&auto=format&fit=crop&sat=-20&contrast=-10"
              alt="Raw Indian Wedding Photo"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover grayscale-[30%] opacity-90 filter brightness-95"
            />
            <span className="absolute bottom-4 left-4 z-10 bg-black/80 text-white font-sans text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-sm">
              Raw Out of Camera
            </span>
          </div>

          {/* After Image (Edited) - Clipped */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}>
              <img
                src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=1200&auto=format&fit=crop"
                alt="Masterfully Edited Wedding Photo"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <span className="absolute bottom-4 right-4 z-10 bg-gold text-white font-sans text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-sm whitespace-nowrap">
              AV Dream Creations Edit
            </span>
          </div>

          {/* Center Line Splitter */}
          <div
            className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="h-10 w-10 bg-white text-neutral-950 rounded-sm flex items-center justify-center shadow-lg border border-neutral-200">
              <Sliders className="w-4 h-4 rotate-90" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-6 text-xs font-sans text-neutral-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neutral-300"></span>
            Drag Slider Left/Right to Compare
          </span>
          <span className="flex items-center gap-1.5 text-gold font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Signature Gold Film Retouch
          </span>
        </div>
      </div>
    </section>
  );
}
