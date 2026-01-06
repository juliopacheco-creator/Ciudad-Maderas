
import { StateData, BlogPost } from './types';

export const STATES: StateData[] = [
  {
    id: 'qro',
    name: 'Querétaro',
    slug: 'queretaro',
    imageUrl: 'https://cdn.milenio.com/uploads/media/2025/06/02/desarrollo-ciudad-maderas.jpg',
    description: 'El corazón de México, con 12 desarrollos y la mayor presencia histórica. El Marqués, San Juan del Río y Corregidora.',
    plusvalia: '95% en 3 años',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119565.41991475702!2d-100.414002!3d20.625348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b1d47867661%3A0x6a0e63c011e4860b!2sQuer%C3%A9taro%2C%20Qro.!5e0!3m2!1ses!2smx!4v1715632849021!5m2!1ses!2smx',
    developments: [
      { id: 'qro-1', name: 'Ciudad Maderas Residencial', location: 'El Marqués', lat: 20.632, lng: -100.248, type: 'Residencial', status: 'Venta', deliveryDate: 'Inmediata', priceStart: 1000000, m2Start: 200 },
      { id: 'qro-2', name: 'Ciudad Maderas Bosques', location: 'Corregidora', lat: 20.533, lng: -100.442, type: 'Residencial', status: 'Preventa', deliveryDate: 'Dic 2025', priceStart: 1200000, m2Start: 220 }
    ],
    amenities: ['Family Club', 'Alberca Techada', 'Gimnasio', 'Canchas de Tenis', 'Seguridad 24/7']
  },
  {
    id: 'yuc',
    name: 'Yucatán',
    slug: 'yucatan',
    imageUrl: 'https://www.eluniversal.com.mx/resizer/v2/ZIDRNCPV55HNXKZWXVAYNNUDOU.jpg?auth=8b4a6d0fa651c871f4cc3b40d98607c6a4c9042a581106de6c42dec96701aa3f&smart=true&height=666',
    description: 'Norte de Mérida. Península y Privada Península ofrecen el balance perfecto entre modernidad y naturaleza en la zona de mayor crecimiento.',
    plusvalia: '110% en 3 años',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119245.36868662998!2d-89.625!3d21.035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567160754ca633%3A0x86701a520f92f293!2zTcOpcmlkYSwgWXVjLg!5e0!3m2!1ses!2smx!4v1715632900000!5m2!1ses!2smx',
    developments: [
      { id: 'yuc-1', name: 'Península', location: 'Norte de Mérida', lat: 21.035, lng: -89.625, type: 'Residencial', status: 'Preventa', deliveryDate: 'Oct 2025', priceStart: 1350000, m2Start: 128 }
    ],
    amenities: ['Beach Club', 'Alberca Infinita', 'Spa', 'Yoga Area', 'Acceso Controlado']
  },
  {
    id: 'qroo',
    name: 'Quintana Roo',
    slug: 'quintana-roo',
    imageUrl: 'https://www.eluniversal.com.mx/resizer/v2/HEWFSRK4OFBMXL6GJCY7O6AA54.jpg?auth=c55a89ec76a7343005b29fd2b6ae9b7347707c90ee89e19412044bedb19529c5&smart=true&height=620',
    description: 'Cancún y Playa del Carmen. Caribe y Cañada son desarrollos estratégicos cerca de la costa con amenidades de clase mundial.',
    plusvalia: '98% en 3 años',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119108.77443859294!2d-86.851!3d21.161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b05aed14cdd%3A0x29437142b7812543!2zQ2FuY8O6biwgUS5SLg!5e0!3m2!1ses!2smx!4v1715632950000!5m2!1ses!2smx',
    developments: [
      { id: 'qroo-1', name: 'Ciudad Maderas Caribe', location: 'Cancún', lat: 21.161, lng: -86.851, type: 'Residencial', status: 'Preventa', deliveryDate: 'Jul 2025', priceStart: 1500000, m2Start: 128 }
    ],
    amenities: ['Cerca de Playa', 'Sports Club', 'Áreas Verdes', 'Alberca Semiolímpica']
  },
  {
    id: 'gto',
    name: 'Guanajuato',
    slug: 'guanajuato',
    imageUrl: 'https://cdn.milenio.com/uploads/media/2025/06/27/vista-area-family-club-ciudad.jpg',
    description: 'Presencia en León, San Miguel de Allende y Celaya. El Clúster Roble destaca como una joya turística e inmobiliaria.',
    plusvalia: '89% en 3 años',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119315.678!2d-101.685!3d21.125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bc02a7b6b1071%3A0x633513a02c892b1a!2zTGXDs24sIEd0by4!5e0!3m2!1ses!2smx!4v1715633000000!5m2!1ses!2smx',
    developments: [
      { id: 'gto-1', name: 'Clúster Roble', location: 'San Miguel de Allende', lat: 20.914, lng: -100.743, type: 'Residencial', status: 'Venta', deliveryDate: 'Inmediata', priceStart: 1340000, m2Start: 205 }
    ],
    amenities: ['Canchas de Paddle', 'Gimnasio', 'Salón de Usos Múltiples', 'Ciclovía']
  },
  {
    id: 'pue',
    name: 'Puebla',
    slug: 'puebla',
    imageUrl: 'https://ciudadmaderas.com/wp-content/uploads/2025/07/b024dd252ac749c2b25de50f25f2c2db1a92a85f-scaled.jpg',
    description: 'Hacienda Puebla ofrece un estilo de vida colonial con más de 20 amenidades exclusivas en una ubicación privilegiada.',
    plusvalia: '85% en 3 años',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120536.035!2d-98.198!3d19.043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0ed3f3951f9%3A0x644265538e55e821!2sPuebla%2C%20Pue.!5e0!3m2!1ses!2smx!4v1715633100000!5m2!1ses!2smx',
    developments: [
      { id: 'pue-1', name: 'Hacienda Puebla', location: 'Puebla', lat: 19.043, lng: -98.198, type: 'Residencial', status: 'Venta', deliveryDate: 'Preventa', priceStart: 1100000, m2Start: 128 }
    ],
    amenities: ['Hacienda Club', 'Alberca', 'Áreas Verdes', 'Seguridad']
  },
  {
    id: 'nl',
    name: 'Nuevo León',
    slug: 'nuevo-leon',
    imageUrl: 'https://picsum.photos/seed/monterrey/800/600',
    description: 'Monterrey y San Pedro Garza García. Enfoque en lotes premium con la mayor plusvalía del norte.',
    plusvalia: '90% en 3 años',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115048.243!2d-100.316!3d25.686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662952865c32543%3A0x28f731e8470a2524!2sMonterrey%2C%20N.L.!5e0!3m2!1ses!2smx!4v1715633200000!5m2!1ses!2smx',
    developments: [],
    amenities: ['Business Center', 'Gimnasio', 'Seguridad 24/7']
  }
];

