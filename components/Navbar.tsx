import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon, PhoneIcon } from './Icons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <div className={`flex flex-col leading-none ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              <span className="text-xl font-serif font-bold">CIUDAD <span className="gold-accent">MADERAS</span></span>
              <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-black opacity-70">Sucursal Plaza Norte (Autorizada)</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-gold' : 'text-white hover:text-gold'}`}>Inicio</Link>
            <Link to="/casas-premium" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-gold' : 'text-white hover:text-gold'}`}>Casas Premium</Link>
            <Link to="/terrenos-comerciales" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-gold' : 'text-white hover:text-gold'}`}>Comercial</Link>
            <a href="#desarrollos" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-gold' : 'text-white hover:text-gold'}`}>Desarrollos</a>
            <a href="#simulador" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-gold' : 'text-white hover:text-gold'}`}>Simulador</a>
            <a href="tel:+528003411008" className="bg-gold text-white px-5 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2">
              <PhoneIcon size={18} /> 800 341 1008
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-gray-900' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 font-serif text-xl">Inicio</Link>
            <Link to="/casas-premium" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 font-serif text-xl">Casas Premium</Link>
            <Link to="/terrenos-comerciales" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 font-serif text-xl">Terrenos Comerciales</Link>
            <a href="#desarrollos" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 font-serif text-xl">Desarrollos</a>
            <a href="#simulador" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 font-serif text-xl">Simulador</a>
            <div className="pt-4 space-y-2">
              <a href="tel:+528003411008" className="flex items-center justify-center gap-2 bg-gold text-white w-full py-3 rounded-lg font-bold">
                <PhoneIcon size={20} /> Llamar ahora
              </a>
              <a href="https://wa.me/524421861046" className="flex items-center justify-center gap-2 border-2 border-green-500 text-green-600 w-full py-3 rounded-lg font-bold">
                <WhatsAppIcon size={20} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;