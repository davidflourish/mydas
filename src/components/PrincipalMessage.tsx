import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Pause, Quote } from 'lucide-react';

const PrincipalMessage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-deep-green mb-4">
            A Message from Our Principal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Welcome to Excellence Academy - where every child's potential is nurtured and celebrated
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video/Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden shadow-2xl border-0">
              <div className="relative h-96 bg-gradient-to-br from-deep-green/20 to-deep-green/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdGVhY2hlciUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NTk0MzY1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dr. Folake Adeyemi, School Principal"
                  className="w-full h-full object-cover"
                />
                
                {/* Video Play Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleVideo}
                    className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-2xl"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-deep-green" fill="currentColor" />
                    ) : (
                      <Play className="w-8 h-8 text-deep-green ml-1" fill="currentColor" />
                    )}
                  </motion.button>
                </div>

                {/* Principal Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-serif mb-1">Dr. Folake Adeyemi</h3>
                    <p className="text-white/80">Principal & Educational Leader</p>
                    <div className="text-sm text-white/70 mt-2">
                      M.Ed, Ph.D Educational Leadership • 15+ Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="mt-6 p-4 bg-soft-cream border-0">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Welcome Message • 2 minutes</span>
                <Button variant="ghost" size="sm" className="text-deep-green hover:bg-deep-green/10">
                  Read Transcript
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <Quote className="w-8 h-8 text-warm-gold mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                  "At Excellence Academy, we believe every child is unique and possesses unlimited potential. 
                  Our mission is to create a nurturing environment where young minds can flourish academically, 
                  socially, and morally."
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For over a decade, we have been committed to providing world-class education that combines 
                  academic excellence with character development. Our dedicated team of educators works 
                  tirelessly to ensure each student receives personalized attention and support to reach 
                  their full potential.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  We understand the trust parents place in us when they choose Excellence Academy for their 
                  children's education. This responsibility drives our commitment to maintaining the highest 
                  standards in teaching, learning, and character formation.
                </p>
              </div>
            </div>

            {/* Credentials & Achievements */}
            <Card className="p-6 bg-deep-green text-white border-0">
              <h4 className="text-lg mb-4">Educational Philosophy</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="text-warm-gold mb-2">Academic Excellence</h5>
                  <p className="text-white/80">
                    Rigorous curriculum designed to challenge and inspire students
                  </p>
                </div>
                <div>
                  <h5 className="text-warm-gold mb-2">Character Building</h5>
                  <p className="text-white/80">
                    Values-based education that shapes responsible citizens
                  </p>
                </div>
                <div>
                  <h5 className="text-warm-gold mb-2">Global Perspective</h5>
                  <p className="text-white/80">
                    Preparing students for success in an interconnected world
                  </p>
                </div>
                <div>
                  <h5 className="text-warm-gold mb-2">Innovation</h5>
                  <p className="text-white/80">
                    Embracing technology and modern teaching methodologies
                  </p>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-coral hover:bg-coral/90 text-white flex-1">
                Schedule a Meeting
              </Button>
              <Button variant="outline" className="border-deep-green text-deep-green hover:bg-deep-green hover:text-white flex-1">
                Read Full Biography
              </Button>
            </div>

            {/* Quick Contact */}
            <Card className="p-4 bg-warm-gold/10 border-l-4 border-warm-gold">
              <div className="text-sm">
                <div className="text-deep-green mb-1">Direct Contact</div>
                <div className="text-muted-foreground">
                  principal@excellenceacademy.edu.ng • +234 123 456 7890 Ext. 101
                </div>
                <div className="text-muted-foreground text-xs mt-2">
                  Office hours: Monday - Friday, 8:00 AM - 4:00 PM
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;