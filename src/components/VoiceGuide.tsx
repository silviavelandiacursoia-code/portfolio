import React, { useEffect, useRef, useState } from 'react';
import { Image, Mic, MicOff, Volume2, X } from 'lucide-react';
import { Language } from '../types/portfolio';
import { contactDetails, portfolioImages } from '../data/content';

type SpeechRecognitionResultEventLike = { results: ArrayLike<ArrayLike<{ transcript: string }>> };
type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  onresult: ((event: SpeechRecognitionResultEventLike) => void) | null;
  start: () => void;
  abort: () => void;
};
type SpeechRecognitionConstructorLike = new () => SpeechRecognitionLike;

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructorLike;
    webkitSpeechRecognition?: SpeechRecognitionConstructorLike;
  }
}

interface VoiceGuideProps { language: Language; }

export const VoiceGuide: React.FC<VoiceGuideProps> = ({ language }) => {
  const isSpanish = language === 'es';
  const [open, setOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [message, setMessage] = useState(isSpanish
    ? 'Hola, soy Silvia. Puedo orientarte por el atelier, los diseños y el proceso de confección.'
    : 'Hello, I am Silvia. I can guide you through the atelier, designs and making process.');
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  useEffect(() => () => {
    window.speechSynthesis.cancel();
    recognitionRef.current?.abort();
  }, []);

  useEffect(() => {
    setMessage(isSpanish
      ? 'Hola, soy Silvia. Puedo orientarte por el atelier, los diseños y el proceso de confección.'
      : 'Hello, I am Silvia. I can guide you through the atelier, designs and making process.');
  }, [isSpanish]);

  const speak = (text: string) => {
    setMessage(text);
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = isSpanish ? 'es-ES' : 'en-US';
    utterance.rate = 0.96;
    window.speechSynthesis.speak(utterance);
  };

  const answer = (question: string) => {
    const q = question.toLowerCase();
    if (isSpanish) {
      if (q.includes('vest') || q.includes('diseñ') || q.includes('prend')) return 'Puedes ver mis prendas reales en Mi Atelier. Allí encontrarás vestidos, accesorios y detalles del proceso.';
      if (q.includes('proceso') || q.includes('patron') || q.includes('cómo')) return 'Trabajo desde la idea y el patronaje hasta las pruebas, la confección y los acabados finales.';
      if (q.includes('contact') || q.includes('cita') || q.includes('encarg')) return `Puedes escribirme en ${contactDetails.email} o abrir la sección de contacto para contarme tu idea.`;
      return 'Puedo ayudarte a conocer mis diseños, mi proceso de trabajo o la forma de contactar conmigo.';
    }
    if (q.includes('dress') || q.includes('design') || q.includes('garment')) return 'You can see my real pieces in My Atelier, including dresses, accessories and process details.';
    if (q.includes('process') || q.includes('pattern') || q.includes('how')) return 'I work from the initial idea and pattern making through fittings, construction and final finishes.';
    if (q.includes('contact') || q.includes('appointment') || q.includes('order')) return `You can email me at ${contactDetails.email} or open the contact section to share your idea.`;
    return 'I can help you explore my designs, my process or how to contact me.';
  };

  const listen = () => {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) {
      speak(isSpanish ? 'Tu navegador no permite el micrófono. Puedes utilizar las opciones de abajo.' : 'Your browser does not support the microphone. You can use the options below.');
      return;
    }
    const recognition = new Recognition();
    recognition.lang = isSpanish ? 'es-ES' : 'en-US';
    recognition.interimResults = false;
    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = () => {
      setListening(false);
      speak(isSpanish ? 'No he podido escucharte. Prueba de nuevo o elige una opción.' : 'I could not hear you. Try again or choose an option.');
    };
    recognition.onresult = (event) => speak(answer(event.results[0][0].transcript));
    recognitionRef.current = recognition;
    recognition.start();
  };

  return (
    <section className="voice-guide py-14 md:py-16 border-b border-[#d7b89b]/40">
      <div className="max-w-7xl mx-auto px-6">
        {!open ? (
          <button type="button" onClick={() => { setOpen(true); speak(message); }} className="voice-intro w-full text-left rounded-2xl border border-[#b98567]/50 bg-[#2d211d] text-[#fffaf4] p-5 sm:p-6 flex items-center gap-4 hover:-translate-y-1 transition-transform">
            <img src={portfolioImages.hero} alt="Silvia Velandia" className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#d7b89b]" />
            <span className="flex-1"><span className="block text-[10px] uppercase tracking-[.2em] text-[#e8cbb8] mb-1">{isSpanish ? 'Guía del atelier' : 'Atelier guide'}</span><span className="font-editorial text-2xl">{isSpanish ? '¿Quieres que te guíe?' : 'Would you like a guide?'}</span></span>
            <Volume2 className="w-5 h-5 text-[#e8cbb8]" />
          </button>
        ) : (
          <div className="voice-panel rounded-2xl border border-[#d7b89b]/70 bg-[#fffaf4] p-5 sm:p-7 grid md:grid-cols-[auto_1fr_auto] gap-5 items-center">
            <img src={portfolioImages.hero} alt="Silvia Velandia" className="w-20 h-20 rounded-full object-cover object-top border-2 border-[#b98567]" />
            <div><div className="flex items-center justify-between gap-3 mb-2"><span className="text-[10px] uppercase tracking-[.2em] font-bold text-[#9a5a3b]">{isSpanish ? 'Silvia te orienta' : 'Silvia guides you'}</span><button type="button" onClick={() => { setOpen(false); window.speechSynthesis.cancel(); recognitionRef.current?.abort(); }} aria-label={isSpanish ? 'Cerrar guía' : 'Close guide'} className="text-[#61483e] hover:text-[#2d211d]"><X className="w-4 h-4" /></button></div><p className="text-sm text-[#61483e] leading-relaxed">{message}</p></div>
            <div className="flex flex-wrap md:flex-col gap-2">
              <button type="button" onClick={() => speak(isSpanish ? 'Te doy la bienvenida. Explora las piezas reales del atelier y, si tienes una idea, escríbeme para convertirla en un diseño a tu medida.' : 'Welcome. Explore the real atelier pieces and, if you have an idea, contact me to turn it into a made-to-measure design.')} className="voice-action"><Volume2 className="w-4 h-4" />{isSpanish ? 'Escuchar guía' : 'Listen'}</button>
              <button type="button" onClick={listen} className="voice-action voice-action-dark">{listening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}{listening ? (isSpanish ? 'Escuchando…' : 'Listening…') : (isSpanish ? 'Hablar' : 'Speak')}</button>
            </div>
            <div className="md:col-span-3 flex flex-wrap gap-2 pt-2 border-t border-[#ead7c8]"><button type="button" onClick={() => speak(answer(isSpanish ? 'diseños' : 'designs'))} className="voice-topic">{isSpanish ? 'Ver diseños' : 'See designs'}</button><button type="button" onClick={() => speak(answer(isSpanish ? 'proceso' : 'process'))} className="voice-topic">{isSpanish ? 'Conocer el proceso' : 'The process'}</button><button type="button" onClick={() => speak(answer(isSpanish ? 'contacto' : 'contact'))} className="voice-topic">{isSpanish ? 'Contactar' : 'Contact'}</button></div>
          </div>
        )}
      </div>
    </section>
  );
};
