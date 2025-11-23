import React from 'react';
import { motion } from 'motion/react';
import { Waves, Compass, Camera, Bike, Mountain, Ship, Clock, DollarSign, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const activities = [
  {
    name: 'Snorkeling Adventure',
    description: 'Explore vibrant coral reefs and tropical fish in crystal-clear waters. Equipment and guide included.',
    duration: '3 hours',
    price: 75,
    difficulty: 'Easy',
    maxGroup: 10,
    image: 'https://images.unsplash.com/photo-1713902577801-1c49c875d48f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGFjdGl2aXRpZXMlMjBzbm9ya2VsaW5nfGVufDF8fHx8MTc2MzYwNjgxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Waves,
  },
  {
    name: 'Island Hopping Tour',
    description: 'Visit multiple pristine islands, enjoy beach picnics, and discover hidden coves by boat.',
    duration: 'Full Day',
    price: 150,
    difficulty: 'Easy',
    maxGroup: 12,
    image: 'https://images.unsplash.com/photo-1648450181162-825946c36727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBiZWFjaCUyMGFlcmlhbHxlbnwxfHx8fDE3NjM2MDY4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Ship,
  },
  {
    name: 'Jungle Trekking',
    description: 'Guided hike through lush rainforests, waterfalls, and exotic wildlife spotting opportunities.',
    duration: '4 hours',
    price: 90,
    difficulty: 'Moderate',
    maxGroup: 8,
    image: 'https://images.unsplash.com/photo-1558117338-7ef3d637ce2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc29ydCUyMHBhbG0lMjB0cmVlc3xlbnwxfHx8fDE3NjM2MDY4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Mountain,
  },
  {
    name: 'Sunset Cruise',
    description: 'Romantic evening sail with champagne, canapes, and spectacular sunset views.',
    duration: '2 hours',
    price: 120,
    difficulty: 'Easy',
    maxGroup: 20,
    image: 'https://images.unsplash.com/photo-1729615220950-f5b403467b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NjM2MDY4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Ship,
  },
  {
    name: 'Cultural Village Tour',
    description: 'Immerse in local culture, visit traditional villages, and learn ancient crafts.',
    duration: '5 hours',
    price: 85,
    difficulty: 'Easy',
    maxGroup: 15,
    image: 'https://images.unsplash.com/photo-1558117338-7ef3d637ce2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc29ydCUyMHBhbG0lMjB0cmVlc3xlbnwxfHx8fDE3NjM2MDY4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Compass,
  },
  {
    name: 'Photography Safari',
    description: 'Capture stunning landscapes and wildlife with professional photography guide.',
    duration: 'Half Day',
    price: 110,
    difficulty: 'Moderate',
    maxGroup: 6,
    image: 'https://images.unsplash.com/photo-1477204505220-510cd0d57764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHZpZXclMjBzdW5zZXQlMjBiZWFjaHxlbnwxfHx8fDE3NjM2MDY4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Camera,
  },
  {
    name: 'Mountain Biking',
    description: 'Thrilling trails through diverse terrain with breathtaking coastal and mountain views.',
    duration: '3 hours',
    price: 95,
    difficulty: 'Challenging',
    maxGroup: 8,
    image: 'https://images.unsplash.com/photo-1558117338-7ef3d637ce2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc29ydCUyMHBhbG0lMjB0cmVlc3xlbnwxfHx8fDE3NjM2MDY4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Bike,
  },
  {
    name: 'Scuba Diving',
    description: 'Certified dive with experienced instructors to explore underwater wonders.',
    duration: '4 hours',
    price: 180,
    difficulty: 'Moderate',
    maxGroup: 6,
    image: 'https://images.unsplash.com/photo-1713902577801-1c49c875d48f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGFjdGl2aXRpZXMlMjBzbm9ya2VsaW5nfGVufDF8fHx8MTc2MzYwNjgxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Waves,
  },
];

const waterSports = [
  { name: 'Kayaking', icon: '🛶', price: 'Free' },
  { name: 'Paddle Boarding', icon: '🏄', price: 'Free' },
  { name: 'Jet Skiing', icon: '🛥️', price: '$80/hr' },
  { name: 'Parasailing', icon: '🪂', price: '$120' },
  { name: 'Wind Surfing', icon: '🏄‍♂️', price: '$60/hr' },
  { name: 'Fishing', icon: '🎣', price: '$150' },
];

export default function ActivitiesPage() {
  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative h-96 -mt-32 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1713902577801-1c49c875d48f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGFjdGl2aXRpZXMlMjBzbm9ya2VsaW5nfGVufDF8fHx8MTc2MzYwNjgxMHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Activities & Adventures"
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
              Activities & Adventures
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Create unforgettable memories
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Activities */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Guided Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From relaxing beach activities to thrilling adventures, there's something for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-2 rounded-full text-sm">
                  ${activity.price}
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {activity.difficulty}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <activity.icon className="size-5 text-blue-900" />
                  </div>
                  <h3 className="text-xl text-blue-900">{activity.name}</h3>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{activity.description}</p>

                <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>Max {activity.maxGroup}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="size-4" />
                    <span>${activity.price}</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                  Book Activity
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Water Sports */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Water Sports</h2>
            <p className="text-gray-600">Complimentary and paid activities available</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {waterSports.map((sport, index) => (
              <motion.div
                key={sport.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{sport.icon}</div>
                <p className="mb-2">{sport.name}</p>
                <p className="text-sm text-orange-600">{sport.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Experience the Adventure</h2>
            <p className="text-gray-600">Watch highlights from our most popular activities</p>
          </div>

          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto cursor-pointer hover:bg-white/30 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm text-white/80">Click to watch video</p>
              </div>
            </div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1729615220950-f5b403467b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NjM2MDY4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Activities Video"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>
      </section>

      {/* Weather Widget */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 text-white">
              <h2 className="text-3xl md:text-4xl mb-4">Current Conditions</h2>
              <p className="text-white/80">Plan your activities with confidence</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <div className="text-5xl mb-3">☀️</div>
                <div className="text-4xl mb-2">28°C</div>
                <p className="text-white/80">Sunny & Clear</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <div className="text-5xl mb-3">🌊</div>
                <div className="text-4xl mb-2">Calm</div>
                <p className="text-white/80">Perfect for Water Sports</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <div className="text-5xl mb-3">🌡️</div>
                <div className="text-4xl mb-2">65%</div>
                <p className="text-white/80">Comfortable Humidity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Ready for Adventure?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your activities in advance to secure your spot. Many experiences fill up quickly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              View Full Calendar
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
              Contact Concierge
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
