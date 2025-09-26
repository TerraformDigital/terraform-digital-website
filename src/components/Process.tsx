import { motion } from 'framer-motion';
import { Search, Vibrate as Strategy, Settings, TrendingUp } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Analysis",
      description: "We analyze your current digital presence, identify opportunities, and understand your business goals to create a solid foundation for success."
    },
    {
      number: "02",
      icon: Strategy,
      title: "Strategy Development",
      description: "Custom strategy based on your goals, target audience, and market analysis using proven methodologies and cutting-edge tools."
    },
    {
      number: "03",
      icon: Settings,
      title: "Implementation",
      description: "Execute with precision using proven methods, advanced tools, and our team's expertise to deliver results that matter."
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Results & Optimization",
      description: "Monitor, measure, and continuously improve performance with detailed reporting and data-driven optimizations."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Proven Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach that delivers consistent results and drives sustainable growth for your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-teal text-white rounded-full text-xl font-bold mb-4">
                  {step.number}
                </div>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-md">
                    <step.icon className="h-8 w-8 text-primary-teal" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-primary-teal/30 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;