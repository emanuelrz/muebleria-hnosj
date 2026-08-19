// Importación de imágenes web-safe para compatibilidad total con GitHub Pages y servidores Linux
import imgSofaPatagonia from '../assets/sofa-patagonia.png';
import imgSillonCopacabana from '../assets/sillon-copacabana.png';
import imgAparadorUspallata from '../assets/aparador-uspallata.png';
import imgMesaComedorPampa from '../assets/mesa-comedor-pampa.png';
import imgSillasCordoba from '../assets/sillas-cordoba.png';
import imgMesaCentroAraucaria from '../assets/mesa-centro-araucaria.png';
import imgButacaMendoza from '../assets/butaca-mendoza.png';
import imgEscritorioCosta from '../assets/escritorio-costa.png';
import imgSillaBelgrano from '../assets/silla-belgrano.png';
import imgBibliotecaRecoleta from '../assets/biblioteca-recoleta.png';
import imgMesaNocheAconcagua from '../assets/mesa-noche-aconcagua.png';
import logoSvg from '../assets/logo.svg';

export { logoSvg };

export const MUEBLES = [
  {
    id: 'sofa-patagonia',
    nombre: 'Sofá Patagonia',
    subtitulo: 'Confort noble de tres cuerpos',
    categoria: 'living',
    numero: '01',
    precio: 2380000,
    precioFormateado: '$ 2.380.000',
    imagen: imgSofaPatagonia,
    descripcion: 'Sofá de presencia solemne y calidez envolvente. Su estructura perimetral en madera maciza vista enmarca almohadones de alta densidad y vellón siliconado ecológico, tapizados en lino natural de trama gruesa.',
    historia: 'Diseñado en homenaje a la inmensidad del sur argentino, buscando la comunión entre el cobijo y la austeridad moderna de mediados de siglo.',
    madera: 'Algarrobo Chaqueño y Quebracho Blanco FSC',
    acabado: 'Aceite de lino 100% natural prensado en frío y cera virgen',
    dimensiones: {
      ancho: '230 cm',
      profundidad: '95 cm',
      alto: '82 cm',
      alturaAsiento: '44 cm'
    },
    detallesMaterial: [
      'Madera nativa certificada FSC de manejo responsable',
      'Cinchas elásticas de yute vegetal de alta resistencia',
      'Espuma viscoelástica y vellón recuperado no contaminante',
      'Tapicería lavable en lino crudo o bouclé tostado'
    ],
    indiceSustentable: '98%',
    tiempoProduccion: '3 a 4 semanas (hecho a mano en taller)',
    garantia: '10 años de garantía estructural'
  },
  {
    id: 'sillon-copacabana',
    nombre: 'Sillón Copacabana',
    subtitulo: 'Homenaje al optimismo de 1960',
    categoria: 'living',
    numero: '02',
    precio: 1450000,
    precioFormateado: '$ 1.450.000',
    imagen: imgSillonCopacabana,
    descripcion: 'La obra icónica de nuestra colección. Una relectura audaz del diseño sudamericano de los años 60: brazos con curvatura aerodinámica esculpidos a gubia y un asiento suspendido que invita a una relajación consciente.',
    historia: 'Nace en las mesas de dibujo de nuestro taller en San Cristóbal, fusionando el aire cosmopolita rioplatense con la ebanistería tradicional de encastres ciegos.',
    madera: 'Algarrobo noble y Caldén pampeano',
    acabado: 'Tono Siena Tostado con lustre de cera de abejas',
    dimensiones: {
      ancho: '88 cm',
      profundidad: '90 cm',
      alto: '78 cm',
      alturaAsiento: '40 cm'
    },
    detallesMaterial: [
      'Madera maciza tallada a mano con uniones espigadas',
      'Tapizado en bouclé de algodón 100% orgánico',
      'Adhesivos libres de COV y solventes tóxicos',
      'Almohadón con funda removible y cierre invisible'
    ],
    indiceSustentable: '96%',
    tiempoProduccion: '2 a 3 semanas',
    garantia: '10 años de garantía estructural'
  },
  {
    id: 'aparador-uspallata',
    nombre: 'Aparador Uspallata',
    subtitulo: 'Almacenamiento y arquitectura lineal',
    categoria: 'living',
    numero: '03',
    precio: 1280000,
    precioFormateado: '$ 1.280.000',
    imagen: imgAparadorUspallata,
    descripcion: 'Mueble de guardado de líneas puras con puertas corredizas en relieve acanalado. Sus tiradores embutidos y estantes regulables resuelven vajilla, cristalería o sistemas de audio con una estética serena.',
    historia: 'Inspirado en los valles andinos y la geometría de las celosías tradicionales, diseñado para ordenar el espacio sin recargar la visión.',
    madera: 'Algarrobo macizo y enchapado natural de raíz',
    acabado: 'Aceite de lino botánico y pulido sedoso mate',
    dimensiones: {
      ancho: '180 cm',
      profundidad: '48 cm',
      alto: '78 cm',
      profundidadInterior: '44 cm'
    },
    detallesMaterial: [
      'Correderas artesanales de madera con guía de deslizamiento silenciosa',
      'Pasacables oculto opcional para conectividad de audio y TV',
      'Tratamiento antimanchas con cera orgánica',
      'Madera nativa 100% recuperada de lotes sostenibles'
    ],
    indiceSustentable: '95%',
    tiempoProduccion: '3 a 4 semanas',
    garantia: '10 años de garantía estructural'
  },
  {
    id: 'mesa-comedor-pampa',
    nombre: 'Mesa Comedor Pampa',
    subtitulo: 'El altar del encuentro diario',
    categoria: 'comedor',
    numero: '04',
    precio: 1620000,
    precioFormateado: '$ 1.620.000',
    imagen: imgMesaComedorPampa,
    descripcion: 'Mesa de proporciones generosas concebida para albergar conversaciones memorables. Tapa de 40 mm de espesor con bordes biselados suaves y caballetes entrelazados que maximizan el espacio para comensales.',
    historia: 'Creada para ser el corazón del hogar durante generaciones. Una mesa que gana nobleza con el paso del tiempo y las marcas de la vida compartida.',
    madera: 'Algarrobo chaqueño de veta continua seleccionada',
    acabado: 'Acabado ecológico hidrófugo a base de ceras botánicas',
    dimensiones: {
      ancho: '220 cm',
      profundidad: '100 cm',
      alto: '76 cm',
      espesorTapa: '4 cm'
    },
    detallesMaterial: [
      'Madera estacionada naturalmente por más de 18 meses',
      'Ensamble de patas desmontable con tornillería de bronce macizo',
      'Capacidad para 8 a 10 personas cómodamente sentadas',
      'Cero plásticos y cero lacas sintéticas'
    ],
    indiceSustentable: '99%',
    tiempoProduccion: '3 a 4 semanas',
    garantia: '10 años de garantía estructural'
  },
  {
    id: 'sillas-cordoba',
    nombre: 'Sillas Córdoba (Par)',
    subtitulo: 'Curvatura ergonómica & balance',
    categoria: 'comedor',
    numero: '05',
    precio: 760000,
    precioFormateado: '$ 760.000',
    imagen: imgSillasCordoba,
    descripcion: 'Sillas de comedor diseñadas con un respaldo continuo que abraza la espalda. Su peso equilibrado y patas cónicas otorgan una esbeltez visual idónea para acompañar cualquier mesa de madera noble.',
    historia: 'Homenaje a la tradición mueblera cordobesa, sintetizada con la ligereza del diseño escandinavo y rioplatense.',
    madera: 'Algarrobo y Caldén macizo',
    acabado: 'Aceite de lino natural y lustre manual a muñeca',
    dimensiones: {
      ancho: '48 cm',
      profundidad: '52 cm',
      alto: '80 cm',
      alturaAsiento: '46 cm'
    },
    detallesMaterial: [
      'Espaldar multilaminado curvado al vapor',
      'Asiento ergonómico conformado para largas sobremesas',
      'Topes de fieltro natural en patas para protección de suelos',
      'Tinte vegetal al agua en tono Siena tostado suave'
    ],
    indiceSustentable: '94%',
    tiempoProduccion: '2 semanas',
    garantia: '10 años de garantía estructural'
  },
  {
    id: 'mesa-centro-araucaria',
    nombre: 'Mesa de Centro Araucaria',
    subtitulo: 'Fluidez y armonía en el living',
    categoria: 'living',
    numero: '06',
    precio: 640000,
    precioFormateado: '$ 640.000',
    imagen: imgMesaCentroAraucaria,
    descripcion: 'Mesa baja de living con bordes curvos y dos planos visuales. El plano inferior permite resguardar revistas de arte, libros y catálogos manteniendo la superficie principal despejada.',
    historia: 'Su silueta orgánica está inspirada en las copas de las araucarias milenarias del noroeste y la meseta patagónica.',
    madera: 'Caldén pampeano y Quebracho',
    acabado: 'Aceite de nuez y lino prensado en frío',
    dimensiones: {
      ancho: '115 cm',
      profundidad: '65 cm',
      alto: '42 cm'
    },
    detallesMaterial: [
      'Patas torneadas a mano con ensamble de cola de zorra',
      'Superficie resistente a marcas de humedad con cera vegetal',
      'Madera nativa 100% certificada FSC',
      'Textura natural sedosa al tacto'
    ],
    indiceSustentable: '97%',
    tiempoProduccion: '1 a 2 semanas',
    garantia: '10 años de garantía estructural'
  },
  {
    id: 'butaca-mendoza',
    nombre: 'Butaca Mendoza',
    subtitulo: 'Sillón individual de descanso',
    categoria: 'living',
    numero: '07',
    precio: 890000,
    precioFormateado: '$ 890.000',
    imagen: imgButacaMendoza,
    descripcion: 'Sillón individual de porte compacto y gran calidez. Confeccionado con apoyabrazos continuos de madera maciza que transmiten la suavidad del pulido artesanal a cada contacto.',
    historia: 'Pensado para rincones de lectura, galerías interiores o como complemento destacado frente al Sofá Patagonia.',
    madera: 'Quebracho blanco estacionado y Algarrobo',
    acabado: 'Aceite botánico y cera natural lustrada',
    dimensiones: {
      ancho: '78 cm',
      profundidad: '82 cm',
      alto: '84 cm',
      alturaAsiento: '42 cm'
    },
    detallesMaterial: [
      'Tapizado en lino puro o pana de algodón con tintes naturales',
      'Relleno de látex natural y fibras de algodón reciclado',
      'Brazos lijados y aceitados manualmente',
      'Estructura garantizada por 10 años'
    ],
    indiceSustentable: '95%',
    tiempoProduccion: '2 a 3 semanas',
    garantia: '10 años de garantía estructural'
  },
  {
    id: 'escritorio-costa',
    nombre: 'Escritorio Costa',
    subtitulo: 'Espacio de trabajo & pensamiento',
    categoria: 'estudio',
    numero: '08',
    precio: 980000,
    precioFormateado: '$ 980.000',
    imagen: imgEscritorioCosta,
    descripcion: 'Estación de trabajo ergonómica pensada para creadores, diseñadores y escritores. Cajón flotante de deslizamiento ultra suave con divisiones en madera y compartimento de cables integrado.',
    historia: 'Diseñado bajo la premisa de que los espacios de trabajo deben inspirar serenidad, orden y concentración mediante materiales nobles.',
    madera: 'Algarrobo y Caldén macizo con acentos en latón',
    acabado: 'Aceite de linaza natural con terminación mate sedosa',
    dimensiones: {
      ancho: '140 cm',
      profundidad: '65 cm',
      alto: '76 cm'
    },
    detallesMaterial: [
      'Cajonera con encastres de cola de milano a la vista',
      'Pasacables de latón cepillado artesanalmente',
      'Tratamiento de alta resistencia al roce de cuadernos y laptops',
      '30% de madera nativa recuperada'
    ],
    indiceSustentable: '96%',
    tiempoProduccion: '2 a 3 semanas',
    garantia: '10 años de garantía estructural'
  },
  {
    id: 'silla-belgrano',
    nombre: 'Silla de Trabajo Belgrano',
    subtitulo: 'Ergonomía de autor en madera',
    categoria: 'estudio',
    numero: '09',
    precio: 530000,
    precioFormateado: '$ 530.000',
    imagen: imgSillaBelgrano,
    descripcion: 'Silla de escritorio que prescinde de plásticos fríos para ofrecer una experiencia táctil y postural inigualable. Respaldo curvado con apoyo lumbar calibrado y asiento en lana tejida.',
    historia: 'Desarrollada junto a especialistas en ergonomía y maestros torneros de nuestro taller de San Cristóbal.',
    madera: 'Quebracho blanco y multilaminado de caldén',
    acabado: 'Tinte vegetal al agua y cera de abejas líquida',
    dimensiones: {
      ancho: '56 cm',
      profundidad: '54 cm',
      alto: '82 cm',
      alturaAsiento: '47 cm'
    },
    detallesMaterial: [
      'Respaldo con microflexión pasiva de confort postural',
      'Tapizado transpirable en lana virgen patagónica',
      'Estructura reforzada sin tornillos a la vista',
      '100% libre de plásticos sintéticos'
    ],
    indiceSustentable: '98%',
    tiempoProduccion: '2 semanas',
    garantia: '10 años de garantía estructural'
  },
  {
    id: 'biblioteca-recoleta',
    nombre: 'Biblioteca Recoleta',
    subtitulo: 'Arquitectura modular para libros y arte',
    categoria: 'estudio',
    numero: '10',
    precio: 1150000,
    precioFormateado: '$ 1.150.000',
    imagen: imgBibliotecaRecoleta,
    descripcion: 'Sistema de estantes abiertos con nichos asimétricos diseñados con un ritmo visual cautivante. Admite libros de gran formato, cerámicas, plantas y lámparas con estabilidad absoluta.',
    historia: 'Inspirada en las bibliotecas de los antiguos palacios y cafés literarios porteños, reinterpretada con lineamientos modernos.',
    madera: 'Caldén pampeano seleccionado y Algarrobo',
    acabado: 'Acabado al agua de bajo COV con sellador natural',
    dimensiones: {
      ancho: '110 cm',
      profundidad: '36 cm',
      alto: '195 cm'
    },
    detallesMaterial: [
      'Ensamble de espigas pasantes de máxima firmeza',
      'Estantes de 28 mm capaces de soportar más de 45 kg por nivel',
      'Anclaje seguro a pared incluido con herrajes de bronce',
      'Materiales sustentables 100% trazables'
    ],
    indiceSustentable: '97%',
    tiempoProduccion: '3 semanas',
    garantia: '10 años de garantía estructural'
  },
  {
    id: 'mesa-noche-aconcagua',
    nombre: 'Mesa de Noche Aconcagua',
    subtitulo: 'Presencia serena junto a la cama',
    categoria: 'dormitorio',
    numero: '11',
    precio: 480000,
    precioFormateado: '$ 480.000',
    imagen: imgMesaNocheAconcagua,
    descripcion: 'Mesa de noche con cajón frontal suavemente curvado y repisa inferior para libros pendientes. Su forma compacta y acabado satinado brindan calidez y orden al ritual del descanso.',
    historia: 'Creada para ser el último objeto que tocas al apagar la luz y el primero en acompañar tu despertar matutino.',
    madera: 'Algarrobo macizo y tirador tallado',
    acabado: 'Cera virgen de abejas de San Antonio de Areco',
    dimensiones: {
      ancho: '50 cm',
      profundidad: '40 cm',
      alto: '58 cm'
    },
    detallesMaterial: [
      'Cajón con fondo de madera noble entarugado',
      'Guías con lubricación de cera natural sin ruidos',
      'Bordes pulidos con radio suave de 6 mm',
      'Tratamiento ecológico no alergénico'
    ],
    indiceSustentable: '99%',
    tiempoProduccion: '1 a 2 semanas',
    garantia: '10 años de garantía estructural'
  }
];

