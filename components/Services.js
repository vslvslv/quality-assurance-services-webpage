'use client';

import { useState } from 'react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: '🧪',
      title: 'Manual Testing',
      description: 'Comprehensive functional, regression, and exploratory testing with meticulous attention to user experience.',
    },
    {
      icon: '⚙️',
      title: 'Test Automation',
      description: 'Scalable automation frameworks (Selenium, Playwright, Cypress) for continuous integration pipelines.',
    },
    {
      icon: '⚡',
      title: 'Performance Testing',
      description: 'Load, stress, and endurance testing to ensure your application scales reliably under pressure.',
    },
    {
      icon: '🔒',
      title: 'Security Testing',
      description: 'Penetration testing, vulnerability assessments, and OWASP compliance audits.',
    },
    {
      icon: '🔌',
      title: 'API Testing',
      description: 'RESTful and GraphQL API validation, contract testing, and integration verification.',
    },
    {
      icon: '📱',
      title: 'Mobile Testing',
      description: 'iOS and Android testing across devices, OS versions, and various network conditions.',
    },
    {
      icon: '📊',
      title: 'Test Strategy',
      description: 'Develop comprehensive testing strategies, test plans, and quality metrics for your organization.',
    },
    {
      icon: '🚀',
      title: 'CI/CD Integration',
      description: 'Implement and optimize automated testing in your deployment pipeline for faster releases.',
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-purple-600">
              Services & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end QA solutions tailored to your product and organization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveService(idx)}
              className={`group relative p-8 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                activeService === idx
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl'
                  : 'bg-white text-gray-900 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className={`text-sm leading-relaxed ${activeService === idx ? 'text-purple-100' : 'text-gray-600'}`}>
                {service.description}
              </p>

              {/* Animated border */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${activeService === idx ? 'opacity-100' : ''}`}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-blue-400 opacity-20 blur" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
