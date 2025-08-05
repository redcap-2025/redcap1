import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, MapPin, Package, Calendar, Clock, CreditCard, Truck } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useAuth } from '../context/AuthContext';
import { vehicles } from '../data/mockData';
import Button from '../components/ui/Button';
import Loading from '../components/common/Loading';

// This component is the separate page for confirming the booking.
// It displays a summary and a button to finalize the reservation.
const BookingConfirmation: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { bookingData, submitBooking, clearBookingData } = useBooking();
  const { user } = useAuth();
  const navigate = useNavigate();

  const selectedVehicle = vehicles.find(v => v.id === bookingData?.vehicleId);

  const handleConfirmBooking = async () => {
    if (!user) {
      console.log('User not logged in, redirecting to login.');
      navigate('/login');
      return;
    }
    console.log('User is logged in, attempting to submit booking.');
    setIsSubmitting(true);
    try {
      const success = await submitBooking();
      console.log(`Booking submission status: ${success}`);
      if (success) {
        setIsConfirmed(true);
        // Clear the booking data from context after successful submission
        clearBookingData();
        setTimeout(() => {
          navigate('/dashboard');
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-4 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-4">You will be redirected to your dashboard shortly.</p>
          <Loading />
        </div>
      </div>
    );
  }

  if (!bookingData || !selectedVehicle) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">No Booking Data Found</h1>
          <p className="text-gray-600">Please start a new booking.</p>
          <Button onClick={() => navigate('/booking')} className="mt-4">
            Start New Booking
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-red-600 p-6">
            <div className="flex items-center space-x-4 text-white">
              <CheckCircle className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">Confirm Your Booking</h1>
                <p className="text-sm font-light">Please review the details before confirming.</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="border-b pb-4 mb-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <Truck className="h-5 w-5 text-gray-500" />
                <span className="font-medium text-lg">Vehicle Details</span>
              </div>
              <div className="mt-2 text-sm text-gray-600 space-y-1">
                <p><strong>Vehicle:</strong> {selectedVehicle.name}</p>
                <p><strong>Capacity:</strong> {selectedVehicle.capacity}</p>
                <p><strong>Price:</strong> ₹{selectedVehicle.pricePerKm} / km</p>
              </div>
            </div>
            
            <div className="border-b pb-4 mb-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span className="font-medium text-lg">Route Details</span>
              </div>
              <div className="mt-2 text-sm text-gray-600 space-y-1">
                <p><strong>Pickup Location:</strong> {bookingData.pickupLocation}</p>
                <p><strong>Drop-off Location:</strong> {bookingData.dropoffLocation}</p>
                <p><strong>Distance:</strong> {bookingData.distance} km</p>
              </div>
            </div>

            <div className="border-b pb-4 mb-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span className="font-medium text-lg">Date & Time</span>
              </div>
              <div className="mt-2 text-sm text-gray-600 space-y-1">
                <p><strong>Date:</strong> {bookingData.date}</p>
                <p><strong>Time:</strong> {bookingData.time}</p>
              </div>
            </div>

            <div className="border-b pb-4 mb-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <Package className="h-5 w-5 text-gray-500" />
                <span className="font-medium text-lg">Goods Details</span>
              </div>
              <div className="mt-2 text-sm text-gray-600 space-y-1">
                <p><strong>Goods Type:</strong> {bookingData.goodsType}</p>
                <p><strong>Weight:</strong> {bookingData.weight} kg</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex justify-between items-center text-red-800">
                    <span className="font-medium">Total Price (incl. GST)</span>
                    <span className="text-xl font-bold text-red-600">
                      ₹{Math.round((bookingData.totalPrice || 0) * 1.18)}
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
    
  );
};

export default BookingConfirmation;
