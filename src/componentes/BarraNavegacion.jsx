import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { INFO_MARCA, logoSvg } from '../datos/muebles';

export function BarraNavegacion({ cantidadProyecto, alAbrirProyecto, alAgendarVisita }) {
  const [desplazado, setDesplazado] = useState(false);
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);

  useEffect(() => {
    const controlarDesplazamiento = () => {
      setDesplazado(window.scrollY > 20);
    };
    window.addEventListener('scroll', controlarDesplazamiento);
    return () => window.removeEventListener('scroll', controlarDesplazamiento);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      desplazado 
        ? 'bg-[#151210]/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-lg' 
        : 'bg-[#151210]/80 backdrop-blur-sm py-4 border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logotipo monograma + marca */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#34271F] border border-[#D4A437]/30 flex items-center justify-center p-2 group-hover:border-[#D4A437] transition-all">
            <img 
              src={logoSvg} 
              alt="Hermanos Jota" 
              className="w-full h-full object-contain filter invert opacity-90"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.18em] text-[#FAF6F0] uppercase font-semibold">
              Hermanos Jota
            </span>
            <span className="text-[9px] text-[#D4A437] tracking-[0.25em] uppercase font-light -mt-0.5">
              Buenos Aires · 2026
            </span>
          </div>
        </a>

        {/* Enlaces de navegación */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.14em] font-medium text-[#FAF6F0]/70">
          <a href="#coleccion" className="hover:text-[#D4A437] transition-colors">
            Colección
          </a>
          <a href="#herencia" className="hover:text-[#D4A437] transition-colors">
            Maderas & Sustentabilidad
          </a>
          <a href="#taller" className="hover:text-[#D4A437] transition-colors">
            Casa Taller
          </a>
          <a href="#taller" className="hover:text-[#D4A437] transition-colors">
            Contacto
          </a>
        </nav>

        {/* Acciones derecha */}
        <div className="flex items-center gap-5">
          <a 
            href="#coleccion"
            aria-label="Buscar en catálogo"
            className="text-[#FAF6F0]/70 hover:text-[#D4A437] transition-colors hidden sm:block p-1"
          >
            <Search className="w-4 h-4" />
          </a>

          <button
            onClick={alAgendarVisita}
            className="hidden lg:inline-block text-xs uppercase tracking-[0.12em] font-medium text-[#D4A437] hover:text-white transition-colors"
          >
            Agendar Visita
          </button>

          <button
            onClick={alAbrirProyecto}
            aria-label="Ver piezas seleccionadas"
            className="flex items-center gap-2 p-2 rounded-lg bg-[#221D19] border border-white/10 hover:border-[#D4A437]/60 text-[#FAF6F0] transition-all"
          >
            <ShoppingBag className="w-4 h-4 text-[#D4A437]" />
            <span className="text-xs uppercase tracking-[0.1em] font-medium hidden sm:inline">
              Proyecto
            </span>
            <span className="text-xs font-semibold text-[#D4A437]">
              [{cantidadProyecto}]
            </span>
          </button>

          <button
            onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
            className="md:hidden p-1.5 text-[#FAF6F0] hover:text-[#D4A437]"
            aria-label="Abrir menú"
          >
            {menuMovilAbierto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuMovilAbierto && (
        <div className="md:hidden bg-[#181412] border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-4 text-xs uppercase tracking-[0.14em] font-medium">
            <a 
              href="#coleccion" 
              onClick={() => setMenuMovilAbierto(false)}
              className="text-[#FAF6F0] hover:text-[#D4A437] py-1"
            >
              Colección
            </a>
            <a 
              href="#herencia" 
              onClick={() => setMenuMovilAbierto(false)}
              className="text-[#FAF6F0] hover:text-[#D4A437] py-1"
            >
              Maderas & Sustentabilidad
            </a>
            <a 
              href="#taller" 
              onClick={() => setMenuMovilAbierto(false)}
              className="text-[#FAF6F0] hover:text-[#D4A437] py-1"
            >
              Casa Taller
            </a>
            <button
              onClick={() => {
                setMenuMovilAbierto(false);
                alAgendarVisita();
              }}
              className="text-left text-[#D4A437] pt-2 font-semibold"
            >
              Agendar Visita
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
