import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Wifi, Dumbbell, Utensils, Waves, Sparkles, MapPin, Calendar, Users, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useAppContext } from '../../App';

const heroImages = [
  { url: 'https://images.unsplash.com/photo-1729615220950-f5b403467b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NjM2MDY4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Paradise Awaits' },
  { url: 'https://images.unsplash.com/photo-1668276490368-409a6002756d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGluZmluaXR5JTIwcG9vbHxlbnwxfHx8fDE3NjM2MDY4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Infinity Pool Views' },
  { url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2MzYwNTAyOXww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Luxury Redefined' },
  { url: 'https://images.unsplash.com/photo-1648450181162-825946c36727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBiZWFjaCUyMGFlcmlhbHxlbnwxfHx8fDE3NjM2MDY4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Beachfront Beauty' },
  { url: 'https://images.unsplash.com/photo-1558117338-7ef3d637ce2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc29ydCUyMHBhbG0lMjB0cmVlc3xlbnwxfHx8fDE3NjM2MDY4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Tropical Paradise' },
];

const stats = [
  { icon: Star, value: '4.9/5', label: 'Guest Rating' },
  { icon: MapPin, value: '50+', label: 'Luxury Rooms' },
  { icon: Sparkles, value: 'Award', label: 'Winning Spa' },
  { icon: Waves, value: 'Beach', label: 'Front Access' },
];

const amenities = [
  { icon: Wifi, label: 'Free WiFi', description: 'High-speed internet throughout' },
  { icon: Waves, label: 'Private Beach', description: 'Exclusive beach access' },
  { icon: Sparkles, label: 'Luxury Spa', description: 'World-class treatments' },
  { icon: Utensils, label: 'Fine Dining', description: 'Multiple restaurants' },
  { icon: Dumbbell, label: 'Fitness Center', description: '24/7 modern gym' },
  { icon: Users, label: 'Concierge', description: 'Personalized service' },
];

const deals = [
  {
    title: 'Summer Escape',
    description: 'Save up to 30% on bookings for June-August',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1477204505220-510cd0d57764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHZpZXclMjBzdW5zZXQlMjBiZWFjaHxlbnwxfHx8fDE3NjM2MDY4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Spa & Stay Package',
    description: '3 nights + daily spa treatment + breakfast',
    price: '$449',
    image: 'https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjM1NjQ0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Romantic Getaway',
    description: 'Couples massage, champagne, and ocean view',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1617184431689-b40fa57859f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0JTIwd2VkZGluZ3xlbnwxfHx8fDE3NjM2MDY4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Family Fun Week',
    description: 'Kids stay free + water sports + meals included',
    price: '$799',
    image: 'https://images.unsplash.com/photo-1713902577801-1c49c875d48f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGFjdGl2aXRpZXMlMjBzbm9ya2VsaW5nfGVufDF8fHx8MTc2MzYwNjgxMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'Absolutely breathtaking! The staff went above and beyond to make our honeymoon unforgettable. The beach is pristine and the rooms are luxurious.',
    image: '👩',
  },
  {
    name: 'Michael Chen',
    location: 'Singapore',
    rating: 5,
    text: 'Best resort experience ever! The spa treatments were divine and the food was exceptional. We will definitely be returning.',
    image: '👨',
  },
  {
    name: 'Emma Rodriguez',
    location: 'Madrid, Spain',
    rating: 5,
    text: 'Paradise on earth! Every detail was perfect, from the infinity pool to the sunset dinners. The perfect tropical escape.',
    image: '👩',
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { navigateWithBooking } = useAppContext();
  const [searchData, setSearchData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigateWithBooking('rooms', searchData);
  };

  const handleBookDeal = () => {
    navigateWithBooking('contact', {});
  };

  return (
    <div className="pt-32 md:pt-40">
      {/* Hero Slider */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden -mt-32 md:-mt-40">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </motion.div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <motion.h1
              key={currentSlide}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-6xl lg:text-7xl mb-4"
            >
              {heroImages[currentSlide].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl mb-8 text-white/90"
            >
              Experience Luxury at Mydas Resort & Hotel
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                Explore Our Rooms
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-colors"
        >
          <ChevronRight className="size-6" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto"
        >
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4" onSubmit={handleSearch}>
            <div>
              <label className="block text-sm text-gray-600 mb-2 flex items-center gap-2">
                <Calendar className="size-4" />
                Check In
              </label>
              <input
                type="date"
                value={searchData.checkIn}
                onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2 flex items-center gap-2">
                <Calendar className="size-4" />
                Check Out
              </label>
              <input
                type="date"
                value={searchData.checkOut}
                onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2 flex items-center gap-2">
                <Users className="size-4" />
                Guests
              </label>
              <select
                value={searchData.guests}
                onChange={(e) => setSearchData({ ...searchData, guests: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4+ Guests</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 h-[52px]">
                <Search className="size-4 mr-2" />
                Search
              </Button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl"
            >
              <stat.icon className="size-8 mx-auto mb-3 text-blue-900" />
              <div className="text-3xl text-blue-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Deals */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl text-blue-900 mb-4"
            >
              Exclusive Deals & Packages
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our curated packages designed to make your stay unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map((deal, index) => (
              <motion.div
                key={deal.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    {deal.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-blue-900 mb-2">{deal.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{deal.description}</p>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white" onClick={handleBookDeal}>
                    Book Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-blue-900 mb-4"
          >
            World-Class Amenities
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for a perfect stay
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.label}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center">
                <amenity.icon className="size-8 text-blue-900" />
              </div>
              <h3 className="text-sm mb-1">{amenity.label}</h3>
              <p className="text-xs text-gray-600">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl mb-4"
            >
              What Our Guests Say
            </motion.h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Read about experiences from travelers who have stayed with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <h4 className="text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-white/70">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-white/90 text-sm leading-relaxed">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}