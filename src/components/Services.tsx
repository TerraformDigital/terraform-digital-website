import { motion } from 'framer-motion';
import { Search, MousePointer, Share2, Globe, BarChart, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "AI-Ready Search Optimization",
      description: "GEO, AEO, and SEO strategies optimized for AI-powered search engines"
    },
    {
      icon: MousePointer,
      title: "PPC & Paid Advertising",
      description: "Data-driven campaigns across Google, Facebook, and premium platforms"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic social presence that builds authority and drives qualified leads"
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "High-converting websites optimized for user experience and search visibility"
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and insights that prove ROI and guide strategy"
    },
    {
      icon: Camera,
      title: "Photography & Video",
      description: "Professional visual content that captures attention and drives engagement across all marketing channels"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to drive growth and maximize your ROI in the AI-driven marketplace
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg border-l-4 border-primary-teal p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-teal/10 rounded-lg group-hover:bg-primary-teal/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary-teal" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <button className="text-primary-teal font-semibold flex items-center space-x-2 group-hover:text-deep-teal transition-colors">
                <span>Learn More</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;