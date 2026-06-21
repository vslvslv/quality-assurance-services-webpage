export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex items-center justify-center min-h-screen text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-semibold tracking-widest uppercase">
              Quality Assurance Expert
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Vasil Vasilev
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            15+ years of QA excellence across enterprises, scale-ups, and startups
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From test strategy and automation to security audits and performance optimization—I ensure your product launches with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#contact" className="group relative px-8 py-4 font-semibold text-white overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105">
              Let's Talk
            </a>
            <a href="#services" className="px-8 py-4 font-semibold text-white border-2 border-purple-400 rounded-lg hover:bg-purple-400/10 transition">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
