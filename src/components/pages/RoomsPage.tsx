import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bed, Users, Maximize, Wifi, Coffee, AirVent, Star, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useAppContext } from '../../App';

const rooms = [
  {
    id: 1,
    category: 'standard',
    name: 'Deluxe Ocean View',
    description: 'Spacious room with stunning ocean views, perfect for couples or solo travelers seeking comfort.',
    price: 199,
    images: [
      'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzYzNjA0NzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    bedType: 'King Bed',
    maxOccupancy: 2,
    size: '35 sqm',
    amenities: ['Ocean View', 'Free WiFi', 'Mini Bar', 'Air Conditioning', 'Coffee Maker', 'Safe'],
    rating: 4.8,
  },
  {
    id: 2,
    category: 'standard',
    name: 'Garden View Room',
    description: 'Serene room overlooking tropical gardens, ideal for a peaceful retreat.',
    price: 179,
    images: [
      'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkZWx1eGUlMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzYzNjA2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    bedType: 'Queen Bed',
    maxOccupancy: 2,
    size: '32 sqm',
    amenities: ['Garden View', 'Free WiFi', 'Mini Bar', 'Air Conditioning', 'Coffee Maker', 'Balcony'],
    rating: 4.7,
  },
  {
    id: 3,
    category: 'deluxe',
    name: 'Premium Deluxe Suite',
    description: 'Luxurious suite with separate living area and panoramic beach views.',
    price: 349,
    images: [
      'https://images.unsplash.com/photo-1761039265583-9489b4246454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwYmFsY29ueXxlbnwxfHx8fDE3NjM1NzEzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    bedType: 'King Bed',
    maxOccupancy: 3,
    size: '55 sqm',
    amenities: ['Ocean View', 'Free WiFi', 'Living Room', 'Mini Bar', 'Jacuzzi', 'Butler Service'],
    rating: 4.9,
  },
  {
    id: 4,
    category: 'deluxe',
    name: 'Beachfront Deluxe',
    description: 'Direct beach access with private terrace and exclusive amenities.',
    price: 399,
    images: [
      'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkZWx1eGUlMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzYzNjA2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    bedType: 'King Bed',
    maxOccupancy: 3,
    size: '62 sqm',
    amenities: ['Beach Access', 'Private Terrace', 'Free WiFi', 'Mini Bar', 'Premium Toiletries', 'Concierge'],
    rating: 5.0,
  },
  {
    id: 5,
    category: 'suite',
    name: 'Presidential Suite',
    description: 'Ultimate luxury with two bedrooms, private pool, and 24/7 butler service.',
    price: 799,
    images: [
      'https://images.unsplash.com/photo-1761039265583-9489b4246454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwYmFsY29ueXxlbnwxfHx8fDE3NjM1NzEzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    bedType: '2 King Beds',
    maxOccupancy: 6,
    size: '120 sqm',
    amenities: ['Private Pool', 'Ocean View', '2 Bedrooms', 'Butler Service', 'Dining Room', 'Premium Everything'],
    rating: 5.0,
  },
  {
    id: 6,
    category: 'suite',
    name: 'Honeymoon Suite',
    description: 'Romantic suite with private jacuzzi, champagne, and breathtaking sunset views.',
    price: 599,
    images: [
      'https://images.unsplash.com/photo-1761039265583-9489b4246454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwYmFsY29ueXxlbnwxfHx8fDE3NjM1NzEzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    bedType: 'King Bed',
    maxOccupancy: 2,
    size: '75 sqm',
    amenities: ['Private Jacuzzi', 'Ocean View', 'Romance Package', 'Butler Service', 'Rose Petals', 'Champagne'],
    rating: 5.0,
  },
];

export default function RoomsPage() {
  const { bookingSearch, navigateWithBooking } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'standard' | 'deluxe' | 'suite'>('all');
  const [priceRange, setPriceRange] = useState<'all' | 'budget' | 'mid' | 'luxury'>('all');

  const handleBookNow = (room: typeof rooms[0]) => {
    // Navigate to contact page with pre-filled room info
    navigateWithBooking('contact', {
      ...bookingSearch,
      roomType: room.category,
    });
  };

  // Filter rooms based on guest count from booking search
  const filteredRooms = rooms.filter(room => {
    const categoryMatch = selectedCategory === 'all' || room.category === selectedCategory;
    const priceMatch = 
      priceRange === 'all' ||
      (priceRange === 'budget' && room.price < 250) ||
      (priceRange === 'mid' && room.price >= 250 && room.price < 500) ||
      (priceRange === 'luxury' && room.price >= 500);
    
    // Filter by guest capacity if search data exists
    let guestMatch = true;
    if (bookingSearch.guests) {
      const guestCount = parseInt(bookingSearch.guests);
      guestMatch = room.maxOccupancy >= guestCount;
    }
    
    return categoryMatch && priceMatch && guestMatch;
  });

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative h-96 -mt-32 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzYzNjA0NzE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury Rooms"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-6xl mb-4"
            >
              Rooms & Suites
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Discover your perfect sanctuary
            </motion.p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Search Results Banner */}
        {(bookingSearch.checkIn || bookingSearch.checkOut || bookingSearch.guests) && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl p-6 mb-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl mb-2">Search Results for Your Stay</h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  {bookingSearch.checkIn && (
                    <span>Check-in: {bookingSearch.checkIn}</span>
                  )}
                  {bookingSearch.checkOut && (
                    <span>Check-out: {bookingSearch.checkOut}</span>
                  )}
                  {bookingSearch.guests && (
                    <span>{bookingSearch.guests} Guest{bookingSearch.guests !== '1' ? 's' : ''}</span>
                  )}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-1">{filteredRooms.length}</div>
                <div className="text-sm text-white/80">Available Rooms</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filters */}
        <div className="mb-12">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-8">
              <TabsTrigger value="all" onClick={() => setSelectedCategory('all')}>
                All Rooms
              </TabsTrigger>
              <TabsTrigger value="standard" onClick={() => setSelectedCategory('standard')}>
                Standard
              </TabsTrigger>
              <TabsTrigger value="deluxe" onClick={() => setSelectedCategory('deluxe')}>
                Deluxe
              </TabsTrigger>
              <TabsTrigger value="suite" onClick={() => setSelectedCategory('suite')}>
                Suites
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setPriceRange('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                priceRange === 'all'
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Prices
            </button>
            <button
              onClick={() => setPriceRange('budget')}
              className={`px-6 py-2 rounded-full transition-colors ${
                priceRange === 'budget'
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Under $250
            </button>
            <button
              onClick={() => setPriceRange('mid')}
              className={`px-6 py-2 rounded-full transition-colors ${
                priceRange === 'mid'
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              $250 - $500
            </button>
            <button
              onClick={() => setPriceRange('luxury')}
              className={`px-6 py-2 rounded-full transition-colors ${
                priceRange === 'luxury'
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              $500+
            </button>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full">
                  ${room.price}/night
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="size-4 fill-orange-400 text-orange-400" />
                  <span className="text-sm">{room.rating}</span>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <h3 className="text-xl text-blue-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>

                {/* Room Specs */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Bed className="size-4" />
                    <span>{room.bedType}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>{room.maxOccupancy} Guests</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="size-4" />
                    <span>{room.size}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.slice(0, 4).map((amenity) => (
                    <span
                      key={amenity}
                      className="text-xs bg-blue-50 text-blue-900 px-2 py-1 rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 4 && (
                    <span className="text-xs text-gray-500">+{room.amenities.length - 4} more</span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-blue-900 hover:bg-blue-800 text-white"
                    onClick={() => handleBookNow(room)}
                  >
                    <Calendar className="size-4 mr-2" />
                    Book Now
                  </Button>
                  <Button variant="outline" className="px-4">
                    Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No rooms found matching your filters.</p>
            <Button
              onClick={() => {
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              className="mt-4 bg-blue-900 hover:bg-blue-800 text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Virtual Tour CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Take a Virtual Tour</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Experience our rooms in 360° before you book. See every detail from the comfort of your home.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Launch Virtual Tour
          </Button>
        </div>
      </section>
    </div>
  );
}