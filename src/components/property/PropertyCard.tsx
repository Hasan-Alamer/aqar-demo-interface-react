import React from 'react';
import type { Property } from '../../types/property';
import { Bed, Bath, Square, Heart, MapPin, Star, Eye } from 'lucide-react';
import { Button } from '../ui/Button';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `${(price / 1000000).toFixed(1)} مليون ريال`;
    }
    if (price >= 1000) {
      return `${(price / 1000).toFixed(0)} ألف ريال`;
    }
    return `${price} ريال`;
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 group cursor-pointer"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${
            property.status === 'for-sale' 
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
              : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
          }`}>
            {property.status === 'for-sale' ? 'للبيع' : 'للإيجار'}
          </span>
          {property.featured && (
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold">
              مميز
            </span>
          )}
        </div>
        
        <button className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full hover:bg-white transition-colors shadow-lg">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
        
        {/* Views Counter */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5">
          <Eye className="w-4 h-4" />
          <span>{(property as any).views || 0} مشاهدة</span>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-5">
        {/* Price */}
        <div className="mb-3">
          <div className="text-2xl font-bold text-blue-700 mb-1">
            {formatPrice(property.price)}
            {property.status === 'for-rent' && <span className="text-sm font-normal text-gray-500">/شهرياً</span>}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {property.title}
        </h3>
        
        {/* Location */}
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 ml-2 flex-shrink-0" />
          <span className="text-sm">{property.location}، {property.city}</span>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>
        
        {/* Features */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100">
          {property.bedrooms && (
            <div className="flex flex-col items-center">
              <div className="flex items-center text-gray-700">
                <Bed className="w-5 h-5 ml-1.5 text-blue-500" />
                <span className="font-bold text-lg">{property.bedrooms}</span>
              </div>
              <span className="text-xs text-gray-500 mt-1">غرف</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex flex-col items-center">
              <div className="flex items-center text-gray-700">
                <Bath className="w-5 h-5 ml-1.5 text-green-500" />
                <span className="font-bold text-lg">{property.bathrooms}</span>
              </div>
              <span className="text-xs text-gray-500 mt-1">حمامات</span>
            </div>
          )}
          <div className="flex flex-col items-center">
            <div className="flex items-center text-gray-700">
              <Square className="w-5 h-5 ml-1.5 text-yellow-500" />
              <span className="font-bold text-lg">{property.area}</span>
            </div>
            <span className="text-xs text-gray-500 mt-1">م²</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-500 ml-1.5" fill="currentColor" />
              <span className="font-bold text-lg text-gray-700">4.8</span>
            </div>
            <span className="text-xs text-gray-500 mt-1">تقييم</span>
          </div>
        </div>
        
        {/* Agent Info */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600">الوسيط:</span>
          <span className="text-sm font-bold text-gray-800">شركة المملكة العقارية</span>
        </div>
        
        {/* Action Button */}
        <Button 
          variant="primary" 
          fullWidth 
          className="py-3 font-bold"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          عرض التفاصيل
        </Button>
      </div>
    </div>
  );
};