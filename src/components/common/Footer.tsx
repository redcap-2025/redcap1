import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold">RedCap</span>
            </div>
            <p className="text-gray-300 text-sm">
              India's leading on-demand transportation and logistics platform, 
              connecting businesses and individuals with reliable delivery solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-red-600 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-red-600 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-red-600 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-red-600 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white text-sm">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white text-sm">Pricing</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/trucks" className="text-gray-300 hover:text-white text-sm">Truck Booking</Link></li>
              <li><Link to="/services/intercity" className="text-gray-300 hover:text-white text-sm">Intercity Delivery</Link></li>
              <li><Link to="/services/enterprise" className="text-gray-300 hover:text-white text-sm">Enterprise Solutions</Link></li>
              <li><Link to="/services/tracking" className="text-gray-300 hover:text-white text-sm">Package Tracking</Link></li>
              <li><Link to="/services/support" className="text-gray-300 hover:text-white text-sm">24/7 Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-gray-300 text-sm">+91 80 4040 5050</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-gray-300 text-sm">support@redcap.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-red-600 mt-1" />
                <span className="text-gray-300 text-sm">
                  HSR Layout, Sector 1<br />
                  Bangalore, Karnataka 560102
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 RedCap. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/faq" className="text-gray-400 hover:text-white text-sm">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;