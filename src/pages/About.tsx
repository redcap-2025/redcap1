import React from 'react';
import { Users, Globe, Handshake, Truck, Box, Home, Package } from 'lucide-react';

const About = () => {
  const coreServices = [
    {
      title: 'On-Demand Transportation',
      description: 'A fleet of mini-trucks, tempos, and two-wheelers for goods transportation.',
      icon: <Truck className="h-6 w-6 text-red-600" />,
    },
    {
      title: 'Enterprise Logistics',
      description: 'Comprehensive B2B solutions for bulk transportation and supply chain management.',
      icon: <Box className="h-6 w-6 text-red-600" />,
    },
    {
      title: 'Packers and Movers',
      description: 'Stress-free residential relocation services for individuals and families.',
      icon: <Home className="h-6 w-6 text-red-600" />,
    },
    {
      title: 'Intercity Courier',
      description: 'Reliable courier services for businesses and individuals across India.',
      icon: <Package className="h-6 w-6 text-red-600" />,
    },
  ];

  const missionValues = [
    {
      title: 'Customer First',
      description: 'We are committed to providing exceptional service and building lasting relationships with our customers.',
      icon: <Users className="h-10 w-10 text-red-600" />,
    },
    {
      title: 'Seamless Connectivity',
      description: 'Our platform connects you with the right vehicle for your needs, providing real-time visibility.',
      icon: <Globe className="h-10 w-10 text-red-600" />,
    },
    {
      title: 'Reliable Partnerships',
      description: 'We partner with a wide network of drivers and businesses to ensure reliability and trust.',
      icon: <Handshake className="h-10 w-10 text-red-600" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            About Redcap
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Redcap is a leading logistics company providing on-demand transportation solutions and intercity courier services, primarily in India. Our mission is to simplify logistics for businesses and individuals alike.
          </p>
        </div>

        {/* Mission and Values Section */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Mission & Values</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionValues.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center text-center transition duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="p-4 bg-red-100 rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Services Section */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What We Do</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our core services are designed to meet a wide range of logistics and delivery needs.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl p-6 flex items-start space-x-4 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="flex-shrink-0">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
