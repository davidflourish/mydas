import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, Clock, MapPin, Users, Trophy, BookOpen, Palette } from 'lucide-react';

const EventsCalendar = () => {
  const upcomingEvents = [
    {
      date: "15",
      month: "Dec",
      title: "Annual Science Fair",
      time: "9:00 AM - 4:00 PM",
      location: "School Auditorium",
      category: "Academic",
      participants: "All Students",
      icon: BookOpen,
      color: "deep-green"
    },
    {
      date: "22",
      month: "Dec",
      title: "Inter-House Sports Competition",
      time: "8:00 AM - 3:00 PM",
      location: "School Sports Complex",
      category: "Sports",
      participants: "Primary & Secondary",
      icon: Trophy,
      color: "coral"
    },
    {
      date: "18",
      month: "Jan",
      title: "Cultural Day Celebration",
      time: "10:00 AM - 2:00 PM",
      location: "School Premises",
      category: "Cultural",
      participants: "All Students & Parents",
      icon: Palette,
      color: "warm-gold"
    }
  ];

  const recentNews = [
    {
      title: "Excellence Academy Wins Regional Debate Championship",
      date: "December 8, 2024",
      summary: "Our SS2 debate team emerged victorious in the Lagos State Inter-School Debate Competition.",
      category: "Achievement"
    },
    {
      title: "New STEM Laboratory Opens",
      date: "December 5, 2024",
      summary: "State-of-the-art science laboratory equipped with modern equipment now open for student use.",
      category: "Facilities"
    },
    {
      title: "Parent-Teacher Association Meeting",
      date: "December 1, 2024",
      summary: "Successful PTA meeting discusses school development projects and student welfare initiatives.",
      category: "Community"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-soft-cream to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-deep-green mb-4">
            Events & News
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our school activities, achievements, and important announcements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-serif text-deep-green">
                Upcoming Events
              </h3>
              <Button variant="outline" size="sm" className="border-deep-green text-deep-green hover:bg-deep-green hover:text-white">
                View All Events
              </Button>
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        {/* Date */}
                        <div className={`text-center rounded-lg p-3 min-w-[4rem] ${
                          event.color === 'coral' ? 'bg-coral/10' :
                          event.color === 'warm-gold' ? 'bg-warm-gold/10' : 'bg-deep-green/10'
                        }`}>
                          <div className={`text-2xl font-serif ${
                            event.color === 'coral' ? 'text-coral' :
                            event.color === 'warm-gold' ? 'text-warm-gold' : 'text-deep-green'
                          }`}>
                            {event.date}
                          </div>
                          <div className={`text-sm uppercase ${
                            event.color === 'coral' ? 'text-coral' :
                            event.color === 'warm-gold' ? 'text-warm-gold' : 'text-deep-green'
                          }`}>
                            {event.month}
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-lg text-deep-green">
                              {event.title}
                            </h4>
                            <Badge variant="outline" className={`text-xs ${
                              event.color === 'coral' ? 'border-coral text-coral' :
                              event.color === 'warm-gold' ? 'border-warm-gold text-warm-gold' : 'border-deep-green text-deep-green'
                            }`}>
                              {event.category}
                            </Badge>
                          </div>

                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {event.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              {event.location}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-2" />
                              {event.participants}
                            </div>
                          </div>

                          <Button
                            size="sm"
                            variant="outline"
                            className={`mt-3 ${
                              event.color === 'coral' ? 'border-coral text-coral hover:bg-coral hover:text-white' :
                              event.color === 'warm-gold' ? 'border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-white' : 'border-deep-green text-deep-green hover:bg-deep-green hover:text-white'
                            }`}
                          >
                            <IconComponent className="w-4 h-4 mr-1" />
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Calendar CTA */}
            <Card className="mt-6 p-6 bg-deep-green text-white border-0">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg mb-2">School Calendar 2023/2024</h4>
                  <p className="text-white/80 text-sm">
                    Download the complete academic calendar with all terms, holidays and events.
                  </p>
                </div>
                <Button variant="secondary" className="bg-white text-deep-green hover:bg-white/90">
                  <Calendar className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Recent News */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-serif text-deep-green">
                Latest News
              </h3>
              <Button variant="outline" size="sm" className="border-deep-green text-deep-green hover:bg-deep-green hover:text-white">
                Read All News
              </Button>
            </div>

            <div className="space-y-6">
              {recentNews.map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="outline" className="border-warm-gold text-warm-gold">
                        {news.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {news.date}
                      </span>
                    </div>
                    
                    <h4 className="text-lg text-deep-green mb-3">
                      {news.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {news.summary}
                    </p>
                    
                    <Button
                      variant="link"
                      className="p-0 h-auto text-coral hover:text-coral/80"
                    >
                      Read More →
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="mt-6 p-6 bg-gradient-to-r from-warm-gold/10 to-warm-gold/5 border-l-4 border-warm-gold">
              <h4 className="text-lg text-deep-green mb-3">Stay Updated</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Subscribe to our newsletter for weekly updates on school activities, achievements, and important announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-border rounded-md bg-white"
                />
                <Button className="bg-warm-gold hover:bg-warm-gold/90 text-deep-green">
                  Subscribe
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;