'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Creative } from '@/components/Creative';
import { Education } from '@/components/Education';
import { Personality } from '@/components/Personality';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'creative', 'education', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050605] text-[#FFFFFF] font-sans selection:bg-[#B7FF00] selection:text-[#050605] relative overflow-x-clip">
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero / Homepage with User Reference Image */}
        <Hero />

        {/* 2. Editorial About Section */}
        <About />

        {/* 3. Technical Skills Section */}
        <Skills />

        {/* 4. Projects Section with Expandable View */}
        <Projects />

        {/* 5. Creative Section (Beyond the Code) */}
        <Creative />

        {/* 6. Education Section (Minimal Timeline) */}
        <Education />

        {/* 7. Personality & Interests Section */}
        <Personality />

        {/* 8. Bold Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
