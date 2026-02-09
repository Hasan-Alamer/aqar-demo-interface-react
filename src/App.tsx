import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { CategoriesFilter } from './components/CategoriesFilter';
import { PropertyCard } from './components/property/PropertyCard';
import { PropertyDetails } from './components/property/PropertyDetails';
import { properties } from './constants/mockData';
import { Search, Building, Users, Shield } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<'for-sale' | 'for-rent'>('for-sale');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const filteredProperties = properties.filter(property => {
    if (activeTab && property.status !== activeTab) return false;
    if (searchQuery && !property.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const stats = [
    { icon: Building, label: 'عقار مدرج', value: '50,000+' },
    { icon: Users, label: 'عميل سعيد', value: '25,000+' },
    { icon: Shield, label: 'وكيل معتمد', value: '1,200+' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
<section className="bg-gradient-to-l from-emerald-700 to-green-800 text-white py-16">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        ابحث عن <span className="text-yellow-300">عقار أحلامك</span> في السعودية
      </h1>
      <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
        منصة العقار الرائدة في المملكة العربية السعودية مع أكثر من 50,000 عقار
      </p>
      
      {/* Search Bar */}
      <div className="relative max-w-3xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث عن عقار، موقع، رقم إعلان..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-8 py-5 pr-12 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-emerald-500/30 shadow-2xl"
          />
          <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
        </div>
      </div>
    </div>
  </div>
</section>

  {/* Stats Section */}
<div className="bg-white shadow-lg py-8 -mt-6 relative z-10 rounded-t-3xl">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center justify-center gap-6 p-6 hover:bg-emerald-50 rounded-2xl transition-colors">
          <div className="bg-emerald-100 p-4 rounded-xl">
            <stat.icon className="w-8 h-8 text-emerald-600" />
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-gray-600 text-lg">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <CategoriesFilter />
          </div>
          
          {/* Properties Grid */}
          <div className="lg:col-span-3">
            {/* Tabs & Results Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">العقارات المتاحة</h2>
                  <p className="text-gray-600 mt-1">
                    عرض {filteredProperties.length} من أصل {properties.length} عقار
                  </p>
                </div>
                <div className="flex border border-gray-300 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setActiveTab('for-sale')}
                    className={`px-8 py-3 font-bold text-lg transition-all ${
                      activeTab === 'for-sale' 
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    للبيع
                  </button>
                  <button
                    onClick={() => setActiveTab('for-rent')}
                    className={`px-8 py-3 font-bold text-lg transition-all ${
                      activeTab === 'for-rent' 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    للإيجار
                  </button>
                </div>
              </div>
            </div>
            
            {/* Properties Grid */}
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard 
                    key={property.id} 
                    property={property} 
                    onClick={() => setSelectedProperty(property)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                <div className="text-gray-400 text-6xl mb-6">🏠</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">لا توجد عقارات متاحة</h3>
                <p className="text-gray-600 text-lg">حاول تغيير معايير البحث أو الفلاتر</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-4xl font-bold mb-6">
              <span className="text-blue-400">وطن</span>
              <span className="text-orange-400">عقار</span>
            </div>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              شركة المملكة العقارية - المنصة العقارية الرائدة في المملكة العربية السعودية
            </p>
            <div className="flex justify-center gap-6">
              <a href="tel:+966550123456" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                <span>اتصل بنا: 0550123456</span>
              </a>
              <a href="mailto:info@kingdom-realestate.sa" className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <span>info@kingdom-realestate.sa</span>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <div className="text-gray-400">© 2024 شركة المملكة العقارية. جميع الحقوق محفوظة.</div>
          </div>
        </div>
      </footer>

      {/* Property Details Modal */}
      {selectedProperty && (
        <PropertyDetails 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
}

export default App;