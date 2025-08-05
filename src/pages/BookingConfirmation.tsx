import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, MapPin, Package, Calendar, Clock, CreditCard, Truck } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useAuth } from '../context/AuthContext';
import { vehicles } from '../data/mockData';
import Button from '../components/ui/Button';
import Loading from '../components/common/Loading';

// A mock function to simulate distance calculation based on South Indian locations
const getDistanceBetweenLocations = (pickup: string, drop: string): number => {
  // Mock distances for South Indian cities
  const distances = {
    'Chennai-Bangalore': 350,
    'Chennai-Hyderabad': 625,
    'Bangalore-Hyderabad': 575,
  };
  const key = `${pickup}-${drop}`;
  const reverseKey = `${drop}-${pickup}`;
  return distances[key] || distances[reverseKey] || 300; // Default mock distance
};

const BookingConfirmation: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { bookingData, submitBooking, clearBookingData } = useBooking();
  const { user } = useAuth();
  const navigate = useNavigate();

  const selectedVehicle = vehicles.find(v => v.id === bookingData.vehicleId);

  const handleConfirmBooking = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    setIsSubmitting(true);
    const success = await submitBooking();
    
    if (success) {
      setIsConfirmed(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    }
    setIsSubmitting(false);
  };

  // Function to calculate the total price based on booking data
  const calculateTotalPrice = () => {
    if (!bookingData || !selectedVehicle) {
      return { baseFare: 0, distanceCost: 0, weightCost: 0, goodsTypeCost: 0, subtotal: 0 };
    }

    const baseFare = selectedVehicle.basePrice + 500 || 1500; // Increased base fare
    const distance = getDistanceBetweenLocations(bookingData.pickupLocation, bookingData.dropLocation);
    const weight = parseFloat(bookingData.weight) || 0;

    // Define pricing rates based on vehicle type for a more realistic calculation
    const costPerKm = selectedVehicle.type === 'two-wheeler' ? 7 : 
                    selectedVehicle.type === 'three-wheeler' ? 15 : 
                    20; // Increased cost per km
    const costPerKg = 8; // Increased cost per kg

    // Cost based on goods type
    let goodsTypeCost = 0;
    switch(bookingData.goodsType) {
      case 'Electronics':
        goodsTypeCost = 250;
        break;
      case 'Furniture':
        goodsTypeCost = 150;
        break;
      case 'Perishables':
        goodsTypeCost = 300;
        break;
      default:
        goodsTypeCost = 100;
    }

    // Calculate total price components
    const distanceCost = distance * costPerKm;
    const weightCost = weight * costPerKg;
    const subtotal = baseFare + distanceCost + weightCost + goodsTypeCost;

    return { baseFare, distanceCost, weightCost, goodsTypeCost, subtotal };
  };

  const { baseFare, distanceCost, weightCost, goodsTypeCost, subtotal } = calculateTotalPrice();
  const gstAmount = Math.round(subtotal * 0.18);
  const totalFinalAmount = Math.round(subtotal + gstAmount);

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your booking has been confirmed. You will receive a confirmation email shortly.
          </p>
          <div className="text-sm text-gray-500">
            Redirecting to dashboard...
          </div>
        </div>
      </div>
    );
  }

  if (!bookingData.pickupLocation || !selectedVehicle) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Booking Data Found</h2>
          <p className="text-gray-600 mb-6">Please start a new booking.</p>
          <Button onClick={() => navigate('/booking')}>
            Start New Booking
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Confirm Your Booking</h1>
          <p className="text-lg text-gray-600">
            Review your booking details and confirm your transportation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Route Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Route Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-900">Pickup Location</p>
                    <p className="text-gray-600">{bookingData.pickupLocation}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-900">Drop Location</p>
                    <p className="text-gray-600">{bookingData.dropLocation}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Selected Vehicle</h2>
              <div className="flex items-center space-x-4">
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{selectedVehicle.name}</h3>
                  <p className="text-gray-600 text-sm">{selectedVehicle.description}</p>
                  <p className="text-sm text-gray-500 mt-1">{selectedVehicle.capacity}</p>
                </div>
              </div>
            </div>

            {/* Shipment Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipment Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Package className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Goods Type</p>
                    <p className="text-gray-600">{bookingData.goodsType}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 text-purple-600 font-bold">⚖</div>
                  <div>
                    <p className="font-medium text-gray-900">Weight</p>
                    <p className="text-gray-600">{bookingData.weight}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Pickup Date</p>
                    <p className="text-gray-600">{bookingData.scheduledDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium text-gray-900">Time Slot</p>
                    <p className="text-gray-600 capitalize">{bookingData.timeSlot}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Vehicle Base Fare</span>
                  <span className="font-medium">₹{baseFare}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Distance Cost ({getDistanceBetweenLocations(bookingData.pickupLocation, bookingData.dropLocation)} km)</span>
                  <span className="font-medium">₹{distanceCost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weight Cost ({bookingData.weight} kg)</span>
                  <span className="font-medium">₹{weightCost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Goods Type Cost ({bookingData.goodsType})</span>
                  <span className="font-medium">₹{goodsTypeCost}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Subtotal</span>
                    <span className="text-lg font-semibold">₹{subtotal}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (18%)</span>
                  <span className="font-medium">₹{gstAmount}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                    <span className="text-2xl font-bold text-red-600">
                      ₹{totalFinalAmount}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-800">Payment Method</span>
                  </div>
                  <p className="text-sm text-blue-700 mt-1">Cash on Delivery</p>
                </div>
              </div>

              <Button
                onClick={handleConfirmBooking}
                isLoading={isSubmitting}
                className="w-full mb-4"
                size="lg"
              >
                {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
              </Button>

              <Button
                variant="outline"
                onClick={() => navigate('/booking/vehicles')}
                className="w-full"
              >
                Back to Vehicles
              </Button>

              <div className="mt-6 text-xs text-gray-500">
                <p>By confirming this booking, you agree to our Terms of Service and Privacy Policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
