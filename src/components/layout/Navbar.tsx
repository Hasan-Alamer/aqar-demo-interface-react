import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Menu, X, User, Globe, Phone, ChevronDown, Search } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    { label: 'شراء', submenu: ['شقق', 'فلل', 'تاون هاوس', 'بنتهاوس'] },
    { label: 'ايجار', submenu: ['قصير المدى', 'طويل المدى', 'تجاري', 'صناعي'] },
    { label: 'تجاري', submenu: ['مكاتب', 'محلات', 'مستودعات', 'أراضي'] },
    { label: 'المشاريع', submenu: ['إطلاق جديد', 'على الخارطة', 'مكتملة'] },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-700 flex items-center">
              <span className="text-blue-700">watanaqar</span>
              <span className="text-orange-500">.</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  {item.label}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                {item.submenu && activeMenu === item.label && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-20">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:flex items-center text-gray-600 hover:text-blue-600">
              <Search className="w-5 h-5" />
            </button>
            
            <button className="hidden lg:flex items-center text-gray-600 hover:text-blue-600">
              <Globe className="w-5 h-5 mr-1" />
              EN
            </button>
            
            <button className="hidden lg:flex items-center text-gray-600 hover:text-blue-600">
              <Phone className="w-5 h-5 mr-1" />
            </button>
            
            <Button variant="outline" className="hidden lg:flex items-center">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            
            <Button variant="primary" className="hidden lg:flex">
              List Property
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            {menuItems.map((item) => (
              <div key={item.label} className="px-4 py-2">
                <div className="flex items-center justify-between text-gray-700 font-medium">
                  {item.label}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </div>
                {item.submenu && (
                  <div className="pl-4 mt-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block py-2 text-gray-600 hover:text-blue-600"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4 border-t border-gray-200 space-y-3">
              <Button variant="outline" fullWidth className="justify-center">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button variant="primary" fullWidth className="justify-center">
                List Property
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};