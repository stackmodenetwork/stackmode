import React from 'react';

interface ImageSliderProps {
  images: { src: string; title: string }[];
  speed?: number;
}

export function ImageAutoSlider({ images, speed = 25 }: ImageSliderProps) {
  const duplicated = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-4"
      style={{
        mask: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMask: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      <style>{`
        @keyframes slider-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="flex gap-6"
        style={{ animation: `slider-scroll ${speed}s linear infinite`, width: 'max-content' }}
      >
        {duplicated.map((img, i) => (
          <div
            key={`${img.title}-${i}`}
            className="relative flex-shrink-0 rounded-xl overflow-hidden group"
            style={{ width: 420, height: 260 }}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-sm text-white/90 tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
