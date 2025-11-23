import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { AppContext, Language, Currency, PageType } from '../App';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, currency, setLanguage, setCurrency } = useContext(AppContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', page: 'home' as PageType },
    { 
      label: 'Rooms & Suites', 
      page: 'rooms' as PageType,
      submenu: [
        { label: 'Standard Rooms', page: 'rooms' as PageType },
        { label: 'Deluxe Rooms', page: 'rooms' as PageType },
        { label: 'Luxury Suites', page: 'rooms' as PageType },
      ]
    },
    { label: 'Dining', page: 'dining' as PageType },
    { label: 'Spa & Wellness', page: 'spa' as PageType },
    { label: 'Activities', page: 'activities' as PageType },
    { label: 'Gallery', page: 'gallery' as PageType },
    { label: 'About Us', page: 'about' as PageType },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      {/* Top Info Bar */}
      <div className={`${isScrolled ? 'hidden' : 'block'} bg-blue-900/90 backdrop-blur-sm`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm text-white/90">
            <div className="flex gap-6">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-orange-300 transition-colors">
                <Phone className="size-4" />
                <span className="hidden sm:inline">+1 (234) 567-8900</span>
              </a>
              <a href="mailto:info@mydasresort.com" className="flex items-center gap-2 hover:text-orange-300 transition-colors">
                <Mail className="size-4" />
                <span className="hidden sm:inline">info@mydasresort.com</span>
              </a>
            </div>
            <div className="flex gap-4">
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent border border-white/30 rounded px-2 py-1 text-xs cursor-pointer hover:border-white/60 transition-colors"
              >
                <option value="en" className="text-gray-900">English</option>
                <option value="id" className="text-gray-900">Indonesian</option>
              </select>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="bg-transparent border border-white/30 rounded px-2 py-1 text-xs cursor-pointer hover:border-white/60 transition-colors"
              >
                <option value="USD" className="text-gray-900">USD</option>
                <option value="IDR" className="text-gray-900">IDR</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className={`text-2xl ${isScrolled ? 'text-blue-900' : 'text-white'} transition-colors`}>
                🏝️
              </div>
            </div>
            <div>
              <h1 className={`${isScrolled ? 'text-blue-900' : 'text-white'} text-xl sm:text-2xl tracking-tight transition-colors`}>
                Mydas Resort & Hotel
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-orange-600' : 'text-orange-300'} tracking-wider`}>
                ESCAPE TO PARADISE
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => onNavigate(item.page)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                    currentPage === item.page
                      ? isScrolled 
                        ? 'bg-blue-900 text-white' 
                        : 'bg-white/20 text-white'
                      : isScrolled
                        ? 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-sm">{item.label}</span>
                  {item.submenu && <ChevronDown className="size-4" />}
                </button>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden min-w-48"
                  >
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => {
                          onNavigate(subItem.page);
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            <Button
              onClick={() => onNavigate('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => {
                      onNavigate(item.page);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      currentPage === item.page
                        ? 'bg-blue-900 text-white'
                        : 'text-gray-700 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </button>
                  {item.submenu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => {
                            onNavigate(subItem.page);
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button
                onClick={() => {
                  onNavigate('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