export const PRESENCE_LOCATIONS = [
  { 
    name: 'Aguascalientes', 
    lat: 21.882, 
    lng: -102.282, 
    city: 'Aguascalientes', 
    detail: 'Oficina en Av. Independencia #1861. Lotes residenciales premium.' 
  },
  { 
    name: 'Chihuahua', 
    lat: 31.685, 
    lng: -106.436, 
    city: 'Ciudad Juárez', 
    detail: 'Oficina en Prol. Av. Ejército Nacional No. 9,368. Terrenos residenciales.' 
  },
  { 
    name: 'Ciudad de México', 
    lat: 19.432, 
    lng: -99.133, 
    city: 'Polanco / Coyoacán', 
    detail: 'Oficinas corporativas en Av. Homero 906 y Cto. Interior Río Churubusco.' 
  },
  { 
    name: 'Estado de México', 
    lat: 19.484, 
    lng: -99.241, 
    city: 'Naucalpan', 
    detail: 'Oficinas en Paseo Las Américas y Blvd. Solidaridad. Expansión residencial.' 
  },
  { 
    name: 'Guanajuato', 
    lat: 21.125, 
    lng: -101.685, 
    city: 'León / San Miguel', 
    detail: 'Presencia en León, San Miguel de Allende (Clúster Roble) y Celaya.' 
  },
  { 
    name: 'Jalisco', 
    lat: 20.659, 
    lng: -103.349, 
    city: 'Guadalajara', 
    detail: 'Oficinas en Av. Providencia 2716, Prol. Tepeyac y Av. Chapultepec Sur.' 
  },
  { 
    name: 'Michoacán', 
    lat: 19.700, 
    lng: -101.183, 
    city: 'Morelia', 
    detail: 'Oficina en C. P. I. Tchaikovski 67. Terrenos premium en el bajío.' 
  },
  { 
    name: 'Nuevo León', 
    lat: 25.686, 
    lng: -100.316, 
    city: 'Monterrey', 
    detail: 'Oficina en Calzada del Valle 406. Lotes premium con enfoque 2025.' 
  },
  { 
    name: 'Puebla', 
    lat: 19.041, 
    lng: -98.206, 
    city: 'Puebla', 
    detail: 'Hacienda Puebla. Oficina en Blvd. Municipio Libre No. 1943.' 
  },
  { 
    name: 'Querétaro', 
    lat: 20.588, 
    lng: -100.389, 
    city: 'Querétaro Capital', 
    detail: 'Máxima presencia: Bernardo Quintana, El Marqués, Corregidora y más.' 
  },
  { 
    name: 'Quintana Roo', 
    lat: 21.161, 
    lng: -86.851, 
    city: 'Cancún', 
    detail: 'Ciudad Maderas Caribe y Cañada. Oficinas en Plaza Malecón Américas.' 
  },
  { 
    name: 'San Luis Potosí', 
    lat: 22.156, 
    lng: -100.985, 
    city: 'San Luis Potosí', 
    detail: 'Oficina en Torre Absar. Desarrollos residenciales generales.' 
  },
  { 
    name: 'Yucatán', 
    lat: 20.967, 
    lng: -89.592, 
    city: 'Mérida', 
    detail: 'Península y Privada Península. Oficinas en Calle 72, 58-A y 60.' 
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Avances de Obra Península Octubre 2025',
    excerpt: 'Conoce los detalles de la infraestructura que está transformando el norte de Mérida.',
    content: 'Península sigue avanzando a paso firme. Hemos completado la urbanización del clúster principal...',
    date: '15 Oct 2025',
    category: 'Avances de Obra',
    imageUrl: 'https://ciudadmaderas.com/wp-content/uploads/2025/03/CM_19MAR_header-3.png'
  },
  {
    id: '2',
    title: 'Por qué invertir en terrenos Premium',
    excerpt: 'La plusvalía es la clave de una inversión inteligente. Te explicamos los beneficios.',
    content: 'La inversión inmobiliaria es una de las más seguras. Ciudad Maderas ofrece rendimientos garantizados...',
    date: '10 Sep 2025',
    category: 'Inversiones',
    imageUrl: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3754939499698158735'
  },
  {
    id: '3',
    title: 'Nuevo Family Club en Querétaro',
    excerpt: 'Inauguración de nuestras amenidades de clase mundial para todos los residentes.',
    content: 'Con albercas semiolímpicas y canchas de tenis profesionales, nuestro nuevo club es tendencia...',
    date: '05 Ago 2025',
    category: 'Amenidades',
    imageUrl: 'https://ciudadmaderas.com/wp-content/uploads/2025/07/b024dd252ac749c2b25de50f25f2c2db1a92a85f-scaled.jpg'
  }
];
