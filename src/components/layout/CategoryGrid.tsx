import React from 'react';
import { categories } from '../../constants/mockData';
import { ChevronRight } from 'lucide-react';

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            تصفح العقارات حسب التصنيف
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            ابحث عن عقارك المثالي من مجموعتنا الواسعة من العقارات الموثقة
            </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className={`${category.color} p-4 rounded-2xl text-center mb-3 group-hover:shadow-lg transition-shadow`}>
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-sm md:text-base">{category.name}</h3>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-500">{category.count.toLocaleString()} Properties</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
        <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            عرض جميع التصنيفات
            <ChevronRight className="ml-1 h-4 w-4" />
            </button>
        </div>
      </div>
    </section>
  );
};