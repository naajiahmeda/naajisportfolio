import React from 'react';
import { Sparkles, Code2, Compass, Layers } from 'lucide-react';

export const About: React.FC = () => {
  const identityTags = [
    { label: 'TECH ENTHUSIAST', icon: Code2 },
    { label: 'CREATIVE THINKER', icon: Sparkles },
    { label: 'CONSTANTLY EXPERIMENTING', icon: Compass },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#050605] border-t border-[#14200A] overflow-hidden">
      {/* Background grid & subtle ambient glow */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#14200A]/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Index & Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-tech text-xs tracking-[0.25em] text-[#B7FF00] font-semibold">
              01 // PROFILE
            </span>
            <div className="h-[1px] w-12 bg-[#B7FF00]/40" />
          </div>
          <span className="font-tech text-xs tracking-widest text-[#B7FF00] uppercase font-medium">
            AI &amp; MACHINE LEARNING STUDENT | DEVELOPER | CREATIVE
          </span>
        </div>

        {/* Massive Editorial Heading */}
        <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white mb-16 leading-[0.9]">
          A LITTLE <span className="text-[#B7FF00]">ABOUT ME.</span>
        </h2>

        {/* Grid Layout: Main Narrative + Identity Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Editorial Narrative (Exact words requested) */}
          <div className="lg:col-span-8 space-y-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-relaxed">
              I'm <span className="text-[#B7FF00] font-medium">Naaji Ahmed Ali</span>, an Artificial
              Intelligence and Machine Learning undergraduate with an interest in building practical
              applications, exploring emerging technologies and experimenting with creative ideas.
            </p>

            <div className="space-y-6 text-[#A1A1A1] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I enjoy working across different fields, from machine learning and computer vision
                to web development and interactive experiences.
              </p>

              <p>
                Beyond technology, I'm someone who enjoys creating. I like exploring different forms
                of art and visual expression, constantly experimenting with new ideas and learning
                through the process.
              </p>

              <div className="p-6 border-l-2 border-[#B7FF00] bg-[#14200A]/30">
                <p className="text-white text-lg sm:text-xl font-medium italic leading-relaxed">
                  "I'm particularly interested in the intersection of technology, creativity and
                  problem-solving."
                </p>
              </div>
            </div>

            {/* The 3 Required Visual Identity Tags */}
            <div className="pt-4">
              <div className="text-xs font-tech text-[#A1A1A1] tracking-widest uppercase mb-4">
                CORE ATTRIBUTES
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {identityTags.map((tag) => {
                  const Icon = tag.icon;
                  return (
                    <div
                      key={tag.label}
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#050605] border border-[#B7FF00]/50 hover:border-[#B7FF00] hover:bg-[#14200A]/50 transition-all duration-200 group cursor-default"
                    >
                      <Icon className="w-4 h-4 text-[#B7FF00] group-hover:scale-110 transition-transform" />
                      <span className="font-tech text-xs sm:text-sm font-semibold tracking-wider text-white group-hover:text-[#B7FF00]">
                        {tag.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Snapshot / Editorial Sidebar */}
          <div className="lg:col-span-4 border border-[#14200A] bg-[#050605]/80 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#14200A]">
              <Layers className="w-4 h-4 text-[#B7FF00]" />
              <span className="font-tech text-xs tracking-widest text-white uppercase font-bold">
                QUICK SNAPSHOT
              </span>
            </div>

            <div className="space-y-4 font-tech text-xs sm:text-sm">
              <div>
                <span className="text-[#A1A1A1] block text-[11px] uppercase tracking-wider mb-1">
                  DEGREE &amp; SEMESTER
                </span>
                <span className="text-white font-medium">B.E. in AI &amp; ML — 7th Semester</span>
              </div>

              <div>
                <span className="text-[#A1A1A1] block text-[11px] uppercase tracking-wider mb-1">
                  INSTITUTION
                </span>
                <span className="text-white font-medium">
                  Yenepoya Institute of Tech (VTU)
                </span>
              </div>

              <div>
                <span className="text-[#A1A1A1] block text-[11px] uppercase tracking-wider mb-1">
                  CURRENT CGPA
                </span>
                <span className="text-[#B7FF00] font-bold text-base">7.62</span>
              </div>

              <div>
                <span className="text-[#A1A1A1] block text-[11px] uppercase tracking-wider mb-1">
                  DUAL PASSION
                </span>
                <span className="text-white">AI Engineering + Digital Arts &amp; Game Dev</span>
              </div>

              <div>
                <span className="text-[#A1A1A1] block text-[11px] uppercase tracking-wider mb-1">
                  LOCATION ROOTS
                </span>
                <span className="text-white">Mangalore, Karnataka &amp; Doha, Qatar</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#14200A]">
              <div className="flex items-center gap-2 text-xs font-tech text-[#A1A1A1]">
                <span className="w-2 h-2 rounded-full bg-[#B7FF00] shadow-[0_0_6px_#B7FF00]" />
                <span>Open for collaborative projects &amp; engineering opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

