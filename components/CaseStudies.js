'use client';

export default function CaseStudies() {
  const cases = [
    {
      title: 'Enterprise Scale-Up',
      company: 'Fortune 500 Financial Services',
      description:
        'Led QA strategy for a mission-critical payment processing system. Implemented comprehensive test automation reducing regression testing time by 70% and achieving 99.9% uptime.',
      metrics: ['70% faster testing', '99.9% uptime', '500+ automated tests'],
      icon: '🏢',
    },
    {
      title: 'Rapid Growth SaaS',
      company: 'Series B Tech Startup',
      description:
        'Scaled QA operations from manual to fully automated CI/CD pipeline. Supported 10x user growth while maintaining quality standards and reducing critical bugs by 85%.',
      metrics: ['10x scaling', '85% bug reduction', 'zero deployment rollbacks'],
      icon: '🚀',
    },
    {
      title: 'Product Launch',
      company: 'Early-Stage Marketplace',
      description:
        'Designed and executed comprehensive testing strategy for MVP launch. Coordinated cross-team quality efforts, resulting in successful production launch with zero critical issues.',
      metrics: ['Clean launch', 'Real-time coordination', '100% requirements coverage'],
      icon: '⭐',
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-purple-600">
              Proven Track Record
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            15+ years delivering QA excellence across enterprises, scale-ups, and startups
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-6xl mb-4">{caseStudy.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{caseStudy.title}</h3>
              <p className="text-sm font-semibold text-purple-600 mb-3">{caseStudy.company}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">{caseStudy.description}</p>

              <div className="space-y-2 pt-6 border-t border-slate-200">
                {caseStudy.metrics.map((metric, midx) => (
                  <div key={midx} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2" />
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
