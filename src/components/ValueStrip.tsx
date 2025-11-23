import { motion } from 'motion/react';
import { Card } from './ui/card';
import { GraduationCap, Shield, TrendingUp } from 'lucide-react';

const ValueStrip = () => {
  const values = [
    {
      icon: GraduationCap,
      title: "Holistic Curriculum",
      stat: "15+",
      description: "Subjects including STEM, Arts & Languages"
    },
    {
      icon: Shield,
      title: "Safe & Nurturing Environment",
      stat: "1:12",
      description: "Teacher to student ratio for personalized care"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      stat: "95%",
      description: "WAEC/NECO pass rate in the last 5 years"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-soft-cream to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group p-8 text-center hover:shadow-2xl hover:shadow-deep-green/10 transition-all duration-500 hover:-translate-y-3 border-0 bg-white/90 backdrop-blur-xl rounded-2xl relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-warm-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-deep-green via-deep-green/90 to-deep-green/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-deep-green/25 group-hover:shadow-2xl group-hover:shadow-deep-green/40 transition-all duration-500"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <motion.div 
                      className="text-4xl font-serif text-warm-gold mb-3 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {value.stat}
                    </motion.div>
                    
                    <h3 className="text-xl text-deep-green mb-3 group-hover:text-deep-green/90 transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueStrip;