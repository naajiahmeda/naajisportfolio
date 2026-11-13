'use client';

import React, { useState } from 'react';
import {
  Brain,
  Gamepad2,
  Palette,
  Film,
  Camera,
  Music,
  Compass,
  Radio,
  Sparkles,
} from 'lucide-react';

interface InterestItem {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ElementType;
  tag: string;
}

export const Personality: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const interests: InterestItem[] = [
    {
      id: 'ai',
      name: 'Artificial Intelligence',
      subtitle: 'Neural architectures & synthetic reasoning',
      icon: Brain,
      tag: 'CORE DISCIPLINE',
    },
    {
      id: 'game-dev',
      name: 'Game Development',
      subtitle: 'Interactive worldbuilding & physics logic',
      icon: Gamepad2,
      tag: 'CREATIVE TECH',
    },
    {
      id: 'creative-arts',
      name: 'Creative Arts',
      subtitle: 'Freehand sketching & visual expression',
      icon: Palette,
      tag: 'EXPLORATION',
    },
    {
      id: 'filmmaking',
      name: 'Filmmaking',
      subtitle: 'Visual storytelling, framing & pacing',
      icon: Film,
      tag: 'CINEMATOGRAPHY',
    },
    {
      id: 'photography',
      name: 'Photography',
      subtitle: 'Composition, perspective & natural lighting',
      icon: Camera,
      tag: 'VISUAL EYE',
    },
    {
      id: 'music',
      name: 'Music',
      subtitle: 'Acoustic textures & emotional rhythms',
      icon: Music,
      tag: 'AUDIO-VISUAL',
    },
    {
      id: 'interactive-exp',
      name: 'Interactive Experiences',
      subtitle: 'Web experiences that provoke thought',
      icon: Compass,
      tag: 'DESIGN THINKING',
    },
    {
      id: 'tech-exploration',
      name: 'Technology Exploration',
      subtitle: 'Prototyping with bleeding-edge paradigms',
      icon: Radio,
      tag: 'CURIOSITY',
    },
  ];

  return (
    <section id="personality" className="relative py-28 bg-[#050605] border-t border-[#14200A] overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#B7FF00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-tech text-xs tracking-[0.25em] text-[#B7FF00] font-semibold">
                06 // PERSPECTIVE
              </span>
              <div className="h-[1px] w-12 bg-[#B7FF00]/40" />
              <span className="font-tech text-xs tracking-widest text-[#A1A1A1] uppercase">
                BEYOND ACADEMICS
              </span>
            </div>
            <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-tight text-white leading-[0.9]">
              PASSIONS &amp; <span className="text-[#B7FF00]">EXPLORATION.</span>
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
            The intellectual and artistic curiosities that sharpen my engineering intuition and influence every digital interface I build.
          </p>
        </div>

        {/* Dynamic Interest Grid (Integrated into layout, NOT a generic bullet list) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative bg-[#050605] border p-6 transition-all duration-300 flex flex-col justify-between group cursor-default ${
                  isHovered
                    ? 'border-[#B7FF00] bg-[#14200A]/30 shadow-[0_10px_25px_rgba(183,255,0,0.08)]'
                    : 'border-[#14200A] hover:border-[#B7FF00]/40'
                }`}
              >
                {/* Header index & tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-tech text-xs text-[#A1A1A1] group-hover:text-white">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] font-tech text-[#B7FF00] tracking-widest uppercase px-2 py-0.5 bg-[#14200A] border border-[#B7FF00]/30">
                    {item.tag}
                  </span>
                </div>

                {/* Icon & Title */}
                <div>
                  <div className="w-10 h-10 mb-4 border border-[#14200A] bg-[#050605] flex items-center justify-center text-[#A1A1A1] group-hover:text-[#B7FF00] group-hover:border-[#B7FF00]/50 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading text-2xl text-white tracking-wide group-hover:text-[#B7FF00] transition-colors mb-1.5">
                    {item.name}
                  </h3>

                  <p className="font-tech text-xs text-[#A1A1A1] leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Interactive bottom bar */}
                <div className="mt-6 pt-3 border-t border-[#14200A] flex items-center justify-between text-[10px] font-tech text-[#A1A1A1]">
                  <span>SYNAPSE // ACTIVE</span>
                  <Sparkles className="w-3 h-3 text-[#B7FF00] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

