import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AuditModal from './AuditModal';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuditModal, setShowAuditModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'values' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            {isScrolled ? (
              <img 
                src="/Terraform-Digital-Black.png" 
                alt="Terraform Digital Logo" 
                className="h-8 w-auto"
              />
            ) : (
              <img 
                src="/Terraform-Digital-white.png" 
                alt="Terraform Digital Logo" 
                className="h-8 w-auto"
              />
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary-teal' : 'text-white hover:text-electric-teal'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setShowAuditModal(true)}
              className="bg-electric-teal text-rich-black px-6 py-2 rounded-full font-semibold hover:bg-bright-teal transition-colors"
            >
              Get Free Audit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary-teal font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4">
                <button
                  onClick={() => setShowAuditModal(true)}
                  className="w-full bg-electric-teal text-rich-black px-6 py-2 rounded-full font-semibold hover:bg-bright-teal transition-colors"
                >
                  Get Free Audit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <AuditModal 
        isOpen={showAuditModal} 
        onClose={() => setShowAuditModal(false)} 
      />
    </nav>
  );
};

export default Navigation;