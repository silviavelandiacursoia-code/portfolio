import React from 'react';
import { Language } from '../types/portfolio';
import { contentData } from '../data/content';
import { GraduationCap, Languages, Check, Sparkles } from 'lucide-react';

interface EducationProps {
  language: Language;
}

export const Education: React.FC<EducationProps> = ({ language }) => {
  const t = contentData[language].education;

  return (
    <section id="formacion" className="py-20 md:py-28 bg-[#F5EFEB]/40 border-b border-[#EBDED0]/80">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Degrees */}
          <div className="lg:col-span-8 space-y-6">
            {t.items.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#EBDED0] hover:border-[#DECBB7] transition-all shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#9E7D40] font-semibold block mb-1">
                      {item.institution}
                    </span>
                    <h3 className="font-editorial text-2xl font-semibold text-[#181615]">
                      {item.degree}
                    </h3>
                  </div>
                  <span className="font-editorial text-xl font-bold text-[#181615] tabular-nums self-start sm:self-auto bg-[#F5EFEB] px-3 py-1 rounded-full border border-[#DECBB7] text-xs">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#3D3937] leading-relaxed mb-4 font-light">
                  {item.description}
                </p>

                {item.highlights && (
                  <div className="pt-3 border-t border-[#EBDED0] space-y-1.5">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-[#262322]">
                        <Check className="w-3.5 h-3.5 text-[#9E7D40] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Languages & Availability Status */}
          <div className="lg:col-span-4 space-y-6">
            {/* Languages Card */}
            <div className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#EBDED0] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-[#F5EFEB] border border-[#DECBB7] flex items-center justify-center text-[#9E7D40]">
                  <Languages className="w-4 h-4" />
                </div>
                <h3 className="font-editorial text-2xl font-semibold text-[#181615]">
                  {t.languages.title}
                </h3>
              </div>

              <div className="space-y-4">
                {t.languages.items.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    className="flex items-center justify-between py-2 border-b border-[#F5EFEB] last:border-0"
                  >
                    <span className="text-sm font-medium text-[#181615]">
                      {lang.name}
                    </span>
                    <span className="text-xs font-semibold text-[#9E7D40] bg-[#F5EFEB] px-2.5 py-1 rounded-md border border-[#EBDED0]">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Badge Card */}
            <div className="p-8 rounded-2xl bg-[#181615] text-[#FAF8F5] shadow-xs">
              <span className="text-xs uppercase tracking-widest text-[#DECBB7] font-semibold block mb-2">
                Más Información
              </span>
              <h4 className="font-editorial text-2xl font-semibold mb-3 text-[#FBF9F5]">
                Disponibilidad Total
              </h4>
              <p className="text-xs text-[#DECBB7] leading-relaxed mb-6 font-light">
                Disposición inmediata para incorporación en puestos que valoren la polivalencia, proactividad y resolución.
              </p>
              <div className="pt-4 border-t border-[#3D3937] flex items-center gap-2 text-xs text-[#EBDED0]">
                <Check className="w-4 h-4 text-[#DECBB7]" />
                <span>Incorporación inmediata · Jornada flexible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
