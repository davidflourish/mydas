import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon, User, Phone, Baby, GraduationCap, CheckCircle, Clock, FileText } from 'lucide-react';
import { format } from 'date-fns@3.6.0';

const AdmissionsFunnel = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childDOB: '',
    grade: '',
    phone: '',
    email: ''
  });

  const steps = [
    {
      number: 1,
      title: "Apply",
      description: "Submit application form with required documents",
      icon: FileText,
      color: "coral"
    },
    {
      number: 2,
      title: "Interview",
      description: "Parent-child interview and assessment",
      icon: User,
      color: "warm-gold"
    },
    {
      number: 3,
      title: "Enroll",
      description: "Complete enrollment and fee payment",
      icon: CheckCircle,
      color: "deep-green"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData, selectedDate);
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="admissions" className="py-20 bg-gradient-to-b from-soft-cream to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-deep-green mb-4">
            Join Our Excellence Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start your child's journey to academic excellence with our simple 3-step admission process
          </p>
        </motion.div>

        {/* Admission Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ${
                    step.color === 'coral' ? 'bg-coral' :
                    step.color === 'warm-gold' ? 'bg-warm-gold' : 'bg-deep-green'
                  }`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-2xl font-serif text-warm-gold mb-2">
                    Step {step.number}
                  </div>
                  
                  <h3 className="text-xl text-deep-green mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </Card>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-warm-gold/30"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-0 bg-white shadow-lg">
              <h3 className="text-2xl font-serif text-deep-green mb-6">
                Quick Application Form
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => handleInputChange('parentName', e.target.value)}
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="childName">Child's Name</Label>
                    <Input
                      id="childName"
                      value={formData.childName}
                      onChange={(e) => handleInputChange('childName', e.target.value)}
                      placeholder="Enter child's full name"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+234 XXX XXX XXXX"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="grade">Class Applying For</Label>
                  <Select onValueChange={(value) => handleInputChange('grade', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select class level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nursery1">Nursery 1</SelectItem>
                      <SelectItem value="nursery2">Nursery 2</SelectItem>
                      <SelectItem value="primary1">Primary 1</SelectItem>
                      <SelectItem value="primary2">Primary 2</SelectItem>
                      <SelectItem value="primary3">Primary 3</SelectItem>
                      <SelectItem value="primary4">Primary 4</SelectItem>
                      <SelectItem value="primary5">Primary 5</SelectItem>
                      <SelectItem value="primary6">Primary 6</SelectItem>
                      <SelectItem value="jss1">JSS 1</SelectItem>
                      <SelectItem value="jss2">JSS 2</SelectItem>
                      <SelectItem value="jss3">JSS 3</SelectItem>
                      <SelectItem value="ss1">SS 1</SelectItem>
                      <SelectItem value="ss2">SS 2</SelectItem>
                      <SelectItem value="ss3">SS 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Preferred Tour Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal mt-1"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-coral hover:bg-coral/90 text-white py-3"
                  size="lg"
                >
                  Submit Application
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 border-0 bg-deep-green text-white">
              <h4 className="text-xl mb-4">Application Requirements</h4>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Birth certificate (copy)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Previous school report (if applicable)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Passport photographs (4 copies)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Immunization record
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Parent/Guardian ID
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-0 bg-warm-gold text-deep-green">
              <h4 className="text-xl mb-4">Early Bird Special</h4>
              <p className="mb-4">
                Apply before the end of this month and get:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  10% discount on registration fee
                </li>
                <li className="flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Free school uniform package
                </li>
                <li className="flex items-center">
                  <Baby className="w-4 h-4 mr-2" />
                  Priority placement consideration
                </li>
              </ul>
              <p className="text-sm opacity-80">
                *Terms and conditions apply. Limited slots available.
              </p>
            </Card>

            <Card className="p-6 border-0 bg-soft-cream">
              <h4 className="text-xl text-deep-green mb-4">Need Help?</h4>
              <p className="text-muted-foreground mb-4">
                Our admissions team is here to assist you through the process.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 mr-2 text-deep-green" />
                  <span>+234 123 456 7890</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2 text-deep-green" />
                  <span>Mon-Fri: 8AM - 5PM</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-4 border-deep-green text-deep-green hover:bg-deep-green hover:text-white"
              >
                Contact Admissions
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsFunnel;