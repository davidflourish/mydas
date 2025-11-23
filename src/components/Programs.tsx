import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BookOpen, Users, Star, ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      level: "Primary Education",
      ageRange: "Ages 6-11",
      image: "https://images.unsplash.com/photo-1589062909453-78ebda337cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY2hpbGRyZW4lMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NTkzODg1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Foundation literacy & numeracy",
        "Creative arts & music",
        "Physical education & sports",
        "Character development"
      ],
      subjects: "English, Mathematics, Basic Science, Social Studies, Creative Arts, Computer Studies",
      extracurricular: "Drama Club, Young Scientists, Choir, Sports Teams"
    },
    {
      level: "Junior Secondary",
      ageRange: "Ages 12-14",
      image: "https://images.unsplash.com/photo-1676313414325-2a877a95dd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc1OTQzNjU2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Advanced STEM subjects",
        "Language proficiency",
        "Critical thinking skills",
        "Leadership development"
      ],
      subjects: "Mathematics, English, Basic Science, French, Computer Studies, Civic Education",
      extracurricular: "Science Club, Debate Society, Basketball, Football, Chess Club"
    },
    {
      level: "Senior Secondary",
      ageRange: "Ages 15-18",
      image: "https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdGVhY2hlciUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NTk0MzY1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "University preparation",
        "Career guidance",
        "Advanced research projects",
        "Global perspectives"
      ],
      subjects: "Core: English, Mathematics, Civic Ed. | Science: Physics, Chemistry, Biology | Arts: Literature, Government, Economics",
      extracurricular: "Model UN, Robotics Club, Drama Society, Academic Olympics"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-deep-green mb-4">
            Our Academic Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive education pathways designed to nurture every child's potential 
            from foundation to university preparation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.level}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl hover:shadow-deep-green/10 transition-all duration-700 hover:-translate-y-4 border-0 bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl relative">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-deep-green via-warm-gold to-deep-green opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[2px]">
                  <div className="bg-white rounded-2xl h-full w-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    <ImageWithFallback
                      src={program.image}
                      alt={`${program.level} students`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <motion.div 
                      className="absolute top-6 left-6 bg-gradient-to-r from-deep-green to-deep-green/90 text-white px-4 py-2 rounded-full backdrop-blur-sm shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="font-medium">{program.ageRange}</span>
                    </motion.div>
                  </div>
                </div>
                
                <div className="relative z-10 p-8">
                  <motion.h3 
                    className="text-2xl font-serif text-deep-green mb-4 group-hover:text-deep-green/90 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {program.level}
                  </motion.h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center text-sm font-semibold uppercase tracking-wider text-warm-gold mb-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-warm-gold to-warm-gold/80 rounded-lg flex items-center justify-center mr-2">
                          <Star className="w-3 h-3 text-white" />
                        </div>
                        Key Features
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {program.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start group-hover:text-foreground transition-colors duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                          >
                            <div className="w-3 h-3 bg-gradient-to-br from-coral to-coral/80 rounded-full mt-1.5 mr-3 flex-shrink-0 shadow-sm"></div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center text-sm font-semibold uppercase tracking-wider text-warm-gold mb-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-warm-gold to-warm-gold/80 rounded-lg flex items-center justify-center mr-2">
                          <BookOpen className="w-3 h-3 text-white" />
                        </div>
                        Core Subjects
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {program.subjects}
                      </p>
                    </div>

                    <div>
                      <h4 className="flex items-center text-sm font-semibold uppercase tracking-wider text-warm-gold mb-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-warm-gold to-warm-gold/80 rounded-lg flex items-center justify-center mr-2">
                          <Users className="w-3 h-3 text-white" />
                        </div>
                        Extracurricular
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {program.extracurricular}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full mt-8 border-2 border-deep-green text-deep-green hover:bg-gradient-to-r hover:from-deep-green hover:to-deep-green/90 hover:text-white hover:border-transparent group rounded-xl py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;