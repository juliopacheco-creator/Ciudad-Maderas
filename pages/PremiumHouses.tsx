
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Grid, CheckCircle2, Home as HomeIcon, Sparkles, ArrowRight, Layout, Utensils, Bath, HardHat } from 'lucide-react';
import { WhatsAppIcon, PhoneIcon } from '../components/Icons';
import GoldMeshBackground from '../components/GoldMeshBackground';

const PremiumHouses: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const models = [
    { name: "Modelo Ámbar", desc: "Piedra natural y espacios abiertos.", area: "140m²" },
    { name: "Modelo Jade", desc: "Cocina gourmet y ventanales amplios.", area: "165m²" },
    { name: "Modelo Ópalo", desc: "Master suite con vestidor de lujo.", area: "180m²" },
    { name: "Modelo Zafiro", desc: "Terraza privada y minimalismo.", area: "155m²" },
    { name: "Modelo Cuarzo", desc: "Doble altura y modernidad.", area: "210m²" },
    { name: "Modelo Topacio", desc: "Diseño funcional con estudio.", area: "175m²" },
    { name: "Modelo Diamante", desc: "Máxima exclusividad residencial.", area: "240m²" }
  ];

  const blockFrameClass = "mx-4 md:mx-8 lg:mx-12 my-12 border border-gold rounded-[2.5rem] lg:rounded-[4rem] bg-white relative overflow-hidden shadow-sm border-bracket-gold-bold";

  return (
    <div className="pt-0 bg-white overflow-hidden relative">
      <GoldMeshBackground />
      {/* Hero Section - Sin Degradados */}
      <header className="relative h-[80vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://deepskyblue-gorilla-632972.hostingersite.com/wp-content/uploads/2026/01/ciudad-maderas-el-marques-queretaro-24671639-foto-01.jpg" 
            className="w-full h-full object-cover grayscale-[20%]" 
            alt="Casas Premium Exterior" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in space-y-8">
          <div className="inline-block bg-gold/20 backdrop-blur-md border border-gold/40 px-8 py-3 rounded-full">
            <span className="text-gold text-xs font-black uppercase tracking-[0.6em]">Vanguardia</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tighter">
            Casas <span className="gold-accent italic">Premium</span> <br /> Ciudad Maderas
          </h1>
          <p className="text-gray-300 text-2xl font-light">
            Tu hogar ideal, desde <span className="text-white font-bold">$16,250/mes</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a href="https://wa.me/524421861046" className="bg-gold hover:bg-white hover:text-gold text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] transition-all shadow-xl">
              Solicitar Cotización
            </a>
            <a href="#modelos" className="border border-white/40 hover:border-gold px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all">
              Ver 7 Modelos
            </a>
          </div>
        </div>
      </header>

      {/* Program - Marco Delgado */}
      <div className={blockFrameClass}>
        <section className="py-24 bg-white/80 relative">
          <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">Crédito Directo <br /><span className="gold-accent italic">Sin Complicaciones</span></h2>
                <p className="text-gray-500 text-xl font-light leading-relaxed">
                  Eliminamos los obstáculos bancarios tradicionales.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Sin Buró", desc: "Sin historial crediticio.", icon: <ShieldCheck size={28} /> },
                  { title: "Sin Aval", desc: "Garantía propia.", icon: <TrendingUp size={28} /> },
                  { title: "0% Enganche", desc: "Planes a tu medida.", icon: <Sparkles size={28} /> },
                  { title: "Flexibilidad", desc: "Trámites ágiles.", icon: <CheckCircle2 size={28} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                     <div className="bg-gray-50 p-4 rounded-xl text-gold border border-gold/10 group-hover:bg-gold group-hover:text-white transition-all">
                      {item.icon}
                     </div>
                     <div>
                       <h5 className="font-black text-gray-900 text-[11px] uppercase tracking-widest mb-1">{item.title}</h5>
                       <p className="text-gray-400 text-base leading-snug">{item.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-[#001529] rounded-[3rem] p-16 text-white border border-gold/40 relative overflow-hidden">
              <div className="relative z-10 space-y-10">
                <h3 className="text-3xl font-serif text-gold">Beneficios</h3>
                <ul className="space-y-5">
                  {["Cisternas de alta capacidad", "Calentadores de paso", "Accesorios premium", "Acabados en piedra", "Cocinas equipadas"].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-gray-300 font-light text-lg">
                      <CheckCircle2 size={22} className="text-gold shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Models - Marco Delgado */}
      <div className={blockFrameClass}>
        <section id="modelos" className="py-24 bg-gray-50/70">
          <div className="max-w-[1800px] mx-auto px-8">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-serif text-gray-900">Nuestros <span className="gold-accent italic">7 Modelos</span></h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
              {models.map((model, idx) => (
                <div key={idx} className="bg-white rounded-[3rem] p-4 shadow-lg border border-gold/10 group hover:-translate-y-2 transition-all">
                  <div className="relative h-72 rounded-[2.5rem] overflow-hidden mb-6 border border-gold/20">
                    <img src={`https://picsum.photos/seed/house-${idx}/800/1000`} className="w-full h-full object-cover" alt={model.name} />
                  </div>
                  <div className="px-6 pb-6 space-y-3">
                     <h3 className="text-2xl font-serif text-gray-900 group-hover:text-gold">{model.name}</h3>
                     <p className="text-gray-400 font-light text-base leading-relaxed">{model.desc}</p>
                     <span className="inline-block bg-gray-50 text-gold px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{model.area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section - Marco Delgado */}
      <div className={`${blockFrameClass} bg-[#001529] border border-gold`}>
        <section className="py-24 text-white relative text-center">
          <div className="max-w-7xl mx-auto px-8 space-y-12 relative z-10">
            <h2 className="text-5xl md:text-8xl font-serif tracking-tighter">¿Listo para <span className="gold-accent italic">empezar</span>?</h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a href="tel:+528003411008" className="bg-gold text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.4em] text-xs hover:scale-105 transition-all flex items-center gap-4">
                <PhoneIcon size={20} /> Llamar ahora
              </a>
              <a href="https://wa.me/524421861046" className="bg-white/5 border border-white/20 text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.4em] text-xs hover:bg-white/10 transition-all flex items-center gap-4">
                <WhatsAppIcon size={20} /> WhatsApp Asesor
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PremiumHouses;
