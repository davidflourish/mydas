import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Camera, MapPin, Clock } from 'lucide-react';

const VirtualTour = () => {
  const tourHighlights = [
    {
      title: "Modern Classrooms",
      description: "Smart boards, air conditioning, and optimal lighting",
      image: "https://images.unsplash.com/photo-1589062909453-78ebda337cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY2hpbGRyZW4lMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NTkzODg1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Science Laboratory",
      description: "Fully equipped labs for Physics, Chemistry & Biology",
      image: "https://images.unsplash.com/photo-1676313414325-2a877a95dd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc1OTQzNjU2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Sports Complex",
      description: "Basketball court, football field, and athletic tracks",
      image: "https://images.unsplash.com/photo-1641855389933-ebec8970e595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwY2hpbGRyZW4lMjBzcG9ydHN8ZW58MXx8fHwxNzU5NDM2NTY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

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
            Explore Our Campus
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities designed to inspire learning and growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Video/Tour Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden shadow-2xl border-0">
              <div className="relative h-80 bg-gradient-to-r from-deep-green to-deep-green/80">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1632215863153-0dae7657d0a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMHN0dWRlbnRzJTIwdW5pZm9ybSUyMHNjaG9vbHxlbnwxfHx8fDE3NTk0MzY1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="School campus overview"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-deep-green/40"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </motion.button>
                </div>

                {/* Tour Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-lg text-deep-green mb-2">Virtual Campus Tour</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      8 minutes
                    </div>
                    <div className="flex items-center">
                      <Camera className="w-4 h-4 mr-1" />
                      360° View
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Full Campus
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button className="bg-coral hover:bg-coral/90 text-white flex-1">
                <Play className="w-4 h-4 mr-2" />
                Start Virtual Tour
              </Button>
              <Button variant="outline" className="border-deep-green text-deep-green hover:bg-deep-green hover:text-white flex-1">
                Download Brochure
              </Button>
            </div>
          </motion.div>

          {/* Tour Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif text-deep-green mb-6">
              Campus Highlights
            </h3>
            
            {tourHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 hover:shadow-lg transition-all duration-300 border-0 bg-soft-cream/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={highlight.image}
                        alt={highlight.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg text-deep-green mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            <Card className="p-6 bg-gradient-to-r from-deep-green to-deep-green/90 text-white border-0">
              <h4 className="text-lg mb-2">Schedule a Physical Tour</h4>
              <p className="text-white/80 text-sm mb-4">
                Experience our facilities in person. Tours available Monday-Friday 9AM-4PM
              </p>
              <Button variant="secondary" className="bg-white text-deep-green hover:bg-white/90">
                Book Physical Tour
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;