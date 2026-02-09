import React from 'react';
import type { Property } from '../../types/property';
import { Eye, ExternalLink, MessageCircle, MapPin } from 'lucide-react';

interface Props {
  property: Property;
}

const PropertyRow: React.FC<Props> = ({ property }) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 text-right transition-colors">
      {/* Column 1: Property Title, Image, and Date */}
      <td className="p-4 align-top w-1/4">
        <div className="flex items-center gap-2 text-[#008b7d] font-bold mb-2 group cursor-pointer">
          <ExternalLink size={14} className="group-hover:translate-x-[-2px] transition-transform" />
          <span className="hover:underline text-sm md:text-base">{property.title}</span>
        </div>
        
        {/* Using the first image from your images array */}
        <div className="relative w-32 h-20 overflow-hidden rounded border border-gray-200 bg-gray-100">
          {property.images && property.images.length > 0 ? (
            <img 
              src={property.images[0]} 
              alt={property.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-[10px]">لا توجد صورة</div>
          )}
        </div>
        
        <div className="text-[11px] text-gray-400 mt-2 font-medium">
          {property.createdAt.toLocaleDateString('en-GB')}
        </div>
      </td>

      {/* Column 2: Location (using your new location & city fields) */}
      <td className="p-4 align-top w-1/4">
        <div className="flex items-start gap-1 text-sm font-semibold text-gray-700">
          <MapPin size={14} className="text-gray-400 mt-1 shrink-0" />
          <div>
            <p>{property.location}</p>
            <p className="text-xs text-gray-500 font-normal">{property.city}</p>
          </div>
        </div>
      </td>

      {/* Column 3: Description & Area */}
      <td className="p-4 align-top text-sm text-gray-600 w-1/4 leading-relaxed">
        <p className="mb-2 line-clamp-2">{property.description}</p>
        <div className="flex gap-3 text-xs font-bold text-teal-600">
          <span>المساحة: {property.area} م²</span>
          {property.bedrooms && <span>الغرف: {property.bedrooms}</span>}
        </div>
      </td>

      {/* Column 4: Price & Status */}
      <td className="p-4 align-top text-center w-1/4">
        <div className="text-lg font-bold text-gray-900">
          {property.price.toLocaleString()} ريال
        </div>
        <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold mt-1 mb-3 bg-teal-50 text-[#00a896]">
          {property.status === 'for-sale' ? 'للبيع' : 'للإيجار'}
        </div>
        
        <div className="flex items-center justify-center gap-4 mt-2 border-t pt-2">
          {/* Note: If you don't have a 'views' field in your new interface, 
              you might want to add it to the interface or use a placeholder */}
          <div className="flex items-center gap-1 text-gray-400">
             <Eye size={14} />
             <span className="text-xs font-bold">12</span> {/* Placeholder for views */}
          </div>
          <button className="text-green-500 hover:text-green-600" title="WhatsApp">
            <MessageCircle size={18} fill="currentColor" fillOpacity={0.1} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PropertyRow;