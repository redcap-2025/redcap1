import React from 'react';
import { MapPin, Info } from 'lucide-react';

const ServiceCoverageSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Coverage</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We serve across India with comprehensive logistics solutions for B2B and B2C deliveries
          </p>
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Cities We Serve</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Service coverage map"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 mb-2">
                      Expanding Coverage
                    </h4>
                    <p className="text-green-700">
                      Don't see your area? We're rapidly expanding. Contact us to check 
                      availability in your location.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">South India</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Bangalore</li>
                    <li>• Chennai</li>
                    <li>• Hyderabad</li>
                    <li>• Mysore</li>
                    <li>• Coimbatore</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">West India</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Mumbai</li>
                    <li>• Pune</li>
                    <li>• Ahmedabad</li>
                    <li>• Surat</li>
                    <li>• Nagpur</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">North India</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Delhi</li>
                    <li>• Gurgaon</li>
                    <li>• Noida</li>
                    <li>• Jaipur</li>
                    <li>• Lucknow</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">East India</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Kolkata</li>
                    <li>• Bhubaneswar</li>
                    <li>• Guwahati</li>
                    <li>• Patna</li>
                    <li>• Ranchi</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">
                    More cities being added regularly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCoverageSection;