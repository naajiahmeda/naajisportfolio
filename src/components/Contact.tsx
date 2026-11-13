'use client';

import { useState, type FormEvent } from 'react';
import {
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const emailAddress = 'naajiahmeda@gmail.com';
  const githubUrl = 'https://github.com/naajiahmeda';
  const linkedinUrl = 'https://www.linkedin.com/in/naajiahmeda';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formSubject || `Portfolio Inquiry from ${formName || 'Collaborator'}`
    );
    const body = encodeURIComponent(
      `Hello Naaji,\n\nName: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}\n`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 bg-[#050605] border-t border-[#14200A] overflow-hidden">
      {/* Background cyber grid & glow */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B7FF00]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#14200A] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Index */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-tech text-xs tracking-[0.25em] text-[#B7FF00] font-semibold">
            07 // CONNECT
          </span>
          <div className="h-[1px] w-12 bg-[#B7FF00]/40" />
          <span className="font-tech text-xs tracking-widest text-[#A1A1A1] uppercase">
            GET IN TOUCH
          </span>
        </div>

        {/* Large Required Heading & Supporting Text */}
        <div className="mb-16">
          <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white leading-[0.9] mb-6">
            HAVE SOMETHING <span className="text-[#B7FF00]">IN MIND?</span>
          </h2>
          <p className="max-w-2xl font-sans text-lg sm:text-xl text-[#A1A1A1] leading-relaxed">
            Whether it's an interesting project, a creative collaboration or just a conversation
            about technology, feel free to reach out.
          </p>
        </div>

        {/* Two-Column Grid: Contact Actions + Direct Message Dispatcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Primary Links and Bold Action */}
          <div className="lg:col-span-6 space-y-8">
            {/* Prominent Required LET'S TALK Button */}
            <div className="space-y-4">
              <a
                href={`mailto:${emailAddress}?subject=Project%20Collaboration`}
                className="group w-full inline-flex items-center justify-between px-8 py-6 bg-[#B7FF00] text-[#050605] font-heading text-2xl sm:text-3xl tracking-wider font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(183,255,0,0.3)]"
              >
                <span>LET'S TALK ↗</span>
                <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <div className="flex items-center justify-between p-4 bg-[#050605] border border-[#14200A]">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#B7FF00]" />
                  <span className="font-tech text-xs sm:text-sm text-white select-all">
                    {emailAddress}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 border border-[#14200A] hover:border-[#B7FF00] text-[#A1A1A1] hover:text-[#B7FF00] font-tech text-xs tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#B7FF00]" />
                      <span className="text-[#B7FF00]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels (Functional and new tab) */}
            <div className="space-y-4 pt-2">
              <div className="font-tech text-xs text-[#A1A1A1] tracking-widest uppercase">
                DIGITAL PRESENCE &amp; PROFILES
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* GitHub */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-[#050605] border border-[#14200A] hover:border-[#B7FF00]/70 hover:bg-[#14200A]/30 transition-all duration-200 group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 border border-[#14200A] bg-[#050605] text-[#A1A1A1] group-hover:text-[#B7FF00] group-hover:border-[#B7FF00]/40 transition-colors">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-heading text-lg text-white group-hover:text-[#B7FF00] transition-colors">
                        GITHUB
                      </div>
                      <div className="font-tech text-xs text-[#A1A1A1]">@naajiahmeda</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A1A1] group-hover:text-[#B7FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* LinkedIn */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-[#050605] border border-[#14200A] hover:border-[#B7FF00]/70 hover:bg-[#14200A]/30 transition-all duration-200 group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 border border-[#14200A] bg-[#050605] text-[#A1A1A1] group-hover:text-[#B7FF00] group-hover:border-[#B7FF00]/40 transition-colors">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-heading text-lg text-white group-hover:text-[#B7FF00] transition-colors">
                        LINKEDIN
                      </div>
                      <div className="font-tech text-xs text-[#A1A1A1]">/in/naajiahmeda</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A1A1] group-hover:text-[#B7FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Location & Availability Note */}
            <div className="p-4 border border-[#14200A] bg-[#14200A]/20 flex items-center gap-3 text-xs font-tech text-[#A1A1A1]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B7FF00] shadow-[0_0_8px_#B7FF00] animate-pulse" />
              <span>Available for engineering internships, technical roles &amp; creative projects.</span>
            </div>
          </div>

          {/* Right Column: Direct Interactive Inquiry Composer */}
          <div className="lg:col-span-6 bg-[#050605] border border-[#14200A] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#14200A]">
              <span className="flex items-center gap-2 font-tech text-xs tracking-widest text-white uppercase font-bold">
                <MessageSquare className="w-4 h-4 text-[#B7FF00]" />
                DIRECT INQUIRY DISPATCHER
              </span>
              <span className="text-[10px] font-tech text-[#B7FF00]">CLIENT-SIDE DIRECT</span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-tech text-[#A1A1A1] uppercase tracking-wider mb-1.5">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 bg-[#050605] border border-[#14200A] text-white font-tech text-sm focus:outline-none focus:border-[#B7FF00] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-tech text-[#A1A1A1] uppercase tracking-wider mb-1.5">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-2.5 bg-[#050605] border border-[#14200A] text-white font-tech text-sm focus:outline-none focus:border-[#B7FF00] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-tech text-[#A1A1A1] uppercase tracking-wider mb-1.5">
                  SUBJECT / PURPOSE
                </label>
                <input
                  type="text"
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder="e.g. AI Model Collaboration / Creative Project"
                  className="w-full px-4 py-2.5 bg-[#050605] border border-[#14200A] text-white font-tech text-sm focus:outline-none focus:border-[#B7FF00] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-tech text-[#A1A1A1] uppercase tracking-wider mb-1.5">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  required
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Tell me about what you'd like to build or discuss..."
                  className="w-full px-4 py-2.5 bg-[#050605] border border-[#14200A] text-white font-tech text-sm focus:outline-none focus:border-[#B7FF00] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-transparent border border-[#B7FF00] text-[#B7FF00] hover:bg-[#B7FF00] hover:text-[#050605] font-heading text-lg tracking-wider font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(183,255,0,0.1)]"
              >
                <span>OPEN EMAIL DRAFT</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
