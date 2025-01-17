import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/intelpixel-logo.png"
                alt="Intelpixel"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="/healthcare-partners" className="text-gray-700 hover:text-blue-600 font-medium text-[15px] tracking-wide transition-colors">For Healthcare Partners</a>
            <a href="/ai-researchers" className="text-gray-700 hover:text-blue-600 font-medium text-[15px] tracking-wide transition-colors">For AI Researchers</a>
            <a href="/faq" className="text-gray-700 hover:text-blue-600 font-medium text-[15px] tracking-wide transition-colors">FAQ</a>
            <a 
              href="https://app.intelpixel.io" 
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-[15px] font-semibold"
            >
              Login
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/healthcare-partners" className="block px-3 py-2.5 text-gray-700 hover:text-blue-600 font-medium text-[15px] tracking-wide transition-colors">For Healthcare Partners</a>
            <a href="/ai-researchers" className="block px-3 py-2.5 text-gray-700 hover:text-blue-600 font-medium text-[15px] tracking-wide transition-colors">For AI Researchers</a>
            <a href="/faq" className="block px-3 py-2.5 text-gray-700 hover:text-blue-600 font-medium text-[15px] tracking-wide transition-colors">FAQ</a>
            <a 
              href="https://app.intelpixel.io"
              className="block w-full mt-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-[15px] font-semibold text-center"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;