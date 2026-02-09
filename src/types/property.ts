export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  city: string;
  type: 'residential' | 'commercial' | 'industrial' | 'land' | 'apartment' | 'villa';
  category: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  images: string[];
  featured: boolean;
  createdAt: Date;
  status: 'for-sale' | 'for-rent';
  views?: number;
  agent?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;
}