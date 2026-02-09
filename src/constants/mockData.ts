import type { Property, Category } from '../types/property';

// Updated Saudi Arabian cities and neighborhoods
export const cities = [
  { id: 'riyadh', name: 'الرياض' },
  { id: 'jeddah', name: 'جدة' },
  { id: 'dammam', name: 'الدمام' },
  { id: 'makkah', name: 'مكة المكرمة' },
  { id: 'medina', name: 'المدينة المنورة' },
  { id: 'khobar', name: 'الخبر' },
  { id: 'taif', name: 'الطائف' },
];

export const neighborhoods = [
  { cityId: 'riyadh', name: 'حي حطين' },
  { cityId: 'riyadh', name: 'حي النرجس' },
  { cityId: 'riyadh', name: 'حي العليا' },
  { cityId: 'riyadh', name: 'حي الملك فهد' },
  { cityId: 'jeddah', name: 'حي الشاطئ' },
  { cityId: 'jeddah', name: 'حي السلامة' },
  { cityId: 'jeddah', name: 'حي الحمراء' },
  { cityId: 'dammam', name: 'حي الريان' },
  { cityId: 'dammam', name: 'حي النور' },
];

export const categories: Category[] = [
  { id: '1', name: 'شقق', icon: '🏢', count: 1560, color: 'bg-blue-100 text-blue-600' },
  { id: '2', name: 'فلل', icon: '🏡', count: 890, color: 'bg-green-100 text-green-600' },
  { id: '3', name: 'أراضي', icon: '📌', count: 2340, color: 'bg-yellow-100 text-yellow-600' },
  { id: '4', name: 'مزارع', icon: '🌳', count: 450, color: 'bg-emerald-100 text-emerald-600' },
  { id: '5', name: 'محلات', icon: '🏪', count: 760, color: 'bg-purple-100 text-purple-600' },
  { id: '6', name: 'مكاتب', icon: '💼', count: 540, color: 'bg-red-100 text-red-600' },
  { id: '7', name: 'استراحات', icon: '🏕️', count: 320, color: 'bg-orange-100 text-orange-600' },
  { id: '8', name: 'عمارات', icon: '🏘️', count: 210, color: 'bg-indigo-100 text-indigo-600' },
];

export const properties: Property[] = [
  {
    id: '1',
    title: 'فيلا فاخرة في حي حطين - الرياض',
    description: 'فيلا مودرن جديدة 5 غرف نوم + غرفة سائق + مسبح خاص + ملحق + مواقف 4 سيارات',
    price: 4200000,
    location: 'حي حطين',
    city: 'الرياض',
    type: 'villa',
    category: 'فلل',
    bedrooms: 5,
    bathrooms: 6,
    area: 850,
    images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800'],
    featured: true,
    createdAt: new Date('2024-01-15'),
    status: 'for-sale',
    views: 1560,
    agent: 'شركة العقار السعودي'
  },
  {
    id: '2',
    title: 'شقة جديدة للبيع في حي النرجس',
    description: 'شقة دور ثاني 3 غرف نوم + صالة + مطبخ + 2 حمام + موقف سيارة',
    price: 850000,
    location: 'حي النرجس',
    city: 'الرياض',
    type: 'apartment',
    category: 'شقق',
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800'],
    featured: true,
    createdAt: new Date('2024-01-20'),
    status: 'for-sale',
    views: 2340,
    agent: 'مكتب الأمانة للعقارات'
  },
  {
    id: '3',
    title: 'أرض سكنية في حي العليا',
    description: 'أرض سكنية مميزة مساحة 600م مربع شارع 20 شمالي موقع استراتيجي',
    price: 3200000,
    location: 'حي العليا',
    city: 'الرياض',
    type: 'land',
    category: 'أراضي',
    area: 600,
    images: ['https://images.unsplash.com/photo-1570126646281-5ec88111777f?auto=format&fit=crop&w=800'],
    featured: true,
    createdAt: new Date('2024-01-18'),
    status: 'for-sale',
    views: 1870,
    agent: 'شركة الشرق الأوسط العقارية'
  },
  {
    id: '4',
    title: 'محل تجاري للإيجار في حي السلامة',
    description: 'محل تجاري موقع مميز على شارع رئيسي مساحة 80م مناسب لمحلات بيع الذهب والمجوهرات',
    price: 48000,
    location: 'حي السلامة',
    city: 'جدة',
    type: 'commercial',
    category: 'محلات',
    area: 80,
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800'],
    featured: false,
    createdAt: new Date('2024-01-10'),
    status: 'for-rent',
    views: 980,
    agent: 'مكتب جدة العقاري'
  },
  {
    id: '5',
    title: 'فيلا للإيجار الشهري في حي الشاطئ',
    description: 'فيلا فاخرة مطلة على البحر 4 غرف نوم + 5 حمامات + مسبح + حديقة خاصة',
    price: 85000,
    location: 'حي الشاطئ',
    city: 'جدة',
    type: 'villa',
    category: 'فلل',
    bedrooms: 4,
    bathrooms: 5,
    area: 650,
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800'],
    featured: true,
    createdAt: new Date('2024-01-05'),
    status: 'for-rent',
    views: 3120,
    agent: 'شركة البحر الأحمر العقارية'
  },
  {
    id: '6',
    title: 'مزرعة للبيع في الطائف',
    description: 'مزرعة مثمرة مساحة 5000م بها بئر ارتوازي + منزل مزرعة + أشجار مثمرة',
    price: 2800000,
    location: 'الطائف',
    city: 'الطائف',
    type: 'land',
    category: 'مزارع',
    area: 5000,
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800'],
    featured: true,
    createdAt: new Date('2024-01-22'),
    status: 'for-sale',
    views: 1450,
    agent: 'شركة الطائف العقارية'
  },
  {
    id: '7',
    title: 'عمارة سكنية للبيع',
    description: 'عمارة سكنية مكونة من 4 شقق مساحة الأرض 400م موقع مميز قرب الخدمات',
    price: 8500000,
    location: 'حي الملك فهد',
    city: 'الرياض',
    type: 'residential',
    category: 'عمارات',
    area: 400,
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800'],
    featured: false,
    createdAt: new Date('2024-01-12'),
    status: 'for-sale',
    views: 760,
    agent: 'شركة المملكة العقارية'
  },
  {
    id: '8',
    title: 'أرض تجارية في الخبر',
    description: 'أرض تجارية على شارع الملك فهد مساحة 1000م مناسب للمشاريع التجارية',
    price: 9500000,
    location: 'الخبر',
    city: 'الخبر',
    type: 'commercial',
    category: 'أراضي',
    area: 1000,
    images: ['https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800'],
    featured: true,
    createdAt: new Date('2024-01-25'),
    status: 'for-sale',
    views: 1890,
    agent: 'شركة الخليج العقارية'
  }
];

// Function to get filtered properties
export const getFilteredProperties = (filters: {
  city?: string;
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  status?: 'for-sale' | 'for-rent';
}) => {
  return properties.filter(property => {
    if (filters.city && property.city !== filters.city) return false;
    if (filters.type && property.type !== filters.type) return false;
    if (filters.status && property.status !== filters.status) return false;
    if (filters.minPrice && property.price < filters.minPrice) return false;
    if (filters.maxPrice && property.price > filters.maxPrice) return false;
    return true;
  });
};

// Function to get properties by category
export const getPropertiesByCategory = (categoryName: string) => {
  return properties.filter(property => property.category === categoryName);
};

// Function to get featured properties
export const getFeaturedProperties = () => {
  return properties.filter(property => property.featured);
};