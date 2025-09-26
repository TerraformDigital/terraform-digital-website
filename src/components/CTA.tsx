import { motion } from 'framer-motion';
import { useState } from 'react';
import AuditModal from './AuditModal';

const CTA = () => {
  const [showAuditModal, setShowAuditModal] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-primary-teal to-bright-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Digital Strategy?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Get a free consultation and discover how we can help you achieve your marketing goals with AI-ready strategies that drive real results.
          </p>
          <motion.button
            onClick={() => setShowAuditModal(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-teal px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </div>
      </section>
      
      <AuditModal 
        isOpen={showAuditModal} 
        onClose={() => setShowAuditModal(false)} 
      />
    </>
  );
};

export default CTA;