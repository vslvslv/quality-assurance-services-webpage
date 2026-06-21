'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          VV QA
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#services" className="text-gray-700 hover:text-purple-600 font-semibold transition">
            Services
          </a>
          <a href="#cases" className="text-gray-700 hover:text-purple-600 font-semibold transition">
            Experience
          </a>
          <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition">
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 py-4">
          <div className="flex flex-col gap-4 px-4">
            <a href="#services" className="text-gray-700 font-semibold hover:text-purple-600">
              Services
            </a>
            <a href="#cases" className="text-gray-700 font-semibold hover:text-purple-600">
              Experience
            </a>
            <a href="#contact" className="text-gray-700 font-semibold hover:text-purple-600">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
