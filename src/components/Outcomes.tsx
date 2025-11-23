import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Quote, Trophy, Users, BookOpen, Globe } from 'lucide-react';

const Outcomes = () => {
  const stats = [
    { label: "University Admissions", value: "98%", icon: Trophy },
    { label: "Scholarship Recipients", value: "45%", icon: BookOpen },
    { label: "International Recognition", value: "12+", icon: Globe },
    { label: "Alumni Network", value: "2,500+", icon: Users }
  ];

  const testimonials = [
    {
      name: "Mrs. Adunni Okafor",
      role: "Parent - SS3 Student",
      content: "Excellence Academy transformed my daughter into a confident, well-rounded young woman. The teachers genuinely care about each child's success.",
      avatar: "A"
    },
    {
      name: "Dr. Chike Emeka",
      role: "Alumnus - Medical Doctor",
      content: "The foundation I received here prepared me not just academically, but mentally and morally for university and my career in medicine.",
      avatar: "C"
    },
    {
      name: "Mr. Tunde Adebayo",
      role: "Parent - JSS2 Student",
      content: "The holistic approach to education here is exceptional. My son is excelling not just in academics but in character development too.",
      avatar: "T"
    }
  ];

  const achievements = [
    "Best Secondary School - Lagos State Education Awards 2023",
    "Outstanding STEM Program - National Education Excellence 2022",
    "UNESCO Associated Schools Network Member",
    "Cambridge International School Certification",
    "Top 10 Private Schools in Nigeria - Education Weekly 2023"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-soft-cream to-white">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-deep-green mb-4">
            Proven Excellence & Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our track record speaks for itself - preparing students for success in higher education and life
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
                    <div className="w-12 h-12 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-serif text-warm-gold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements & Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full border-0 bg-white shadow-lg">
              <h3 className="text-2xl font-serif text-deep-green mb-6">
                Awards & Recognition
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <Trophy className="w-5 h-5 text-warm-gold mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <h4 className="text-lg text-deep-green mb-4">School Partners</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-deep-green text-deep-green">Cambridge</Badge>
                  <Badge variant="outline" className="border-deep-green text-deep-green">UNESCO</Badge>
                  <Badge variant="outline" className="border-deep-green text-deep-green">British Council</Badge>
                  <Badge variant="outline" className="border-deep-green text-deep-green">WAEC</Badge>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full border-0 bg-white shadow-lg">
              <h3 className="text-2xl font-serif text-deep-green mb-6">
                What Our Community Says
              </h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-warm-gold pl-4"
                  >
                    <Quote className="w-5 h-5 text-warm-gold mb-2" />
                    <p className="text-muted-foreground mb-3 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-deep-green text-white">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-deep-green">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;