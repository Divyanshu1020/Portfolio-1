import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-600">
            Portfolio
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition">Experience</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition">Experience</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;