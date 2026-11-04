import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { contentData } from '../data/content';
import { Download, ExternalLink, Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenCv,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = contentData[language].nav;

  const navLinks = [
    { href: '#sobre-mi', label: t.about },
    { href: '#experiencia', label: t.experience },
    { href: '#habilidades', label: t.skills },
    { href: '#atelier', label: t.atelier },
    { href: '#contacto', label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#EBDED0]/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element Brand wordmark */}
        <a
          href="#inicio"
          className="font-editorial text-2xl md:text-3xl font-semibold tracking-tight text-[#181615] hover:text-[#9E7D40] transition-colors whitespace-nowrap shrink-0"
        >
          SILVIA VELANDIA
        </a>

        {/* Zone 2: 4-5 single-line clean nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-widest uppercase font-medium text-[#3D3937]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#181615] relative py-1 transition-colors whitespace-nowrap shrink-0 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B89758] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Language switcher + Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Selector */}
          <div className="flex items-center border border-[#DECBB7] bg-[#F5EFEB] rounded-full p-0.5 text-xs font-medium text-[#3D3937]">
            <button
              type="button"
              onClick={() => onLanguageChange('es')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === 'es'
                  ? 'bg-[#181615] text-[#FAF8F5] shadow-xs'
                  : 'hover:text-[#181615]'
              }`}
              title="Cambiar a Español"
              aria-label="Cambiar idioma a Español"
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === 'en'
                  ? 'bg-[#181615] text-[#FAF8F5] shadow-xs'
                  : 'hover:text-[#181615]'
              }`}
              title="Switch to English"
              aria-label="Switch language to English"
            >
              EN
            </button>
          </div>

          {/* Download CV CTA */}
          <button
            type="button"
            onClick={onOpenCv}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#181615] bg-[#EBDED0] hover:bg-[#DECBB7] border border-[#DECBB7] rounded-full transition-all shadow-xs cursor-pointer whitespace-nowrap shrink-0"
          >
            <Download className="w-3.5 h-3.5 text-[#9E7D40]" />
            <span>{t.downloadCv}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#181615] hover:text-[#9E7D40] focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#DECBB7] bg-[#FAF8F5] px-6 py-5 shadow-lg space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-[#3D3937] hover:text-[#181615] py-1 border-b border-[#F5EFEB]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#181615] bg-[#EBDED0] border border-[#DECBB7] rounded-full"
            >
              <Download className="w-4 h-4 text-[#9E7D40]" />
              <span>{t.downloadCv}</span>
            </button>
            <a
              href="https://www.instagram.com/silviayvg/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#FAF8F5] bg-[#181615] rounded-full"
            >
              <ExternalLink className="w-4 h-4 text-[#DECBB7]" />
              <span>{t.instagram} (@silviayvg)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
