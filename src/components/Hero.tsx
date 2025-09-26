import { motion } from 'framer-motion';
import { TrendingUp, Users, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import AuditModal from './AuditModal';

const Hero = () => {
  const [showAuditModal, setShowAuditModal] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-rich-black via-deep-teal to-primary-teal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid lg:grid-cols-3 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-electric-teal font-medium text-sm sm:text-base mb-6 uppercase tracking-wide">
                Leading Marketing Agency for Forward-Thinking Businesses
              </p>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Terraform Your <span className="text-electric-teal">Search Strategy</span> for the AI Era
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl">
                Future-proof your digital presence with AI-ready optimization, data-driven PPC, and strategic brand positioning that drives measurable growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => setShowAuditModal(true)}
                  className="bg-electric-teal text-rich-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-bright-teal transform hover:scale-105 transition-all duration-300"
                >
                  Get Your AI Readiness Audit
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-rich-black transition-all duration-300"
                >
                  View Our Results
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex items-center space-x-2 text-white"
              >
                <Users className="h-5 w-5 text-electric-teal" />
                <span className="font-semibold">Trusted by Local Minnesota Businesses</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Performance Dashboard</h3>
                  <div className="h-3 w-3 bg-electric-teal rounded-full animate-pulse"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-electric-teal" />
                      <span className="text-white/80 text-sm">Traffic Growth</span>
                    </div>
                    <div className="text-electric-teal text-2xl font-bold">+247%</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="h-4 w-4 text-electric-teal" />
                      <span className="text-white/80 text-sm">Conversion Rate</span>
                    </div>
                    <div className="text-electric-teal text-2xl font-bold">12.4%</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-white/80 text-sm">
                    <span>SEO Performance</span>
                    <span>94%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-electric-teal h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                  
                  <div className="flex justify-between text-white/80 text-sm">
                    <span>PPC Efficiency</span>
                    <span>87%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-bright-teal h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <AuditModal 
        isOpen={showAuditModal} 
        onClose={() => setShowAuditModal(false)} 
      />
    </section>
  );
};

export default Hero;