import React from 'react';
import { ArrowRight, ChevronRight, Heart } from 'lucide-react';
import { MUEBLES } from '../datos/muebles';

export function Portada({ alSeleccionarMueble }) {
  // Primeras 4 piezas destacadas para la grilla lateral
  const piezasDestacadas = MUEBLES.slice(0, 4);

  return (
    <section className="pt-24 pb-12 bg-[#12100E] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grilla Principal del Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Banner Izquierdo Protagónico con escena de Living */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#271E18] to-[#171310] rounded-2xl p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[460px] shadow-2xl">
            
            {/* Resplandor ambiental de luz cálida */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#A0522D]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <span className="text-[11px] font-medium tracking-[0.2em] text-[#D4A437] uppercase block">
                Hermanos Jota · El Arte del Mobiliario Atemporal
              </span>
              
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF6F0] font-normal leading-tight">
                Explora la Colección Hecha a Mano
              </h1>

              <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-light max-w-md pt-1">
                La intersección entre la calidez del optimismo de los 60 y la sustentabilidad del 2026. Maderas nativas y ebanistería de autor.
              </p>
            </div>

            {/* Imagen protagónica del living */}
            <div 
              onClick={() => alSeleccionarMueble('sofa-patagonia')}
              className="my-6 relative z-10 flex items-center justify-center cursor-pointer group py-4"
            >
              <img
                src={piezasDestacadas[0]?.imagen || MUEBLES[0].imagen}
                alt="Sofá Patagonia"
                className="max-h-56 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Fila inferior de acción */}
            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
              <a
                href="#coleccion"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C89B64] hover:bg-[#D4A437] text-[#161311] text-xs uppercase tracking-[0.12em] font-semibold transition-all shadow-md"
              >
                <span>Ver Catálogo Completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center gap-2 text-xs text-[#D4A437] font-medium">
                <span className="w-8 h-[2px] bg-[#D4A437]"></span>
                <span>Edición 2026</span>
              </div>
            </div>

          </div>

          {/* Bloque Derecho: Fila de 4 tarjetas de producto oscuras */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between pb-1">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#FAF6F0]/60 font-medium">
                Piezas Destacadas de la Colección
              </span>
              <a 
                href="#coleccion" 
                className="text-xs text-[#D4A437] hover:underline flex items-center gap-1 font-medium"
              >
                <span>Ver las 11 piezas</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 flex-1">
              {piezasDestacadas.map((mueble) => (
                <div
                  key={mueble.id}
                  onClick={() => alSeleccionarMueble(mueble.id)}
                  className="card-dark-luxury rounded-xl p-4 sm:p-5 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[9px] uppercase tracking-[0.14em] text-[#FAF6F0]/50 font-medium">
                      N° {mueble.numero}
                    </span>
                    <Heart className="w-3.5 h-3.5 text-[#FAF6F0]/40 group-hover:text-[#D4A437] transition-colors" />
                  </div>

                  <div className="my-3 py-2 flex items-center justify-center">
                    <img
                      src={mueble.imagen}
                      alt={mueble.nombre}
                      className="max-h-24 sm:max-h-28 w-auto object-contain drop-shadow transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline justify-between gap-1">
                      <h3 className="font-serif text-sm sm:text-base text-[#FAF6F0] font-medium truncate group-hover:text-[#D4A437] transition-colors">
                        {mueble.nombre}
                      </h3>
                      <span className="text-xs font-semibold text-[#D4A437]">
                        {mueble.precioFormateado}
                      </span>
                    </div>

                    <p className="text-[10px] text-[#FAF6F0]/50 truncate font-light">
                      {mueble.madera.split(' y ')[0]}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-[10px] text-[#D4A437] font-medium border-t border-white/5">
                      <span>Ver opciones</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
