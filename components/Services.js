export default function Services() {
  const services = [
    {
      title: 'Manual Testing',
      description: 'Thorough manual testing to catch edge cases and user experience issues',
    },
    {
      title: 'Automation Testing',
      description: 'Scalable automated testing frameworks for continuous integration',
    },
    {
      title: 'Performance Testing',
      description: 'Load and stress testing to ensure your app scales reliably',
    },
    {
      title: 'Security Testing',
      description: 'Comprehensive security audits and vulnerability assessments',
    },
    {
      title: 'API Testing',
      description: 'End-to-end API testing and contract validation',
    },
    {
      title: 'Mobile Testing',
      description: 'iOS and Android testing across multiple devices and versions',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
