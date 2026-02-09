import React from 'react';
import { properties } from '../../constants/mockData';
import { PropertyCard } from '../property/PropertyCard';

export const FeaturedProperties: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">عقارات مميزة</h3>
          <p className="text-gray-600">عقارات مختارة بعناية في أفضل المواقع</p>
        </div>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          عرض الكل →
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.slice(0, 3).map((property) => (
          <PropertyCard 
          key={property.id} 
          property={property} 
          onClick={() => console.log('Property clicked:', property.id)} // Add this line
        />
        ))}
      </div>
    </div>
  );
};