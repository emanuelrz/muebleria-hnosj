import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Heart } from 'lucide-react';
import { MUEBLES, CATEGORIAS } from '../datos/muebles';

export function Catalogo({ alSeleccionarMueble, alAgregarAlProyecto, mueblesEnProyecto = {} }) {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [criterioOrden, setCriterioOrden] = useState('destacados');

  const mueblesFiltrados = useMemo(() => {
    let lista = [...MUEBLES];

    if (categoriaActiva !== 'todos') {
      lista = lista.filter(item => item.categoria === categoriaActiva);
    }

    if (textoBusqueda.trim() !== '') {
      const q = textoBusqueda.toLowerCase();
      lista = lista.filter(item => 
        item.nombre.toLowerCase().includes(q) ||
        item.madera.toLowerCase().includes(q) ||
        item.subtitulo.toLowerCase().includes(q) ||
        item.categoria.toLowerCase().includes(q)
      );
    }

    if (criterioOrden === 'precio-menor') {
      lista.sort((a, b) => a.precio - b.precio);
    } else if (criterioOrden === 'precio-mayor') {
      lista.sort((a, b) => b.precio - a.precio);
    } else if (criterioOrden === 'alfabetico') {
      lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    return lista;
  }, [categoriaActiva, textoBusqueda, criterioOrden]);

  return (
    <section id="coleccion" className="py-20 bg-[#12100E] border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-white/10">
          <div>
            <span className="text-[11px] font-medium tracking-[0.2em] text-[#D4A437] uppercase block mb-2">
              Índice Maestro · 2026
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF6F0] font-normal">
              Colección Permanente
            </h2>
          </div>

          {/* Filtros de búsqueda y orden */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#FAF6F0]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar pieza o madera..."
                value={textoBusqueda}
                onChange={(e) => setTextoBusqueda(e.target.value)}
                className="w-full sm:w-60 pl-9 pr-3.5 py-2.5 bg-[#1C1814] border border-white/10 rounded-lg text-xs text-[#FAF6F0] placeholder:text-[#FAF6F0]/40 focus:outline-none focus:border-[#D4A437]"
              />
            </div>

            <select
              value={criterioOrden}
              onChange={(e) => setCriterioOrden(e.target.value)}
              className="px-3.5 py-2.5 bg-[#1C1814] border border-white/10 rounded-lg text-xs text-[#FAF6F0] focus:outline-none focus:border-[#D4A437] cursor-pointer"
            >
              <option value="destacados">Destacados de Autor</option>
              <option value="precio-menor">Precio: Menor a Mayor</option>
              <option value="precio-mayor">Precio: Mayor a Menor</option>
              <option value="alfabetico">Nombre (A - Z)</option>
            </select>
          </div>
        </div>

        {/* Pestañas de categorías */}
        <div className="flex items-center gap-6 overflow-x-auto pb-4 mb-12 border-b border-white/5 no-scrollbar">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaActiva(cat.id)}
              className={`text-xs uppercase tracking-[0.14em] transition-all pb-2 relative whitespace-nowrap ${
                categoriaActiva === cat.id
                  ? 'text-[#D4A437] font-semibold border-b-2 border-[#D4A437]'
                  : 'text-[#FAF6F0]/50 font-normal hover:text-[#FAF6F0]'
              }`}
            >
              <span>{cat.etiqueta}</span>
              <span className="text-[10px] text-[#FAF6F0]/30 ml-1.5 font-sans">
                ({cat.cantidad})
              </span>
            </button>
          ))}
        </div>

        {/* Grilla de productos dark luxury */}
        {mueblesFiltrados.length === 0 ? (
          <div className="text-center py-20 bg-[#1C1814] rounded-xl border border-white/10 p-8">
            <p className="font-serif text-lg text-[#FAF6F0]">No se encontraron piezas para esta búsqueda</p>
            <button
              onClick={() => { setCategoriaActiva('todos'); setTextoBusqueda(''); }}
              className="mt-4 text-xs uppercase tracking-[0.1em] text-[#D4A437] underline"
            >
              Ver todas las piezas
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mueblesFiltrados.map((mueble) => {
              const agregado = !!mueblesEnProyecto[mueble.id];

              return (
                <div
                  key={mueble.id}
                  className="card-dark-luxury rounded-2xl p-5 flex flex-col justify-between group"
                >
                  {/* Zona superior con imagen y número */}
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <span className="text-[10px] uppercase tracking-[0.16em] text-[#D4A437] font-medium">
                        N° {mueble.numero} · {mueble.categoria}
                      </span>
                      <button 
                        onClick={() => alSeleccionarMueble(mueble.id)}
                        className="text-[#FAF6F0]/40 hover:text-[#D4A437] transition-colors p-1"
                        title="Ver detalle"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>

                    <div 
                      onClick={() => alSeleccionarMueble(mueble.id)}
                      className="my-4 py-4 flex items-center justify-center cursor-pointer min-h-[190px]"
                    >
                      <img
                        src={mueble.imagen}
                        alt={mueble.nombre}
                        className="max-h-44 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Datos del mueble y precio */}
                  <div className="space-y-3 pt-3 border-t border-white/5">
                    <div>
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 
                          onClick={() => alSeleccionarMueble(mueble.id)}
                          className="font-serif text-lg sm:text-xl text-[#FAF6F0] group-hover:text-[#D4A437] transition-colors cursor-pointer"
                        >
                          {mueble.nombre}
                        </h3>
                        <span className="font-serif text-base font-semibold text-[#D4A437]">
                          {mueble.precioFormateado}
                        </span>
                      </div>
                      
                      <p className="text-xs text-[#FAF6F0]/60 font-light mt-0.5">
                        {mueble.madera.split(' y ')[0]} · {mueble.subtitulo}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-3 text-xs">
                      <button
                        onClick={() => alSeleccionarMueble(mueble.id)}
                        className="text-[#FAF6F0]/70 hover:text-[#D4A437] uppercase tracking-[0.1em] font-medium text-[11px]"
                      >
                        Ver detalles &gt;
                      </button>

                      <button
                        onClick={() => alAgregarAlProyecto(mueble)}
                        className={`px-4 py-2 rounded-lg text-[11px] uppercase tracking-[0.1em] font-semibold transition-all flex items-center gap-1.5 ${
                          agregado
                            ? 'bg-[#87A96B] text-white'
                            : 'bg-[#C89B64] text-[#161311] hover:bg-[#D4A437]'
                        }`}
                      >
                        {agregado ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>En Proyecto</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Cotizar</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
