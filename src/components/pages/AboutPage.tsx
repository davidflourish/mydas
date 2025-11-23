import React from 'react';
import { motion } from 'motion/react';
import { Award, Heart, Leaf, Users, Target, Globe } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const values = [
  {
    icon: Heart,
    title: 'Exceptional Service',
    description: 'We go above and beyond to ensure every guest feels valued and cared for throughout their stay.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices, from solar energy to ocean conservation programs.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Pursuing perfection in every detail, from room amenities to culinary experiences.',
  },
  {
    icon: Globe,
    title: 'Cultural Connection',
    description: 'Celebrating local traditions while providing world-class hospitality.',
  },
];

const awards = [
  { year: '2024', title: 'Best Luxury Beach Resort', org: 'Travel Excellence Awards' },
  { year: '2024', title: 'Top Spa Destination', org: 'Wellness Tourism Association' },
  { year: '2023', title: 'Eco-Resort of the Year', org: 'Green Travel Awards' },
  { year: '2023', title: 'Five-Star Service', org: 'Hospitality Excellence' },
  { year: '2022', title: 'Best Honeymoon Destination', org: 'Romantic Getaways Magazine' },
];

const team = [
  { name: 'Sarah Mitchell', role: 'General Manager', emoji: '👩‍💼' },
  { name: 'Marcus Rodriguez', role: 'Executive Chef', emoji: '👨‍🍳' },
  { name: 'Elena Torres', role: 'Spa Director', emoji: '💆‍♀️' },
  { name: 'James Chen', role: 'Activities Coordinator', emoji: '🏄‍♂️' },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative h-96 -mt-32 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2MzYwNTAyOXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="About Us"
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
              About Mydas Resort
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Creating unforgettable memories since 2010
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nestled on the pristine shores of Bali, Mydas Resort & Hotel opened its doors in 2010 
                with a vision to create a tropical sanctuary where luxury meets authenticity. What began 
                as a boutique property with 20 rooms has blossomed into a 50-room paradise, consistently 
                ranked among the world's finest beach resorts.
              </p>
              <p>
                Our journey has been guided by a simple philosophy: to provide guests with experiences 
                that touch the soul. From the moment you step onto our grounds, you're enveloped in an 
                atmosphere of tranquility, elegance, and genuine warmth that defines the Mydas difference.
              </p>
              <p>
                Today, we're proud to employ over 150 team members from the local community, many of whom 
                have been with us since the beginning. Their dedication and passion are the heart of our 
                success, ensuring every guest receives service that exceeds expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="size-8 text-blue-900" />
                </div>
                <h3 className="text-xl text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl text-blue-900 mb-6">Sustainability Commitment</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Mydas Resort, we believe luxury and environmental responsibility go hand in hand. 
                  Our comprehensive sustainability program encompasses every aspect of our operations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Leaf className="size-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>100% solar-powered facilities reducing our carbon footprint by 80%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="size-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Zero single-use plastics with comprehensive recycling programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="size-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Organic garden supplying 60% of restaurant produce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="size-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Coral reef restoration project protecting marine ecosystems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="size-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Water conservation systems saving 1 million gallons annually</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558117338-7ef3d637ce2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc29ydCUyMHBhbG0lMjB0cmVlc3xlbnwxfHx8fDE3NjM2MDY4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sustainability"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl mb-2">🌱</div>
                <p className="text-sm">Certified<br />Eco-Resort</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Awards & Recognition</h2>
            <p className="text-gray-600">Celebrating excellence in hospitality</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={`${award.year}-${award.title}`}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="size-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-orange-600 mb-1">{award.year}</div>
                  <h4 className="text-lg text-blue-900 mb-1">{award.title}</h4>
                  <p className="text-sm text-gray-600">{award.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Meet Our Leadership</h2>
          <p className="text-gray-600">The passionate team behind your perfect stay</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center text-5xl">
                {member.emoji}
              </div>
              <h4 className="text-lg text-blue-900 mb-1">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Users className="size-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl mb-4">Join the Mydas Family</h2>
            <p className="text-white/90 mb-8">
              We're always looking for passionate individuals to join our team. 
              Explore career opportunities and become part of something special.
            </p>
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors">
              View Career Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
