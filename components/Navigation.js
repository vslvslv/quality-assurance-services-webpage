export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">QA Services</div>
        <div className="flex gap-6">
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition">
            Services
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
