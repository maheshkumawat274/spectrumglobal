import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#2B73B3] flex items-center justify-center">
                <span className="text-white font-bold text-sm">SG</span>
              </div>
              <span className="text-lg font-semibold">Spectrum Global</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering organizations through strategic HR solutions. We partner with forward-thinking companies to build stronger teams and drive sustainable growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-400 hover:text-white transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Recruitment & Talent
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Training & Development
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  HR Systems & Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <div className="space-y-3 text-sm">
              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                <a
                  href="mailto:support@spectrumglobal.in"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  support@spectrumglobal.in
                </a>
              </div>

              {/* Mobile */}
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                <a
                  href="tel:9312567832"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mobile: 9312567832
                </a>
              </div>

              {/* Landline */}
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                <a
                  href="tel:+917042370046"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mobile: +91-7042370046
                </a>
              </div>

              {/* Registered Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 leading-relaxed">
                  <span className="text-gray-300 font-medium">Registered Office:</span>
                  <br />
                  D-113, Sector-36, Greater Noida – 201310
                </span>
              </div>

              {/* Working Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 leading-relaxed">
                  <span className="text-gray-300 font-medium">Working Office:</span>
                  <br />
                  C-52, Sector-2, 3rd Floor, Noida – 201301
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Vertex HR Consulting. All rights reserved.
              <br className="md:hidden" />
            </p>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
