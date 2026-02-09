import React from 'react';

export const StatsWidget: React.FC = () => {
  const stats = [
    { label: 'عقار مدرج', value: '50,000+' },
    { label: 'عميل سعيد', value: '25,000+' },
    { label: 'وكيل معتمد', value: '1,200+' },
    { label: 'مدينة مغطاة', value: '15+' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">إحصائيات المنصة</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};