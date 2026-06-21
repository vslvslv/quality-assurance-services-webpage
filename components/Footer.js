export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-gray-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white font-black mb-4 text-lg">Vasil Vasilev</h3>
            <p className="text-sm leading-relaxed">QA Excellence • 15+ Years Experience • Enterprise to Startup</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-purple-400 transition">
                  Test Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-400 transition">
                  Performance Testing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-400 transition">
                  Security Audits
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-purple-600 flex items-center justify-center transition">
                <span className="text-lg">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-purple-600 flex items-center justify-center transition">
                <span className="text-lg">💼</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-purple-600 flex items-center justify-center transition">
                <span className="text-lg">🐙</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Vasil Vasilev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
