import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-red-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-red-600">On-demand</span><br />
                Transportation<br />
                <span className="text-yellow-500">Solutions</span> for All<br />
                Your Needs
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                RedCap provides comprehensive logistics solutions including on-demand 
                transportation, intercity courier services, and supply chain management across India.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/booking">
                <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-lg">
                  Book Now
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-lg">
                  Our Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">2000+</div>
                <div className="text-sm text-gray-600">Verified Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-500">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Booking Form Card */}
          <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Transportation</h2>
            
            <div className="space-y-4">
              {/* Pickup Location */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  Pickup Location
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>Select pickup location</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Hyderabad</option>
                </select>
              </div>

              {/* Drop Location */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  Drop Location
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>Select drop location</option>
                  <option>Mysore</option>
                  <option>Coimbatore</option>
                  <option>Mangalore</option>
                </select>
              </div>

              {/* Goods Type and Weight */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Goods Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>Select goods type</option>
                    <option>Electronics</option>
                    <option>Furniture</option>
                    <option>Documents</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Weight (approx)</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>Select weight</option>
                    <option>1-10kg</option>
                    <option>10-50kg</option>
                    <option>50-100kg</option>
                  </select>
                </div>
              </div>

              {/* Estimated Fare */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Estimated Fare</span>
                  <span className="text-2xl font-bold text-red-600">₹0</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Final fare may vary based on actual distance and time
                </p>
              </div>

              {/* CTA Button */}
              <Link to="/booking">
                <Button className="w-full py-4 text-lg flex items-center justify-center space-x-2">
                  <span>Choose Vehicle</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;