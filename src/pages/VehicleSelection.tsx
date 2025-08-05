import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Weight, Package, ArrowRight } from 'lucide-react';
import { vehicles } from '../data/mockData';
import { useBooking } from '../context/BookingContext';
import Button from '../components/ui/Button';

const VehicleSelection: React.FC = () => {
  const navigate = useNavigate();
  const { bookingData, updateBookingData } = useBooking();

  const handleVehicleSelect = (vehicleId: string) => {
    updateBookingData({ vehicleId });
    navigate('/booking/confirmation');
  };

  const getVehicleBadge = (vehicleId: string) => {
    if (vehicleId === '2') {
      return (
        <div className="absolute -top-2 -right-2">
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Vehicle</h1>
          <p className="text-lg text-gray-600">
            Select from our fleet of verified vehicles based on your cargo size and budget
          </p>
        </div>

        {/* Booking Summary */}
        {bookingData.pickupLocation && bookingData.dropLocation && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Booking Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Route:</span>
                <p className="font-medium">{bookingData.pickupLocation} → {bookingData.dropLocation}</p>
              </div>
              <div>
                <span className="text-gray-600">Goods:</span>
                <p className="font-medium">{bookingData.goodsType} ({bookingData.weight})</p>
              </div>
              <div>
                <span className="text-gray-600">Date:</span>
                <p className="font-medium">{bookingData.scheduledDate}</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                vehicle.id === '2' ? 'border-2 border-blue-500' : 'border border-gray-200'
              }`}
            >
              {getVehicleBadge(vehicle.id)}
              
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                  <span className="text-2xl font-bold text-blue-600">
                    ₹{vehicle.basePrice}+
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Weight className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{vehicle.capacity}</span>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Package className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div className="text-sm text-gray-600">
                      {vehicle.suitableFor.join(' • ')}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm">Specifications:</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Max Weight: {vehicle.specifications.maxWeight}</p>
                    {vehicle.specifications.dimensions && (
                      <p>Dimensions: {vehicle.specifications.dimensions}</p>
                    )}
                    <p>Fuel: {vehicle.specifications.fuelType}</p>
                  </div>
                </div>
                
                <Button
                  onClick={() => handleVehicleSelect(vehicle.id)}
                  className={`w-full ${
                    vehicle.id === '2' 
                      ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500' 
                      : ''
                  }`}
                >
                  Select Vehicle
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need help choosing the right vehicle? Our team is here to assist you.
          </p>
          <Button variant="outline">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleSelection;