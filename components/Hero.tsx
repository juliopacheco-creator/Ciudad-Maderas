
import React from 'react';
import { ArrowDown, User, Send, Key, Landmark, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon, PhoneIcon } from './Icons';

const Hero: React.FC = () => {
  const videoUrl = "https://deepskyblue-gorilla-632972.hostingersite.com/wp-content/uploads/2026/01/grok-video-c89499a5-491c-4c75-b8de-349a599bff98.mp4";

  return (
    <div className="relative min-h-screen lg:h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Pure Video Background - No Gradients */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          style={{ 
            filter: 'contrast(1.1) brightness(0.85)',
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Architectural Grid Overlay */}
        <div className="absolute inset-0 blueprint-overlay"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1400px] px-6 py-28 lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-3/5 space-y-10">
          <div className="inline-flex items-center gap-6 bg-[#001529]/40 backdrop-blur-xl border border-gold px-8 py-3 rounded-full">
            <ShieldCheck size={20} className="text-gold" />
            <span className="text-gold text-[11px] font-black uppercase tracking-[0.5em]">Patrimonio Seguro 2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] text-white font-serif leading-[0.85] tracking-tighter">
            Construye tu <br />
            <span className="text-gold-metallic italic">legado hoy</span> <br />
            <span className="text-white/30">Ciudad Maderas</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto lg:mx-0 italic leading-relaxed border-l border-gold pl-8">
            "Terrenos premium con financiamiento directo y plusvalía garantizada del <span className="text-gold font-bold">93%</span>."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start pt-6">
            <button className="bg-gold hover:bg-white hover:text-[#001529] text-[#001529] px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all border border-white flex items-center justify-center gap-4 group">
              Ver Catálogo <ArrowDown size={20} className="group-hover:translate-y-2 transition-transform" />
            </button>
            <div className="flex items-center gap-6 text-white/80 justify-center">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full border border-gold bg-gray-800 overflow-hidden"><img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Client" /></div>)}
               </div>
               <div className="text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gold block">Confianza Elite</span>
                  <span className="text-[10px] font-bold text-white/60">+100k Inversionistas</span>
               </div>
            </div>
          </div>
        </div>

        {/* Right Content - Transparent Architectural Card */}
        <div className="lg:w-2/5 w-full max-w-md bg-white/5 backdrop-blur-[40px] p-10 md:p-14 rounded-[3rem] border border-gold shadow-2xl relative overflow-hidden">
          <div className="absolute inset-4 border border-gold/10 rounded-[2.5rem] pointer-events-none"></div>
          
          <div className="text-center mb-10 relative z-10">
            <div className="bg-gold/10 p-5 rounded-2xl border border-gold inline-flex items-center justify-center mb-6">
               <Key className="text-gold" size={32} />
            </div>
            <h3 className="text-white text-3xl font-serif mb-2">Asesoría <span className="text-gold italic">Elite</span></h3>
            <p className="tech-label">ID_PROTOCOL_2025</p>
          </div>
          
          <form className="space-y-6 relative z-10">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Nombre Completo" 
                className="w-full bg-white/5 border border-gold/30 rounded-2xl py-5 px-8 text-white text-base focus:border-gold outline-none transition-all placeholder:text-gray-500 font-medium"
              />
            </div>
            
            <div className="relative group">
              <input 
                type="tel" 
                placeholder="WhatsApp" 
                className="w-full bg-white/5 border border-gold/30 rounded-2xl py-5 px-8 text-white text-base focus:border-gold outline-none transition-all placeholder:text-gray-500 font-medium"
              />
            </div>

            <button className="w-full bg-gold hover:bg-white hover:text-[#001529] text-[#001529] font-black py-6 rounded-2xl transition-all flex items-center justify-center gap-5 uppercase tracking-[0.6em] text-[11px] border border-white group">
              Consultar Legado <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            
            <p className="text-[8px] text-gold/40 text-center uppercase tracking-[0.3em] font-black pt-2">
              Sucursal Plaza Norte // Certificación Oficial
            </p>
          </form>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-10 left-10 flex flex-col gap-6 z-40">
        <a href="https://wa.me/524421861046" className="official-social-btn text-[#25D366]"><WhatsAppIcon size={24} /></a>
        <a href="tel:+528003411008" className="official-social-btn text-gold"><PhoneIcon size={24} /></a>
      </div>
    </div>
  );
};

export default Hero;
