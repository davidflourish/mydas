import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { FileText, Shield, Download, BarChart3, Calendar, Users } from 'lucide-react';

const ResultsPortal = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Access",
      description: "Password-protected with student ID verification"
    },
    {
      icon: FileText,
      title: "Comprehensive Reports",
      description: "Detailed academic performance and progress tracking"
    },
    {
      icon: Download,
      title: "Printable Results",
      description: "Download official transcripts and report cards"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Visual charts showing academic progress over time"
    }
  ];

  const quickStats = [
    { label: "Active Students", value: "1,200+", icon: Users },
    { label: "Terms Recorded", value: "15", icon: Calendar },
    { label: "Reports Generated", value: "5,400+", icon: FileText }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-deep-green mb-4">
            Student Results Portal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure, transparent access to your child's academic progress and performance reports
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Portal Interface Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-0 bg-gradient-to-br from-deep-green to-deep-green/90 text-white shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif">Results Portal</h3>
                <Badge variant="secondary" className="bg-warm-gold text-deep-green">
                  SECURE
                </Badge>
              </div>

              {/* Mock Login Interface */}
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-warm-gold rounded-full flex items-center justify-center">
                      <FileText className="w-5 h-5 text-deep-green" />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Latest Report</div>
                      <div className="text-lg">First Term 2023/2024</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="text-center">
                      <div className="text-warm-gold">Overall</div>
                      <div className="text-xl">85%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-warm-gold">Position</div>
                      <div className="text-xl">3rd</div>
                    </div>
                    <div className="text-center">
                      <div className="text-warm-gold">Grade</div>
                      <div className="text-xl">A</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/10 rounded-lg text-center">
                    <div className="text-warm-gold text-sm">Mathematics</div>
                    <div className="text-lg">92%</div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center">
                    <div className="text-warm-gold text-sm">English</div>
                    <div className="text-lg">88%</div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center">
                    <div className="text-warm-gold text-sm">Science</div>
                    <div className="text-lg">90%</div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center">
                    <div className="text-warm-gold text-sm">History</div>
                    <div className="text-lg">81%</div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-warm-gold hover:bg-warm-gold/90 text-deep-green">
                <Download className="w-4 h-4 mr-2" />
                Download Full Report
              </Button>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {quickStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-4 text-center border-0 bg-soft-cream">
                      <IconComponent className="w-6 h-6 text-deep-green mx-auto mb-2" />
                      <div className="text-xl font-serif text-warm-gold">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Features & Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif text-deep-green mb-6">
              Portal Features
            </h3>

            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white shadow-sm hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-deep-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-deep-green" />
                      </div>
                      <div>
                        <h4 className="text-lg text-deep-green mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}

            {/* Access Information */}
            <Card className="p-6 bg-gradient-to-r from-coral/10 to-coral/5 border-l-4 border-coral">
              <h4 className="text-lg text-deep-green mb-3">How to Access</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-coral rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Use your child's student ID as username</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-coral rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Default password is child's date of birth (DDMMYYYY)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-coral rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Change password after first login for security</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-coral rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Contact IT support for login issues</span>
                </div>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-deep-green hover:bg-deep-green/90 text-white flex-1">
                Access Portal
              </Button>
              <Button variant="outline" className="border-deep-green text-deep-green hover:bg-deep-green hover:text-white flex-1">
                Get Help
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-soft-cream to-white border-0">
            <div className="text-center">
              <h4 className="text-xl font-serif text-deep-green mb-4">
                Transparent Academic Reporting
              </h4>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our digital portal ensures parents stay informed about their child's academic journey. 
                Real-time updates, detailed subject breakdowns, and teacher comments provide comprehensive 
                insights into your child's progress and areas for improvement.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsPortal;