import React from 'react';
import { motion } from 'motion/react';
import { Home, Search, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { PageType } from '../../App';

interface NotFoundPageProps {
  onNavigate: (page: PageType) => void;
}

export default function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 px-4">
      <div className="max-w-2xl text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl mb-4">🏝️</div>
            <h1 className="text-8xl mb-4 bg-gradient-to-r from-blue-900 to-orange-600 bg-clip-text text-transparent">
              404
            </h1>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">
              Oops! This Page Drifted Away
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Like a message in a bottle, this page seems to have floated off. 
              But don't worry, there's still plenty of paradise to explore!
            </p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          >
            <Button
              onClick={() => onNavigate('home')}
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-white"
            >
              <Home className="size-5 mr-2" />
              Back to Homepage
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              size="lg"
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-50"
            >
              <Mail className="size-5 mr-2" />
              Contact Us
            </Button>
          </motion.div>

          {/* Popular Pages */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-center justify-center gap-2 mb-4 text-blue-900">
              <Search className="size-5" />
              <h3 className="text-lg">Try These Popular Pages</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => onNavigate('rooms')}
                className="flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors text-left group"
              >
                <span className="text-sm">Rooms & Suites</span>
                <ArrowRight className="size-4 text-gray-400 group-hover:text-blue-900 transition-colors" />
              </button>
              <button
                onClick={() => onNavigate('dining')}
                className="flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors text-left group"
              >
                <span className="text-sm">Dining</span>
                <ArrowRight className="size-4 text-gray-400 group-hover:text-blue-900 transition-colors" />
              </button>
              <button
                onClick={() => onNavigate('spa')}
                className="flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors text-left group"
              >
                <span className="text-sm">Spa & Wellness</span>
                <ArrowRight className="size-4 text-gray-400 group-hover:text-blue-900 transition-colors" />
              </button>
              <button
                onClick={() => onNavigate('activities')}
                className="flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors text-left group"
              >
                <span className="text-sm">Activities</span>
                <ArrowRight className="size-4 text-gray-400 group-hover:text-blue-900 transition-colors" />
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors text-left group"
              >
                <span className="text-sm">Gallery</span>
                <ArrowRight className="size-4 text-gray-400 group-hover:text-blue-900 transition-colors" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors text-left group"
              >
                <span className="text-sm">About Us</span>
                <ArrowRight className="size-4 text-gray-400 group-hover:text-blue-900 transition-colors" />
              </button>
            </div>
          </motion.div>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-sm text-gray-500"
          >
            <p>
              Still can't find what you're looking for? 
              <button 
                onClick={() => onNavigate('contact')}
                className="text-blue-900 hover:underline ml-1"
              >
                Contact our team
              </button>
              {' '}and we'll be happy to help!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
