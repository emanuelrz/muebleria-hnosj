import React from 'react';
import { ArrowUp } from 'lucide-react';
import { INFO_MARCA, logoSvg } from '../datos/muebles';

const IconoInstagram = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export function PieDePagina() {
  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const coloresMarca = [
    { nombre: 'Siena Tostado', hex: '#A0522D', rol: 'Color Principal' },
    { nombre: 'Verde Salvia', hex: '#87A96B', rol: 'Sustentabilidad' },
    { nombre: 'Alabastro Cálido', hex: '#F5E6D3', rol: 'Fondos & Luz' },
    { nombre: 'Vara de Oro', hex: '#D4A437', rol: 'Acentos' },
    { nombre: 'Rosa Polvoriento', hex: '#C47A6D', rol: 'Acentos Suaves' }
  ];

  return (
    <footer className="bg-[#0C0A09] text-[#FAF6F0] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grilla Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Columna 1: Información de marca */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#2A1F17] border border-[#D4A437]/30 flex items-center justify-center p-1.5">
                <img 
                  src={logoSvg} 
                  alt="Hermanos Jota" 
                  className="w-full h-full object-contain filter invert opacity-90" 
                />
              </div>
              <span className="font-serif text-xl tracking-[0.16em] text-white uppercase font-medium">
                {INFO_MARCA.nombre}
              </span>
            </div>

            <p className="text-xs text-[#FAF6F0]/60 font-light leading-relaxed max-w-md">
              "{INFO_MARCA.manifiesto}"
            </p>

            {/* Muestra de la paleta oficial */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#D4A437] block mb-2 font-medium">
                Paleta Cromática Oficial · Manual {INFO_MARCA.anio}:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {coloresMarca.map((color, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[10px] text-[#FAF6F0]/50">
                    <span 
                      className="w-3 h-3 rounded-sm border border-white/20"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.hex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-xs text-[#D4A437] uppercase tracking-[0.15em] font-medium">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF6F0]/60 font-light">
              <li><a href="#coleccion" className="hover:text-white transition-colors">Colección Permanente</a></li>
              <li><a href="#herencia" className="hover:text-white transition-colors">Maderas Nativas FSC</a></li>
              <li><a href="#herencia" className="hover:text-white transition-colors">Programa Herencia Viva</a></li>
              <li><a href="#taller" className="hover:text-white transition-colors">Casa Taller San Cristóbal</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-xs text-[#D4A437] uppercase tracking-[0.15em] font-medium">
              Casa Taller & Contacto
            </h4>
            <div className="text-xs text-[#FAF6F0]/60 space-y-1.5 font-light">
              <p className="text-white">{INFO_MARCA.direccion}, CABA</p>
              <p className="text-[#FAF6F0]/40">{INFO_MARCA.horarios}</p>
              <p className="pt-2">WhatsApp: <a href={`https://wa.me/${INFO_MARCA.whatsappNumero}`} className="text-[#D4A437] underline">{INFO_MARCA.whatsapp}</a></p>
              <p>Email: {INFO_MARCA.emailGeneral}</p>
              <p className="flex items-center gap-1.5">
                <IconoInstagram className="w-3.5 h-3.5 text-[#D4A437]" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {INFO_MARCA.instagram}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Créditos del Manual de Marca */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF6F0]/40 font-light">
          <div>
            <p>© {INFO_MARCA.anio} {INFO_MARCA.nombre}. Todos los derechos reservados.</p>
            <p className="text-[10px] text-[#FAF6F0]/30 mt-0.5">
              Dirección Creativa: Estudio Hermanos · Buenos Aires, Argentina
            </p>
          </div>

          <button
            onClick={volverArriba}
            className="flex items-center gap-1 text-xs text-[#FAF6F0]/60 hover:text-white transition-colors uppercase tracking-[0.1em]"
          >
            <span>Subir</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
