import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Calendar, Users, CreditCard, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { useAppContext } from '../../App';

const faqs = [
  {
    question: 'What are your check-in and check-out times?',
    answer: 'Check-in is at 2:00 PM and check-out is at 12:00 PM. Early check-in and late check-out are subject to availability and may incur additional charges.',
  },
  {
    question: 'Do you offer airport transfers?',
    answer: 'Yes! We provide complimentary airport transfers for all guests staying 3 nights or longer. For shorter stays, transfers are available for a fee of $50 per way.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 7 days or more before arrival receive a full refund. Cancellations within 7 days are subject to a one-night charge. No-shows are charged the full stay amount.',
  },
  {
    question: 'Are children welcome?',
    answer: 'Absolutely! We welcome children of all ages. Kids under 12 stay free in parents\' room. We offer kids\' menus, activities, and babysitting services upon request.',
  },
  {
    question: 'Do you allow pets?',
    answer: 'Unfortunately, we do not allow pets except for registered service animals. We want to ensure a comfortable environment for all guests.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, AmEx), PayPal, and bank transfers. A deposit of 50% is required at booking, with the balance due 30 days before arrival.',
  },
];

export default function ContactPage() {
  const { navigateWithBooking, bookingSearch } = useAppContext();
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: bookingSearch.checkIn || '',
    checkOut: bookingSearch.checkOut || '',
    guests: bookingSearch.guests || '2',
    roomType: bookingSearch.roomType || '',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  // Update booking data when bookingSearch changes
  useEffect(() => {
    if (bookingSearch.checkIn || bookingSearch.checkOut || bookingSearch.guests || bookingSearch.roomType) {
      setBookingData(prev => ({
        ...prev,
        checkIn: bookingSearch.checkIn || prev.checkIn,
        checkOut: bookingSearch.checkOut || prev.checkOut,
        guests: bookingSearch.guests || prev.guests,
        roomType: bookingSearch.roomType || prev.roomType,
      }));
    }
  }, [bookingSearch]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (bookingStep === 1) {
      // Navigate to rooms page with booking data after step 1
      navigateWithBooking('rooms', {
        checkIn: bookingData.checkIn,
        checkOut: bookingData.checkOut,
        guests: bookingData.guests,
        roomType: bookingData.roomType,
      });
    } else if (bookingStep < 3) {
      setBookingStep(bookingStep + 1);
    } else {
      alert('Booking request submitted! We will contact you within 24 hours to confirm.');
      setBookingStep(1);
      setBookingData({
        checkIn: '',
        checkOut: '',
        guests: '2',
        roomType: '',
        name: '',
        email: '',
        phone: '',
        specialRequests: '',
      });
    }
  };

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            We're here to help plan your perfect getaway
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Booking Form */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl text-blue-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="size-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="mb-1">Address</h4>
                    <p className="text-sm text-gray-600">
                      123 Paradise Beach Road<br />
                      Bali, Indonesia 80361
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="size-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="mb-1">Phone</h4>
                    <p className="text-sm text-gray-600">
                      <a href="tel:+1234567890" className="hover:text-blue-900">
                        +1 (234) 567-8900
                      </a>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="size-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="text-sm text-gray-600">
                      <a href="mailto:info@mydasresort.com" className="hover:text-blue-900">
                        info@mydasresort.com
                      </a>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="size-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="mb-1">Reception Hours</h4>
                    <p className="text-sm text-gray-600">
                      24 Hours / 7 Days a Week
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                <h4 className="mb-3">Quick WhatsApp</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Get instant responses to your questions
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Chat on WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Multi-Step Booking Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl text-blue-900 mb-6">Book Your Stay</h2>

              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        bookingStep >= step
                          ? 'bg-blue-900 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {bookingStep > step ? <Check className="size-5" /> : step}
                    </div>
                    {step < 3 && (
                      <div
                        className={`flex-1 h-1 mx-2 transition-colors ${
                          bookingStep > step ? 'bg-blue-900' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleBookingSubmit}>
                {/* Step 1: Dates & Room */}
                {bookingStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl mb-4">Step 1: Select Dates & Room</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-2 flex items-center gap-2">
                          <Calendar className="size-4" />
                          Check-in Date
                        </label>
                        <Input
                          type="date"
                          value={bookingData.checkIn}
                          onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2 flex items-center gap-2">
                          <Calendar className="size-4" />
                          Check-out Date
                        </label>
                        <Input
                          type="date"
                          value={bookingData.checkOut}
                          onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm mb-2 flex items-center gap-2">
                        <Users className="size-4" />
                        Number of Guests
                      </label>
                      <select
                        value={bookingData.guests}
                        onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                        required
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Room Type</label>
                      <select
                        value={bookingData.roomType}
                        onChange={(e) => setBookingData({ ...bookingData, roomType: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                        required
                      >
                        <option value="">Select a room type</option>
                        <option value="standard">Standard Room - $179/night</option>
                        <option value="deluxe">Deluxe Ocean View - $199/night</option>
                        <option value="suite">Premium Suite - $349/night</option>
                        <option value="presidential">Presidential Suite - $799/night</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                      View Available Rooms
                    </Button>
                  </motion.div>
                )}

                {/* Step 2: Guest Information */}
                {bookingStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl mb-4">Step 2: Guest Information</h3>

                    <div>
                      <label className="block text-sm mb-2">Full Name</label>
                      <Input
                        type="text"
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Email Address</label>
                      <Input
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        placeholder="+1 (234) 567-8900"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Special Requests (Optional)</label>
                      <Textarea
                        value={bookingData.specialRequests}
                        onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                        placeholder="Any special requirements or preferences?"
                        rows={4}
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button
                        type="button"
                        onClick={() => setBookingStep(1)}
                        variant="outline"
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button type="submit" className="flex-1 bg-blue-900 hover:bg-blue-800 text-white">
                        Continue to Payment
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Payment */}
                {bookingStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl mb-4">Step 3: Payment Information</h3>

                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <h4 className="mb-3">Booking Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Dates:</span>
                          <span>{bookingData.checkIn} to {bookingData.checkOut}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Guests:</span>
                          <span>{bookingData.guests}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Room:</span>
                          <span>{bookingData.roomType}</span>
                        </div>
                        <div className="border-t border-blue-200 pt-2 mt-2">
                          <div className="flex justify-between">
                            <span>Deposit (50%):</span>
                            <span>$TBD</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm mb-2 flex items-center gap-2">
                        <CreditCard className="size-4" />
                        Card Number
                      </label>
                      <Input type="text" placeholder="1234 5678 9012 3456" required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-2">Expiry Date</label>
                        <Input type="text" placeholder="MM/YY" required />
                      </div>
                      <div>
                        <label className="block text-sm mb-2">CVV</label>
                        <Input type="text" placeholder="123" required />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        variant="outline"
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
                        Complete Booking
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      Your payment information is secure and encrypted. By completing this booking, 
                      you agree to our Terms & Conditions.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions</p>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Map */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl text-center text-blue-900 mb-8">Find Us</h2>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.40405103774!2d115.17288793781245!3d-8.670458199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246c5d7206b73%3A0x1d6ec374f7e7c55!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mydas Resort Location"
          />
        </div>
      </section>
    </div>
  );
}