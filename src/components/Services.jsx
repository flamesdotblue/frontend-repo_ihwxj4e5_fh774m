import React from 'react';
import { Sparkles, Activity, Zap, Leaf } from 'lucide-react';

const services = [
  {
    title: 'Skin Treatments',
    desc: 'Hydrating facials, chemical peels, and glow-boosting therapies tailored to your skin.',
    icon: Sparkles,
  },
  {
    title: 'Hair Care',
    desc: 'Scalp detox, hair rejuvenation, and strengthening rituals for healthy, shiny hair.',
    icon: Leaf,
  },
  {
    title: 'Weight Management',
    desc: 'Non-invasive contouring and holistic guidance to support your wellness goals.',
    icon: Activity,
  },
  {
    title: 'Laser Treatments',
    desc: 'Advanced laser hair reduction and skin resurfacing with minimal downtime.',
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-rose-900 sm:text-4xl">Our Services</h2>
          <p className="mt-3 text-rose-700">Thoughtfully curated treatments for healthy, radiant skin and hair.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-rose-100 bg-rose-50/50 p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-700 ring-1 ring-rose-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-rose-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-rose-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
