
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  openModal: (type: 'demo' | 'expert') => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at top
      if (currentScrollY < 30) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 70) {
        // Scrolling down -> hide
        if (!isOpen) {
          setIsVisible(false);
        }
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up -> show
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <header 
      className={`fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-md shadow-slate-900/5 px-4 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center space-x-2">
            <a href="/#overview" className="inline-block hover:opacity-90 transition-opacity">
              <img 
                src="https://appcdn.goqii.com/storeimg/35332_1788241071.png" 
                alt="GOQii Logo" 
                className="h-7 sm:h-8 w-auto object-contain" 
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-7">
            <a href="/#solutions" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Solutions</a>
            <a href="/#rpmc-kit" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">RPMC Kit</a>
            <a href="/#continuous-care" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Platform</a>
            <div className="h-4 w-px bg-slate-200"></div>
            <button onClick={() => openModal('expert')} className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition">Talk to Experts</button>
            <button onClick={() => openModal('demo')} className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-200">
              Request Demo
            </button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600" aria-label="Toggle Navigation Menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-slate-100 py-4 space-y-3">
            <a href="/#solutions" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm font-medium text-slate-700">Solutions</a>
            <a href="/#rpmc-kit" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm font-medium text-slate-700">RPMC Kit</a>
            <a href="/#continuous-care" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm font-medium text-slate-700">Platform</a>
            <div className="pt-2 space-y-2 border-t border-slate-100">
              <button onClick={() => { setIsOpen(false); openModal('expert'); }} className="w-full text-blue-600 py-2.5 rounded-xl font-semibold border border-blue-100 text-sm">Talk to Experts</button>
              <button onClick={() => { setIsOpen(false); openModal('demo'); }} className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold text-sm">Request Demo</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
