import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag } from 'lucide-react';
import { INFO_MARCA, OPCIONES_ACABADOS } from '../datos/muebles';

export function PanelProyecto({ abierto, alCerrar, mueblesProyecto, alActualizarCantidad, alEliminarMueble, alActualizarAcabado, alVaciarProyecto }) {
  const [copiado, setCopiado] = useState(false);
  const [nombreCliente, setNombreCliente] = useState('');
  const [zonaEnvio, setZonaEnvio] = useState('CABA (Capital Federal)');

  if (!abierto) return null;

  const montoTotal = mueblesProyecto.reduce((suma, item) => suma + (item.precio * item.cantidad), 0);
  const cantidadTotalPiezas = mueblesProyecto.reduce((suma, item) => suma + item.cantidad, 0);

  const armarMensajeWhatsApp = () => {
    let mensaje = `Hola Hermanos Jota. Quisiera solicitar cotización formal y asesoramiento sobre las siguientes piezas:\n\n`;
    if (nombreCliente) mensaje += `Cliente: ${nombreCliente}\n`;
    mensaje += `Destino: ${zonaEnvio}\n\n`;
    mensaje += `Detalle del proyecto:\n`;

    mueblesProyecto.forEach((item, indice) => {
      mensaje += `${indice + 1}. ${item.nombre} (Cantidad: ${item.cantidad})\n`;
      mensaje += `   - Acabado: ${item.acabadoSeleccionado || 'Aceite de Lino Prensado en Frío'}\n`;
      mensaje += `   - Madera: ${item.madera}\n`;
      mensaje += `   - Subtotal: $ ${(item.precio * item.cantidad).toLocaleString('es-AR')}\n\n`;
    });

    mensaje += `Inversión Estimada: $ ${montoTotal.toLocaleString('es-AR')}\n\n`;
    mensaje += `Agradezco su pronta respuesta y coordinación de visita al taller.`;
    return mensaje;
  };

  const enviarWhatsApp = () => {
    if (mueblesProyecto.length === 0) return;
    const mensaje = armarMensajeWhatsApp();
    window.open(`https://wa.me/${INFO_MARCA.whatsappNumero}?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  const copiarResumen = () => {
    const mensaje = armarMensajeWhatsApp();
    navigator.clipboard.writeText(mensaje);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Fondo semitransparente */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={alCerrar}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#181411] border-l border-white/10 flex flex-col shadow-2xl text-[#FAF6F0]">
          
          {/* Encabezado del panel */}
          <div className="p-6 bg-[#13100E] border-b border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#D4A437] font-semibold block">
                Presupuesto & Cotización
              </span>
              <h3 className="font-serif text-lg text-[#FAF6F0] font-medium">
                Mi Proyecto [{cantidadTotalPiezas}]
              </h3>
            </div>

            <button
              onClick={alCerrar}
              aria-label="Cerrar panel"
              className="p-1 text-[#FAF6F0]/60 hover:text-[#D4A437] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lista de muebles */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {mueblesProyecto.length === 0 ? (
              <div className="text-center py-16 text-[#FAF6F0]/60">
                <ShoppingBag className="w-10 h-10 mx-auto mb-3 text-white/20" />
                <p className="font-serif text-base text-[#FAF6F0] font-medium">No hay piezas seleccionadas</p>
                <p className="text-xs text-[#FAF6F0]/50 mt-1 max-w-xs mx-auto font-light">
                  Explore el catálogo e incorpore las piezas que desee presupuestar.
                </p>
                <button
                  onClick={alCerrar}
                  className="mt-6 px-6 py-2.5 rounded-lg bg-[#C89B64] hover:bg-[#D4A437] text-[#161311] text-xs uppercase tracking-[0.1em] font-semibold"
                >
                  Ir al Catálogo
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-[10px] uppercase tracking-[0.12em] text-[#FAF6F0]/60 font-medium">
                    Piezas en Estudio
                  </span>
                  <button
                    onClick={alVaciarProyecto}
                    className="text-[11px] text-[#D4A437] hover:underline"
                  >
                    Vaciar lista
                  </button>
                </div>

                {mueblesProyecto.map((mueble) => (
                  <div 
                    key={mueble.id}
                    className="p-4 bg-[#201A16] rounded-xl border border-white/5 space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={mueble.imagen}
                        alt={mueble.nombre}
                        className="w-14 h-14 object-contain bg-[#161210] p-1 rounded-lg border border-white/5 flex-shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-serif text-sm text-[#FAF6F0] font-medium truncate">
                            {mueble.nombre}
                          </h4>
                          <button
                            onClick={() => alEliminarMueble(mueble.id)}
                            aria-label={`Eliminar ${mueble.nombre}`}
                            className="text-[#FAF6F0]/40 hover:text-red-400 transition-colors p-0.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <p className="text-xs text-[#D4A437] font-semibold">
                          {mueble.precioFormateado}
                        </p>
                        <p className="text-[10px] text-[#FAF6F0]/50 truncate">
                          {mueble.madera.split(' y ')[0]}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                      <span className="text-[10px] uppercase text-[#FAF6F0]/60">Acabado:</span>
                      <select
                        value={mueble.acabadoSeleccionado || 'Aceite de Lino Prensado en Frío'}
                        onChange={(e) => alActualizarAcabado(mueble.id, e.target.value)}
                        className="text-[11px] bg-[#161210] border border-white/10 rounded px-2 py-1 text-[#FAF6F0] focus:outline-none focus:border-[#D4A437]"
                      >
                        {OPCIONES_ACABADOS.map(f => (
                          <option key={f.id} value={f.nombre}>{f.nombre}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2 bg-[#161210] border border-white/10 rounded px-2 py-0.5 text-xs">
                        <button
                          onClick={() => alActualizarCantidad(mueble.id, Math.max(1, mueble.cantidad - 1))}
                          className="text-[#FAF6F0]/60 hover:text-white"
                          aria-label="Disminuir"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-medium px-1 text-[11px]">{mueble.cantidad}</span>
                        <button
                          onClick={() => alActualizarCantidad(mueble.id, mueble.cantidad + 1)}
                          className="text-[#FAF6F0]/60 hover:text-white"
                          aria-label="Aumentar"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-serif text-sm text-[#D4A437] font-semibold">
                        $ {(mueble.precio * mueble.cantidad).toLocaleString('es-AR')}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.1em] font-medium text-[#FAF6F0]/80 block mb-1">
                      Nombre (Opcional):
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Sofía Rossi"
                      value={nombreCliente}
                      onChange={(e) => setNombreCliente(e.target.value)}
                      className="w-full px-3 py-2 bg-[#161210] border border-white/10 rounded-lg text-xs text-[#FAF6F0] focus:outline-none focus:border-[#D4A437]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.1em] font-medium text-[#FAF6F0]/80 block mb-1">
                      Zona de Envío:
                    </label>
                    <select
                      value={zonaEnvio}
                      onChange={(e) => setZonaEnvio(e.target.value)}
                      className="w-full px-3 py-2 bg-[#161210] border border-white/10 rounded-lg text-xs text-[#FAF6F0] focus:outline-none focus:border-[#D4A437]"
                    >
                      <option value="CABA (Capital Federal)">CABA (Capital Federal)</option>
                      <option value="Zona Norte GBA">Zona Norte GBA</option>
                      <option value="Zona Sur / Oeste GBA">Zona Sur / Oeste GBA</option>
                      <option value="Interior del País (Expreso)">Interior del País (Expreso)</option>
                    </select>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Totales y acciones */}
          {mueblesProyecto.length > 0 && (
            <div className="p-6 bg-[#13100E] border-t border-white/10 space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-[0.1em] font-medium text-[#FAF6F0]/70">
                  Total Estimado:
                </span>
                <span className="font-serif text-xl font-semibold text-[#D4A437]">
                  $ {montoTotal.toLocaleString('es-AR')}
                </span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={enviarWhatsApp}
                  className="w-full py-3 rounded-lg bg-[#C89B64] hover:bg-[#D4A437] text-[#161311] text-xs uppercase tracking-[0.12em] font-semibold transition-colors"
                >
                  Enviar Cotización a WhatsApp
                </button>

                <button
                  onClick={copiarResumen}
                  className="w-full py-2.5 rounded-lg border border-white/20 hover:border-white/40 text-[#FAF6F0] text-xs uppercase tracking-[0.1em] font-medium transition-colors"
                >
                  {copiado ? 'Copiado al Portapapeles' : 'Copiar Resumen de Proyecto'}
                </button>
              </div>

              <p className="text-[10px] text-center text-[#FAF6F0]/50 font-light">
                Atención directa con nuestro equipo en San Cristóbal (+54 11 4567-8900)
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
