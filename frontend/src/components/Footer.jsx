import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Rubicorn</h3>
                <p className="text-xs text-gray-500">Technologies</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Transforming Physical Businesses into Digital Powerhouses. We build complete digital business systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Cloud Services', 'AI Solutions', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'App Development',
                'Cloud Solutions',
                'AI Services',
                'Digital Marketing',
                'UI/UX Design',
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-purple-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">Madanapalle, India</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-purple-600 mt-1 flex-shrink-0" />
                <a href="tel:+918978943122" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  +91 8978943122
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-purple-600 mt-1 flex-shrink-0" />
                <a href="mailto:rubicorn@zohomail.in" className="text-gray-600 hover:text-purple-600 transition-colors text-sm break-all">
                  rubicorn@zohomail.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Rubicorn Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center z-40"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
