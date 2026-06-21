'use client';

import { useState } from 'react';

const CONTACT_EMAIL = 'vasilvasilev89@outlook.com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`QA inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.description}`
    );

    // Static site (no backend): open the visitor's mail client pre-filled.
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setFormData({ name: '', email: '', description: '' });
    setTimeout(() => setIsSubmitted(false), 8000);
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-300">
              Ready to elevate your QA process? I&apos;d love to discuss how I can help ensure your product ships with confidence.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-400 hover:text-purple-400 transition">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">🌐</div>
                <div>
                  <p className="font-semibold">Available For</p>
                  <p className="text-gray-400">Full-time, Contract, Consulting</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="text-6xl">✨</div>
                <h3 className="text-2xl font-bold text-white">Almost there!</h3>
                <p className="text-gray-300">
                  Your email client should have opened with the message ready to send. If it didn&apos;t,
                  email me directly at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple-400 hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-white font-semibold mb-2">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-white font-semibold mb-2">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-description" className="block text-white font-semibold mb-2">Project Description</label>
                  <textarea
                    id="contact-description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell me about your project and QA needs..."
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
