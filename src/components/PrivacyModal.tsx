import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
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
              <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
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

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect</h3>
                <p className="text-gray-700 mb-4">
                  Terraform Digital collects information you provide directly to us, such as when you contact us through our website, request a consultation, or communicate with us via email or phone. This may include your name, email address, phone number, company name, and any messages you send to us.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Respond to your inquiries and provide customer service</li>
                  <li>Provide marketing and advertising services</li>
                  <li>Send you updates about our services and industry insights</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Information Sharing</h3>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Security</h3>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies and Analytics</h3>
                <p className="text-gray-700 mb-4">
                  Our website may use cookies and similar technologies to enhance your browsing experience and analyze website traffic. We may use third-party analytics services like Google Analytics to understand how visitors interact with our site.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h3>
                <p className="text-gray-700 mb-4">
                  You have the right to access, update, or delete your personal information. You may also opt out of receiving marketing communications from us at any time by contacting us directly.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyModal;