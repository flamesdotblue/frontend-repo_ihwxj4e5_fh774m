import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');

    if (!name || !email || !message) {
      setStatus('Please fill out all required fields.');
      return;
    }

    setStatus('Thank you! Your message has been received. We will get back to you shortly.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-rose-900 sm:text-4xl">Book a Consultation</h2>
          <p className="mt-3 text-rose-700">Have a question or ready to begin? Send us a message and we’ll reach out.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-rose-100 bg-rose-50/40 p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-rose-900">Name</label>
              <input id="name" name="name" type="text" required className="w-full rounded-lg border border-rose-200 bg-white px-4 py-2.5 text-rose-900 placeholder-rose-400 outline-none focus:ring-2 focus:ring-rose-300" placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-rose-900">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-lg border border-rose-200 bg-white px-4 py-2.5 text-rose-900 placeholder-rose-400 outline-none focus:ring-2 focus:ring-rose-300" placeholder="you@example.com" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-rose-900">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" className="w-full rounded-lg border border-rose-200 bg-white px-4 py-2.5 text-rose-900 placeholder-rose-400 outline-none focus:ring-2 focus:ring-rose-300" placeholder="+1 555 000 1234" />
            </div>
            <div>
              <label htmlFor="service" className="mb-1 block text-sm font-medium text-rose-900">Service</label>
              <select id="service" name="service" className="w-full rounded-lg border border-rose-200 bg-white px-4 py-2.5 text-rose-900 outline-none focus:ring-2 focus:ring-rose-300">
                <option>Skin Treatments</option>
                <option>Hair Care</option>
                <option>Weight Management</option>
                <option>Laser Treatments</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-rose-900">Message</label>
            <textarea id="message" name="message" rows={4} required className="w-full rounded-lg border border-rose-200 bg-white px-4 py-2.5 text-rose-900 placeholder-rose-400 outline-none focus:ring-2 focus:ring-rose-300" placeholder="Tell us about your goals or questions..." />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-rose-600">We’ll respond within one business day.</p>
            <button type="submit" className="rounded-full bg-rose-500 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-300">
              Send Message
            </button>
          </div>
          {status && <div className="rounded-lg bg-rose-100 p-3 text-sm text-rose-800">{status}</div>}
        </form>

        <p className="mt-6 text-center text-sm text-rose-700">
          Prefer email? <a href="mailto:hello@glowclinic.example" className="font-medium text-rose-600 underline underline-offset-2">hello@glowclinic.example</a>
        </p>
      </div>
    </section>
  );
}
