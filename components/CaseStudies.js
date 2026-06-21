'use client';

export default function CaseStudies() {
  const cases = [
    {
      title: 'Enterprise Infrastructure',
      company: 'VMware — Senior QA Automation Engineer',
      description:
        'Drove quality across core virtualization products—vSphere, VMware Cloud Foundation (VCF), and ESXi—including version-upgrade testing. Owned quality for the initiative delivering a tool that migrates corporate customers’ environments to newer versions.',
      metrics: ['vSphere · VCF · ESXi quality', 'Version-upgrade testing', 'Quality owner — customer migration tool'],
      icon: '🏢',
    },
    {
      title: 'QA Leadership at Scale',
      company: 'Tiebreak — QA Technical Lead & Manager',
      description:
        'Built and led a ~15-person QA team, personally recruiting and onboarding over half of it. Led the initiative to build corporate-grade automation and drove the Manual → Automation QA transition, owning quality across the full product portfolio.',
      metrics: ['~15-person team — 50%+ hired & onboarded', '5,000+ automated tests — API · Web · Mobile E2E', 'Quality across 10+ products'],
      icon: '🚀',
    },
    {
      title: 'QA Team Leadership',
      company: 'Soft2Run — QA Team Lead',
      description:
        'Led a 10-member QA team at a product company supporting outsourcing engagements. Owned test planning, process, and delivery quality across client and in-house products.',
      metrics: ['10-person QA team', 'Product & outsourcing delivery', 'Process & quality ownership'],
      icon: '👥',
    },
    {
      title: 'Enterprise Web Platforms',
      company: 'Sirma — QA Automation Engineer',
      description:
        'Built and maintained automated test coverage for large-scale enterprise web platforms, ensuring reliability across complex business workflows.',
      metrics: ['Enterprise web platform testing', 'Automation framework development', 'Complex workflow coverage'],
      icon: '🌐',
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
            15+ years across gaming, fintech, enterprise infrastructure, and web platforms—from QA automation engineer to technical lead and manager
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
