
import React, { useState } from 'react';
import { Building2, MapPin, Briefcase, CheckCircle2, ShieldCheck, ChevronDown } from 'lucide-react';
import { WhatsAppIcon, PhoneIcon } from '../components/Icons';
import GoldMeshBackground from '../components/GoldMeshBackground';

const CommercialLand: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('qro');

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const locations = [
    { id: 'qro', name: 'Querétaro (El Marqués/Corregidora)', detail: 'Alta demanda, lotes mixtos cerca de Anillo Vial y universidades. Cerca de Universidad Mondragón y zonas de alto flujo residencial.' },
    { id: 'leon', name: 'León / Lagos de Moreno', detail: 'Foco industrial y logístico, grandes superficies disponibles para naves industriales, centros de distribución o comercio a gran escala.' },
    { id: 'merida', name: 'Mérida / Península', detail: 'Gran escala, cerca de playas y el parque científico. Zona comercial planeada dentro del master plan de Península.' },
    { id: 'cancun', name: 'Cancún (Quintana Roo)', detail: 'Desarrollo sustentable con enfoque turístico y comercial. Ubicaciones privilegiadas cerca de zonas hoteleras y residenciales premium.' },
    { id: 'otros', name: 'Monterrey / Puebla / Ags', detail: 'Preventas con alta proyección. Monterrey destaca por su dinamismo empresarial, mientras Puebla y Aguascalientes se enfocan en zonas universitarias.' },
  ];

  const blockFrameClass = "mx-4 md:mx-8 lg:mx-12 my-12 border border-gold rounded-[2.5rem] lg:rounded-[4rem] bg-white relative overflow-hidden shadow-sm border-bracket-gold-bold";

  return (
    <div className="pt-20 bg-white relative">
      <GoldMeshBackground />
      {/* Header Section */}
      <header className="relative py-32 bg-[#001529] text-white overflow-hidden mx-4 md:mx-8 lg:mx-12 my-4 rounded-[2.5rem] lg:rounded-[4rem] border border-gold/30">
        <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/seed/comm_header/1920/600" className="w-full h-full object-cover opacity-20 grayscale" alt="Background" />
        </div>
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block bg-gold/10 backdrop-blur-md border border-gold/40 px-6 py-2 rounded-full">
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em]">Inversión Comercial</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif leading-none tracking-tighter">
              Terrenos <br /><span className="gold-accent italic">Comerciales</span> <br />Premium
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-xl">
              Ubicaciones estratégicas diseñadas para maximizar el éxito de su negocio.
            </p>
          </div>
        </div>
      </header>

      {/* Advantages Section - Marco Delgado */}
      <div className={blockFrameClass}>
        <section className="py-24 max-w-[1400px] mx-auto px-8 relative">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl font-serif text-gray-900 leading-tight">La ventaja de <br /><span className="gold-accent italic">invertir con los líderes</span></h2>
              <div className="space-y-10">
                {[
                  { title: "Plusvalía Garantizada", desc: "Rendimientos consolidados de hasta el 93% en 36 meses." },
                  { title: "Uso de Suelo Mixto", desc: "Permisos vigentes para comercio y servicios de alto impacto." },
                  { title: "Financiamiento Flexible", desc: "Planes a medida hasta 20 años sin requisitos bancarios." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 bg-gray-50 text-gold rounded-2xl flex items-center justify-center shrink-0 border border-gold/20 shadow-md transition-all group-hover:bg-gold group-hover:text-white">
                      <CheckCircle2 size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-serif text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-500 font-light text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <div className="grid grid-cols-2 gap-8 relative z-10">
                <div className="overflow-hidden rounded-[3rem] shadow-xl h-96 w-full border border-gold/20">
                  <img src="https://picsum.photos/seed/render1/800/800" className="h-full w-full object-cover" alt="Render 1" />
                </div>
                <div className="overflow-hidden rounded-[3rem] shadow-xl h-96 w-full mt-16 border border-gold/20">
                  <img src="https://picsum.photos/seed/render2/800/800" className="h-full w-full object-cover" alt="Render 2" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Inventario - Marco Delgado */}
      <div className={blockFrameClass}>
        <section className="py-24 bg-gray-50/70">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="bg-white rounded-[4rem] p-16 shadow-xl overflow-x-auto border border-gold/10 relative z-10">
              <div className="flex items-center gap-6 mb-12">
                 <Building2 className="text-gold" size={32} />
                 <h3 className="text-3xl font-serif text-gray-900 uppercase tracking-widest">Inventario Corporativo</h3>
              </div>
              
              <table className="w-full min-w-[1000px] relative z-20">
                <thead>
                  <tr className="text-left border-b border-gold/20">
                    <th className="pb-8 font-black text-xs uppercase tracking-widest text-gray-400">Ubicación</th>
                    <th className="pb-8 font-black text-xs uppercase tracking-widest text-gray-400">Disponibilidad</th>
                    <th className="pb-8 font-black text-xs uppercase tracking-widest text-gray-400">Tamaños (m²)</th>
                    <th className="pb-6 font-black text-xs uppercase tracking-widest text-gray-400">Precios</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { loc: "Querétaro", disp: "Alta", size: "800 - 2,500+", price: "$4,800/m²" },
                    { loc: "León / Lagos", disp: "Cierre", size: "800 - 5,000+", price: "$3,000/m²" },
                    { loc: "Mérida", disp: "Apertura", size: "200 - 10,000+", price: "$5,500+/m²" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gold/5 transition-all group">
                      <td className="py-8 font-black text-gray-900 group-hover:text-gold text-lg">{row.loc}</td>
                      <td className="py-8 text-gold font-bold">{row.disp}</td>
                      <td className="py-8 font-medium text-gray-500">{row.size}</td>
                      <td className="py-8 font-black text-gray-900">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Final */}
      <div className={`${blockFrameClass} bg-[#001529]`}>
        <section className="py-24 text-white relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-8 text-center space-y-16 relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif">Asegure su <span className="gold-accent italic">Liderazgo</span></h2>
            <div className="flex justify-center">
              <a href="https://wa.me/524421861046" className="flex items-center justify-center gap-6 bg-gold border border-gold hover:bg-white hover:text-gold text-white px-16 py-8 rounded-[2rem] font-black text-xs uppercase tracking-[0.5em] shadow-xl transition-all group">
                <WhatsAppIcon size={28} /> Asesoría Corporativa
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommercialLand;
