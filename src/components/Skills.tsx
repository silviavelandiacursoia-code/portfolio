import React from 'react';
import { Language } from '../types/portfolio';
import { contentData } from '../data/content';
import {
  Sparkles,
  CheckCircle2,
  CalendarCheck,
  HeartHandshake,
  BarChart3,
  Compass,
  Lightbulb,
} from 'lucide-react';

interface SkillsProps {
  language: Language;
}

export const Skills: React.FC<SkillsProps> = ({ language }) => {
  const t = contentData[language].skills;

  const iconMap: Record<string, React.ElementType> = {
    creatividad: Sparkles,
    organizacion: CalendarCheck,
    'atencion-cliente': HeartHandshake,
    gestion: BarChart3,
    adaptacion: Compass,
    'resolucion-problemas': Lightbulb,
  };

  return (
    <section id="habilidades" className="py-20 md:py-28 border-b border-[#EBDED0]/80">
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

        {/* 6-Core Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((skill) => {
            const Icon = iconMap[skill.id] || Sparkles;
            return (
              <div
                key={skill.id}
                className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#EBDED0] hover:border-[#DECBB7] transition-all hover:shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#F5EFEB] border border-[#DECBB7] flex items-center justify-center text-[#9E7D40] group-hover:bg-[#181615] group-hover:text-[#FAF8F5] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-editorial text-2xl font-semibold text-[#181615] mb-1">
                    {skill.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-[#9E7D40] font-medium block mb-3">
                    {skill.tagline}
                  </span>

                  <p className="text-xs sm:text-sm text-[#3D3937] leading-relaxed mb-6 font-light">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EBDED0]">
                  <span className="text-[11px] uppercase tracking-wider text-[#9E7D40] font-semibold block mb-1">
                    Aplicación práctica:
                  </span>
                  <p className="text-xs text-[#262322] leading-normal font-medium">
                    {skill.application}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
