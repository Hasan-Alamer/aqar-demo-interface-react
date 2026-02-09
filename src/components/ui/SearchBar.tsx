import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { Filter, Search } from 'lucide-react';

export const SearchBar: React.FC = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  return (
    <div className="w-full bg-white rounded-2xl shadow-xl p-6">
      {/* Simple Search */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Input
          placeholder="ابحث عن عقار..."
          icon="search"
        />
        
        <Input
          placeholder="المدينة أو الحي"
          icon="location"
        />
        
        <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
          <option value="">نوع العقار</option>
          <option value="apartment">شقق</option>
          <option value="villa">فلل</option>
        </select>
        
        <Button variant="primary" className="flex items-center justify-center gap-2">
          <Search className="w-4 h-4" />
          بحث
        </Button>
      </div>
      
      {/* Toggle Advanced Search */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <Filter className="w-4 h-4" />
          {showAdvanced ? 'إخفاء البحث المتقدم' : 'إظهار البحث المتقدم'}
        </button>
      </div>
      
      {/* Advanced Search */}
      {showAdvanced && (
        <div className="mt-6 pt-6 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Input label="رقم الأرض" placeholder="رقم الأرض" />
            <Input label="المساحة (م²)" placeholder="المساحة" />
            <Input label="سعر المتر" placeholder="سعر المتر" />
          </div>
        </div>
      )}
    </div>
  );
};