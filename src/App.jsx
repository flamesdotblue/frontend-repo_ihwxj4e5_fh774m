import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Guides from './components/Guides';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-rose-50 text-rose-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-rose-100 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-lg font-semibold tracking-tight text-rose-900">Glow Clinic</a>
          <nav className="hidden gap-6 text-sm text-rose-800 sm:flex">
            <a href="#services" className="hover:text-rose-600">Services</a>
            <a href="#guides" className="hover:text-rose-600">Tips & FAQs</a>
            <a href="#contact" className="hover:text-rose-600">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-rose-500 px-4 py-2 text-xs font-medium text-white shadow-sm transition-colors hover:bg-rose-600 sm:text-sm">Book</a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Guides />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-rose-100 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-rose-700">© {new Date().getFullYear()} Glow Clinic. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-rose-700">
            <a href="#services" className="hover:text-rose-600">Services</a>
            <a href="#guides" className="hover:text-rose-600">Tips</a>
            <a href="#contact" className="hover:text-rose-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
