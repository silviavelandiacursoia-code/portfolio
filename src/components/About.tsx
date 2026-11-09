import React from 'react';
import { Language } from '../types/portfolio';
import { contentData, portfolioImages } from '../data/content';
import { Palette, Clock, Wrench, RefreshCw, Quote } from 'lucide-react';

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const t = contentData[language].about;

  const pillarIcons = [
    Palette,
    Clock,
    Wrench,
    RefreshCw,
  ];

  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-[#F5EFEB]/50 border-b border-[#EBDED0]/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest text-[#9E7D40] font-semibold block mb-3">
            {t.kicker}
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181615] leading-tight text-balance">
            {t.title}
          </h2>
        </div>

        {/* Verbatim CV Bio in Editorial Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#FBF9F5] border border-[#EBDED0] shadow-xs mb-14 relative overflow-hidden">
          <Quote className="absolute top-6 right-6 w-12 h-12 text-[#EBDED0]/60 pointer-events-none" />
          <div className="relative z-10 grid lg:grid-cols-[1fr_220px] gap-8 items-start">
            <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest text-[#9E7D40] font-semibold mb-3 block">
              Extracto del Currículum Vitae Oficial
            </span>
            <p className="font-editorial text-xl sm:text-2xl text-[#181615] leading-relaxed italic mb-6">
              "{t.bio}"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#EBDED0] text-sm text-[#3D3937] leading-relaxed">
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
            </div>
            </div>
            <figure className="about-credential">
              <img src={portfolioImages.diploma} alt="Silvia Velandia con su diploma de Diseñador de Modas" className="w-full aspect-[4/5] object-cover object-center rounded-xl border border-[#DECBB7]" />
              <figcaption className="mt-3 text-[10px] uppercase tracking-[.16em] leading-relaxed text-[#9E7D40]">Formación especializada en diseño de modas</figcaption>
            </figure>
          </div>
        </div>

        {/* The 4 Strategic Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || Palette;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#FBF9F5] border border-[#EBDED0] hover:border-[#DECBB7] transition-all hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#F5EFEB] border border-[#DECBB7] flex items-center justify-center text-[#9E7D40] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-editorial text-xl font-semibold text-[#181615] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D3937] leading-relaxed">
                    {pillar.description}
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
