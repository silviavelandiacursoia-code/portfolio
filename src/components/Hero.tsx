import React from 'react';
import { Language } from '../types/portfolio';
import { contentData, contactDetails, portfolioImages } from '../data/content';
import { Download, ExternalLink, ArrowDownRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  language: Language;
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenCv }) => {
  const t = contentData[language].hero;

  return (
    <section id="inicio" className="pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#EBDED0]/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Split Screen 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Quiet Kicker & Location */}
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#9E7D40] font-semibold mb-4">
                <span>{t.kicker}</span>
                <span aria-hidden="true" className="text-[#DECBB7]">·</span>
                <span className="flex items-center gap-1 text-[#3D3937]">
                  <MapPin className="w-3.5 h-3.5 text-[#9E7D40]" />
                  <span>{t.location}</span>
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#181615] leading-[1.08] mb-6 text-balance">
                {t.displayName}
              </h1>

              {/* Sub-name / Full legal name note */}
              <div className="text-xs uppercase tracking-wider text-[#3D3937] font-medium mb-5">
                <span>{t.fullName}</span>
                <span aria-hidden="true" className="mx-2 text-[#DECBB7]">|</span>
                <span className="text-[#9E7D40]">{t.availability}</span>
              </div>

              {/* Lead Presentation */}
              <p className="text-base sm:text-lg text-[#3D3937] leading-relaxed max-w-2xl mb-8 font-light">
                {t.lead}
              </p>

              {/* Quote pill/callout banner with subtle gold hairline border */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#F5EFEB]/80 border border-[#EBDED0] mb-8">
                <p className="text-xs sm:text-sm italic text-[#262322] leading-relaxed font-serif">
                  {t.quoteHighlight}
                </p>
              </div>
            </div>

            {/* CTAs Action Cluster */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#atelier"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#FAF8F5] bg-[#181615] hover:bg-[#262322] rounded-full transition-all shadow-xs cursor-pointer"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowDownRight className="w-4 h-4 text-[#DECBB7]" />
              </a>

              <a
                href={contactDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-semibold text-[#181615] bg-[#FAF8F5] hover:bg-[#F5EFEB] border border-[#DECBB7] rounded-full transition-all shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#9E7D40]" />
                <span>Instagram ({contactDetails.instagramHandle})</span>
              </a>

              <button
                type="button"
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-semibold text-[#181615] bg-[#EBDED0] hover:bg-[#DECBB7] border border-[#DECBB7] rounded-full transition-all shadow-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#9E7D40]" />
                <span>{t.ctaCv}</span>
              </button>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-medium text-[#3D3937] hover:text-[#181615] transition-colors"
              >
                <span>{t.ctaSecondary}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Visual Container */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative group rounded-2xl overflow-hidden bg-[#F5EFEB] border border-[#EBDED0] shadow-sm">
              <img
                src={portfolioImages.hero}
                alt="Silvia Velandia en su atelier de moda"
                className="w-full h-[460px] sm:h-[540px] lg:h-[580px] object-cover object-top filter contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/80 via-transparent to-transparent opacity-80" />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-[#FAF8F5]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#DECBB7] mb-1">
                  <span>Atelier & Dirección Creativa</span>
                  <span aria-hidden="true">·</span>
                  <span>Silvia Velandia</span>
                </div>
                <p className="font-editorial text-lg text-[#FBF9F5] italic">
                  Diseño de autor, patronaje a medida y versatilidad profesional
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metric Strip Below the Hero Split */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-[#EBDED0] grid grid-cols-1 sm:grid-cols-3 gap-6">
          {t.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col border-l border-[#DECBB7] pl-4 py-1">
              <span className="font-editorial text-3xl sm:text-4xl font-semibold text-[#181615] tabular-nums">
                {metric.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#3D3937] mt-1 font-medium">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
