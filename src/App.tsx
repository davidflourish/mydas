import React, { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import RoomsPage from './components/pages/RoomsPage';
import DiningPage from './components/pages/DiningPage';
import SpaPage from './components/pages/SpaPage';
import ActivitiesPage from './components/pages/ActivitiesPage';
import GalleryPage from './components/pages/GalleryPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import NotFoundPage from './components/pages/NotFoundPage';
import ChatWidget from './components/ChatWidget';

// Types
export type Language = 'en' | 'id';
export type Currency = 'USD' | 'IDR';
export type PageType = 'home' | 'rooms' | 'dining' | 'spa' | 'activities' | 'gallery' | 'about' | 'contact' | '404';

// Booking search parameters
export interface BookingSearchParams {
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  roomType?: string;
}

// Context Interface
export interface AppContextType {
  language: Language;
  currency: Currency;
  setLanguage: (lang: Language) => void;
  setCurrency: (curr: Currency) => void;
  bookingSearch: BookingSearchParams;
  setBookingSearch: (params: BookingSearchParams) => void;
  navigateWithBooking: (page: PageType, params?: BookingSearchParams) => void;
}

// Create the Context
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Custom Hook for Safe Usage
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [bookingSearch, setBookingSearch] = useState<BookingSearchParams>({});

  const navigateWithBooking = (page: PageType, params?: BookingSearchParams) => {
    setCurrentPage(page);
    if (params) {
      setBookingSearch(params);
    }
  };

  const contextValue: AppContextType = {
    language,
    currency,
    setLanguage,
    setCurrency,
    bookingSearch,
    setBookingSearch,
    navigateWithBooking,
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'rooms':
        return <RoomsPage />;
      case 'dining':
        return <DiningPage />;
      case 'spa':
        return <SpaPage />;
      case 'activities':
        return <ActivitiesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case '404':
        return <NotFoundPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-cream-50">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        
        <AnimatePresence mode="wait">
          <motion.main
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.main>
        </AnimatePresence>

        <Footer onNavigate={setCurrentPage} />
        <ChatWidget />
      </div>
    </AppContext.Provider>
  );
}
