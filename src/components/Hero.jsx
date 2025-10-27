import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-rose-50 via-pink-50 to-rose-100">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-50/70 via-pink-50/40 to-transparent" />
        <h1 className="font-display relative text-4xl font-semibold tracking-tight text-rose-900 sm:text-5xl md:text-6xl">
          Glow Clinic
        </h1>
        <p className="mt-4 max-w-2xl text-base text-rose-800 sm:text-lg">
          Modern skin, hair, and aesthetic treatments crafted with a gentle touch. Feel confident in your own glow.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#services" className="rounded-full bg-rose-500 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-300">
            Explore Services
          </a>
          <a href="#contact" className="rounded-full bg-white/70 px-6 py-3 text-sm font-medium text-rose-700 backdrop-blur-sm transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-rose-200">
            Book a Consult
          </a>
        </div>
      </div>
    </section>
  );
}
