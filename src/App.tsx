/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Atelier } from './components/Atelier';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [language, setLanguage] = useState<Language>('es');
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1D1B1A] flex flex-col font-sans selection:bg-[#EBDED0] selection:text-[#181615]">
      {/* Editorial Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Main Content Area */}
      <main className="grow">
        <Hero language={language} onOpenCv={() => setIsCvOpen(true)} />
        <About language={language} />
        <Experience language={language} />
        <Education language={language} />
        <Skills language={language} />
        <Atelier language={language} />
        <Contact language={language} onOpenCv={() => setIsCvOpen(true)} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Official Curriculum Vitae Printable Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        language={language}
      />
    </div>
  );
}
