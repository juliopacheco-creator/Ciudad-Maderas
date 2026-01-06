
export interface Development {
  id: string;
  name: string;
  location: string;
  lat: number;
  lng: number;
  type: 'Residencial' | 'Comercial';
  status: 'Venta' | 'Preventa';
  deliveryDate: string;
  priceStart: number;
  m2Start: number;
}

export interface StateData {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  plusvalia: string;
  mapEmbed: string;
  developments: Development[];
  amenities: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
}
