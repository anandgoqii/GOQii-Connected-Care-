
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  openModal: (type: 'demo' | 'expert') => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="https://appcdn.goqii.com/user/storeimg/85547_1775477318.png" alt="GOQii Logo" className="h-8 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#platform" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Platform</a>
            <a href="#programs" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Programs</a>
            <a href="#compliance" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Compliance</a>
            <button onClick={() => openModal('expert')} className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition">Talk to Experts</button>
            <button onClick={() => openModal('demo')} className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-200">
              Request Demo
            </button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 shadow-xl">
          <a href="#platform" className="block text-base font-medium text-slate-700">Platform</a>
          <a href="#programs" className="block text-base font-medium text-slate-700">Programs</a>
          <a href="#compliance" className="block text-base font-medium text-slate-700">Compliance</a>
          <button onClick={() => { setIsOpen(false); openModal('demo'); }} className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">Request Demo</button>
        </div>
      )}
    </header>
  );
};

export default Header;
