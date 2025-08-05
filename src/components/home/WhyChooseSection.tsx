import React from 'react';
import { Shield, DollarSign, Clock, Headphones } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-gray-700" />,
      title: 'Verified Drivers',
      description: 'All drivers and partners are background-checked and verified with valid licenses',
      bgColor: 'bg-gray-100'
    },
    {
      icon: <DollarSign className="h-12 w-12 text-green-600" />,
      title: 'Transparent Pricing',
      description: 'No hidden charges. Get upfront pricing with detailed fare breakdown',
      bgColor: 'bg-green-100'
    },
    {
      icon: <Clock className="h-12 w-12 text-yellow-600" />,
      title: 'On-Time Delivery',
      description: 'Real-time visibility and tracking for all your shipments and deliveries',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: <Headphones className="h-12 w-12 text-red-600" />,
      title: '24/7 Support',
      description: 'Dedicated customer support for enterprise and individual customers',
      bgColor: 'bg-red-100'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose RedCap?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our reliable, transparent, and customer-first approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 ${feature.bgColor} rounded-full mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Trusted by thousands of customers
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Join the growing community of satisfied customers who trust RedCap 
                  for their logistics and transportation needs across India.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-2">99.5%</div>
                    <div className="text-sm text-gray-600">On-time Delivery</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Cities Covered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
                    <div className="text-sm text-gray-600">Deliveries</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-blue-50 p-8 lg:p-12 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Happy customers"
                  className="rounded-lg shadow-lg max-w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;