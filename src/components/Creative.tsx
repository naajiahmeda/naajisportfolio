'use client';

import { useState, type ElementType } from 'react';
import {
  Gamepad2,
  PenTool,
  Palette,
  Film,
  Camera,
  Music2,
  Video,
  Sparkles,
  Maximize2,
  X,
} from 'lucide-react';

interface CreativeMedium {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  icon: ElementType;
  aspectClass: string;
  featured?: boolean;
  visualType: 'game' | 'drawing' | 'design' | 'video' | 'photo' | 'film' | 'music';
}

export const Creative = () => {
  const [activeItem, setActiveItem] = useState<CreativeMedium | null>(null);

  const creativeItems: CreativeMedium[] = [
    {
      id: 'game-dev',
      title: 'GAME DEVELOPMENT',
      category: 'INTERACTIVE MEDIA',
      tagline: 'Worldbuilding & Playable Logic',
      description:
        "I'm fascinated by the process of building interactive worlds and experiences. Game development is one of the creative and technical fields I want to explore further.",
      icon: Gamepad2,
      aspectClass: 'lg:col-span-8 lg:row-span-2 min-h-[380px]',
      featured: true,
      visualType: 'game',
    },
    {
      id: 'visual-design',
      title: 'VISUAL DESIGN',
      category: 'ART DIRECTION',
      tagline: 'High-contrast typography & visual balance',
      description:
        'Exploring layout architecture, brutalist typography, editorial posters, and brand identities with bold contrast and minimalist structure.',
      icon: Palette,
      aspectClass: 'lg:col-span-4 min-h-[260px]',
      visualType: 'design',
    },
    {
      id: 'filmmaking',
      title: 'FILMMAKING',
      category: 'CINEMATOGRAPHY',
      tagline: 'Visual storytelling & framing',
      description:
        'A strong passion for visual pacing, moody cinematography, natural lighting, and translating internal emotions into cinematic frames.',
      icon: Film,
      aspectClass: 'lg:col-span-4 min-h-[260px]',
      visualType: 'film',
    },
    {
      id: 'drawing',
      title: 'DRAWING',
      category: 'FINE ART',
      tagline: 'Freehand sketching & conceptual forms',
      description:
        'Experimenting with lines, anatomical figures, abstract perspective sketches, and traditional mark-making that grounds visual intuition.',
      icon: PenTool,
      aspectClass: 'lg:col-span-4 min-h-[260px]',
      visualType: 'drawing',
    },
    {
      id: 'video-editing',
      title: 'VIDEO EDITING',
      category: 'POST-PRODUCTION',
      tagline: 'Rhythm, pacing & montage cut',
      description:
        'Crafting narrative flow through dynamic cuts, sound sync, visual timing, and kinetic motion storytelling.',
      icon: Video,
      aspectClass: 'lg:col-span-4 min-h-[260px]',
      visualType: 'video',
    },
    {
      id: 'photo-editing',
      title: 'PHOTO EDITING',
      category: 'COLOR & TEXTURE',
      tagline: 'Shadow treatment & moody grading',
      description:
        'Deepening visual moods through subtle tone curves, noir-inspired color grading, and selective lighting emphasis.',
      icon: Camera,
      aspectClass: 'lg:col-span-4 min-h-[260px]',
      visualType: 'photo',
    },
    {
      id: 'music',
      title: 'MUSIC',
      category: 'SOUND DESIGN',
      tagline: 'Acoustic textures & atmospheric layers',
      description:
        'Listening, dissecting composition structures, and exploring ambient soundscapes that elevate visual mediums.',
      icon: Music2,
      aspectClass: 'lg:col-span-12 min-h-[220px]',
      visualType: 'music',
    },
  ];

  const renderVisualPlaceholder = (type: CreativeMedium['visualType']) => {
    switch (type) {
      case 'game':
        return (
          <div className="relative w-full h-full min-h-[200px] flex flex-col justify-between p-6 bg-gradient-to-br from-[#14200A]/40 via-[#050605] to-[#050605] overflow-hidden border border-[#14200A]">
            <div className="absolute inset-0 bg-cyber-grid opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#B7FF00]/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 flex items-center justify-between text-xs font-tech text-[#A1A1A1]">
              <span className="flex items-center gap-1.5 text-white">
                <Gamepad2 className="w-4 h-4 text-[#B7FF00]" />
                WORLD_SIMULATION_V0.1
              </span>
              <span className="text-[#B7FF00] tracking-widest font-mono">[INTERACTIVE_SPACE]</span>
            </div>

            {/* Simulated 3D Perspective Grid */}
            <div className="relative z-10 my-6 flex items-center justify-center">
              <div className="relative w-full max-w-md h-32 border border-dashed border-[#B7FF00]/30 flex items-center justify-center">
                <div className="w-16 h-16 border border-[#B7FF00] flex items-center justify-center animate-pulse">
                  <div className="w-6 h-6 bg-[#B7FF00] rotate-45" />
                </div>
                <div className="absolute top-2 left-2 text-[10px] font-tech text-[#B7FF00]">
                  PHYSICS: RIGIDBODY // CAMERA: THIRD_PERSON
                </div>
                <div className="absolute bottom-2 right-2 text-[10px] font-tech text-[#A1A1A1]">
                  COLLISION: ACTIVE
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[11px] font-tech text-[#A1A1A1]">
              <span>INTERACTIVE WORLDS // GAMEPLAY LOGIC</span>
              <span className="text-white hover:text-[#B7FF00]">[ READY FOR PROTOTYPE EMBED ]</span>
            </div>
          </div>
        );

      case 'drawing':
        return (
          <div className="relative w-full h-full min-h-[160px] flex items-center justify-center bg-[#050605] border border-[#14200A] p-4 overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid-dense opacity-20" />
            <div className="relative z-10 text-center space-y-2">
              <div className="w-12 h-12 mx-auto border border-[#B7FF00]/40 flex items-center justify-center text-[#B7FF00]">
                <PenTool className="w-5 h-5" />
              </div>
              <div className="font-tech text-xs text-white">SKETCH &amp; LINE ART</div>
              <div className="font-tech text-[10px] text-[#A1A1A1]">[ WORK PLACEHOLDER ]</div>
            </div>
          </div>
        );

      case 'design':
        return (
          <div className="relative w-full h-full min-h-[160px] flex items-center justify-center bg-[#050605] border border-[#14200A] p-4 overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid-dense opacity-20" />
            <div className="relative z-10 text-center space-y-2">
              <div className="w-12 h-12 mx-auto border border-[#B7FF00]/40 flex items-center justify-center text-[#B7FF00]">
                <Palette className="w-5 h-5" />
              </div>
              <div className="font-tech text-xs text-white">EDITORIAL &amp; POSTER</div>
              <div className="font-tech text-[10px] text-[#A1A1A1]">[ WORK PLACEHOLDER ]</div>
            </div>
          </div>
        );

      case 'video':
        return (
          <div className="relative w-full h-full min-h-[160px] flex items-center justify-center bg-[#050605] border border-[#14200A] p-4 overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid-dense opacity-20" />
            <div className="relative z-10 text-center space-y-2">
              <div className="w-12 h-12 mx-auto border border-[#B7FF00]/40 flex items-center justify-center text-[#B7FF00]">
                <Video className="w-5 h-5" />
              </div>
              <div className="font-tech text-xs text-white">MONTAGE &amp; PACING</div>
              <div className="font-tech text-[10px] text-[#A1A1A1]">[ WORK PLACEHOLDER ]</div>
            </div>
          </div>
        );

      case 'photo':
        return (
          <div className="relative w-full h-full min-h-[160px] flex items-center justify-center bg-[#050605] border border-[#14200A] p-4 overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid-dense opacity-20" />
            <div className="relative z-10 text-center space-y-2">
              <div className="w-12 h-12 mx-auto border border-[#B7FF00]/40 flex items-center justify-center text-[#B7FF00]">
                <Camera className="w-5 h-5" />
              </div>
              <div className="font-tech text-xs text-white">TONE CURVE &amp; NOIR</div>
              <div className="font-tech text-[10px] text-[#A1A1A1]">[ WORK PLACEHOLDER ]</div>
            </div>
          </div>
        );

      case 'film':
        return (
          <div className="relative w-full h-full min-h-[160px] flex items-center justify-center bg-[#050605] border border-[#14200A] p-4 overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid-dense opacity-20" />
            <div className="relative z-10 text-center space-y-2">
              <div className="w-12 h-12 mx-auto border border-[#B7FF00]/40 flex items-center justify-center text-[#B7FF00]">
                <Film className="w-5 h-5" />
              </div>
              <div className="font-tech text-xs text-white">CINEMATOGRAPHY &amp; FRAMING</div>
              <div className="font-tech text-[10px] text-[#A1A1A1]">[ WORK PLACEHOLDER ]</div>
            </div>
          </div>
        );

      case 'music':
        return (
          <div className="relative w-full h-full min-h-[120px] flex items-center justify-between px-6 py-4 bg-[#050605] border border-[#14200A] overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid-dense opacity-20" />
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-10 h-10 border border-[#B7FF00]/40 flex items-center justify-center text-[#B7FF00]">
                <Music2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-tech text-xs text-white">SONIC LANDSCAPES &amp; ATMOSPHERES</div>
                <div className="font-tech text-[10px] text-[#A1A1A1]">Rhythm, frequency balance, and audio-visual synchronization</div>
              </div>
            </div>
            {/* Simulated Audio Waveform */}
            <div className="relative z-10 hidden sm:flex items-center gap-1">
              {[40, 70, 30, 90, 60, 20, 80, 50, 95, 30, 65, 45, 85, 35].map((height, i) => (
                <div
                  key={i}
                  style={{ height: `${height * 0.35}px` }}
                  className="w-1 bg-[#B7FF00]/60 hover:bg-[#B7FF00] transition-all"
                />
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="creative" className="relative py-28 bg-[#050605] border-t border-[#14200A] overflow-hidden">
      {/* Background cyber grid & ambient lighting */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#14200A] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading & Subtitle */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-tech text-xs tracking-[0.25em] text-[#B7FF00] font-semibold">
              04 // EXPRESSION &amp; ART
            </span>
            <div className="h-[1px] w-12 bg-[#B7FF00]/40" />
            <span className="font-tech text-xs tracking-widest text-[#A1A1A1] uppercase">
              MULTIDISCIPLINARY PURSUITS
            </span>
          </div>

          <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white leading-[0.9] mb-4">
            BEYOND <span className="text-[#B7FF00]">THE CODE.</span>
          </h2>

          <p className="font-tech text-base sm:text-xl text-[#A1A1A1] tracking-wide">
            "Technology is one side of me. <span className="text-white font-medium">Creativity is another.</span>"
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {creativeItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative bg-[#050605] border border-[#14200A] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#B7FF00]/70 hover:shadow-[0_15px_40px_rgba(183,255,0,0.06)] cursor-pointer ${item.aspectClass}`}
              >
                {/* Corner accent marker */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#B7FF00]" />
                </div>

                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-tech text-[10px] sm:text-xs text-[#B7FF00] tracking-widest uppercase font-semibold">
                      {item.category}
                    </span>
                    <Icon className="w-5 h-5 text-[#A1A1A1] group-hover:text-[#B7FF00] group-hover:scale-110 transition-all duration-200" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl sm:text-4xl text-white tracking-wide group-hover:text-[#B7FF00] transition-colors mb-2">
                    {item.title}
                  </h3>

                  {/* Tagline */}
                  <p className="font-tech text-xs text-[#A1A1A1] tracking-wider mb-4">
                    {item.tagline}
                  </p>

                  {/* Description for featured item or normal */}
                  {item.featured && (
                    <p className="font-sans text-sm text-[#A1A1A1] leading-relaxed mb-6 max-w-xl">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Generative Visual Placeholder */}
                <div className="mt-4">
                  {renderVisualPlaceholder(item.visualType)}
                </div>

                {/* Bottom interactive hint */}
                <div className="mt-4 pt-3 border-t border-[#14200A] flex items-center justify-between text-[11px] font-tech text-[#A1A1A1]">
                  <span>INTEREST &amp; EXPLORATION</span>
                  <span className="text-white group-hover:text-[#B7FF00] flex items-center gap-1 transition-colors">
                    EXPAND <Sparkles className="w-3 h-3 text-[#B7FF00]" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal for Creative Item */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050605]/90 backdrop-blur-md animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setActiveItem(null)} />
          <div className="relative z-10 w-full max-w-2xl bg-[#050605] border border-[#B7FF00]/50 p-6 sm:p-8 shadow-[0_0_50px_rgba(183,255,0,0.15)]">
            <div className="flex items-center justify-between pb-4 border-b border-[#14200A] mb-6">
              <div className="flex items-center gap-2 text-xs font-tech text-[#B7FF00]">
                <activeItem.icon className="w-4 h-4" />
                <span>{activeItem.category} // MEDIUM</span>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-1.5 border border-[#14200A] text-white hover:text-[#B7FF00] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="font-heading text-4xl text-white mb-2">
              {activeItem.title}
            </h3>
            <p className="font-tech text-xs text-[#B7FF00] tracking-wider mb-6">
              {activeItem.tagline}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#A1A1A1] leading-relaxed mb-6">
              <p>{activeItem.description}</p>
              <p className="text-xs font-tech text-white/80 p-3 bg-[#14200A]/30 border-l-2 border-[#B7FF00]">
                "As an engineer who creates, I value how artistic disciplines inform software architecture, spatial intuition, and interactive UI design."
              </p>
            </div>

            <div className="pt-4 border-t border-[#14200A] flex items-center justify-between">
              <span className="font-tech text-xs text-[#A1A1A1]">
                Portfolio Slot Ready For Asset Replacement
              </span>
              <button
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 bg-[#B7FF00] text-[#050605] font-heading text-sm tracking-wider font-bold hover:bg-white"
              >
                CLOSE [ESC]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
