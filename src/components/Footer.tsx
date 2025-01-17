import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/about" className="text-base text-gray-300 hover:text-white">About</a></li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/intelpixel" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-base text-gray-300 hover:text-white inline-flex items-center"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/privacy" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
              <li><a href="/terms" className="text-base text-gray-300 hover:text-white">Terms</a></li>
              <li><a href="/hipaa-compliance" className="text-base text-gray-300 hover:text-white">HIPAA Compliance</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            © 2025 Intelpixel, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;