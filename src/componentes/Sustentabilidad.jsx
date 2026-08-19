import React, { useState } from 'react';
import { PILARES_HERENCIA } from '../datos/muebles';

const TIPOS_MADERA = [
  {
    id: 'algarrobo',
    nombre: 'Algarrobo Chaqueño',
    subtitulo: 'Densidad y estabilidad dimensional',
    region: 'Parque Chaqueño, Argentina',
    propiedades: 'Madera de altísima dureza y estabilidad dimensional. Resiste variaciones higrométricas sin deformaciones estructurales, desarrollando una pátina cobriza noble con el paso del tiempo.',
    usos: 'Estructuras de sofás, tapas de mesas de comedor y aparadores.'
  },
  {
    id: 'quebracho',
    nombre: 'Quebracho Blanco & Colorado',
    subtitulo: 'Ebanistería estructural de larga vida',
    region: 'Santiago del Estero y Chaco',
    propiedades: 'Resistencia natural a agentes biológicos por su alta concentración de taninos botánicos. Permite ensambles espigados de precisión milimétrica.',
    usos: 'Brazos curvos de autor, patas torneadas y uniones mecánicas.'
  },
  {
    id: 'calden',
    nombre: 'Caldén Pampeano',
    subtitulo: 'Veta flameada exclusiva de la región central',
    region: 'El Caldenal, La Pampa',
    propiedades: 'Vetas continuas de dibujo expresivo y fibra flexible apta para curvados al vapor y frentes continuos.',
    usos: 'Bibliotecas modulares, respaldos conformados y mesas de centro.'
  }
];

export function Sustentabilidad() {
  const [maderaSeleccionada, setMaderaSeleccionada] = useState(TIPOS_MADERA[0]);

  return (
    <section id="herencia" className="py-24 bg-[#12100E] border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-white/10 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[11px] font-medium tracking-[0.2em] text-[#D4A437] uppercase block">
              Compromiso Productivo & Origen
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF6F0] font-normal leading-tight">
              Maderas Nativas & Filosofía de Longevidad
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-light leading-relaxed">
              Nuestro proceso respeta los ciclos del bosque nativo argentino y prescinde de materiales sintéticos de corta vida útil. Cada pieza está concebida para envejecer con dignidad a través de las generaciones.
            </p>
          </div>
        </div>

        {/* 3 Principios en Formato Editorial Minimalista (Sin cajas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16 border-b border-white/10">
          <div className="space-y-3">
            <span className="text-xs font-serif text-[#D4A437] tracking-wider block">01 / Abastecimiento Ético</span>
            <h3 className="font-serif text-xl text-[#FAF6F0] font-medium">Maderas Certificadas FSC</h3>
            <p className="text-xs text-[#FAF6F0]/65 font-light leading-relaxed">
              Maderas nativas provenientes exclusivamente de bosques bajo plan de manejo sustentable en el norte y centro del país.
            </p>
          </div>

          <div className="space-y-3 md:border-l md:border-white/10 md:pl-10">
            <span className="text-xs font-serif text-[#D4A437] tracking-wider block">02 / Química Cero</span>
            <h3 className="font-serif text-xl text-[#FAF6F0] font-medium">Acabados de Bajo COV</h3>
            <p className="text-xs text-[#FAF6F0]/65 font-light leading-relaxed">
              Aceites vegetales de prensado en frío, ceras de abejas locales y adhesivos al agua libres de emisiones tóxicas.
            </p>
          </div>

          <div className="space-y-3 md:border-l md:border-white/10 md:pl-10">
            <span className="text-xs font-serif text-[#D4A437] tracking-wider block">03 / Circuito Corto</span>
            <h3 className="font-serif text-xl text-[#FAF6F0] font-medium">Ebanistas Locales</h3>
            <p className="text-xs text-[#FAF6F0]/65 font-light leading-relaxed">
              Artesanos, torneros y talleres de tapicería ubicados en la Ciudad y Gran Buenos Aires para minimizar la huella de traslado.
            </p>
          </div>
        </div>

        {/* Explorador de Maderas Editorial */}
        <div className="py-16 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4A437] font-medium block mb-1">
                Especies Nativas
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF6F0] font-normal">
                Comportamiento de la Materia Prima
              </h3>
            </div>

            {/* Pestañas de madera */}
            <div className="flex items-center gap-6 border-b border-white/10 md:border-b-0 pb-2 md:pb-0">
              {TIPOS_MADERA.map((madera) => (
                <button
                  key={madera.id}
                  onClick={() => setMaderaSeleccionada(madera)}
                  className={`text-xs uppercase tracking-[0.12em] transition-all pb-1 relative ${
                    maderaSeleccionada.id === madera.id
                      ? 'text-[#D4A437] font-semibold border-b border-[#D4A437]'
                      : 'text-[#FAF6F0]/50 hover:text-[#FAF6F0]'
                  }`}
                >
                  {madera.nombre.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Ficha descriptiva limpia sin tarjetas encajonadas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[11px] uppercase tracking-[0.15em] text-[#D4A437] block">
                Origen: {maderaSeleccionada.region}
              </span>
              <h4 className="font-serif text-2xl text-[#FAF6F0] font-medium">
                {maderaSeleccionada.nombre}
              </h4>
              <p className="text-xs text-[#C89B64] font-medium">
                {maderaSeleccionada.subtitulo}
              </p>
              <p className="text-xs sm:text-sm text-[#FAF6F0]/75 font-light leading-relaxed max-w-2xl">
                {maderaSeleccionada.propiedades}
              </p>
              
              <div className="pt-2 text-xs text-[#FAF6F0]/80">
                <span className="text-[#D4A437] font-medium uppercase tracking-[0.1em] text-[10px] block mb-0.5">
                  Aplicación en Colección:
                </span>
                <span className="font-light">{maderaSeleccionada.usos}</span>
              </div>
            </div>

            <div className="lg:col-span-4 border-l border-white/10 pl-8 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4A437] block">
                Trazabilidad Forestal
              </span>
              <p className="font-serif text-lg text-[#FAF6F0] font-medium">
                Chapa de Bronce Numerada
              </p>
              <p className="text-xs text-[#FAF6F0]/60 font-light leading-relaxed">
                Cada mueble que sale de nuestro taller lleva grabada su identificación con la procedencia exacta del lote forestal.
              </p>
            </div>
          </div>
        </div>

        {/* Programa Herencia Viva en Formato Lista Editorial */}
        <div className="pt-16">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4A437] font-medium block mb-1">
              Compromiso a Largo Plazo
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Programa Herencia Viva
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-light mt-2">
              Pautas y servicios de por vida para garantizar la vigencia de cada obra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {PILARES_HERENCIA.map((pilar, idx) => (
              <div key={idx} className="space-y-2 border-t border-white/10 pt-4">
                <span className="text-xs font-serif text-[#D4A437]">0{idx + 1}</span>
                <h4 className="font-serif text-sm text-white font-medium">
                  {pilar.titulo}
                </h4>
                <p className="text-[11px] text-[#FAF6F0]/60 font-light leading-relaxed">
                  {pilar.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
