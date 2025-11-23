import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, DollarSign, Heart, Flower2, Waves, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useAppContext } from '../../App';

const services = [
  {
    name: 'Signature Mydas Massage',
    duration: '90 min',
    price: 180,
    description: 'Our signature treatment combining traditional techniques with aromatic oils for deep relaxation.',
    icon: Sparkles,
  },
  {
    name: 'Couples Paradise Retreat',
    duration: '120 min',
    price: 340,
    description: 'Side-by-side massage, champagne, and private relaxation area for two.',
    icon: Heart,
  },
  {
    name: 'Hot Stone Therapy',
    duration: '75 min',
    price: 150,
    description: 'Heated volcanic stones to melt away tension and promote deep muscle relaxation.',
    icon: Waves,
  },
  {
    name: 'Tropical Body Scrub',
    duration: '60 min',
    price: 120,
    description: 'Exfoliating treatment with local coconut and sea salt to reveal glowing skin.',
    icon: Flower2,
  },
  {
    name: 'Aromatherapy Facial',
    duration: '60 min',
    price: 135,
    description: 'Customized facial using pure essential oils and natural botanicals.',
    icon: Sparkles,
  },
  {
    name: 'Reflexology Session',
    duration: '45 min',
    price: 90,
    description: 'Traditional foot massage targeting pressure points for full-body wellness.',
    icon: Waves,
  },
];

const packages = [
  {
    name: 'Day of Bliss',
    duration: '4 hours',
    price: 350,
    includes: ['Full body massage', 'Facial treatment', 'Body scrub', 'Light lunch', 'Pool access'],
    image: 'https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjM1NjQ0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Romantic Couples Escape',
    duration: '3 hours',
    price: 500,
    includes: ['Couples massage', 'Champagne & chocolates', 'Rose petal bath', 'Private cabana'],
    image: 'https://images.unsplash.com/photo-1630595633877-9918ee257288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwc3BhJTIwdHJlYXRtZW50fGVufDF8fHx8MTc2MzYwNjgxMXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Wellness Retreat',
    duration: '5 hours',
    price: 450,
    includes: ['Massage', 'Yoga class', 'Meditation session', 'Healthy lunch', 'Wellness consultation'],
    image: 'https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjM1NjQ0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const facilities = [
  { name: 'Sauna', icon: '🔥' },
  { name: 'Steam Room', icon: '💨' },
  { name: 'Hot Tub', icon: '🛁' },
  { name: 'Relaxation Lounge', icon: '🛋️' },
  { name: 'Tea Garden', icon: '🍵' },
  { name: 'Fitness Center', icon: '💪' },
];

export default function SpaPage() {
  const { navigateWithBooking } = useAppContext();

  const handleBookSpa = () => {
    navigateWithBooking('contact', {});
  };

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative h-96 -mt-32 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjM1NjQ0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Spa & Wellness"
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
              Spa & Wellness
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Rejuvenate your body, mind, and soul
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl text-blue-900 mb-4">Award-Winning Spa</h2>
            <p className="text-gray-600 leading-relaxed">
              Immerse yourself in a sanctuary of tranquility. Our world-class spa combines ancient healing 
              traditions with modern wellness techniques to create transformative experiences. Every treatment 
              is personalized to your needs, using premium organic products and performed by expert therapists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Our Treatments</h2>
            <p className="text-gray-600">Curated experiences for your well-being</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="size-6 text-blue-900" />
                </div>
                <h3 className="text-xl text-blue-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="size-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-600">
                    <DollarSign className="size-4" />
                    <span>{service.price}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-blue-900 hover:bg-blue-800 text-white" onClick={handleBookSpa}>
                  Book Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Packages */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Signature Packages</h2>
          <p className="text-gray-600">Complete wellness experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full">
                  ${pkg.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-blue-900 mb-2">{pkg.name}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock className="size-4" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-600">Package includes:</p>
                  <ul className="space-y-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <Sparkles className="size-4 text-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                  <Calendar className="size-4 mr-2" />
                  Reserve Package
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Spa Facilities</h2>
            <p className="text-gray-600">Complimentary amenities with every treatment</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{facility.icon}</div>
                <p className="text-sm">{facility.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Tips */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl mb-6 text-center">Wellness Tips from Our Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl mb-2">Daily Rituals</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  Start each day with mindful breathing and hydration. End with gratitude journaling 
                  to promote restful sleep and emotional balance.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-2">Self-Care</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  Regular massage and bodywork help reduce stress, improve circulation, and maintain 
                  flexibility for optimal health.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-2">Nutrition</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  Nourish your body with fresh, whole foods. Hydrate adequately and include 
                  anti-inflammatory foods for radiant skin.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-2">Movement</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  Gentle yoga and walking on the beach combine physical activity with nature 
                  therapy for complete wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Relax?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your spa treatment today and begin your journey to wellness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" onClick={handleBookSpa}>
              <Calendar className="size-5 mr-2" />
              Schedule Appointment
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}