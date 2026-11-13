'use client';

import { useState } from 'react';
import { ArrowUpRight, Activity, Layers, ScanFace, Terminal } from 'lucide-react';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'kathakali-mudra-navarasa',
      number: 'PROJECT 01',
      title: 'AI-POWERED KATHAKALI MUDRA & NAVARASA RECOGNITION',
      category: 'COMPUTER VISION / DEEP LEARNING',
      tagline: 'Dual Hand & Face Landmark Extraction with Real-Time Cultural Interpretation',
      description:
        'An AI-powered computer vision project designed to recognize 24 major Kathakali mudras and the nine Navarasas through images, videos and webcam input. The system uses MediaPipe hand and face landmarks for feature extraction, TensorFlow/Keras classification models and a Streamlit interface to deliver predictions and culturally relevant interpretations.',
      detailedDescription: [
        'Developed a complete computer-vision project concept and end-to-end application workflow that captures fine-grained classical Indian dance expressions and gestures.',
        'Extracted hand landmarks (21 distinct joints per hand) and facial mesh points using MediaPipe to generate structured coordinate datasets resilient to background variations.',
        'Trained and evaluated deep neural classification networks with TensorFlow/Keras, utilizing label encoders to map continuous motion vectors into cultural mudras and rasa classes.',
        'Integrated live predictions into an interactive Streamlit dashboard featuring confidence meters, analysis logs, and CSV export functionality for research auditing.',
      ],
      technologies: ['Python', 'MediaPipe', 'TensorFlow / Keras', 'OpenCV', 'Streamlit'],
      highlights: [
        'Hand gesture recognition (24 major Kathakali mudras)',
        'Facial expression analysis (Nine classical Navarasas)',
        'Landmark extraction and coordinate preprocessing',
        'Prediction visualization and CSV export logging',
      ],
      stats: [
        { label: 'Mudras Supported', value: '24' },
        { label: 'Navarasas Classified', value: '9' },
        { label: 'Framework', value: 'TensorFlow' },
        { label: 'Interface', value: 'Streamlit' },
      ],
      githubUrl: 'https://github.com/naajiahmeda',
    },
    {
      id: 'ml-data-processing-workflows',
      number: 'PROJECT 02',
      title: 'PYTHON-BASED ML & DATA PROCESSING WORKFLOWS',
      category: 'DATA ENGINEERING / MODEL INFERENCE',
      tagline: 'High-Throughput Landmark Preprocessing & Feature Normalization Pipeline',
      description:
        'Worked on image and landmark dataset preparation, cleaning and preprocessing for machine learning applications. Explored feature normalization, model inference and integrating trained models into usable applications.',
      detailedDescription: [
        'Curated and standardized raw image collections and spatial coordinate matrices, creating clean, balanced datasets ready for deep learning training routines.',
        'Processed an extensive mudra dataset containing more than 11,000 labelled records, applying normalization, coordinate scaling, and outlier elimination.',
        'Engineered vectorized data transformations with NumPy and Pandas, accelerating feature extraction pipelines and ensuring reproducible train/test partitions.',
        'Serialized and bundled model artifacts using Joblib, ensuring minimal-latency inference pipelines when loaded into runtime production environments.',
      ],
      technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-image', 'Joblib'],
      highlights: [
        'Processed a mudra dataset containing more than 11,000 labelled records',
        'Image and landmark dataset preparation and sanitization',
        'Coordinate normalization and spatial feature scaling',
        'Model inference optimization and artifact persistence',
      ],
      stats: [
        { label: 'Records Processed', value: '11,000+' },
        { label: 'Data Stack', value: 'NumPy/Pandas' },
        { label: 'Preprocessing', value: 'Scikit-image' },
        { label: 'Persistence', value: 'Joblib' },
      ],
      githubUrl: 'https://github.com/naajiahmeda',
    },
  ];

  return (
    <section id="projects" className="relative py-28 bg-[#050605] border-t border-[#14200A] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#14200A] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-tech text-xs tracking-[0.25em] text-[#B7FF00] font-semibold">
                03 // WORK &amp; RESEARCH
              </span>
              <div className="h-[1px] w-12 bg-[#B7FF00]/40" />
              <span className="font-tech text-xs tracking-widest text-[#A1A1A1] uppercase">
                FEATURED IMPLEMENTATIONS
              </span>
            </div>
            <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-tight text-white leading-[0.9]">
              ENGINEERED <span className="text-[#B7FF00]">PROJECTS.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/naajiahmeda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#14200A] bg-[#050605] hover:border-[#B7FF00] hover:text-[#B7FF00] text-xs font-tech tracking-wider text-[#A1A1A1] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GITHUB PROFILE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Project Cards (Large, distinctive, editorial format) */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-[#050605] border border-[#14200A] p-6 sm:p-10 transition-all duration-300 hover:border-[#B7FF00]/60 hover:shadow-[0_20px_60px_rgba(183,255,0,0.06)]"
            >
              {/* Corner accent markers */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                <div className="absolute transform rotate-45 bg-[#14200A] group-hover:bg-[#B7FF00] transition-colors duration-300 w-16 h-16 -top-8 -right-8" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Project Details */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Category & Index */}
                  <div className="flex items-center gap-3">
                    <span className="font-tech text-xs tracking-widest text-[#B7FF00] font-bold px-2.5 py-1 bg-[#14200A] border border-[#B7FF00]/40">
                      {project.number}
                    </span>
                    <span className="font-tech text-xs tracking-widest text-[#A1A1A1] uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white tracking-wide group-hover:text-[#B7FF00] transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="font-tech text-sm text-[#B7FF00]/90 font-medium tracking-wide">
                    {project.tagline}
                  </p>

                  {/* Description (Exact prompt text) */}
                  <p className="font-sans text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-2 pt-2">
                    <div className="font-tech text-[11px] text-[#A1A1A1] tracking-widest uppercase mb-1">
                      KEY ACHIEVEMENTS
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-tech text-white">
                          <span className="w-1.5 h-1.5 bg-[#B7FF00] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#14200A]/60 border border-[#B7FF00]/30 text-[#B7FF00] font-tech text-xs tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#14200A]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-6 py-3 bg-[#B7FF00] text-[#050605] font-heading text-base tracking-wider font-bold hover:bg-white transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-[0_0_15px_rgba(183,255,0,0.2)]"
                    >
                      <span>VIEW DETAILED BREAKDOWN</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <a
                      href="https://github.com/naajiahmeda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 border border-[#14200A] text-[#A1A1A1] hover:text-white hover:border-[#B7FF00]/40 font-tech text-xs tracking-wider transition-colors flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>CODEBASE</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Generative Visual Treatment / Architecture Visualizer */}
                <div className="lg:col-span-5 bg-[#050605] border border-[#14200A] p-6 relative overflow-hidden flex flex-col justify-between min-h-[360px]">
                  {/* Cyber Grid Background */}
                  <div className="absolute inset-0 bg-cyber-grid-dense opacity-40 pointer-events-none" />

                  {/* Interactive UI Header */}
                  <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#14200A] text-xs font-tech text-[#A1A1A1]">
                    <span className="flex items-center gap-2 text-white">
                      <Terminal className="w-3.5 h-3.5 text-[#B7FF00]" />
                      <span>{index === 0 ? 'CV_LANDMARK_ENGINE' : 'DATA_PIPELINE_NORM'}</span>
                    </span>
                    <span className="text-[#B7FF00] font-bold">ACTIVE</span>
                  </div>

                  {/* Schematic Content based on project */}
                  <div className="relative z-10 my-auto py-6">
                    {index === 0 ? (
                      /* Kathakali Mudra Visualizer */
                      <div className="space-y-4">
                        <div className="relative h-44 border border-[#14200A] bg-[#14200A]/20 flex items-center justify-center p-4">
                          {/* Simulated Landmarks wireframe */}
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full border border-dashed border-[#B7FF00]/50 flex items-center justify-center animate-pulse">
                              <ScanFace className="w-12 h-12 text-[#B7FF00]" />
                            </div>
                            <div className="absolute top-2 left-4 text-[10px] font-tech text-[#B7FF00]">
                              POINTS: 21_HAND + 468_FACE
                            </div>
                            <div className="absolute bottom-2 right-4 text-[10px] font-tech text-white">
                              INFERENCE: 24 MUDRAS / 9 RASAS
                            </div>
                            {/* Target crosshairs */}
                            <div className="absolute top-1/2 left-2 w-4 h-[1px] bg-[#B7FF00]" />
                            <div className="absolute top-1/2 right-2 w-4 h-[1px] bg-[#B7FF00]" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-[11px] font-tech">
                          <div className="p-2 border border-[#14200A] bg-[#050605]">
                            <span className="text-[#A1A1A1] block">INPUT</span>
                            <span className="text-white">Webcam / Video / Image</span>
                          </div>
                          <div className="p-2 border border-[#14200A] bg-[#050605]">
                            <span className="text-[#A1A1A1] block">OUTPUT</span>
                            <span className="text-[#B7FF00]">Mudra + Rasa + CSV</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* ML Data Pipeline Visualizer */
                      <div className="space-y-4">
                        <div className="relative h-44 border border-[#14200A] bg-[#14200A]/20 flex flex-col justify-center p-5">
                          <div className="flex items-center justify-between text-xs font-tech mb-2">
                            <span className="text-[#A1A1A1]">DATASET VOLUME</span>
                            <span className="text-[#B7FF00] font-bold">11,000+ RECORDS</span>
                          </div>
                          {/* Simulated pipeline stages */}
                          <div className="space-y-2">
                            <div className="w-full bg-[#14200A] h-2">
                              <div className="bg-[#B7FF00] h-2 w-[100%]" />
                            </div>
                            <div className="flex justify-between text-[10px] font-tech text-[#A1A1A1]">
                              <span>RAW EXTRACTION</span>
                              <span>NORMALIZATION</span>
                              <span>BALANCED</span>
                            </div>
                          </div>

                          <div className="mt-4 pt-3 border-t border-[#14200A] flex items-center justify-between text-[11px] font-tech">
                            <span className="text-white">COORDINATE SCALING</span>
                            <span className="text-[#B7FF00]">SCIKIT-IMAGE / NUMPY</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-[11px] font-tech">
                          <div className="p-2 border border-[#14200A] bg-[#050605]">
                            <span className="text-[#A1A1A1] block">PERSISTENCE</span>
                            <span className="text-white">Joblib Serialization</span>
                          </div>
                          <div className="p-2 border border-[#14200A] bg-[#050605]">
                            <span className="text-[#A1A1A1] block">STRUCTURE</span>
                            <span className="text-[#B7FF00]">Vectorized Tensors</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom live status */}
                  <div className="relative z-10 pt-3 border-t border-[#14200A] flex items-center justify-between text-[11px] font-tech text-[#A1A1A1]">
                    <span>STATUS: VALIDATED</span>
                    <span className="flex items-center gap-1.5 text-white">
                      <Activity className="w-3.5 h-3.5 text-[#B7FF00]" />
                      READY TO EXPAND
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Expandable Slot for Future Projects */}
          <div className="border border-dashed border-[#14200A] p-8 text-center bg-[#050605]/50 flex flex-col items-center justify-center space-y-3">
            <div className="w-10 h-10 border border-[#B7FF00]/40 flex items-center justify-center text-[#B7FF00]">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-heading text-2xl text-white tracking-wider">
              MORE PROJECTS IN DEVELOPMENT
            </h4>
            <p className="font-tech text-xs text-[#A1A1A1] max-w-md">
              Currently engineering interactive real-time experiences, game development prototypes, and advanced deep learning models.
            </p>
          </div>
        </div>
      </div>

      {/* Expandable Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
