import React from 'react';
import type { Property } from '../../types/property';
import { X, Bed, Bath, Square, MapPin, Phone, Calendar, Building, User } from 'lucide-react';
import { Button } from '../ui/Button';

interface PropertyDetailsProps {
  property: Property;
  onClose: () => void;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property, onClose }) => {
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
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
            <div className="flex items-center text-gray-600 mt-2">
              <MapPin className="w-4 h-4 ml-2" />
              <span>{property.location}، {property.city}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-40">
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">صورة {i}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Property Details */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">تفاصيل العقار</h3>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {property.bedrooms && (
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between">
                      <Bed className="w-6 h-6 text-blue-600" />
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                        <div className="text-gray-600">غرف نوم</div>
                      </div>
                    </div>
                  </div>
                )}
                
                {property.bathrooms && (
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between">
                      <Bath className="w-6 h-6 text-green-600" />
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                        <div className="text-gray-600">حمامات</div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="bg-yellow-50 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <Square className="w-6 h-6 text-yellow-600" />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{property.area}</div>
                      <div className="text-gray-600">متر مربع</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <Calendar className="w-6 h-6 text-purple-600" />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {property.status === 'for-sale' ? 'للبيع' : 'للإيجار'}
                      </div>
                      <div className="text-gray-600">نوع العرض</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              {/* Price */}
              <div className="mb-8">
                <div className="text-3xl font-bold text-blue-700">
                  {formatPrice(property.price)}
                  {property.status === 'for-rent' && <span className="text-lg font-normal text-gray-600"> / شهرياً</span>}
                </div>
                <div className="text-gray-600 mt-2">السعر شامل الضريبة</div>
              </div>

              {/* Agent Info */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">معلومات الوسيط</h4>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 text-right">
                    <div className="font-bold text-gray-900">شركة المملكة العقارية</div>
                    <div className="text-sm text-gray-600">وسيط معتمد</div>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <Button 
                  variant="primary" 
                  fullWidth 
                  className="py-3 text-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  تواصل الآن: 0550123456
                </Button>
                
                <Button 
                  variant="outline" 
                  fullWidth 
                  className="py-3"
                >
                  طلب زيارة الموقع
                </Button>
                
                <Button 
                  variant="success" 
                  fullWidth 
                  className="py-3"
                >
                  حجز موعد
                </Button>
              </div>

              {/* Quick Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">رقم الإعلان:</span>
                    <span className="font-medium">#{property.id}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">تاريخ النشر:</span>
                    <span className="font-medium">
                      {property.createdAt.toLocaleDateString('ar-SA')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">المشاهدات:</span>
                    <span className="font-medium">{(property as any).views || 0}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">التصنيف:</span>
                    <span className="font-medium text-blue-600">{property.category}</span>
                  </div>
                </div>
              </div>

              {/* Social Share */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">شارك العقار</h4>
                <div className="flex gap-2">
                  {['واتساب', 'تويتر', 'فيسبوك', 'نسخ الرابط'].map((platform) => (
                    <button
                      key={platform}
                      className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};