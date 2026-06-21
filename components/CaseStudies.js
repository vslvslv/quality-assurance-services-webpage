'use client';

export default function CaseStudies() {
  const cases = [
    {
      title: 'Enterprise Infrastructure',
      company: 'VMware - Senior QA Automation Engineer',
      description:
        'Designed and implemented comprehensive automation frameworks for virtualization infrastructure testing. Built CI/CD integration pipelines, mentored junior engineers, and established QA best practices across teams.',
      metrics: ['Complex infrastructure testing', 'CI/CD pipeline optimization', 'Team mentorship'],
      icon: '🏢',
    },
    {
      title: 'FinTech Growth',
      company: 'Tiebreak - QA Technical Lead & Manager',
      description:
        'Led QA strategy and team expansion for a financial services platform. Scaled QA operations, implemented automation frameworks, and established quality standards while managing multiple testing initiatives.',
      metrics: ['Team leadership', 'Strategy & roadmap', 'Quality standards'],
      icon: '🚀',
    },
    {
      title: 'Fast-Paced SaaS',
      company: 'Nexo - Senior QA Automation Engineer',
      description:
        'Built robust automation test suites and CI/CD integration for cryptocurrency/finance platform. Collaborated with dev teams on rapid releases while maintaining quality and performance standards.',
      metrics: ['Rapid release cycles', 'Automation at scale', 'Cross-team collaboration'],
      icon: '⚡',
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
            15+ years across gaming, fintech, enterprise infrastructure, and SaaS—from QA engineer to technical leader
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
