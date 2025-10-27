import React, { useState } from 'react';
import { Sparkles, Sun, Droplets } from 'lucide-react';

const tips = [
  {
    icon: Sun,
    title: 'Daily SPF',
    text: 'Apply a broad-spectrum sunscreen every morning, even on cloudy days.',
  },
  {
    icon: Droplets,
    title: 'Hydration',
    text: 'Drink water throughout the day and use gentle, hydrating cleansers.',
  },
  {
    icon: Sparkles,
    title: 'Night Repair',
    text: 'Incorporate antioxidants and nourish your skin barrier while you sleep.',
  },
];

const faqs = [
  {
    q: 'Which facial is right for me?',
    a: 'We recommend a quick consultation—our specialists will assess your skin type and goals to tailor the ideal treatment.'
  },
  {
    q: 'Is laser hair reduction safe for sensitive skin?',
    a: 'Yes. Our devices have adjustable settings to suit different skin types, with pre- and post-care to minimize irritation.'
  },
  {
    q: 'How many sessions will I need?',
    a: 'This varies by treatment and individual goals. We typically see optimal results over a short series of sessions.'
  },
];

function FAQItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  return (
    <div className="rounded-xl border border-rose-100 bg-white p-4">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setOpenIndex(isOpen ? null : index)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-rose-900">{item.q}</span>
        <span className="ml-4 text-rose-500">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className="mt-3 text-sm leading-relaxed text-rose-700">{item.a}</p>}
    </div>
  );
}

export default function Guides() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="guides" className="relative w-full bg-rose-50 py-20">
      <div className="absolute inset-x-0 -top-10 mx-auto h-24 max-w-6xl rounded-full bg-pink-100/60 blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-rose-900 sm:text-4xl">Tips & FAQs</h2>
          <p className="mt-3 text-rose-700">Simple care rituals and answers to common questions.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-rose-900">Quick Tips</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {tips.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex items-center gap-2 text-rose-600">
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{title}</span>
                  </div>
                  <p className="text-sm text-rose-700">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-rose-900">FAQs</h3>
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <FAQItem key={i} item={item} index={i} openIndex={openIndex} setOpenIndex={setOpenIndex} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
