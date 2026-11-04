import React from 'react';
import { Language } from '../types/portfolio';
import { contentData, contactDetails } from '../data/content';
import { Printer, Download, X, Mail, Phone, MapPin, Instagram, CheckCircle2 } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const t = contentData[language].cvModal;
  const exp = contentData[language].experience;
  const edu = contentData[language].education;
  const about = contentData[language].about;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#181615]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        className="relative max-w-4xl w-full bg-[#FFFFFF] text-[#181615] rounded-2xl shadow-2xl overflow-hidden my-6 border border-[#DECBB7] max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar (hidden on print) */}
        <div className="no-print p-4 sm:px-8 sm:py-4 bg-[#FBF9F5] border-b border-[#EBDED0] flex items-center justify-between gap-4 shrink-0">
          <div>
            <h2 className="font-editorial text-xl font-bold text-[#181615]">
              {t.title}
            </h2>
            <p className="text-xs text-[#3D3937] hidden sm:block">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#FAF8F5] bg-[#181615] hover:bg-[#262322] rounded-full transition-all shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#DECBB7]" />
              <span>{t.printAction}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#3D3937] hover:text-[#181615] rounded-full hover:bg-[#EBDED0] transition-colors"
              aria-label={t.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="overflow-y-auto p-6 sm:p-10 font-sans space-y-8 bg-white print:p-0 print:space-y-6">
          {/* Resume Header */}
          <div className="border-b-2 border-[#181615] pb-6">
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-[#181615] mb-2">
              Silvia Yasmile Velandia Gomez
            </h1>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#9E7D40] mb-4">
              Diseño de Modas · Operaciones Logísticas · Atención al Cliente
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#262322] pt-2 border-t border-[#E5E5E5]">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#9E7D40]" />
                <span className="font-medium">{contactDetails.phoneFormatted}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#9E7D40]" />
                <span>{contactDetails.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#9E7D40]" />
                <span>{contactDetails.location}</span>
              </div>
            </div>
          </div>

          {/* Sobre Mí Section */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#181615] border-b border-[#E5E5E5] pb-1.5 mb-3">
              {t.sections.about}
            </h3>
            <p className="text-xs sm:text-sm text-[#262322] leading-relaxed">
              {about.bio}
            </p>
          </div>

          {/* Experiencia Laboral Section */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#181615] border-b border-[#E5E5E5] pb-1.5 mb-4">
              {t.sections.experience}
            </h3>

            <div className="space-y-6">
              {exp.items.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-xs">
                    <div>
                      <span className="font-bold text-sm text-[#181615] uppercase tracking-wide">
                        {item.role}
                      </span>
                      <span className="text-[#3D3937] font-semibold block sm:inline sm:ml-2">
                        — {item.company}
                      </span>
                    </div>
                    <span className="text-[#666666] font-medium italic mt-0.5 sm:mt-0">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs text-[#3D3937] leading-relaxed">
                    {item.summary}
                  </p>

                  <ul className="space-y-1 pl-4 list-disc text-xs text-[#262322]">
                    {item.highlights.map((h, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experiencia Adicional */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#181615] border-b border-[#E5E5E5] pb-1.5 mb-2">
              {t.sections.additionalExp}
            </h3>
            <p className="text-xs text-[#262322]">
              <strong className="text-[#181615]">Auxiliar de administrativa:</strong> {exp.additionalRole.description}
            </p>
          </div>

          {/* Datos Académicos & Idiomas (2 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#181615] border-b border-[#E5E5E5] pb-1.5 mb-3">
                {t.sections.education}
              </h3>
              <div className="space-y-3">
                {edu.items.map((item) => (
                  <div key={item.id} className="text-xs">
                    <div className="flex items-center justify-between">
                      <strong className="text-[#181615]">{item.degree}</strong>
                      <span className="text-[#666666] font-medium">{item.period}</span>
                    </div>
                    <p className="text-[#3D3937] text-[11px]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#181615] border-b border-[#E5E5E5] pb-1.5 mb-3">
                {t.sections.languages}
              </h3>
              <div className="space-y-2 text-xs text-[#262322]">
                <div className="flex justify-between border-b border-[#F0F0F0] py-1">
                  <span>Castellano</span>
                  <span className="font-semibold text-[#181615]">Nativo</span>
                </div>
                <div className="flex justify-between border-b border-[#F0F0F0] py-1">
                  <span>Inglés</span>
                  <span className="font-semibold text-[#181615]">Básico</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E5E5E5]">
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#181615] mb-1">
                  {t.sections.info}
                </h4>
                <p className="text-xs text-[#262322]">
                  • Disponibilidad total e inmediata para incorporación laboral.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="no-print p-4 bg-[#FBF9F5] border-t border-[#EBDED0] flex items-center justify-between shrink-0">
          <span className="text-xs text-[#666666]">
            {t.subtitle}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#FAF8F5] bg-[#181615] hover:bg-[#262322] rounded-full transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#DECBB7]" />
              <span>{t.printAction}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#3D3937] hover:text-[#181615] transition-colors"
            >
              {t.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
