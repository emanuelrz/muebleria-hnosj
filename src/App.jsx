import React, { useState } from 'react';
import { BarraNavegacion } from './componentes/BarraNavegacion';
import { Portada } from './componentes/Portada';
import { Catalogo } from './componentes/Catalogo';
import { FichaProducto } from './componentes/FichaProducto';
import { Sustentabilidad } from './componentes/Sustentabilidad';
import { CasaTaller } from './componentes/CasaTaller';
import { PanelProyecto } from './componentes/PanelProyecto';
import { PieDePagina } from './componentes/PieDePagina';
import { MUEBLES, INFO_MARCA } from './datos/muebles';
import { MessageCircle } from 'lucide-react';

export function App() {
  const [idMuebleSeleccionado, setIdMuebleSeleccionado] = useState(null);
  const [mueblesProyecto, setMueblesProyecto] = useState([]);
  const [panelProyectoAbierto, setPanelProyectoAbierto] = useState(false);
  const [mensajeNotificacion, setMensajeNotificacion] = useState(null);

  const muebleSeleccionado = MUEBLES.find(m => m.id === idMuebleSeleccionado);

  const agregarAlProyecto = (muebleAAgregar) => {
    setMueblesProyecto(prev => {
      const existente = prev.find(item => item.id === muebleAAgregar.id);
      if (existente) {
        return prev.map(item =>
          item.id === muebleAAgregar.id
            ? { 
                ...item, 
                cantidad: item.cantidad + 1,
                acabadoSeleccionado: muebleAAgregar.acabadoSeleccionado || item.acabadoSeleccionado 
              }
            : item
        );
      }
      return [
        ...prev,
        {
          ...muebleAAgregar,
          cantidad: 1,
          acabadoSeleccionado: muebleAAgregar.acabadoSeleccionado || 'Aceite de Lino Prensado en Frío'
        }
      ];
    });

    mostrarNotificacion(`Pieza incorporada al proyecto: ${muebleAAgregar.nombre}`);
  };

  const actualizarCantidad = (idMueble, nuevaCantidad) => {
    setMueblesProyecto(prev => prev.map(item => item.id === idMueble ? { ...item, cantidad: nuevaCantidad } : item));
  };

  const eliminarMueble = (idMueble) => {
    setMueblesProyecto(prev => prev.filter(item => item.id !== idMueble));
  };

  const actualizarAcabado = (idMueble, nuevoAcabado) => {
    setMueblesProyecto(prev => prev.map(item => item.id === idMueble ? { ...item, acabadoSeleccionado: nuevoAcabado } : item));
  };

  const vaciarProyecto = () => {
    setMueblesProyecto([]);
  };

  const mostrarNotificacion = (texto) => {
    setMensajeNotificacion(texto);
    setTimeout(() => {
      setMensajeNotificacion(null);
    }, 2800);
  };

  const desplazarseAAgendarVisita = () => {
    const elemento = document.getElementById('taller');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mapaMueblesEnProyecto = mueblesProyecto.reduce((acumulado, item) => {
    acumulado[item.id] = true;
    return acumulado;
  }, {});

  const totalPiezasProyecto = mueblesProyecto.reduce((suma, item) => suma + item.cantidad, 0);

  return (
    <div className="min-h-screen flex flex-col relative bg-[#12100E] text-[#FAF6F0]">
      {/* Barra de navegación superior */}
      <BarraNavegacion
        cantidadProyecto={totalPiezasProyecto}
        alAbrirProyecto={() => setPanelProyectoAbierto(true)}
        alAgendarVisita={desplazarseAAgendarVisita}
      />

      {/* Contenido principal del Showroom */}
      <main className="flex-1">
        <Portada alSeleccionarMueble={(id) => setIdMuebleSeleccionado(id)} />

        <Catalogo
          alSeleccionarMueble={(id) => setIdMuebleSeleccionado(id)}
          alAgregarAlProyecto={agregarAlProyecto}
          mueblesEnProyecto={mapaMueblesEnProyecto}
        />

        <Sustentabilidad />

        <CasaTaller />
      </main>

      {/* Pie de página institucional */}
      <PieDePagina />

      {/* Ficha técnica y modal del mueble */}
      {muebleSeleccionado && (
        <FichaProducto
          mueble={muebleSeleccionado}
          alCerrar={() => setIdMuebleSeleccionado(null)}
          alAgregarAlProyecto={agregarAlProyecto}
          estaEnProyecto={!!mapaMueblesEnProyecto[muebleSeleccionado.id]}
        />
      )}

      {/* Panel lateral del proyecto y cotización */}
      <PanelProyecto
        abierto={panelProyectoAbierto}
        alCerrar={() => setPanelProyectoAbierto(false)}
        mueblesProyecto={mueblesProyecto}
        alActualizarCantidad={actualizarCantidad}
        alEliminarMueble={eliminarMueble}
        alActualizarAcabado={actualizarAcabado}
        alVaciarProyecto={vaciarProyecto}
      />

      {/* Notificación sutil */}
      {mensajeNotificacion && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1C1814] text-[#FAF6F0] px-5 py-2.5 rounded-lg border border-[#D4A437]/50 text-xs font-light tracking-wide shadow-2xl">
          <span>{mensajeNotificacion}</span>
        </div>
      )}

      {/* Acceso flotante a WhatsApp */}
      <a
        href={`https://wa.me/${INFO_MARCA.whatsappNumero}?text=${encodeURIComponent('Hola Hermanos Jota. Me contacto desde su showroom digital.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacto por WhatsApp"
        className="fixed bottom-6 right-6 z-30 p-3.5 rounded-full bg-[#271E18] hover:bg-[#A0522D] text-[#D4A437] hover:text-white border border-[#D4A437]/40 shadow-xl transition-all hover:scale-110"
        title="Consultar por WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
}

export default App;
