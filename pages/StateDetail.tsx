
import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { STATES } from '../constants';
import { CheckCircle, MapPin, Calendar, ArrowRight, ShieldCheck, Map as MapIcon, Play, Grid, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { WhatsAppIcon } from '../components/Icons';
import GoldMeshBackground from '../components/GoldMeshBackground';

const StateDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const state = STATES.find(s => s.slug === slug);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const { current } = galleryRef;
      const scrollAmount = current.clientWidth * 0.8;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const blockFrameClass = "mx-4 md:mx-8 lg:mx-12 my-12 border border-gold rounded-[2.5rem] lg:rounded-[4rem] bg-white relative overflow-hidden shadow-sm bg-gold-blueprint";

  if (!state) return <div className="pt-20 text-center py-40 text-2xl font-serif">Destino no encontrado</div>;

  return (
    <div className="pt-0 pb-0 bg-white overflow-hidden relative">
      <GoldMeshBackground />
      {/* State Header */}
      <div className="relative h-screen w-full">
        <img src={state.imageUrl} alt={state.name} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-white"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-in px-8 space-y-10">
            <h1 className="text-6xl md:text-[10rem] text-white font-serif mb-6 leading-[0.85] tracking-tighter">
              {state.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Resumen */}
      <div className={blockFrameClass + " -mt-32 z-20"}>
        <div className="bg-white/90 bg-luxury-grain bg-luxury-paper p-16 md:p-24 grid lg:grid-cols-12 gap-20 relative">
          <div className="lg:col-span-7 space-y-12">
            <h2 className="text-5xl font-serif leading-none text-gray-900">Inversión con <br /> <span className="gold-accent italic">Certeza Jurídica</span></h2>
            <p className="text-gray-500 text-2xl leading-relaxed font-light">{state.description}</p>
          </div>
          <div className="lg:col-span-5 bg-[#001529] rounded-[3rem] p-16 text-white relative overflow-hidden">
             <h3 className="text-3xl font-serif text-gold mb-8">Servicios Élite</h3>
             <ul className="space-y-4">
                {state.amenities.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-gray-200">
                    <CheckCircle className="text-gold" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </div>

      {/* Galería Premium */}
      <div className={blockFrameClass}>
        <section className="py-24 bg-gray-50/70 bg-luxury-grain">
          <div className="max-w-[1800px] mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-serif text-gray-900">Showcase <span className="gold-accent italic">Premium</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-[3rem] overflow-hidden shadow-xl aspect-square">
                  <img src={`https://picsum.photos/seed/premium-${state.slug}-${n}/1000/1000`} className="w-full h-full object-cover" alt="Property" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Mapa */}
      <div className={blockFrameClass}>
        <section className="py-24 bg-white/80">
          <div className="max-w-[1800px] mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <h2 className="text-5xl font-serif text-gray-900">Ubicaciones <span className="gold-accent italic">de Éxito</span></h2>
                <div className="space-y-8">
                  {state.developments.map((dev) => (
                    <div key={dev.id} className="p-10 border border-gray-100 rounded-[2.5rem] bg-white shadow-sm">
                      <h4 className="text-2xl font-serif text-gray-900 mb-2">{dev.name}</h4>
                      <p className="text-gray-400 text-sm font-black uppercase tracking-widest">{dev.location}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-[600px] rounded-[3rem] overflow-hidden border-8 border-gray-50">
                <iframe 
                  src={state.mapEmbed}
                  width="100%" height="100%" style={{ border: 0 }} 
                  allowFullScreen loading="lazy" 
                  title={`Mapa ${state.name}`}
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StateDetail;
