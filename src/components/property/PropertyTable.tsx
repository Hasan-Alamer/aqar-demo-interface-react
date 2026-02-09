import React from 'react';
import PropertyRow from './PropertyRow';
import { properties } from '../../constants/mockData';

const PropertyTable: React.FC = () => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#00a896] text-white">
            <th className="p-3 text-right border-l border-white/20">العقار</th>
            <th className="p-3 text-right border-l border-white/20">الحي</th>
            <th className="p-3 text-right border-l border-white/20">الوصف</th>
            <th className="p-3 text-center">السعر</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((item) => (
            <PropertyRow key={item.id} property={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyTable;