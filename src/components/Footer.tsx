'use client';

import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050605] border-t border-[#14200A] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#14200A]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#B7FF00] shadow-[0_0_8px_#B7FF00]" />
            <span className="font-heading text-xl tracking-wider text-white">
              NAAJI AHMED ALI
            </span>
            <span className="font-tech text-xs text-[#A1A1A1] hidden sm:inline">
              // PORTFOLIO V2.0
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-xs font-tech">
            <a
              href="https://github.com/naajiahmeda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#14200A] text-[#A1A1A1] hover:text-[#B7FF00] hover:border-[#B7FF00]/50 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/naajiahmeda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#14200A] text-[#A1A1A1] hover:text-[#B7FF00] hover:border-[#B7FF00]/50 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:naajiahmeda@gmail.com"
              className="p-2 border border-[#14200A] text-[#A1A1A1] hover:text-[#B7FF00] hover:border-[#B7FF00]/50 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2 border border-[#14200A] hover:border-[#B7FF00] text-white hover:text-[#B7FF00] transition-colors cursor-pointer ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom microcopy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-tech text-[#A1A1A1]">
          <div>
            AI &amp; MACHINE LEARNING STUDENT • DEVELOPER • CREATIVE
          </div>
          <div>
            DESIGNED &amp; DEVELOPED WITH ORIGINAL IDENTITY • PURE BLACK &amp; NEON GREEN
          </div>
        </div>
      </div>
    </footer>
  );
};
