import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PrivacyModal from './PrivacyModal';
import TermsModal from './TermsModal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Analytics tracking
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-rich-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Let's Start Your Transformation</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to terraform your digital strategy? Get in touch and let's discuss how we can drive growth for your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-electric-teal focus:ring-1 focus:ring-electric-teal transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-electric-teal focus:ring-1 focus:ring-electric-teal transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-gray-300 font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-electric-teal focus:ring-1 focus:ring-electric-teal transition-all"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-electric-teal focus:ring-1 focus:ring-electric-teal transition-all resize-none"
                  placeholder="Tell us about your project and goals..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-electric-teal text-rich-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-bright-teal transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@terraformdigital.com"
                  className="flex items-center space-x-4 text-gray-300 hover:text-electric-teal transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-electric-teal/20 transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div>hello@terraformdigital.com</div>
                  </div>
                </a>
                
                <a
                  href="tel:+1-320-309-6377"
                  className="flex items-center space-x-4 text-gray-300 hover:text-electric-teal transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-electric-teal/20 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div>(320) 309-6377</div>
                  </div>
                </a>
                
                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div>Sauk Rapids, MN</div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <img 
                src="/Terraform-Digital-white.png" 
                alt="Terraform Digital Logo" 
                className="h-8 w-auto"
              />
            </div>
            
            <div className="flex space-x-6 text-gray-400 text-sm">
              <button 
                onClick={() => setShowPrivacyModal(true)}
                className="hover:text-electric-teal transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setShowTermsModal(true)}
                className="hover:text-electric-teal transition-colors"
              >
                Terms of Service
              </button>
              <span>© 2025 Terraform Digital. All rights reserved.</span>
            </div>
          </div>
        </motion.div>
        
        <PrivacyModal 
          isOpen={showPrivacyModal} 
          onClose={() => setShowPrivacyModal(false)} 
        />
        <TermsModal 
          isOpen={showTermsModal} 
          onClose={() => setShowTermsModal(false)} 
        />
      </div>
    </section>
  );
};

export default Contact;