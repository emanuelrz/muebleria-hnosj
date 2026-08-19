import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { OPCIONES_ACABADOS, INFO_MARCA } from '../datos/muebles';

export function FichaProducto({ mueble, alCerrar, alAgregarAlProyecto, estaEnProyecto }) {
  const [acabadoSeleccionado, setAcabadoSeleccionado] = useState(OPCIONES_ACABADOS[0]);

  useEffect(() => {
    const manejarTeclaEscape = (e) => {
      if (e.key === 'Escape') alCerrar();
    };
    window.addEventListener('keydown', manejarTeclaEscape);
    return () => window.removeEventListener('keydown', manejarTeclaEscape);
  }, [alCerrar]);

  if (!mueble) return null;

  const consultarWhatsAppDirecto = () => {
    const texto = encodeURIComponent(
      `Hola Hermanos Jota. Me interesa consultar por la pieza "${mueble.nombre}" con acabado en "${acabadoSeleccionado.nombre}" (${mueble.precioFormateado}). ¿Podrían orientarme sobre plazos de confección en taller y coordinación de visita? Gracias.`
    );
    window.open(`https://wa.me/${INFO_MARCA.whatsappNumero}?text=${texto}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      
      <div className="fixed inset-0" onClick={alCerrar}></div>

      {/* Tarjeta Modal Dark Luxury */}
      <div className="relative bg-[#1A1512] max-w-4xl w-full border border-white/10 rounded-2xl z-10 max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Barra superior */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-white/10 bg-[#151210]">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4A437] font-medium">
            Ficha Técnica de Ebanistería · {INFO_MARCA.nombre}
          </span>

          <button
            onClick={alCerrar}
            aria-label="Cerrar ficha"
            className="p-1 text-[#FAF6F0]/60 hover:text-[#D4A437] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contenido desplazable */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-[#FAF6F0]">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Vista previa de imagen en cabina oscura */}
            <div className="md:col-span-6 bg-[#221D19] rounded-xl p-8 flex items-center justify-center border border-white/5 min-h-[300px]">
              <img
                src={mueble.imagen}
                alt={mueble.nombre}
                className="max-h-72 w-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Metadatos y acciones */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#D4A437] font-medium">
                  {mueble.madera}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF6F0] font-normal mt-1">
                  {mueble.nombre}
                </h2>
                <div className="font-serif text-2xl text-[#D4A437] font-semibold mt-2">
                  {mueble.precioFormateado}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#FAF6F0]/75 leading-relaxed font-light">
                {mueble.descripcion}
              </p>

              {/* Selector de acabados */}
              <div className="space-y-2 pt-2">
                <label className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#FAF6F0]/80 block">
                  Tratamiento de Acabado:
                </label>
                <div className="space-y-2">
                  {OPCIONES_ACABADOS.map((acabado) => (
                    <button
                      key={acabado.id}
                      onClick={() => setAcabadoSeleccionado(acabado)}
                      className={`w-full text-left p-3 rounded-lg border text-xs transition-all flex items-center justify-between ${
                        acabadoSeleccionado.id === acabado.id
                          ? 'border-[#D4A437] bg-[#251F1A] text-[#FAF6F0]'
                          : 'border-white/5 hover:border-white/20 bg-[#161210] text-[#FAF6F0]/70'
                      }`}
                    >
                      <div>
                        <p className="font-medium text-[#FAF6F0]">{acabado.nombre}</p>
                        <p className="text-[11px] text-[#FAF6F0]/50 font-light">{acabado.descripcion}</p>
                      </div>
                      <span className="text-[10px] uppercase text-[#D4A437] font-medium ml-2">
                        {acabado.insignia}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <button
                  onClick={() => alAgregarAlProyecto({ ...mueble, acabadoSeleccionado: acabadoSeleccionado.nombre })}
                  className={`flex-1 py-3 px-5 rounded-lg text-xs uppercase tracking-[0.1em] font-semibold transition-all flex items-center justify-center gap-2 ${
                    estaEnProyecto
                      ? 'bg-[#87A96B] text-white'
                      : 'bg-[#C89B64] hover:bg-[#D4A437] text-[#161311]'
                  }`}
                >
                  {estaEnProyecto ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Agregado al Proyecto</span>
                    </>
                  ) : (
                    <span>Sumar a Cotización</span>
                  )}
                </button>

                <button
                  onClick={consultarWhatsAppDirecto}
                  className="py-3 px-5 rounded-lg border border-white/20 hover:border-[#D4A437] text-[#FAF6F0] text-xs uppercase tracking-[0.1em] font-medium transition-colors text-center"
                >
                  Consultar WhatsApp
                </button>
              </div>

            </div>

          </div>

          {/* Tabla de especificaciones */}
          <div className="pt-6 border-t border-white/10">
            <h3 className="font-serif text-lg text-[#FAF6F0] font-medium mb-4">
              Especificaciones & Dimensiones
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs bg-[#221D19] p-6 rounded-xl border border-white/5">
              <div>
                <p className="font-medium text-[#D4A437] uppercase tracking-[0.1em] mb-2 text-[10px]">
                  Medidas Generales
                </p>
                <ul className="space-y-1 text-[#FAF6F0]/70 font-light">
                  {Object.entries(mueble.dimensiones).map(([clave, valor]) => (
                    <li key={clave} className="flex justify-between">
                      <span className="capitalize">{clave}:</span>
                      <span className="font-medium text-[#FAF6F0]">{valor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-medium text-[#D4A437] uppercase tracking-[0.1em] mb-2 text-[10px]">
                  Origen del Material
                </p>
                <p className="text-[#FAF6F0] font-medium">{mueble.madera}</p>
                <p className="text-[#FAF6F0]/50 font-light mt-1 text-[11px]">
                  Bosques nativos argentinos con certificación de manejo responsable FSC.
                </p>
              </div>

              <div>
                <p className="font-medium text-[#D4A437] uppercase tracking-[0.1em] mb-2 text-[10px]">
                  Confección & Garantía
                </p>
                <p className="text-[#FAF6F0] font-medium">{mueble.garantia}</p>
                <p className="text-[#FAF6F0]/50 font-light mt-1 text-[11px]">
                  Plazo de confección: {mueble.tiempoProduccion}.
                </p>
              </div>
            </div>
          </div>

          {/* Memoria de diseño */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase tracking-[0.12em] font-medium text-[#D4A437]">
              Memoria de Diseño
            </h4>
            <p className="text-xs text-[#FAF6F0]/75 leading-relaxed font-light italic">
              "{mueble.historia}"
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-[#FAF6F0]/60 font-light">
              {mueble.detallesMaterial.map((detalle, idx) => (
                <li key={idx} className="flex items-baseline gap-2">
                  <span className="text-[#D4A437]">—</span>
                  <span>{detalle}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
