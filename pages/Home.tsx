
import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Simulator from '../components/Simulator';
import PresenceMap from '../components/PresenceMap';
import GoldMeshBackground from '../components/GoldMeshBackground';
import { STATES, BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, TrendingUp, Bookmark, Target, Layers, Landmark, Database, Compass, Ruler, Building2, MapPin } from 'lucide-react';
import { FacebookOfficial, InstagramOfficial, YouTubeOfficial, XOfficial } from '../components/Icons';

const Home: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const floatingCardRef = useRef<HTMLDivElement>(null);

  const lifestylePhotos = [
    "https://plum-zebra-838507.hostingersite.com/wp-content/uploads/2026/01/12.png",
    "https://plum-zebra-838507.hostingersite.com/wp-content/uploads/2026/01/11.png",
    "https://plum-zebra-838507.hostingersite.com/wp-content/uploads/2026/01/8.png",
    "https://plum-zebra-838507.hostingersite.com/wp-content/uploads/2026/01/3.png"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!floatingCardRef.current || isTyping) return;
      const rect = floatingCardRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) setIsTyping(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTyping]);

  useEffect(() => {
    const fullText = "¡Ciudad Maderas: El terreno seguro para el futuro de tu familia!";
    if (isTyping && typedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 35);
      return () => clearTimeout(timer);
    }
  }, [isTyping, typedText]);

  const blockFrameClass = "mx-4 md:mx-12 my-20 border border-gold rounded-[3rem] lg:rounded-[5rem] bg-white/95 backdrop-blur-3xl relative overflow-hidden shadow-2xl blueprint-overlay";

  return (
    <div className="pt-0 overflow-hidden relative min-h-screen">
      <Hero />

      {/* Floating Social Media - Official Logos */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-5 z-50">
         <a href="#" className="official-social-btn"><FacebookOfficial size={22} /></a>
         <a href="#" className="official-social-btn"><InstagramOfficial size={22} /></a>
         <a href="#" className="official-social-btn"><YouTubeOfficial size={22} /></a>
         <a href="#" className="official-social-btn"><XOfficial size={22} /></a>
      </div>

      {/* Message Ticker */}
      <div className="relative z-40 h-0 flex justify-center px-4">
        <div ref={floatingCardRef} className="absolute -translate-y-1/2 bg-[#001529]/95 backdrop-blur-3xl rounded-full py-5 px-16 shadow-2xl border border-gold overflow-hidden">
          <p className="text-white font-serif text-sm md:text-xl lg:text-3xl tracking-[0.1em] uppercase leading-none">
            <span className="text-gold-metallic">{typedText}</span>
            <span className="inline-block w-[2px] h-[0.9em] bg-gold ml-2 align-middle animate-pulse"></span>
          </p>
        </div>
      </div>

      <div className="relative pt-32">
        <GoldMeshBackground />
        
        {/* BLOCK 1: INTRODUCTION */}
        <div className={blockFrameClass}>
          <div className="watermark-text top-0 right-0">ESTRATEGIA</div>
          <div className="absolute top-12 left-12 flex gap-4 items-center">
             <div className="w-10 h-[1px] bg-gold"></div>
             <span className="tech-label">PROTOCOL_REF_2025</span>
          </div>

          <section className="py-24 relative z-10">
            <div className="max-w-[1600px] mx-auto px-10">
              <div className="grid lg:grid-cols-12 gap-24 items-center">
                <div className="lg:col-span-6 relative">
                  <div className="relative z-10 rounded-[4rem] overflow-hidden border border-gold group">
                    <img src="https://ciudadmaderas.com/wp-content/uploads/2025/03/CM_19MAR_header-3.png" className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-[3000ms]" />
                    <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-xl p-5 rounded-2xl border border-white/40">
                       <Landmark className="text-white" size={32} />
                    </div>
                  </div>
                  {/* Floating Card Fixed: Correct z-index and position */}
                  <div className="absolute -bottom-8 -right-8 bg-white p-10 rounded-[3rem] shadow-2xl border border-gold flex items-center gap-6 z-20">
                    <div className="bg-[#001529] p-5 rounded-2xl text-gold border border-gold">
                      <Database size={28} />
                    </div>
                    <div>
                      <h4 className="tech-label mb-1">DATA_INDEX.093</h4>
                      <p className="text-3xl font-serif font-black text-gray-900">+93% <span className="gold-accent italic">Histórico</span></p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-10 pl-0 lg:pl-10">
                  <div className="inline-flex items-center gap-4 bg-gold/5 px-6 py-2 rounded-full border border-gold/20">
                    <Compass size={20} className="text-gold" />
                    <span className="tech-label text-gray-900 font-black">MARKET_LEADER // PN_OFFICIAL</span>
                  </div>
                  <h2 className="text-6xl md:text-[5.5rem] font-serif leading-[0.9] tracking-tighter text-gray-900">
                    Forjando <br />
                    <span className="text-gold-metallic italic block ml-10">patrimonios</span> <br />
                    extraordinarios
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-2xl font-light italic border-l border-gold pl-8">
                    Arquitectura de inversión con certeza jurídica total para su familia.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-8 pt-6">
                    {[
                      { icon: <TrendingUp size={28}/>, title: "PLUSVALÍA", desc: "Crecimiento patrimonial asegurado." },
                      { icon: <ShieldCheck size={28}/>, title: "CRÉDITO", desc: "Financiamiento directo sin buró." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                        <div className="bg-white p-4 rounded-2xl text-gold border border-gold group-hover:bg-[#001529] group-hover:text-white transition-all duration-500">
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="tech-label text-gray-900 font-black">{item.title}</h5>
                          <p className="text-lg text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* BLOCK 2: HOUSES */}
        <div className={blockFrameClass}>
          <div className="watermark-text bottom-0 left-0">PREMIUM</div>
          <section className="py-24 relative z-10">
            <div className="max-w-[1600px] mx-auto px-10">
              <div className="grid lg:grid-cols-12 gap-24 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1 space-y-12">
                   <div className="inline-flex items-center gap-4">
                     <Layers className="text-gold" size={24} />
                     <span className="tech-label">HI-END_CATALOG_2025</span>
                   </div>
                   <h2 className="text-6xl md:text-[6rem] font-serif leading-[0.85] tracking-tighter text-gray-900">
                     Casas <span className="text-gold-metallic italic">Elite</span> <br /> Selection
                   </h2>
                   <div className="flex gap-10">
                     <div className="p-8 bg-[#001529] rounded-[3rem] border border-gold shadow-xl">
                        <p className="tech-label text-white/50 mb-3">MIN_ENTRY_REF</p>
                        <p className="text-4xl font-serif text-white">$16,250<span className="text-gold text-lg ml-2">MXN</span></p>
                     </div>
                     <p className="text-gray-400 text-2xl font-light leading-relaxed border-r border-gold pr-10 text-right italic max-w-xs">
                       Diseño de vanguardia sin trámites bancarios.
                     </p>
                   </div>
                   <div className="pt-6">
                     <Link to="/casas-premium" className="inline-flex bg-[#001529] text-white px-16 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.5em] border border-gold group">
                       Explorar Modelos <ArrowRight size={20} className="ml-4 group-hover:translate-x-2 transition-transform" />
                     </Link>
                   </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2 relative">
                   <div className="rounded-[4rem] overflow-hidden border border-gold relative z-10 group shadow-2xl">
                     <img src="https://deepskyblue-gorilla-632972.hostingersite.com/wp-content/uploads/2026/01/ciudad-maderas-el-marques-queretaro-24671639-foto-01.jpg" className="w-full h-[700px] object-cover" />
                     <div className="absolute inset-0 bg-black/5"></div>
                   </div>
                   {/* This card stays visible over the photo */}
                   <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] border border-gold shadow-2xl z-20 flex flex-col gap-4">
                      <div className="flex items-center gap-4 text-gray-900">
                        <div className="p-2 bg-gold/10 rounded-lg text-gold border border-gold/20"><ShieldCheck size={20} /></div>
                        <span className="tech-label font-black">SIN_BURÓ_NI_AVAL</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-900">
                        <div className="p-2 bg-gold/10 rounded-lg text-gold border border-gold/20"><Ruler size={20} /></div>
                        <span className="tech-label font-black">ENTREGA_INMEDIATA</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* BLOCK 3: PRESENCE MAP */}
        <div className={blockFrameClass}>
          <PresenceMap />
        </div>

        {/* BLOCK 4: DEVELOPMENTS */}
        <div className={blockFrameClass}>
          <div className="watermark-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015]">MAPA_GLOBAL</div>
          <section id="desarrollos" className="py-24 relative z-10">
            <div className="max-w-[1600px] mx-auto px-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-gold/20 pb-16">
                <div>
                  <h4 className="tech-label mb-6">PORTFOLIO // DESTINOS</h4>
                  <h2 className="text-7xl md:text-[8rem] font-serif leading-[0.8] tracking-tighter text-gray-900">
                    Proyección <br />
                    <span className="text-gold-metallic italic">Inmobiliaria</span>
                  </h2>
                </div>
                <div className="bg-gold p-6 rounded-3xl border border-white shadow-xl">
                   <Target size={64} className="text-[#001529]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
                {STATES.map((state) => (
                  <Link key={state.id} to={`/estado/${state.slug}`} className="group relative h-[650px] overflow-hidden rounded-[4rem] border border-gold shadow-xl">
                    <img src={state.imageUrl} alt={state.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-[4000ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001529] via-[#001529]/10 to-transparent"></div>
                    <div className="absolute top-10 right-10 tech-label text-white/50">GEO_REF.{state.id.toUpperCase()}</div>
                    <div className="absolute bottom-0 left-0 p-16 text-white w-full z-10">
                      <h3 className="text-6xl font-serif mb-10 group-hover:text-gold transition-colors leading-[0.8]">{state.name}</h3>
                      <div className="inline-flex items-center gap-6 px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full font-black text-[10px] uppercase tracking-[0.5em] group-hover:bg-gold group-hover:text-white group-hover:border-white transition-all">
                        Explorar <ArrowRight size={18} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* BLOCK 5: SIMULATOR */}
        <div className={blockFrameClass}>
          <Simulator />
        </div>

        {/* BLOCK 6: BLOG */}
        <div className={blockFrameClass}>
          <div className="watermark-text bottom-0 right-0">INTEL</div>
          <section className="py-24 relative z-10">
            <div className="max-w-[1600px] mx-auto px-10">
              <div className="mb-20 border-b border-gold/20 pb-12 flex justify-between items-end">
                <div>
                  <h4 className="tech-label mb-4">REPORTS // NOTICIAS</h4>
                  <h2 className="text-6xl font-serif tracking-tighter text-gray-900">Análisis <span className="text-gold-metallic italic">Estratégico</span></h2>
                </div>
                <Bookmark size={48} className="text-gold/20" />
              </div>
              <div className="grid md:grid-cols-3 gap-16">
                {BLOG_POSTS.map((post) => (
                  <div key={post.id} className="bg-white rounded-[3.5rem] overflow-hidden border border-gold group hover:shadow-2xl transition-all duration-700">
                    <div className="h-64 overflow-hidden relative">
                      <img src={post.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2000ms]" />
                    </div>
                    <div className="p-12 space-y-6">
                      <h3 className="text-2xl font-serif text-gray-900 group-hover:text-gold transition-colors">{post.title}</h3>
                      <p className="text-gray-400 font-light italic leading-relaxed line-clamp-2">"{post.excerpt}"</p>
                      <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                        <span className="tech-label">{post.date}</span>
                        <ArrowRight size={20} className="text-gold group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* BLOCK 7: FOOTER_METADATA */}
        <div className="py-32 flex flex-col items-center justify-center space-y-8">
           <div className="tech-label text-gray-900 font-black tracking-[1em]">GLOBAL_TERMINAL // PN_OFFICIAL_2025</div>
           <div className="w-[1px] h-32 bg-gradient-to-b from-gold via-gold to-transparent"></div>
           <div className="flex gap-10">
              <FacebookOfficial size={32} />
              <InstagramOfficial size={32} />
              <YouTubeOfficial size={32} />
              <XOfficial size={32} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
