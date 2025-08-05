import React from 'react';
import { Truck, Box, Home, Package, Aperture, PhoneCall, Mail } from 'lucide-react';

const Services = () => {
  const coreServices = [
    {
      title: 'On-Demand Transportation',
      description: 'Redcap offers a variety of vehicles, including mini-trucks, tempos, and two-wheelers, for transporting goods of all sizes, ensuring fast and reliable delivery.',
      icon: <Truck className="h-10 w-10 text-red-600" />,
    },
    {
      title: 'Enterprise Logistics',
      description: 'We provide comprehensive logistics solutions for businesses, including bulk transportation, distribution, and efficient supply chain management to streamline your operations.',
      icon: <Box className="h-10 w-10 text-red-600" />,
    },
    {
      title: 'Packers and Movers',
      description: 'Our professional team offers stress-free residential relocation services, handling everything from careful packing to secure moving of your belongings.',
      icon: <Home className="h-10 w-10 text-red-600" />,
    },
    {
      title: 'Intercity Courier Services',
      description: 'Redcap facilitates swift and reliable intercity courier services for both businesses and individuals, connecting you with partners and customers across India.',
      icon: <Package className="h-10 w-10 text-red-600" />,
    },
    {
      title: 'API Integrations',
      description: 'Seamlessly integrate Redcap’s delivery services into your existing business systems with our robust API, allowing for automated and efficient delivery management.',
      icon: <Aperture className="h-10 w-10 text-red-600" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Our Services</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Redcap provides a wide range of logistics and transportation solutions tailored to your needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center"
            >
              <div className="p-4 bg-red-100 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
