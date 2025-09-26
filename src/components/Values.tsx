import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Values = () => {

  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Terraform Digital</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering AI-ready search optimization for the future of digital marketing
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 lg:p-12 shadow-lg"
          >
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in 2023, Terraform Digital emerged from a simple belief: every business deserves to be prepared for the AI revolution in search, regardless of size or industry.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                As search engines evolve with AI technology, traditional SEO is no longer enough. Our team specializes in GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), and AI-ready SEO strategies that prepare businesses for the future of search.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                Today, we're proud to be pioneers in AI-ready search optimization, helping businesses navigate the evolving digital landscape and achieve meaningful, measurable results in the age of AI.
              </p>
              
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-3 bg-primary-teal/10 px-6 py-3 rounded-lg">
                  <Award className="h-6 w-6 text-primary-teal" />
                  <span className="font-semibold text-primary-teal">Google Certified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Values;