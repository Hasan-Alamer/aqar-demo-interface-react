import React, { useState } from 'react';
import { Filter, X, Check } from 'lucide-react';

export const CategoriesFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');

  const mainCategories = [
    'أرضي متجاوزات', 'أراضي متجاويات', 'بلك', 'شقق',
    'استراحات', 'مزارع', 'محلات', 'ديكسات',
    'فيلات', 'اراضي', 'بيت', 'عمارات'
  ];

  const propertyTypes = ['لبيع', 'للإيجار'];

  const filterOptions = [
    { id: 'area', label: 'المساحة', options: ['اختر', '50-100 م²', '100-200 م²', '200-300 م²', '300+ م²'] },
    { id: 'street', label: 'شارع عرض', options: ['اختر', '10-15 م', '15-20 م', '20+ م'] },
    { id: 'classification', label: 'التصنيف', options: ['اختر', 'ممتاز', 'جيد جدا', 'جيد', 'متوسط'] },
    { id: 'condition', label: 'حالة العقار', options: ['اختر', 'جديد', 'مشيد', 'تحت الإنشاء', 'أرض فقط'] },
    { id: 'price', label: 'سعر المتر', options: ['اختر', 'حتى 1000 ريال', '1000-2000 ريال', '2000+ ريال'] },
    { id: 'facade', label: 'الواجهة', options: ['اختر', 'شمالي', 'جنوبي', 'شرقي', 'غربي'] },
  ];

  const handleReset = () => {
    setSelectedCategory('');
    setSelectedType('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-7 mb-6 border border-gray-200">
      {/* Header - Bigger and Better */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-3 rounded-xl">
            <Filter className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">فلاتر البحث المتقدم</h3>
            <p className="text-gray-600 text-sm mt-1">اختر الفلاتر المناسبة للعثور على عقارك المثالي</p>
          </div>
        </div>
        <button 
          onClick={handleReset}
          className="text-gray-600 hover:text-gray-900 flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
          <span className="font-medium">مسح الكل</span>
        </button>
      </div>

      {/* التصنيفات الرئيسية - Better Layout */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">التصنيفات الرئيسية</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {mainCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center min-h-[48px] ${
                selectedCategory === category 
                  ? 'bg-blue-600 text-white shadow-lg transform scale-[1.02] border-2 border-blue-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md border border-gray-300'
              }`}
            >
              <span className="text-center leading-tight">{category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* نوع العرض - Improved */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">نوع العرض</h4>
        <div className="flex gap-4">
          {propertyTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => setSelectedType(type)}
              className={`flex-1 px-6 py-4 rounded-xl text-lg font-bold transition-all duration-200 flex items-center justify-center gap-3 min-h-[56px] ${
                selectedType === type 
                  ? type === 'لبيع' 
                    ? 'bg-green-600 text-white shadow-lg border-2 border-green-600' 
                    : 'bg-orange-600 text-white shadow-lg border-2 border-orange-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              {selectedType === type && <Check className="w-5 h-5" />}
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* بحث متقدم - Better Organized */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-bold text-gray-800">بحث متقدم</h4>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              من الاحداث
            </span>
            <span className="text-gray-400">•</span>
            <span>عرض العقارات</span>
          </div>
        </div>
        
        <div className="space-y-6">
          {/* Basic Inputs - Improved */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <label className="block text-base font-semibold text-gray-700 mb-2.5">اسم الحي</label>
              <input 
                type="text" 
                placeholder="اكتب اسم الحي"
                className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 outline-none text-base transition-all"
              />
            </div>
            
            <div>
              <label className="block text-base font-semibold text-gray-700 mb-2.5">رقم الأرض</label>
              <input 
                type="text" 
                placeholder="رقم الأرض"
                className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 outline-none text-base transition-all"
              />
            </div>
            
            <div>
              <label className="block text-base font-semibold text-gray-700 mb-2.5">رقم البلك</label>
              <input 
                type="text" 
                placeholder="رقم البلك"
                className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 outline-none text-base transition-all"
              />
            </div>
            
            <div>
              <label className="block text-base font-semibold text-gray-700 mb-2.5">رقم الإعلان</label>
              <input 
                type="text" 
                placeholder="رقم الإعلان"
                className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 outline-none text-base transition-all"
              />
            </div>
          </div>

          {/* Filter Dropdowns Grid - Better Spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filterOptions.slice(0, 3).map((filter) => (
              <div key={filter.id}>
                <label className="block text-base font-semibold text-gray-700 mb-2.5">{filter.label}</label>
                <select className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 outline-none text-base appearance-none bg-white">
                  {filter.options.map((option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filterOptions.slice(3).map((filter) => (
              <div key={filter.id}>
                <label className="block text-base font-semibold text-gray-700 mb-2.5">{filter.label}</label>
                <select className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 outline-none text-base appearance-none bg-white">
                  {filter.options.map((option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
            
            <div>
              <label className="block text-base font-semibold text-gray-700 mb-2.5">عدد الوسطاء</label>
              <input 
                type="number" 
                placeholder="عدد الوسطاء"
                className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 outline-none text-base"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Apply Button - Bigger and Better */}
      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg py-4 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
        <Check className="w-6 h-6" />
        تطبيق الفلاتر و عرض النتائج
      </button>
    </div>
  );
};