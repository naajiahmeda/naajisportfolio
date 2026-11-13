import { useState, type ElementType } from 'react';
import {
  Code,
  Brain,
  Eye,
  Boxes,
  Cpu,
  Layers,
  Terminal,
  CheckCircle2,
} from 'lucide-react';

interface SkillGroup {
  id: string;
  category: string;
  icon: ElementType;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const skillGroups: SkillGroup[] = [
    {
      id: 'programming',
      category: 'PROGRAMMING',
      icon: Code,
      description: 'Primary computational language for AI pipelines, scripting and backend services.',
      skills: [{ name: 'Python', highlight: true }],
    },
    {
      id: 'ai-ml',
      category: 'AI & MACHINE LEARNING',
      icon: Brain,
      description: 'Core architectures, neural networks and predictive modeling techniques.',
      skills: [
        { name: 'Machine Learning', highlight: true },
        { name: 'Deep Learning', highlight: true },
        { name: 'CNN / LSTM concepts', highlight: true },
        { name: 'Model Training & Evaluation' },
      ],
    },
    {
      id: 'vision',
      category: 'COMPUTER VISION',
      icon: Eye,
      description: 'Real-time spatial perception, biometric landmarking and image transformations.',
      skills: [
        { name: 'MediaPipe', highlight: true },
        { name: 'OpenCV', highlight: true },
        { name: 'Hand & Face Landmark Extraction', highlight: true },
        { name: 'Image Preprocessing' },
      ],
    },
    {
      id: 'frameworks',
      category: 'FRAMEWORKS & LIBRARIES',
      icon: Boxes,
      description: 'Scientific computing, tensor manipulation and mathematical toolkits.',
      skills: [
        { name: 'TensorFlow / Keras', highlight: true },
        { name: 'NumPy', highlight: true },
        { name: 'Pandas', highlight: true },
        { name: 'Scikit-image' },
        { name: 'Joblib' },
      ],
    },
    {
      id: 'app-dev',
      category: 'APPLICATION DEVELOPMENT',
      icon: Cpu,
      description: 'Interactive web prototyping, microservices and relational data persistence.',
      skills: [
        { name: 'Streamlit', highlight: true },
        { name: 'Flask', highlight: true },
        { name: 'SQLAlchemy' },
      ],
    },
    {
      id: 'additional',
      category: 'ADDITIONAL EXPOSURE',
      icon: Layers,
      description: 'Semantic vector spaces, state-of-the-art NLP models and dense indexing.',
      skills: [
        { name: 'Hugging Face Transformers', highlight: true },
        { name: 'Embeddings', highlight: true },
        { name: 'FAISS' },
      ],
    },
  ];

  const filteredGroups =
    activeTab === 'all'
      ? skillGroups
      : skillGroups.filter((group) => group.id === activeTab);

  return (
    <section id="skills" className="relative py-28 bg-[#050605] border-t border-[#14200A] overflow-hidden">
      {/* Background cyber grid & ambient lighting */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#B7FF00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Metadata */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-tech text-xs tracking-[0.25em] text-[#B7FF00] font-semibold">
                02 // CAPABILITIES
              </span>
              <div className="h-[1px] w-12 bg-[#B7FF00]/40" />
              <span className="font-tech text-xs tracking-widest text-[#A1A1A1] uppercase">
                STACK &amp; TOOLING
              </span>
            </div>
            <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-tight text-white leading-[0.9]">
              TECHNICAL <span className="text-[#B7FF00]">SKILLS.</span>
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
            Organized around practical engineering pipelines: from raw dataset curation and computer vision landmarking to neural model training and deployment.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-tech tracking-wider uppercase transition-all duration-200 shrink-0 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#B7FF00] text-[#050605] font-bold shadow-[0_0_12px_rgba(183,255,0,0.3)]'
                : 'bg-[#050605] border border-[#14200A] text-[#A1A1A1] hover:text-white hover:border-[#B7FF00]/40'
            }`}
          >
            ALL CATEGORIES ({skillGroups.reduce((acc, g) => acc + g.skills.length, 0)})
          </button>
          {skillGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveTab(g.id)}
              className={`px-4 py-2 text-xs font-tech tracking-wider uppercase transition-all duration-200 shrink-0 cursor-pointer ${
                activeTab === g.id
                  ? 'bg-[#B7FF00] text-[#050605] font-bold shadow-[0_0_12px_rgba(183,255,0,0.3)]'
                  : 'bg-[#050605] border border-[#14200A] text-[#A1A1A1] hover:text-white hover:border-[#B7FF00]/40'
              }`}
            >
              {g.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className="group relative bg-[#050605] border border-[#14200A] p-7 transition-all duration-300 hover:border-[#B7FF00]/60 hover:shadow-[0_10px_30px_rgba(183,255,0,0.06)] flex flex-col justify-between"
              >
                {/* Top Corner cyber indicator */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                  <div className="absolute transform rotate-45 bg-[#14200A] group-hover:bg-[#B7FF00] transition-colors duration-300 w-12 h-12 -top-6 -right-6" />
                </div>

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-[#14200A] border border-[#B7FF00]/30 text-[#B7FF00] group-hover:border-[#B7FF00] group-hover:scale-105 transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl tracking-wider text-white group-hover:text-[#B7FF00] transition-colors">
                        {group.category}
                      </h3>
                      <span className="font-tech text-[10px] tracking-widest text-[#A1A1A1] uppercase block">
                        {group.skills.length} COMPETENCIES
                      </span>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="font-sans text-xs text-[#A1A1A1] mb-6 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Skills Badges / Pills (No arbitrary percentages) */}
                <div className="space-y-2 pt-4 border-t border-[#14200A]">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 bg-[#050605] border border-[#14200A] hover:border-[#B7FF00]/50 hover:bg-[#14200A]/30 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-none bg-[#B7FF00]" />
                        <span className="font-tech text-xs sm:text-sm text-white font-medium">
                          {skill.name}
                        </span>
                      </div>
                      {skill.highlight && (
                        <span className="text-[10px] font-tech text-[#B7FF00] tracking-wider uppercase px-2 py-0.5 bg-[#14200A] border border-[#B7FF00]/30">
                          CORE
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Terminal Micro-Banner */}
        <div className="mt-12 p-5 border border-[#14200A] bg-[#050605] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-tech text-xs text-[#A1A1A1]">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#B7FF00]" />
            <span className="text-white">FOCUS:</span>
            <span>Computer Vision Landmark Extraction &amp; Deep Learning Inference</span>
          </div>
          <div className="flex items-center gap-2 text-[#B7FF00]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Honest, verifiable academic &amp; project foundation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
