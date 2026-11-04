import React from 'react';
import { Language } from '../types/portfolio';
import { contentData, contactDetails } from '../data/content';
import { ArrowUp, Instagram, Mail, Phone } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = contentData[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181615] text-[#FAF8F5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#3D3937]">
          <div>
            <span className="font-editorial text-3xl font-bold tracking-tight text-[#FAF8F5] block mb-2">
              SILVIA VELANDIA
            </span>
            <p className="text-xs uppercase tracking-widest text-[#DECBB7] font-medium">
              {t.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider text-[#DECBB7]">
            <a
              href={contactDetails.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#FAF8F5] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#B89758]" />
              <span>Instagram ({contactDetails.instagramHandle})</span>
            </a>
            <a
              href={`mailto:${contactDetails.email}`}
              className="flex items-center gap-1.5 hover:text-[#FAF8F5] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#B89758]" />
              <span>{contactDetails.email}</span>
            </a>
            <a
              href={`tel:${contactDetails.phone}`}
              className="flex items-center gap-1.5 hover:text-[#FAF8F5] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B89758]" />
              <span>{contactDetails.phoneFormatted}</span>
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#DECBB7] hover:text-[#FAF8F5] transition-colors cursor-pointer group"
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-4 h-4 text-[#B89758] transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DECBB7]/70 font-light">
          <p>© {new Date().getFullYear()} Silvia Yasmile Velandia Gomez. {t.rights}</p>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider text-[#DECBB7]">
            <span>Toledo / Madrid Sur, España</span>
            <span aria-hidden="true">·</span>
            <span>Disponibilidad Total</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
