
import React, { useState, useEffect } from 'react';
import { Calculator, ChevronRight, Map, Scaling, Percent, Calendar, ArrowRight } from 'lucide-react';
import { STATES } from '../constants';
import GoldMeshBackground from './GoldMeshBackground';

const Simulator: React.FC = () => {
  const [state, setState] = useState(STATES[0].id);
  const [m2, setM2] = useState(128);
  const [enganchePercent, setEnganchePercent] = useState(1);
  const [plazo, setPlazo] = useState(15);
  
  const [results, setResults] = useState({
    total: 0,
    enganche: 0,
    mensualidad: 0
  });

  const calculate = () => {
    const prices: Record<string, number> = {
      qro: 5500,
      yuc: 6200,
      qroo: 7500,
      gto: 4800,
      pue: 5500,
      nl: 8500
    };
    
    const basePrice = prices[state] || 5000;
    const total = basePrice * m2;
    const enganche = total * (enganchePercent / 100);
    const financiado = total - enganche;
    
    const rate = 0.01; // 1% mensual sugerido para simulación
    const months = plazo * 12;
    const mensualidad = financiado * (rate / (1 - Math.pow(1 + rate, -months)));

    setResults({
      total,
      enganche,
      mensualidad
    });
  };

  useEffect(() => {
    calculate();
  }, [state, m2, enganchePercent, plazo]);

  return (
    <section id="simulador" className="py-32 bg-[#001529] relative overflow-hidden text-white">
      <GoldMeshBackground />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="max-w-[1800px] mx-auto px-8 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <h4 className="gold-accent font-black tracking-[0.7em] uppercase text-sm">Ingeniería Financiera</h4>
          <h2 className="text-5xl md:text-6xl font-serif leading-none">Simulador de <span className="gold-accent italic">Inversión Directa</span></h2>
          <p className="text-gray-400 max-w-4xl mx-auto font-light text-xl leading-relaxed">Personaliza tu estrategia patrimonial sin revisiones de buró y con planes de pago a tu medida.</p>
        </div>

        <div className="relative group max-w-[1400px] mx-auto">
          {/* External Halo Frames */}
          <div className="absolute -inset-10 border border-gold/5 rounded-[5rem] pointer-events-none"></div>
          <div className="absolute -inset-6 border border-gold/10 rounded-[4.5rem] pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-12 gap-0 rounded-[4rem] shadow-[0_60px_150px_rgba(0,0,0,0.5)] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 relative z-10">
            
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-gold rounded-tl-[4rem] pointer-events-none z-30"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-gold rounded-br-[4rem] pointer-events-none z-30"></div>

            <div className="lg:col-span-7 p-14 md:p-20 space-y-16">
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gold mb-2">
                    <Map size={20} />
                    <label className="text-[10px] font-black uppercase tracking-[0.4em]">Ubicación del Desarrollo</label>
                  </div>
                  <div className="relative group">
                    <select 
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full bg-white/5 border-2 border-transparent p-6 rounded-[1.5rem] focus:border-gold outline-none transition-all appearance-none cursor-pointer font-black text-xl text-white shadow-sm"
                    >
                      {STATES.map(s => <option key={s.id} value={s.id} className="bg-[#001529]">{s.name}</option>)}
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                      <ChevronRight size={24} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gold mb-2">
                    <Scaling size={20} />
                    <label className="text-[10px] font-black uppercase tracking-[0.4em]">Extensión (m²)</label>
                  </div>
                  <div className="bg-white/5 p-6 rounded-[1.5rem] flex items-center justify-between shadow-sm border border-white/10 hover:border-gold/20 transition-all">
                    <span className="font-black text-2xl text-white">{m2} m²</span>
                    <div className="flex gap-3">
                      <button onClick={() => setM2(Math.max(100, m2-10))} className="w-10 h-10 rounded-lg bg-white/10 shadow-md flex items-center justify-center hover:bg-gold hover:text-white transition-all text-xl font-bold border border-white/10">-</button>
                      <button onClick={() => setM2(Math.min(1000, m2+10))} className="w-10 h-10 rounded-lg bg-white/10 shadow-md flex items-center justify-center hover:bg-gold hover:text-white transition-all text-xl font-bold border border-white/10">+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                 <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gold">
                      <Percent size={20} />
                      <label className="text-[10px] font-black uppercase tracking-[0.4em]">Enganche Sugerido</label>
                    </div>
                    <span className="font-black text-2xl text-white">{enganchePercent}%</span>
                  </div>
                  <input 
                    type="range" min="1" max="90" step="1"
                    value={enganchePercent}
                    onChange={(e) => setEnganchePercent(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gold">
                      <Calendar size={20} />
                      <label className="text-[10px] font-black uppercase tracking-[0.4em]">Horizonte de Inversión</label>
                    </div>
                    <span className="font-black text-2xl text-white">{plazo} Años</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {[1, 3, 5, 10, 15].map(y => (
                      <button 
                        key={y}
                        onClick={() => setPlazo(y)}
                        className={`flex-1 min-w-[100px] py-4 rounded-[1.2rem] font-black transition-all text-base tracking-widest ${plazo === y ? 'bg-gold text-white shadow-xl shadow-gold/30' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'}`}
                      >
                        {y} <span className="text-[8px] block opacity-60">AÑOS</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#001529] p-16 md:p-24 text-white relative flex flex-col justify-between overflow-hidden border-l border-white/10">
              <div className="absolute inset-6 border border-white/5 rounded-[3rem] pointer-events-none"></div>
              <div className="absolute inset-10 border border-gold/10 rounded-[2.5rem] pointer-events-none"></div>

              <div className="relative z-10 space-y-12">
                <div className="flex items-center gap-6 text-gold mb-12">
                  <div className="w-12 h-12 rounded-2xl border border-gold/40 flex items-center justify-center bg-gold/5">
                    <Calculator size={24} />
                  </div>
                  <h3 className="text-2xl font-serif tracking-tight">Estrategia de Pago</h3>
                </div>
                
                <div className="space-y-12">
                  <div>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Inversión Total Estimada</p>
                    <p className="text-4xl md:text-5xl font-serif font-black text-white">
                      <span className="text-gold text-2xl">$</span>{results.total.toLocaleString('es-MX', { minimumFractionDigits: 0 })}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10 relative">
                    <div className="space-y-2">
                      <p className="text-gray-500 text-[9px] font-black uppercase tracking-[0.4em]">Pago Inicial</p>
                      <p className="text-2xl font-bold">${results.enganche.toLocaleString('es-MX', { minimumFractionDigits: 0 })}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gold text-[9px] font-black uppercase tracking-[0.4em]">Mensualidad Fija</p>
                      <p className="text-3xl font-black text-gold">${results.mensualidad.toLocaleString('es-MX', { minimumFractionDigits: 0 })}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 space-y-6 pt-16">
                <button className="w-full bg-gold hover:bg-white hover:text-gold text-white font-black py-6 rounded-[1.5rem] transition-all flex items-center justify-center gap-4 group uppercase tracking-[0.5em] text-xs shadow-3xl shadow-black border-2 border-transparent hover:border-gold">
                  Personalizar mi Plan <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
