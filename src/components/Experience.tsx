import React from 'react';
import { Language } from '../types/portfolio';
import { contentData } from '../data/content';
import { Briefcase, Calendar, MapPin, CheckCircle, FileText } from 'lucide-react';

interface ExperienceProps {
  language: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ language }) => {
  const t = contentData[language].experience;

  return (
    <section id="experiencia" className="py-20 md:py-28 border-b border-[#EBDED0]/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest text-[#9E7D40] font-semibold block mb-3">
            {t.kicker}
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181615] leading-tight text-balance mb-4">
            {t.title}
          </h2>
          <p className="text-base text-[#3D3937] font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {t.items.map((item, index) => (
            <div
              key={item.id}
              className="p-8 sm:p-10 rounded-2xl bg-[#FBF9F5] border border-[#EBDED0] hover:border-[#DECBB7] transition-all shadow-xs"
            >
              <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9E7D40] font-semibold mb-2">
                    <span>{item.company}</span>
                    <span aria-hidden="true" className="text-[#DECBB7]">·</span>
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#181615]">
                    {item.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-[#3D3937] bg-[#F5EFEB] px-3.5 py-1.5 rounded-full border border-[#DECBB7] shrink-0 self-start">
                  <Calendar className="w-3.5 h-3.5 text-[#9E7D40]" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#3D3937] leading-relaxed mb-6 font-light">
                {item.summary}
              </p>

              {/* Highlights from CV */}
              <div className="mb-6 space-y-2.5">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#9E7D40] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#262322] leading-normal">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skills applied - clean unboxed typography with dot separator */}
              <div className="pt-4 border-t border-[#EBDED0] flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#3D3937]">
                <span className="font-semibold uppercase tracking-wider text-[#9E7D40]">
                  Competencias:
                </span>
                {item.skillsApplied.map((skill, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <span className="font-medium text-[#181615]">{skill}</span>
                    {sIdx < item.skillsApplied.length - 1 && (
                      <span aria-hidden="true" className="text-[#DECBB7]">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Experience Callout: Auxiliar de administrativa */}
        <div className="mt-8 p-6 sm:p-8 rounded-xl bg-[#F5EFEB]/60 border border-[#EBDED0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#DECBB7] flex items-center justify-center text-[#9E7D40] shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#9E7D40] font-semibold block mb-1">
                {t.additionalRole.title}
              </span>
              <h4 className="font-editorial text-xl font-semibold text-[#181615]">
                {t.additionalRole.role}
              </h4>
              <p className="text-xs sm:text-sm text-[#3D3937] mt-1 max-w-2xl">
                {t.additionalRole.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
