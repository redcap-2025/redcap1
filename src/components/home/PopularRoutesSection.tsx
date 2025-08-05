import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { popularRoutes } from '../../data/mockData';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const PopularRoutesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Routes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick booking for frequently traveled routes with pre-calculated fares
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoutes.map((route) => (
            <div
              key={route.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="font-semibold text-gray-900">
                    {route.from} → {route.to}
                  </span>
                </div>
                <span className="text-2xl font-bold text-blue-600">
                  ₹{route.price.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Clock className="h-4 w-4 mr-1" />
                <span>{route.distance} • {route.duration}</span>
              </div>

              <div className="text-sm text-gray-500 mb-4">
                Starting from
              </div>

              <Link to="/booking">
                <Button className="w-full">
                  Quick Book
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/routes">
            <Button variant="outline" size="lg" className="px-8">
              View All Routes
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularRoutesSection;