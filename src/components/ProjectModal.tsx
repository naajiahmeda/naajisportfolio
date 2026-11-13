import { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Cpu, Terminal } from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050605]/90 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#050605] border border-[#B7FF00]/50 overflow-y-auto shadow-[0_0_50px_rgba(183,255,0,0.15)] flex flex-col">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-[#050605]/95 backdrop-blur-md border-b border-[#14200A] p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-tech text-xs tracking-widest text-[#B7FF00] font-bold px-2.5 py-1 bg-[#14200A] border border-[#B7FF00]/40">
              {project.number}
            </span>
            <span className="font-tech text-xs tracking-widest text-[#A1A1A1] uppercase">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-[#14200A] text-white hover:text-[#B7FF00] hover:border-[#B7FF00] transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Title & Tagline */}
          <div>
            <h3 className="font-heading text-3xl sm:text-5xl tracking-wide text-white mb-3">
              {project.title}
            </h3>
            <p className="font-tech text-sm sm:text-base text-[#B7FF00]">
              {project.tagline}
            </p>
          </div>

          {/* Key Stats if available */}
          {project.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 border border-[#14200A] bg-[#14200A]/20">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-2xl sm:text-3xl text-white">
                    {stat.value}
                  </div>
                  <div className="font-tech text-[10px] sm:text-xs text-[#A1A1A1] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl text-white tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#B7FF00]" />
              PROJECT OVERVIEW
            </h4>
            <p className="text-[#A1A1A1] text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
            {project.detailedDescription && (
              <div className="space-y-3 pt-2 text-[#A1A1A1] text-sm sm:text-base leading-relaxed">
                {project.detailedDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl text-white tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B7FF00]" />
              TECHNICAL HIGHLIGHTS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-[#050605] border border-[#14200A] flex items-start gap-3"
                >
                  <span className="w-2 h-2 mt-1.5 bg-[#B7FF00] shrink-0" />
                  <span className="font-tech text-xs sm:text-sm text-white">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl text-white tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#B7FF00]" />
              TECHNOLOGIES DEPLOYED
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 bg-[#14200A]/60 border border-[#B7FF00]/40 text-[#B7FF00] font-tech text-xs tracking-wider font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links and Actions */}
          <div className="pt-6 border-t border-[#14200A] flex flex-wrap items-center justify-between gap-4">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B7FF00] text-[#050605] font-heading text-base tracking-wider font-bold hover:bg-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>VIEW PROFILE ON GITHUB</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <span className="font-tech text-xs text-[#A1A1A1]">
                Academic &amp; Research Portfolio Architecture
              </span>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-[#14200A] text-[#A1A1A1] hover:text-white font-tech text-xs tracking-widest uppercase transition-colors cursor-pointer"
            >
              CLOSE DETAILS [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
