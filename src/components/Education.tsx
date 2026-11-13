import { GraduationCap, MapPin, Calendar } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  affiliation?: string;
  location: string;
  period: string;
  scoreLabel: string;
  score: string;
  statusBadge?: string;
  notes?: string[];
}

export const Education = () => {
  const educationData: EducationItem[] = [
    {
      degree: 'BACHELOR OF ENGINEERING — ARTIFICIAL INTELLIGENCE & MACHINE LEARNING',
      institution: 'Yenepoya Institute of Technology',
      affiliation: 'Affiliated with Visvesvaraya Technological University (VTU)',
      location: 'Moodbidri, Mangalore, Karnataka',
      period: 'Expected Graduation: 2027',
      scoreLabel: 'CGPA',
      score: '7.62',
      statusBadge: 'CURRENTLY IN 7TH SEMESTER',
      notes: [
        'Rigorous coursework in Machine Learning, Deep Neural Networks, Natural Language Processing, and Computer Vision.',
        'Hands-on laboratory research and academic projects focusing on MediaPipe gesture pipelines and OpenCV.',
      ],
    },
    {
      degree: 'CLASS XII (SENIOR SECONDARY)',
      institution: 'Ideal Indian School',
      location: 'Doha, Qatar',
      period: 'Graduation Year: 2023',
      scoreLabel: 'SCORE',
      score: '75%',
      notes: [
        'Focus on Science & Mathematics curriculum, analytical foundations and computing principles.',
      ],
    },
    {
      degree: 'CLASS X (SECONDARY)',
      institution: 'Ideal Indian School',
      location: 'Doha, Qatar',
      period: 'Graduation Year: 2021',
      scoreLabel: 'SCORE',
      score: '77%',
      notes: ['Foundational academics in STEM, logical reasoning and early programming exploration.'],
    },
  ];

  return (
    <section id="education" className="relative py-28 bg-[#050605] border-t border-[#14200A] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#14200A]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-tech text-xs tracking-[0.25em] text-[#B7FF00] font-semibold">
              05 // ACADEMICS
            </span>
            <div className="h-[1px] w-12 bg-[#B7FF00]/40" />
            <span className="font-tech text-xs tracking-widest text-[#A1A1A1] uppercase">
              LEARNING PATHWAY
            </span>
          </div>

          <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-tight text-white leading-[0.9]">
            ACADEMIC <span className="text-[#B7FF00]">TIMELINE.</span>
          </h2>
        </div>

        {/* Minimal Vertical Timeline */}
        <div className="relative border-l-2 border-[#14200A] ml-3 sm:ml-6 pl-6 sm:pl-12 space-y-12">
          {educationData.map((item) => (
            <div key={item.degree} className="relative group">
              {/* Timeline neon node */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 bg-[#050605] border-2 border-[#14200A] group-hover:border-[#B7FF00] group-hover:shadow-[0_0_12px_#B7FF00] transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#B7FF00]" />
              </div>

              {/* Card Container */}
              <div className="bg-[#050605] border border-[#14200A] p-6 sm:p-8 transition-all duration-300 hover:border-[#B7FF00]/60 hover:shadow-[0_10px_30px_rgba(183,255,0,0.05)]">
                {/* Status Badge & Period */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    {item.statusBadge && (
                      <span className="px-3 py-1 bg-[#14200A] border border-[#B7FF00]/40 text-[#B7FF00] font-tech text-xs font-semibold tracking-wider">
                        {item.statusBadge}
                      </span>
                    )}
                    <span className="font-tech text-xs text-[#A1A1A1] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B7FF00]" />
                      {item.period}
                    </span>
                  </div>

                  {/* Score Pill */}
                  <div className="flex items-center gap-2 px-3 py-1 border border-[#14200A] bg-[#050605]">
                    <span className="font-tech text-xs text-[#A1A1A1] uppercase">{item.scoreLabel}:</span>
                    <span className="font-tech text-sm font-bold text-[#B7FF00]">{item.score}</span>
                  </div>
                </div>

                {/* Degree Title */}
                <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-wide group-hover:text-[#B7FF00] transition-colors mb-2">
                  {item.degree}
                </h3>

                {/* Institution & Affiliation */}
                <div className="space-y-1 mb-4">
                  <div className="text-white text-base font-medium flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#B7FF00]" />
                    <span>{item.institution}</span>
                  </div>

                  {item.affiliation && (
                    <div className="text-xs sm:text-sm text-[#A1A1A1] pl-6 font-tech">
                      {item.affiliation}
                    </div>
                  )}

                  <div className="text-xs text-[#A1A1A1] pl-6 flex items-center gap-1.5 font-tech">
                    <MapPin className="w-3 h-3 text-[#B7FF00]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Notes */}
                {item.notes && (
                  <div className="pt-3 border-t border-[#14200A] space-y-1.5">
                    {item.notes.map((note, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-tech text-[#A1A1A1]">
                        <span className="w-1 h-1 bg-[#B7FF00] mt-1.5 shrink-0" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
