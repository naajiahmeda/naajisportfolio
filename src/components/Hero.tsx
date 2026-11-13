import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('home');
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top;
      const maxScroll = container.offsetHeight - window.innerHeight;

      if (maxScroll > 0) {
        const rawProgress = scrolled / maxScroll;
        const clamped = Math.min(1, Math.max(0, rawProgress));
        setScrollProgress(clamped);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // The animation finishes within the first 50% of the scroll track.
  // The remaining 50% of the track holds the screen COMPLETELY STILL,
  // allowing the user to view the completed reference frame before the page scrolls away.
  const animProgress = Math.min(1, Math.max(0, scrollProgress / 0.50));

  // Cubic ease-out calculation for silky smooth motion
  const easeOut = 1 - Math.pow(1 - animProgress, 3);

  // Text slightly moves to both sides
  const leftTextShift = -easeOut * 42; // Moves slightly left (0 to -42px)
  const rightTextShift = easeOut * 42; // Moves slightly right (0 to +42px)

  // Portrait pops up from below, scaling and fading in
  // Starts completely hidden (opacity 0) at the beginning
  const portraitOpacity = Math.min(1, Math.max(0, (animProgress - 0.05) * 1.6));
  const portraitTranslateY = (1 - easeOut) * 90; // Pops up from 90px below
  const portraitScale = 0.86 + easeOut * 0.14; // Scales from 0.86 to 1.0

  return (
    <section id="home" className="relative h-[280vh] w-full bg-[#050605]">
      {/* Pinned Sticky Viewport: Remains locked in place while user scrolls through the 280vh distance */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden select-none">
        {/* 1. Cinematic Background Layer: Cyber Grid & Right-Side Neon Green Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Crisp Cyber Grid */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(20, 32, 10, 0.6) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(20, 32, 10, 0.6) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />

          {/* Ambient Neon Lime Green Glow centered behind the right side */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 75% 50%, rgba(183, 255, 0, 0.22) 0%, rgba(20, 32, 10, 0.5) 35%, transparent 70%)',
            }}
          />

          {/* Dark ambient fill on left */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 20% 50%, rgba(5, 6, 5, 0.9) 0%, transparent 80%)',
            }}
          />
        </div>

        {/* 2. Top Info Micro-Ticker */}
        <div className="relative z-30 w-full px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 flex items-center justify-between text-[11px] font-tech text-[#A1A1A1] tracking-widest uppercase pointer-events-none">
          <div className="flex items-center gap-2 bg-[#050605]/85 backdrop-blur-md px-3.5 py-1.5 border border-[#14200A] shadow-lg pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-[#B7FF00] animate-pulse shadow-[0_0_8px_#B7FF00]" />
            <span>CURRENTLY: B.E. IN AI &amp; ML (7TH SEM)</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 bg-[#050605]/85 backdrop-blur-md px-4 py-1.5 border border-[#14200A] text-[#A1A1A1]/80 shadow-lg pointer-events-auto">
            <span>VTU AFFILIATED</span>
            <span>•</span>
            <span>CREATIVE DEVELOPER</span>
            <span>•</span>
            <span className="text-[#B7FF00] font-semibold">2026/2027</span>
          </div>
        </div>

        {/* 3. Center Interactive Hero Canvas */}
        <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-6">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Layer A: Giant Vector Typography (NAAJI on left in white, AHMED on right in neon green) */}
            <div className="absolute inset-0 flex items-center justify-between w-full pointer-events-none z-10 px-2 sm:px-6 md:px-10">
              {/* NAAJI - Moves slightly to the left as you scroll */}
              <div
                className="w-1/2 flex justify-start will-change-transform"
                style={{
                  transform: `translate3d(${leftTextShift}px, 0, 0)`,
                  transition: 'transform 0.05s ease-out',
                }}
              >
                <span
                  className="font-anton text-white text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[175px] xl:text-[205px] leading-none tracking-tight select-none uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    letterSpacing: '0.02em',
                  }}
                >
                  NAAJI
                </span>
              </div>

              {/* AHMED - Moves slightly to the right as you scroll */}
              <div
                className="w-1/2 flex justify-end will-change-transform"
                style={{
                  transform: `translate3d(${rightTextShift}px, 0, 0)`,
                  transition: 'transform 0.05s ease-out',
                }}
              >
                <span
                  className="font-anton text-[#B7FF00] text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[175px] xl:text-[205px] leading-none tracking-tight select-none uppercase"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    letterSpacing: '0.02em',
                    textShadow:
                      '0 0 25px rgba(183, 255, 0, 0.45), 0 0 50px rgba(183, 255, 0, 0.2)',
                  }}
                >
                  AHMED
                </span>
              </div>
            </div>

            {/* Layer B: Foreground Portrait (Pops up on scroll, then holds steady overlapping the text) */}
            <div
              className="relative z-20 flex items-end justify-center h-full max-h-[82vh] pointer-events-none will-change-transform"
              style={{
                opacity: portraitOpacity,
                transform: `translate3d(0, ${portraitTranslateY}px, 0) scale(${portraitScale})`,
                transition: 'opacity 0.08s ease-out, transform 0.08s ease-out',
              }}
            >
              <picture className="h-full flex items-end justify-center">
                <source srcSet="/naaji-tight.webp" type="image/webp" />
                <img
                  src="/naaji-tight.png"
                  alt="Naaji Ahmed Ali"
                  className="h-full max-h-[64vh] sm:max-h-[72vh] md:max-h-[78vh] lg:max-h-[82vh] w-auto object-contain object-bottom select-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
                  loading="eager"
                  decoding="sync"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* 4. Interactive Bottom Scroll Indicator */}
        <div className="relative z-30 w-full pb-6 sm:pb-8 flex items-center justify-center">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center gap-1.5 text-xs font-tech text-[#A1A1A1] hover:text-[#B7FF00] transition-colors cursor-pointer py-1.5 px-4 bg-[#050605]/80 backdrop-blur-sm border border-[#14200A] hover:border-[#B7FF00]/40 shadow-md"
            aria-label="Scroll to explore"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase">
              {animProgress < 1.0 ? 'SCROLL TO COMPLETE ANIMATION' : 'SCROLL TO EXPLORE WORK'}
            </span>
            <ChevronDown className="w-4 h-4 text-[#B7FF00] group-hover:translate-y-1 transition-transform animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
