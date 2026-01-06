
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Info, ArrowRight, Crosshair, Navigation, Target, Activity } from 'lucide-react';
import { PRESENCE_LOCATIONS } from '../constants';
import L from 'leaflet';
import GoldMeshBackground from './GoldMeshBackground';

const PresenceMap: React.FC = () => {
  const [activeLoc, setActiveLoc] = useState<typeof PRESENCE_LOCATIONS[0] | null>(PRESENCE_LOCATIONS[9]); // Querétaro por defecto
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  // Lista de nombres de estados para resaltar (deben coincidir con las propiedades del GeoJSON)
  const presenceStates = [
    'Aguascalientes', 'Chihuahua', 'Distrito Federal', 'México', 'Guanajuato', 
    'Jalisco', 'Michoacán', 'Nuevo León', 'Puebla', 'Querétaro', 
    'Quintana Roo', 'San Luis Potosí', 'Yucatán'
  ];

  useEffect(() => {
    if (mapContainerRef.current && !mapInstance.current) {
      mapInstance.current = L.map(mapContainerRef.current, {
        center: [23.6345, -102.5528],
        zoom: 5,
        minZoom: 4,
        maxZoom: 12,
        scrollWheelZoom: false,
        zoomControl: false,
        attributionControl: false
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO'
      }).addTo(mapInstance.current);

      fetch('https://raw.githubusercontent.com/angelnm782/mexico-states-geojson/master/mexico.json')
        .then(res => res.json())
        .then(data => {
          L.geoJSON(data, {
            style: (feature) => {
              const stateName = feature?.properties?.name;
              const isPresence = presenceStates.includes(stateName);
              return {
                fillColor: isPresence ? '#D4AF37' : 'transparent',
                weight: isPresence ? 1.5 : 0.5,
                opacity: 0.8,
                color: isPresence ? '#D4AF37' : '#eee',
                fillOpacity: isPresence ? 0.3 : 0
              };
            }
          }).addTo(mapInstance.current!);
        });

      const createIcon = (active: boolean = false) => L.divIcon({
        className: 'custom-gold-marker',
        html: `
          <div class="marker-container ${active ? 'active' : ''}">
            <div class="pulse-ring"></div>
            <div class="dot" style="background-color: #D4AF37;"></div>
          </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      const goldIcon = createIcon(false);

      PRESENCE_LOCATIONS.forEach((loc) => {
        const marker = L.marker([loc.lat, loc.lng], { icon: goldIcon })
          .addTo(mapInstance.current!)
          .bindTooltip(`<div class="map-tooltip-content">
            <span class="tooltip-name">${loc.name}</span>
          </div>`, { direction: 'top', offset: [0, -10], className: 'custom-tooltip' });
        
        marker.on('click', () => {
          setActiveLoc(loc);
          mapInstance.current?.setView([loc.lat, loc.lng], 8, { animate: true });
        });
      });
    }
  }, []);

  const handleLocClick = (loc: typeof PRESENCE_LOCATIONS[0]) => {
    setActiveLoc(loc);
    if (mapInstance.current) {
      mapInstance.current.setView([loc.lat, loc.lng], 8, { animate: true });
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden text-gray-900">
      <GoldMeshBackground />
      <div className="max-w-[1800px] mx-auto px-8">
        <div className="relative p-6 md:p-12 border border-gold rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.05)] bg-white/90 backdrop-blur-sm overflow-hidden group/section">
          
          <div className="absolute top-0 left-0 w-32 h-32 border-t-[4px] border-l-[4px] border-gold rounded-tl-[3rem] pointer-events-none z-20"></div>
          <div className="absolute top-0 right-0 w-32 h-32 border-t-[1px] border-r-[1px] border-black/10 rounded-tr-[3rem] pointer-events-none z-10"></div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">
            <div className="lg:col-span-4 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-gold"></span>
                  <h4 className="text-black font-black tracking-[0.6em] uppercase text-[11px]">Presencia Nacional</h4>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif leading-[0.9] text-black">
                  Ubicaciones <br />
                  <span className="gold-accent italic">Estratégicas</span> <br />
                  <span className="text-black/40">Disponibles</span>
                </h2>
                <div className="w-20 h-1 bg-gold mt-6"></div>
                <p className="text-gray-500 font-medium text-base leading-relaxed max-w-sm">
                  Explore nuestra red de oficinas corporativas y desarrollos exclusivos en los nodos de mayor plusvalía del país.
                </p>
              </div>

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                {PRESENCE_LOCATIONS.map((loc, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLocClick(loc)}
                    className={`w-full text-left p-5 rounded-[1.5rem] border-2 transition-all flex items-center justify-between group relative overflow-hidden ${
                      activeLoc?.name === loc.name 
                        ? 'bg-[#001529] border-gold shadow-[0_15px_30px_rgba(212,175,55,0.25)]' 
                        : 'bg-white border-gray-100/50 text-gray-400 hover:border-gold/30 hover:bg-gold/5'
                    }`}
                  >
                    {activeLoc?.name === loc.name && (
                      <div className="absolute right-0 top-0 h-full w-2 bg-gold"></div>
                    )}
                    
                    <div className="flex items-center gap-5">
                      <div className={`p-3 rounded-xl transition-colors ${activeLoc?.name === loc.name ? 'bg-gold text-[#001529]' : 'bg-gray-50 text-gray-300'}`}>
                        <MapPin size={22} />
                      </div>
                      <div>
                        <span className={`font-black uppercase tracking-[0.2em] text-[11px] block transition-colors ${activeLoc?.name === loc.name ? 'text-white' : 'text-black'}`}>{loc.name}</span>
                        <span className={`text-[9px] uppercase tracking-wider block mt-1 transition-colors ${activeLoc?.name === loc.name ? 'text-white/80' : 'text-gray-400'}`}>{loc.city}</span>
                      </div>
                    </div>
                    
                    {activeLoc?.name === loc.name && (
                      <div className="text-gold">
                        <ArrowRight size={18} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 relative h-[600px] rounded-[3.5rem] overflow-hidden shadow-2xl border-[1px] border-gold/20 group">
              <div ref={mapContainerRef} className="w-full h-full z-10 brightness-[1.02] contrast-[1.05]" />
              
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/50 rounded-[3.5rem] z-20"></div>

              {activeLoc && (
                <div className="absolute bottom-10 left-10 right-10 z-30 bg-[#001529]/95 backdrop-blur-3xl p-10 rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-gold/40 flex flex-col md:flex-row items-center justify-between gap-10 animate-fade-in">
                  <div className="space-y-3 text-white w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold animate-ping"></div>
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gold">Sucursal Autorizada</p>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <h5 className="text-4xl font-serif leading-none text-white">{activeLoc.city}</h5>
                      <span className="text-gold/40 font-serif italic text-lg">{activeLoc.name}</span>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-gold/50 to-transparent my-4"></div>
                    <p className="text-gray-300 font-light text-sm leading-relaxed max-w-xl">
                      {activeLoc.detail}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 w-full md:w-auto shrink-0">
                    <button className="bg-gold text-[#001529] px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-2xl shadow-gold/40 hover:bg-white transition-all transform hover:-translate-y-1">
                      Agendar Cita
                    </button>
                    <button className="border border-white/20 text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                       Ver Mapa Completo <Navigation size={14} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="absolute bottom-0 right-0 w-40 h-1 bg-gold"></div>
          <div className="absolute bottom-0 right-0 w-1 h-40 bg-gold"></div>
          <div className="absolute bottom-0 left-0 w-12 h-[2px] bg-black/20"></div>
        </div>
      </div>
    </section>
  );
};

export default PresenceMap;
