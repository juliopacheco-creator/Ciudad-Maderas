
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PhoneIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 border-t border-gray-100 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Brand - Column Span 4 */}
          <div className="lg:col-span-4 space-y-10">
            <Link to="/" className="inline-block">
              <div className="flex flex-col leading-none">
                <h2 className="text-3xl font-serif font-bold text-gray-900">
                  CIUDAD <span className="gold-accent italic">MADERAS</span>
                </h2>
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mt-1">Sucursal Plaza Norte (Autorizada)</span>
              </div>
              <div className="h-[2px] w-12 bg-gold mt-2"></div>
            </Link>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">
              Líderes en el mercado inmobiliario mexicano, ofreciendo seguridad, 
              financiamiento y alta plusvalía para el futuro de tu familia desde nuestra sucursal Plaza Norte.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, link: "#" },
                { icon: <Instagram size={20} />, link: "#" },
                { icon: <Twitter size={20} />, link: "#" },
                { icon: <Youtube size={20} />, link: "#" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.link} 
                  className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-gold hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links - Column Span 2 each */}
          <div className="lg:col-span-2">
            <h4 className="font-black text-gray-900 mb-8 uppercase tracking-[0.3em] text-[10px]">Empresa</h4>
            <ul className="space-y-5 text-gray-400 text-sm font-medium">
              <li><Link to="/" className="hover:text-gold transition-colors flex items-center gap-2 group">Inicio <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><a href="#desarrollos" className="hover:text-gold transition-colors flex items-center gap-2 group">Desarrollos <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#simulador" className="hover:text-gold transition-colors flex items-center gap-2 group">Simulador <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#contacto" className="hover:text-gold transition-colors flex items-center gap-2 group">Contacto <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-gold transition-colors flex items-center gap-2 group">Bolsa de Trabajo <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>

          {/* Contact - Column Span 4 */}
          <div className="lg:col-span-4 bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
            <h4 className="font-black text-gray-900 mb-10 uppercase tracking-[0.3em] text-[10px] text-center">Atención Directa</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold flex-shrink-0">
                  <PhoneIcon size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Línea Nacional</p>
                  <p className="text-gray-900 font-bold">800 341 1008</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Soporte y Ventas</p>
                  <p className="text-gray-900 font-bold">postventa@ciudadmaderas.com</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Matriz Administrativa</p>
                  <p className="text-gray-900 font-bold">Sucursal Plaza Norte, México</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#001529] py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 gap-8 uppercase tracking-[0.2em] font-bold">
          <div className="flex items-center gap-4">
             <div className="w-12 h-[1px] bg-white/10"></div>
             <p>© 2025 Ciudad Maderas Sucursal Plaza Norte (Autorizada). Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-8">
             <span className="text-gold">Sostenibilidad</span>
             <span className="text-gold">Inovación</span>
             <span className="text-white">Excelencia Inmobiliaria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
