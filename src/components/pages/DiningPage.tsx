import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Coffee, UtensilsCrossed, Wine, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { useAppContext } from '../../App';

const restaurants = [
  {
    name: 'Ocean Breeze Restaurant',
    type: 'Fine Dining',
    cuisine: 'International & Fusion',
    description: 'Experience culinary excellence with panoramic ocean views. Our signature restaurant offers an ever-changing menu featuring local ingredients and international techniques.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjM1NzU1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hours: 'Dinner: 6:00 PM - 11:00 PM',
    dressCode: 'Smart Casual',
  },
  {
    name: 'Sunrise Café',
    type: 'Casual Dining',
    cuisine: 'Breakfast & Brunch',
    description: 'Start your day right with our extensive breakfast buffet and à la carte options. Fresh pastries, tropical fruits, and made-to-order specialties.',
    image: 'https://images.unsplash.com/photo-1559090337-ba4123bb1682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBicmVha2Zhc3QlMjBidWZmZXR8ZW58MXx8fHwxNzYzNjA2ODExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    hours: 'Breakfast: 6:30 AM - 11:00 AM | Brunch: 11:00 AM - 2:00 PM',
    dressCode: 'Resort Casual',
  },
  {
    name: 'Sunset Bar & Grill',
    type: 'Beachside',
    cuisine: 'Grilled Seafood & BBQ',
    description: 'Savor freshly grilled seafood and prime cuts while your toes touch the sand. Perfect for romantic dinners under the stars.',
    image: 'https://images.unsplash.com/photo-1477204505220-510cd0d57764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHZpZXclMjBzdW5zZXQlMjBiZWFjaHxlbnwxfHx8fDE3NjM2MDY4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hours: 'Lunch: 12:00 PM - 4:00 PM | Dinner: 5:30 PM - 10:00 PM',
    dressCode: 'Beach Casual',
  },
];

const menuCategories = [
  {
    category: 'Breakfast',
    items: [
      { name: 'Continental Breakfast Buffet', description: 'Fresh pastries, fruits, cereals, yogurt, juices', price: 25, dietary: ['vegetarian'] },
      { name: 'American Breakfast', description: 'Eggs any style, bacon, sausage, hash browns, toast', price: 22, dietary: [] },
      { name: 'Tropical Fruit Platter', description: 'Selection of fresh local fruits', price: 18, dietary: ['vegan', 'gluten-free'] },
      { name: 'Eggs Benedict', description: 'Poached eggs, hollandaise, English muffin', price: 24, dietary: [] },
    ],
  },
  {
    category: 'Lunch',
    items: [
      { name: 'Grilled Catch of the Day', description: 'Fresh local fish, vegetables, lemon butter sauce', price: 38, dietary: ['gluten-free'] },
      { name: 'Caesar Salad', description: 'Romaine, parmesan, croutons, classic dressing', price: 16, dietary: [] },
      { name: 'Club Sandwich', description: 'Triple-decker with turkey, bacon, lettuce, tomato', price: 20, dietary: [] },
      { name: 'Thai Green Curry', description: 'Coconut curry, vegetables, jasmine rice', price: 26, dietary: ['vegan option'] },
    ],
  },
  {
    category: 'Dinner',
    items: [
      { name: 'Lobster Thermidor', description: 'Whole lobster, creamy sauce, gratin', price: 68, dietary: [] },
      { name: 'Wagyu Beef Tenderloin', description: '8oz, truffle mash, seasonal vegetables', price: 75, dietary: ['gluten-free'] },
      { name: 'Mediterranean Sea Bass', description: 'Herbs, lemon, roasted vegetables', price: 48, dietary: ['gluten-free'] },
      { name: 'Vegetarian Tasting Menu', description: 'Five-course plant-based experience', price: 55, dietary: ['vegan'] },
    ],
  },
  {
    category: 'Bar & Cocktails',
    items: [
      { name: 'Tropical Sunset', description: 'Rum, passion fruit, pineapple, lime', price: 16, dietary: [] },
      { name: 'Classic Mojito', description: 'White rum, mint, lime, soda', price: 14, dietary: [] },
      { name: 'Champagne Selection', description: 'Premium champagne by the glass', price: 22, dietary: [] },
      { name: 'Mocktail Collection', description: 'Fresh fruit, herbs, premium mixers', price: 12, dietary: ['non-alcoholic'] },
    ],
  },
];

export default function DiningPage() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'vegetarian' | 'vegan' | 'gluten-free'>('all');
  const { navigateWithBooking } = useAppContext();

  const handleBookDining = () => {
    navigateWithBooking('contact', {});
  };

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative h-96 -mt-32 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjM1NzU1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Dining Experience"
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
              Culinary Excellence
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              A journey through flavors
            </motion.p>
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Our Restaurants</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From casual beachside dining to elegant fine cuisine, every meal is an experience
          </p>
        </div>

        <div className="space-y-12">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm mb-3">
                  {restaurant.type}
                </div>
                <h3 className="text-3xl text-blue-900 mb-3">{restaurant.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{restaurant.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <UtensilsCrossed className="size-5 text-blue-900" />
                    <span>{restaurant.cuisine}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="size-5 text-blue-900" />
                    <span>{restaurant.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Coffee className="size-5 text-blue-900" />
                    <span>Dress Code: {restaurant.dressCode}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white" onClick={handleBookDining}>
                    Make Reservation
                  </Button>
                  <Button variant="outline">View Menu</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Menu Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Sample Menu</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Explore our culinary offerings (menus change seasonally)
            </p>

            {/* Dietary Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Items
              </button>
              <button
                onClick={() => setSelectedFilter('vegetarian')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedFilter === 'vegetarian'
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Vegetarian
              </button>
              <button
                onClick={() => setSelectedFilter('vegan')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedFilter === 'vegan'
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Vegan
              </button>
              <button
                onClick={() => setSelectedFilter('gluten-free')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedFilter === 'gluten-free'
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Gluten-Free
              </button>
            </div>
          </div>

          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {menuCategories.map((category) => (
              <AccordionItem key={category.category} value={category.category}>
                <AccordionTrigger className="text-xl text-blue-900">
                  {category.category}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    {category.items
                      .filter(item => 
                        selectedFilter === 'all' || item.dietary.includes(selectedFilter)
                      )
                      .map((item) => (
                        <div
                          key={item.name}
                          className="flex justify-between items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                        >
                          <div className="flex-1">
                            <h4 className="text-lg mb-1">{item.name}</h4>
                            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                            {item.dietary.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {item.dietary.map((diet) => (
                                  <span
                                    key={diet}
                                    className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded"
                                  >
                                    {diet}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="text-orange-600 shrink-0">
                            ${item.price}
                          </div>
                        </div>
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Chef Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-4 bg-blue-900 rounded-full flex items-center justify-center text-5xl">
                👨‍🍳
              </div>
              <h2 className="text-3xl text-blue-900 mb-2">Meet Our Executive Chef</h2>
              <p className="text-gray-600">Chef Marcus Rodriguez</p>
            </div>
            <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              With over 20 years of culinary experience across Michelin-starred restaurants in Europe and Asia, 
              Chef Marcus brings innovation and passion to every dish. His philosophy centers on locally-sourced 
              ingredients, sustainable practices, and creating unforgettable dining experiences that celebrate 
              both tradition and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Reserve Your Table</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Don't miss out on an extraordinary dining experience. Book your table today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" onClick={handleBookDining}>
              <Phone className="size-5 mr-2" />
              Call +1 (234) 567-8900
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20" onClick={handleBookDining}>
              Online Reservation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}