export const CATEGORIAS = [
  { id: 'todos', etiqueta: 'Toda la Colección', cantidad: 11 },
  { id: 'living', etiqueta: 'Living & Estar', cantidad: 5 },
  { id: 'comedor', etiqueta: 'Comedor', cantidad: 2 },
  { id: 'estudio', etiqueta: 'Estudio & Trabajo', cantidad: 3 },
  { id: 'dormitorio', etiqueta: 'Dormitorio', cantidad: 1 }
];

export const OPCIONES_ACABADOS = [
  { id: 'lino-natural', nombre: 'Aceite de Lino Puro', descripcion: 'Realza la veta natural con tono dorado cálido', insignia: '100% Botánico' },
  { id: 'cera-abejas', nombre: 'Cera de Abejas Virgen', descripcion: 'Tacto sedoso mate y aroma sutil a miel silvestre', insignia: 'Artesanal' },
  { id: 'siena-tostado', nombre: 'Tinte Siena Tostado', descripcion: 'Color icónico de Hermanos Jota con pigmentos naturales', insignia: 'Color de Marca' }
];

export const PILARES_HERENCIA = [
  {
    titulo: 'Garantía Estructural Extendida',
    descripcion: '10 años de respaldo en estructuras de encastre ciego y 5 años en acabados botánicos.'
  },
  {
    titulo: 'Servicio de Restauración',
    descripcion: 'Recuperamos, lijamos y re-aceitamos tus piezas a lo largo de las décadas para renovar su valor.'
  },
  {
    titulo: 'Taller de Cuidados Gratuito',
    descripcion: 'Capacitación mensual en nuestra Casa Taller para aprender el oficio del encerado y conservación.'
  },
  {
    titulo: 'Recompra Garantizada (Hasta 40%)',
    descripcion: 'Recompramos piezas cuidadas para darles un nuevo hogar a través de nuestro archivo histórico.'
  },
  {
    titulo: 'Certificado de Trazabilidad',
    descripcion: 'Chapa de bronce numerada con la procedencia exacta del bosque argentino de origen.'
  }
];

export const INFO_MARCA = {
  nombre: 'Hermanos Jota',
  lema: 'Mobiliario con Historia & Conciencia',
  anio: '2026',
  direccion: 'Av. San Juan 2847, San Cristóbal',
  ciudad: 'Ciudad Autónoma de Buenos Aires, Argentina',
  horarios: 'Lunes a Viernes: 10:00 - 19:00 | Sábados: 10:00 - 14:00',
  whatsapp: '+54 11 4567-8900',
  whatsappNumero: '5491145678900',
  emailGeneral: 'info@hermanosjota.com.ar',
  emailVentas: 'ventas@hermanosjota.com.ar',
  instagram: '@hermanosjota_ba',
  sitioWeb: 'www.hermanosjota.com.ar',
  manifiesto: 'Existimos en la intersección entre herencia e innovación, donde la calidez del optimismo de los años 60 se encuentra con la conciencia de la sustentabilidad del 2026.'
};
