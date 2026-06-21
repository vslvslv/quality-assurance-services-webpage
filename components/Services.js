'use client';

import { useState } from 'react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: '⚙️',
      title: 'Test Automation',
      description: 'Build scalable automation frameworks with Selenium, Playwright, and Cypress. Design maintainable test suites for continuous integration pipelines.',
    },
    {
      icon: '🧪',
      title: 'Manual Testing',
      description: 'Comprehensive functional, regression, and exploratory testing with meticulous attention to user experience and edge cases.',
    },
    {
      icon: '⚡',
      title: 'Performance Testing',
      description: 'Load, stress, and endurance testing to ensure your application scales reliably under pressure with optimal response times.',
    },
    {
      icon: '🔌',
      title: 'API Testing',
      description: 'RESTful and GraphQL API validation, contract testing, integration verification, and end-to-end workflow testing.',
    },
    {
      icon: '📱',
      title: 'Mobile Testing',
      description: 'iOS and Android testing across devices, OS versions, screen sizes, and various network conditions with real device testing.',
    },
    {
      icon: '📊',
      title: 'Test Strategy & Planning',
      description: 'Develop comprehensive testing strategies, test plans, QA roadmaps, and quality metrics aligned with business objectives.',
    },
    {
      icon: '👥',
      title: 'QA Team Leadership',
      description: 'Build and mentor high-performing QA teams. Establish processes, best practices, and quality standards across organizations.',
    },
    {
      icon: '🚀',
      title: 'CI/CD Integration',
      description: 'Implement and optimize automated testing in deployment pipelines. Reduce time-to-market with efficient quality gates.',
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
            End-to-end QA solutions from automation engineering to QA leadership
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
