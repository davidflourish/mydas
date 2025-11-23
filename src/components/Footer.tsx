import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { PageType } from '../App';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-blue-950 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl mb-3">Stay Connected with Paradise</h3>
            <p className="text-white/90 mb-6">
              Subscribe to receive exclusive offers, updates, and travel inspiration
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-full transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🏝️</span>
              <h3 className="text-xl">Mydas Resort</h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Experience luxury and tranquility at our beachfront paradise. 
              Where pristine beaches meet world-class hospitality.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('rooms')} className="text-gray-300 hover:text-orange-400 transition-colors">
                  Rooms & Suites
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dining')} className="text-gray-300 hover:text-orange-400 transition-colors">
                  Dining
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('spa')} className="text-gray-300 hover:text-orange-400 transition-colors">
                  Spa & Wellness
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('activities')} className="text-gray-300 hover:text-orange-400 transition-colors">
                  Activities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="text-gray-300 hover:text-orange-400 transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 Paradise Beach Road<br />
                  Bali, Indonesia 80361
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-orange-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-orange-400 transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:info@mydasresort.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                  info@mydasresort.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="size-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  24/7 Reservations<br />
                  Check-in: 2:00 PM<br />
                  Check-out: 12:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="mb-4">Policies & Info</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-xl overflow-hidden border border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24119.560863986353!2d5.575998010839851!3d7.23151250000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047b1284aa59dbb%3A0xde59fef832658609!2sMydas%20Resort!5e1!3m2!1sen!2sng!4v1763834238222!5m2!1sen!2sng"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mydas Resort Location"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 Mydas Resort & Hotel. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span>built and design by</span>
              <span className="text-orange-400">CODEX</span>
              <span></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
