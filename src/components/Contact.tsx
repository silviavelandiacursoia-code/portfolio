import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { contentData, contactDetails } from '../data/content';
import {
  Mail,
  Phone,
  Instagram,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  Download,
  Send,
  MessageSquare,
} from 'lucide-react';

interface ContactProps {
  language: Language;
  onOpenCv: () => void;
}

export const Contact: React.FC<ContactProps> = ({ language, onOpenCv }) => {
  const t = contentData[language].contact;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactDetails.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Contacto profesional desde portfolio — ${formData.name || 'Empresa'}`
    );
    const mailtoBody = encodeURIComponent(
      `Hola Silvia,\n\nMi nombre es: ${formData.name}\nEmail de contacto: ${formData.email}\n\nMensaje:\n${formData.message}\n`
    );
    window.location.href = `mailto:${contactDetails.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contacto" className="py-20 md:py-28 border-b border-[#EBDED0]/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest text-[#9E7D40] font-semibold block mb-3">
            {t.kicker}
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181615] leading-tight text-balance mb-4">
            {t.title}
          </h2>
          <p className="text-base text-[#3D3937] font-light max-w-2xl">
            {t.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Badges */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy button */}
            <div className="p-7 rounded-2xl bg-[#FBF9F5] border border-[#EBDED0] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F5EFEB] border border-[#DECBB7] flex items-center justify-center text-[#9E7D40]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#9E7D40] font-semibold block">
                      {t.emailLabel}
                    </span>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="text-base font-semibold text-[#181615] hover:text-[#9E7D40] transition-colors break-all"
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EBDED0] flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#3D3937] hover:text-[#181615] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">{t.copiedText}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#9E7D40]" />
                      <span>{t.copyButton}</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-xs uppercase tracking-wider font-semibold text-[#9E7D40] hover:text-[#181615] transition-colors"
                >
                  Enviar correo →
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-7 rounded-2xl bg-[#FBF9F5] border border-[#EBDED0] shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#F5EFEB] border border-[#DECBB7] flex items-center justify-center text-[#9E7D40]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#9E7D40] font-semibold block">
                    {t.phoneLabel}
                  </span>
                  <a
                    href={`tel:${contactDetails.phone}`}
                    className="text-lg font-semibold text-[#181615] hover:text-[#9E7D40] transition-colors tabular-nums"
                  >
                    {contactDetails.phoneFormatted}
                  </a>
                </div>
              </div>
              <div className="pt-3 border-t border-[#EBDED0] flex items-center justify-between text-xs text-[#3D3937]">
                <span>Llamada directa o WhatsApp</span>
                <a
                  href={`https://wa.me/34${contactDetails.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#9E7D40] hover:text-[#181615]"
                >
                  Abrir WhatsApp →
                </a>
              </div>
            </div>

            {/* Instagram Card & Button */}
            <div className="p-7 rounded-2xl bg-[#FBF9F5] border border-[#EBDED0] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#F5EFEB] border border-[#DECBB7] flex items-center justify-center text-[#9E7D40]">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#9E7D40] font-semibold block">
                    {t.instagramLabel}
                  </span>
                  <a
                    href={contactDetails.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-[#181615] hover:text-[#9E7D40] transition-colors"
                  >
                    {contactDetails.instagramHandle}
                  </a>
                </div>
              </div>
              <a
                href={contactDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-semibold text-[#FAF8F5] bg-[#181615] hover:bg-[#262322] rounded-full transition-all shadow-xs"
              >
                <ExternalLink className="w-4 h-4 text-[#DECBB7]" />
                <span>{t.instagramButton}</span>
              </a>
            </div>

            {/* Location & Availability Status */}
            <div className="p-7 rounded-2xl bg-[#F5EFEB] border border-[#DECBB7] text-xs text-[#3D3937] space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9E7D40] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#181615] block uppercase tracking-wider text-[11px]">
                    {t.locationLabel}:
                  </span>
                  <span>{contactDetails.location}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-[#DECBB7] flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#181615] block uppercase tracking-wider text-[11px]">
                    {t.availabilityLabel}:
                  </span>
                  <span className="text-emerald-800 font-medium">
                    {t.availabilityValue}
                  </span>
                </div>
              </div>
            </div>

            {/* Download CV CTA */}
            <button
              type="button"
              onClick={onOpenCv}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#181615] bg-[#EBDED0] hover:bg-[#DECBB7] border border-[#DECBB7] rounded-full transition-all shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#9E7D40]" />
              <span>{t.cvButton}</span>
            </button>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FBF9F5] border border-[#EBDED0] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-[#F5EFEB] border border-[#DECBB7] flex items-center justify-center text-[#9E7D40]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h3 className="font-editorial text-2xl font-semibold text-[#181615]">
                  {t.messageTitle}
                </h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#3D3937] mb-2">
                      {t.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Ana Martínez (Dpto. Selección)"
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#DECBB7] rounded-xl focus:border-[#9E7D40] focus:ring-1 focus:ring-[#9E7D40] outline-hidden text-[#181615]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#3D3937] mb-2">
                      {t.formEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@empresa.com"
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#DECBB7] rounded-xl focus:border-[#9E7D40] focus:ring-1 focus:ring-[#9E7D40] outline-hidden text-[#181615]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#3D3937] mb-2">
                    {t.formSubject} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ej. Oportunidad laboral / Entrevista profesional"
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#DECBB7] rounded-xl focus:border-[#9E7D40] focus:ring-1 focus:ring-[#9E7D40] outline-hidden text-[#181615]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#3D3937] mb-2">
                    {t.formMessage} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe brevemente el puesto o la propuesta..."
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#DECBB7] rounded-xl focus:border-[#9E7D40] focus:ring-1 focus:ring-[#9E7D40] outline-hidden text-[#181615]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#FAF8F5] bg-[#181615] hover:bg-[#262322] rounded-full transition-all shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#DECBB7]" />
                  <span>{t.sendButton}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
