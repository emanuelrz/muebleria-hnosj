import React, { useState } from 'react';
import { INFO_MARCA, MUEBLES } from '../datos/muebles';

export function CasaTaller() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    telefono: '',
    email: '',
    fecha: '',
    horario: '11:00',
    interes: 'Sillón Copacabana',
    comentarios: ''
  });
  const [enviado, setEnviado] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (!formulario.nombre || !formulario.telefono || !formulario.fecha) return;
    setEnviado(true);
  };

  const confirmarPorWhatsApp = () => {
    const texto = encodeURIComponent(
      `Hola Hermanos Jota. Quisiera coordinar una visita a la Casa Taller:\n\nNombre: ${formulario.nombre}\nTeléfono: ${formulario.telefono}\nFecha: ${formulario.fecha} a las ${formulario.horario} hs\nInterés: ${formulario.interes}\nComentarios: ${formulario.comentarios || 'Ninguno'}\n\nGracias.`
    );
    window.open(`https://wa.me/${INFO_MARCA.whatsappNumero}?text=${texto}`, '_blank');
  };

  return (
    <section id="taller" className="py-20 bg-[#151210] border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-medium tracking-[0.2em] text-[#D4A437] uppercase block mb-2">
            Atención & Visitas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF6F0] font-normal">
            Casa Taller en San Cristóbal
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/70 mt-3 font-light leading-relaxed">
            Nuestro espacio reúne el taller de carpintería tradicional y el salón de exhibición para apreciar el comportamiento de los materiales, las texturas y el confort de cada diseño.
          </p>
        </div>

        {/* Grilla de información y formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Ubicación y contacto */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1C1814] p-8 rounded-2xl border border-white/10 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#D4A437] font-medium block mb-1">
                  Sede y Showroom
                </span>
                <h3 className="font-serif text-xl text-[#FAF6F0] font-medium">
                  {INFO_MARCA.nombre} — Casa Taller
                </h3>
              </div>

              <div className="space-y-4 text-xs text-[#FAF6F0]/80 font-light leading-relaxed">
                <div>
                  <p className="font-medium text-[#FAF6F0]">{INFO_MARCA.direccion}</p>
                  <p className="text-[#FAF6F0]/50">C1232AAB — Barrio de San Cristóbal</p>
                  <p className="text-[#FAF6F0]/50">{INFO_MARCA.ciudad}</p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <p className="font-medium text-[#FAF6F0]">Horarios de Atención:</p>
                  <p className="text-[#FAF6F0]/50">{INFO_MARCA.horarios}</p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-1">
                  <p className="font-medium text-[#FAF6F0]">Canales Directos:</p>
                  <p className="text-[#FAF6F0]/60">WhatsApp: <a href={`https://wa.me/${INFO_MARCA.whatsappNumero}`} className="text-[#D4A437] underline">{INFO_MARCA.whatsapp}</a></p>
                  <p className="text-[#FAF6F0]/60">Email: {INFO_MARCA.emailGeneral}</p>
                  <p className="text-[#FAF6F0]/60">Instagram: {INFO_MARCA.instagram}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Av. San Juan 2847, San Cristóbal, Buenos Aires')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs uppercase tracking-[0.1em] text-[#D4A437] hover:underline font-medium"
                >
                  Ver ubicación en Google Maps &gt;
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario de reserva */}
          <div className="lg:col-span-7 bg-[#1C1814] p-8 sm:p-10 rounded-2xl border border-white/10">
            {enviado ? (
              <div className="py-8 space-y-4 text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4A437] font-medium block">
                  Reserva Registrada
                </span>
                <h3 className="font-serif text-2xl text-[#FAF6F0] font-normal">
                  Cita Coordinada para el {formulario.fecha} a las {formulario.horario} hs
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-light leading-relaxed max-w-md">
                  Estimado/a {formulario.nombre}, nos pondremos en contacto para confirmar su cita y tener preparadas las muestras correspondientes a {formulario.interes}.
                </p>
                
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={confirmarPorWhatsApp}
                    className="px-6 py-3 rounded-lg bg-[#C89B64] hover:bg-[#D4A437] text-[#161311] text-xs uppercase tracking-[0.1em] font-semibold transition-colors"
                  >
                    Confirmar por WhatsApp
                  </button>
                  <button
                    onClick={() => { setEnviado(false); setFormulario({ nombre: '', telefono: '', email: '', fecha: '', horario: '11:00', interes: 'Sillón Copacabana', comentarios: '' }); }}
                    className="px-6 py-3 rounded-lg border border-white/20 text-[#FAF6F0] text-xs uppercase tracking-[0.1em] font-medium hover:border-white/40 transition-colors"
                  >
                    Solicitar otra fecha
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={enviarFormulario} className="space-y-5">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#D4A437] font-semibold block mb-1">
                    Cita Personalizada
                  </span>
                  <h3 className="font-serif text-2xl text-[#FAF6F0] font-normal">
                    Agendar Visita al Showroom & Taller
                  </h3>
                  <p className="text-xs text-[#FAF6F0]/60 font-light mt-1">
                    Atención dedicada con un ebanista del equipo para evaluar muestras y especificaciones técnicas.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#FAF6F0]/80 block mb-1">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Martín Soler"
                      value={formulario.nombre}
                      onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#14100E] border border-white/10 rounded-lg text-xs text-[#FAF6F0] focus:outline-none focus:border-[#D4A437]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#FAF6F0]/80 block mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+54 11 ..."
                      value={formulario.telefono}
                      onChange={(e) => setFormulario({ ...formulario, telefono: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#14100E] border border-white/10 rounded-lg text-xs text-[#FAF6F0] focus:outline-none focus:border-[#D4A437]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#FAF6F0]/80 block mb-1">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      value={formulario.email}
                      onChange={(e) => setFormulario({ ...formulario, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#14100E] border border-white/10 rounded-lg text-xs text-[#FAF6F0] focus:outline-none focus:border-[#D4A437]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#FAF6F0]/80 block mb-1">
                      Fecha de Visita *
                    </label>
                    <input
                      type="date"
                      required
                      value={formulario.fecha}
                      onChange={(e) => setFormulario({ ...formulario, fecha: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#14100E] border border-white/10 rounded-lg text-xs text-[#FAF6F0] focus:outline-none focus:border-[#D4A437]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#FAF6F0]/80 block mb-1">
                      Horario
                    </label>
                    <select
                      value={formulario.horario}
                      onChange={(e) => setFormulario({ ...formulario, horario: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#14100E] border border-white/10 rounded-lg text-xs text-[#FAF6F0] focus:outline-none focus:border-[#D4A437] cursor-pointer"
                    >
                      <option value="10:30">10:30 hs</option>
                      <option value="12:00">12:00 hs</option>
                      <option value="15:00">15:00 hs</option>
                      <option value="17:00">17:00 hs</option>
                      <option value="18:30">18:30 hs</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#FAF6F0]/80 block mb-1">
                    Pieza de Interés Principal
                  </label>
                  <select
                    value={formulario.interes}
                    onChange={(e) => setFormulario({ ...formulario, interes: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#14100E] border border-white/10 rounded-lg text-xs text-[#FAF6F0] focus:outline-none focus:border-[#D4A437] cursor-pointer"
                  >
                    {MUEBLES.map(p => (
                      <option key={p.id} value={p.nombre}>{p.nombre}</option>
                    ))}
                    <option value="Asesoramiento Integral">Proyecto y Asesoramiento Integral</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#FAF6F0]/80 block mb-1">
                    Comentarios o notas
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Detalles sobre ambientes, medidas o requerimientos particulares..."
                    value={formulario.comentarios}
                    onChange={(e) => setFormulario({ ...formulario, comentarios: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#14100E] border border-white/10 rounded-lg text-xs text-[#FAF6F0] focus:outline-none focus:border-[#D4A437]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-[#C89B64] hover:bg-[#D4A437] text-[#161311] text-xs uppercase tracking-[0.12em] font-semibold transition-colors shadow-md"
                >
                  Solicitar Turno de Visita
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
