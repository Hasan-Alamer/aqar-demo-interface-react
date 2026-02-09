import React, { useState } from 'react';
import { Filter, X, Check, ChevronDown } from 'lucide-react';

export const CategoriesFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const mainCategories = [
    'أرضي متجاوزات', 'أراضي متجاويات', 'بلك', 'شقق',
    'استراحات', 'مزارع', 'محلات', 'دبلكسات',
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
    setActiveDropdown(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-600 p-3 rounded-xl">
            <Filter className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">فلاتر البحث</h3>
            <p className="text-gray-600 text-sm mt-1">ابحث عن عقارك المثالي</p>
          </div>
        </div>
        <button 
          onClick={handleReset}
          className="text-gray-600 hover:text-gray-900 flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="w-4 h-4" />
          <span className="text-sm font-medium">إعادة تعيين</span>
        </button>
      </div>

      {/* التصنيفات الرئيسية - Improved Layout */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">التصنيفات الرئيسية</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-2">
          {mainCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category 
                  ? 'bg-emerald-600 text-white shadow-md border-2 border-emerald-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              <span className="text-center block">{category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* نوع العرض */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">نوع العرض</h4>
        <div className="flex gap-2">
          {propertyTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => setSelectedType(selectedType === type ? '' : type)}
              className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedType === type 
                  ? type === 'لبيع' 
                    ? 'bg-emerald-600 text-white border-2 border-emerald-600' 
                    : 'bg-orange-500 text-white border-2 border-orange-500'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* بحث متقدم - Fixed Layout */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-800">بحث متقدم</h4>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              من الاحداث
            </span>
            <span>•</span>
            <span>عرض العقارات</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {/* Basic Inputs - 2 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">اسم الحي</label>
              <input 
                type="text" 
                placeholder="اكتب اسم الحي"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">رقم الأرض</label>
              <input 
                type="text" 
                placeholder="رقم الأرض"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">رقم البلك</label>
              <input 
                type="text" 
                placeholder="رقم البلك"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">عدد الوسطاء</label>
              <input 
                type="number" 
                placeholder="عدد الوسطاء"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm transition-all"
              />
            </div>
          </div>

          {/* Filter Dropdowns - 2 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filterOptions.slice(0, 2).map((filter) => (
              <div key={filter.id}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{filter.label}</label>
                <div className="relative">
                  <select 
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm appearance-none bg-white pr-3"
                    onChange={(e) => {
                      if (e.target.value === 'اختر') {
                        setActiveDropdown(null);
                      } else {
                        setActiveDropdown(filter.id);
                      }
                    }}
                  >
                    {filter.options.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filterOptions.slice(2, 4).map((filter) => (
              <div key={filter.id}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{filter.label}</label>
                <div className="relative">
                  <select 
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm appearance-none bg-white pr-3"
                    onChange={(e) => {
                      if (e.target.value === 'اختر') {
                        setActiveDropdown(null);
                      } else {
                        setActiveDropdown(filter.id);
                      }
                    }}
                  >
                    {filter.options.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filterOptions.slice(4, 6).map((filter) => (
              <div key={filter.id}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{filter.label}</label>
                <div className="relative">
                  <select 
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm appearance-none bg-white pr-3"
                    onChange={(e) => {
                      if (e.target.value === 'اختر') {
                        setActiveDropdown(null);
                      } else {
                        setActiveDropdown(filter.id);
                      }
                    }}
                  >
                    {filter.options.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
        <Check className="w-5 h-5" />
        تطبيق الفلاتر
      </button>
    </div>
  );
};