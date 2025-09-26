import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
              <div className="prose prose-gray max-w-none">
                <p className="text-sm text-gray-600 mb-6">
                  <strong>Last updated:</strong> January 2025
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Acceptance of Terms</h3>
                <p className="text-gray-700 mb-4">
                  By accessing and using the Terraform Digital website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Services Description</h3>
                <p className="text-gray-700 mb-4">
                  Terraform Digital provides digital marketing services including but not limited to search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, web design and development, analytics and reporting, and photography/video services.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Client Responsibilities</h3>
                <p className="text-gray-700 mb-4">
                  Clients are responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Providing accurate and complete information necessary for service delivery</li>
                  <li>Timely payment of all fees and charges</li>
                  <li>Compliance with all applicable laws and regulations</li>
                  <li>Providing necessary access to accounts, websites, and platforms</li>
                  <li>Reviewing and approving deliverables in a timely manner</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms</h3>
                <p className="text-gray-700 mb-4">
                  Payment terms will be specified in individual service agreements. Generally, payments are due within 30 days of invoice date unless otherwise agreed upon. Late payments may incur additional fees and may result in suspension of services.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Intellectual Property</h3>
                <p className="text-gray-700 mb-4">
                  All content, strategies, and materials created by Terraform Digital remain our intellectual property unless specifically transferred to the client in writing. Clients retain ownership of their existing trademarks, logos, and proprietary content.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                <p className="text-gray-700 mb-4">
                  Terraform Digital's liability for any claim arising from our services shall not exceed the total amount paid by the client for the specific services in question. We are not liable for indirect, incidental, or consequential damages.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Termination</h3>
                <p className="text-gray-700 mb-4">
                  Either party may terminate services with 30 days written notice. Upon termination, the client remains responsible for payment of all services rendered up to the termination date.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Confidentiality</h3>
                <p className="text-gray-700 mb-4">
                  We maintain strict confidentiality regarding all client information and business practices. We will not disclose confidential information to third parties without written consent.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Governing Law</h3>
                <p className="text-gray-700 mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the State of Minnesota, without regard to its conflict of law provisions.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                <p className="text-gray-700 mb-4">
                  For questions regarding these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Terraform Digital</strong><br />
                    Email: hello@terraformdigital.com<br />
                    Phone: (320) 309-6377<br />
                    Location: Sauk Rapids, MN
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TermsModal;