import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Show initial animation after 3 seconds
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const quickMessages = [
    "I'm inquiring about admission for Primary 1",
    "I want to schedule a school tour",
    "I need information about fees and payment",
    "I want to speak with the admissions officer",
    "Tell me about your secondary school program"
  ];

  const handleQuickMessage = (message: string) => {
    const whatsappUrl = `https://wa.me/2341234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handleDirectChat = () => {
    const whatsappUrl = `https://wa.me/2341234567890?text=${encodeURIComponent("Hello! I'm interested in learning more about Excellence Academy.")}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: hasAnimated ? [1, 1.2, 1] : 1, 
          opacity: 1 
        }}
        transition={{ 
          duration: hasAnimated ? 0.6 : 0.3,
          delay: 0.2 
        }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-2xl hover:shadow-[#25D366]/25 transition-all duration-300"
          size="icon"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        {/* Notification Badge */}
        <AnimatePresence>
          {!isOpen && hasAnimated && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-coral rounded-full flex items-center justify-center"
            >
              <span className="text-white text-xs">1</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* WhatsApp Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 max-w-[calc(100vw-3rem)]"
          >
            <Card className="overflow-hidden border-0 shadow-2xl">
              {/* Header */}
              <div className="bg-[#25D366] text-white p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Excellence Academy</h4>
                    <p className="text-xs text-white/80">Admissions Support</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 bg-white max-h-80 overflow-y-auto">
                {/* Welcome Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-4"
                >
                  <div className="bg-[#E8F5E8] rounded-lg rounded-bl-none p-3 mb-2">
                    <p className="text-sm text-gray-800">
                      Hello! 👋 Welcome to Excellence Academy. How can we help you today?
                    </p>
                  </div>
                  <p className="text-xs text-gray-500">Admissions Team • Just now</p>
                </motion.div>

                {/* Quick Messages */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-600 mb-3">Quick Questions:</p>
                  {quickMessages.map((message, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      onClick={() => handleQuickMessage(message)}
                      className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors border border-gray-200"
                    >
                      {message}
                    </motion.button>
                  ))}
                </div>

                {/* Direct Chat Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-4 pt-4 border-t"
                >
                  <Button
                    onClick={handleDirectChat}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Start WhatsApp Chat
                  </Button>
                </motion.div>

                {/* Office Hours */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-3 text-center"
                >
                  <p className="text-xs text-gray-500">
                    📞 Available Mon-Fri 8AM-5PM, Sat 9AM-2PM
                  </p>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/10 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppWidget;