import React, { useState } from 'react';
import { Language, AtelierItem } from '../types/portfolio';
import { contentData } from '../data/content';
import { Eye, X, Sparkles, Scissors, Layers, Check } from 'lucide-react';

interface AtelierProps {
  language: Language;
}

export const Atelier: React.FC<AtelierProps> = ({ language }) => {
  const t = contentData[language].atelier;
  const [activeFilter, setActiveFilter] = useState<'all' | 'vestidos' | 'complementos' | 'proceso'>('all');
  const [selectedItem, setSelectedItem] = useState<AtelierItem | null>(null);

  const filteredItems = t.items.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="atelier" className="py-20 md:py-28 bg-[#F5EFEB]/50 border-b border-[#EBDED0]/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
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

          <div className="atelier-proof hidden md:flex items-center gap-3 px-4 py-3 rounded-xl border border-[#d7b89b]/60 bg-[#fffaf4]/80 text-xs text-[#61483e] max-w-xs">
            <span className="w-2 h-2 rounded-full bg-[#a85b3d] shrink-0" />
            <span>{language === 'es' ? 'Cada diseño parte de una necesidad y se trabaja con intención.' : 'Every design starts with a need and is made with intention.'}</span>
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FBF9F5] border border-[#DECBB7] rounded-full self-start md:self-auto shadow-xs">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#181615] text-[#FAF8F5] shadow-xs'
                  : 'text-[#3D3937] hover:text-[#181615]'
              }`}
            >
              {t.filterAll}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('vestidos')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activeFilter === 'vestidos'
                  ? 'bg-[#181615] text-[#FAF8F5] shadow-xs'
                  : 'text-[#3D3937] hover:text-[#181615]'
              }`}
            >
              {t.filterDresses}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('complementos')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activeFilter === 'complementos'
                  ? 'bg-[#181615] text-[#FAF8F5] shadow-xs'
                  : 'text-[#3D3937] hover:text-[#181615]'
              }`}
            >
              {t.filterAccessories}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('proceso')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activeFilter === 'proceso'
                  ? 'bg-[#181615] text-[#FAF8F5] shadow-xs'
                  : 'text-[#3D3937] hover:text-[#181615]'
              }`}
            >
              {t.filterProcess}
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="atelier-gallery grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#FBF9F5] border border-[#EBDED0] hover:border-[#DECBB7] transition-all hover:shadow-md flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#EBDED0]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#181615]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF8F5]/90 text-[#181615] text-xs uppercase tracking-wider font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <Eye className="w-3.5 h-3.5 text-[#9E7D40]" />
                    <span>{t.viewDetails}</span>
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between grow">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9E7D40] font-semibold mb-2">
                    <span>{item.categoryLabel}</span>
                    <span aria-hidden="true" className="text-[#DECBB7]">·</span>
                    <span className="text-[#3D3937]">{item.year}</span>
                  </div>
                  <h3 className="font-editorial text-2xl font-semibold text-[#181615] mb-3 group-hover:text-[#9E7D40] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D3937] leading-relaxed mb-6 font-light">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EBDED0] flex items-center justify-between text-xs text-[#9E7D40] font-medium">
                  <span className="underline underline-offset-4">{t.viewDetails}</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Detailed View */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-[#181615]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#DECBB7] shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#FAF8F5]/90 text-[#181615] hover:bg-[#181615] hover:text-[#FAF8F5] transition-colors shadow-md"
                aria-label={t.closeModal}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Modal Image */}
                <div className="relative aspect-4/3 md:aspect-auto md:min-h-[440px] bg-[#EBDED0] overflow-hidden">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Modal Details */}
                <div className="p-8 sm:p-10 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9E7D40] font-semibold mb-2">
                      <span>{selectedItem.categoryLabel}</span>
                      <span aria-hidden="true" className="text-[#DECBB7]">·</span>
                      <span className="text-[#3D3937]">{selectedItem.year}</span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#181615] mb-4">
                      {selectedItem.title}
                    </h3>

                    <p className="text-sm text-[#3D3937] leading-relaxed mb-6 font-light">
                      {selectedItem.fullDescription}
                    </p>

                    {/* Materials & Fabrics */}
                    <div className="mb-6">
                      <span className="text-xs uppercase tracking-wider text-[#9E7D40] font-bold block mb-2">
                        {t.materialsLabel}
                      </span>
                      <ul className="space-y-1.5">
                        {selectedItem.materials.map((mat, mIdx) => (
                          <li key={mIdx} className="flex items-center gap-2 text-xs text-[#262322]">
                            <Layers className="w-3.5 h-3.5 text-[#9E7D40] shrink-0" />
                            <span>{mat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Techniques */}
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#9E7D40] font-bold block mb-2">
                        {t.techniquesLabel}
                      </span>
                      <ul className="space-y-1.5">
                        {selectedItem.techniques.map((tech, tIdx) => (
                          <li key={tIdx} className="flex items-center gap-2 text-xs text-[#262322]">
                            <Scissors className="w-3.5 h-3.5 text-[#9E7D40] shrink-0" />
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#EBDED0] flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-[#3D3937] font-medium">
                      Atelier Silvia Velandia
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedItem(null)}
                      className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#FAF8F5] bg-[#181615] hover:bg-[#262322] rounded-full transition-colors"
                    >
                      {t.closeModal}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
