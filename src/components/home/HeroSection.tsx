import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-red-50 via-white to-blue-50 overflow-hidden">
      <style>
        {`
          @keyframes slide-in-up {
            from {
              transform: translateY(100px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slide-in-up {
            animation: slide-in-up 1s ease-out;
          }
        `}
      </style>
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

          {/* Animated SVG Truck */}
          <div className="flex justify-center items-center p-8 lg:p-0">
            <div className="animate-slide-in-up w-full max-w-sm lg:max-w-md h-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-red-600">
                {/* SVG path for a truck icon */}
                <path d="M496 160c0 44.18-30.2 80-69 80h-43.5c-8.846-15.54-26.68-25.26-46.5-25.26s-37.66 9.71-46.5 25.26H192c-17.67 0-32 14.33-32 32s14.33 32 32 32h145.5c-8.846-15.54-26.68-25.26-46.5-25.26s-37.66 9.71-46.5 25.26H160c-44.18 0-80 30.2-80 69v79c0 10.36-4.52 20.08-12.35 27.24C60.52 461.2 59.88 464 64 464h424c4.125 0 3.484-2.793-3.656-7.75c-7.83-7.16-12.35-16.88-12.35-27.24v-79c0-44.18-35.82-80-80-80zm-153.5 130.7c20.3-15.42 45.41-21.72 70.36-19.46c24.96 2.26 48.06 13.91 63.5 31.91h-133.86zm-177.5 0h133.86c-15.44-18-38.54-29.65-63.5-31.91c-24.95-2.26-49.97 4.04-70.36 19.46zM80 432c-17.67 0-32-14.33-32-32s14.33-32 32-32h172.5c8.846-15.54 26.68-25.26 46.5-25.26s37.66 9.71 46.5 25.26H432c17.67 0 32 14.33 32 32s-14.33 32-32 32H80zM368 96c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
