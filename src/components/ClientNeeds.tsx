import React from 'react';
import { Language } from '../types/portfolio';
import { contentData } from '../data/content';
import { ArrowRight, BadgeCheck, HeartHandshake, Sparkles } from 'lucide-react';

interface ClientNeedsProps {
  language: Language;
}

export const ClientNeeds: React.FC<ClientNeedsProps> = ({ language }) => {
  const isSpanish = language === 'es';

  const cards = isSpanish
    ? [
        { icon: Sparkles, title: 'Una pieza que te represente', text: 'Diseño personalizado para celebraciones, eventos y momentos en los que quieres sentirte única.' },
        { icon: HeartHandshake, title: 'Acompañamiento cercano', text: 'Escucha, asesoría y decisiones compartidas desde la primera idea hasta el último acabado.' },
        { icon: BadgeCheck, title: 'Calidad que se nota', text: 'Patronaje, selección de materiales y confección cuidada para lograr una prenda bella y duradera.' },
      ]
    : [
        { icon: Sparkles, title: 'A piece that represents you', text: 'Personalised design for celebrations, events and moments when you want to feel truly unique.' },
        { icon: HeartHandshake, title: 'Close guidance', text: 'Listening, styling advice and shared decisions from the first idea to the final finish.' },
        { icon: BadgeCheck, title: 'Quality you can feel', text: 'Pattern making, considered materials and careful construction for a beautiful, lasting garment.' },
      ];

  return (
    <section className="client-needs py-16 md:py-20 border-b border-[#d7b89b]/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[.9fr_1.6fr] gap-10 lg:gap-16 items-start">
          <div>
            <span className="text-xs uppercase tracking-[.22em] text-[#9a5a3b] font-bold block mb-3">
              {isSpanish ? 'Diseño pensado para ti' : 'Design made for you'}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#2a1c18] leading-tight mb-4">
              {isSpanish ? 'Tu necesidad se convierte en una pieza real.' : 'Your need becomes a real, wearable piece.'}
            </h2>
            <p className="text-sm leading-relaxed text-[#61483e] max-w-md">
              {isSpanish
                ? 'No se trata solo de elegir un vestido. Se trata de encontrar una solución que encaje contigo, con tu cuerpo, tu ocasión y tu forma de vivirla.'
                : 'It is not only about choosing a dress. It is about finding a solution that fits you, your body, your occasion and the way you want to experience it.'}
            </p>
            <a href="#atelier" className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[.16em] font-bold text-[#7a3f2b] hover:text-[#2a1c18] transition-colors">
              {isSpanish ? 'Ver diseños y proceso' : 'See designs and process'} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {cards.map(({ icon: Icon, title, text }) => (
              <article key={title} className="needs-card p-5 rounded-2xl border border-[#d7b89b]/60 bg-[#fffaf4]/70">
                <div className="w-10 h-10 rounded-full bg-[#f2ddcb] text-[#8b4a32] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-xl text-[#2a1c18] leading-tight mb-2">{title}</h3>
                <p className="text-xs leading-relaxed text-[#6f554a]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
