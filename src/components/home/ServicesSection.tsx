import React from 'react';
import { Truck, Package, Settings, MapPin, Building, Phone } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-red-600" />,
      title: 'On-Demand Transportation',
      description: 'Quick and reliable transportation solutions for all your cargo needs with real-time tracking.'
    },
    {
      icon: <Package className="h-12 w-12 text-blue-600" />,
      title: 'Intercity Courier',
      description: 'Fast intercity delivery services across major Indian cities with guaranteed delivery times.'
    },
    {
      icon: <Settings className="h-12 w-12 text-green-600" />,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain solutions for businesses with advanced analytics and reporting.'
    },
    {
      icon: <MapPin className="h-12 w-12 text-purple-600" />,
      title: 'Real-time Tracking',
      description: 'Track your shipments in real-time with our advanced GPS tracking system and notifications.'
    },
    {
      icon: <Building className="h-12 w-12 text-yellow-600" />,
      title: 'B2B Solutions',
      description: 'Specialized logistics solutions for business-to-business operations and enterprise clients.'
    },
    {
      icon: <Phone className="h-12 w-12 text-indigo-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your queries and emergency assistance.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive logistics solutions designed to meet all your transportation 
            and delivery needs across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;