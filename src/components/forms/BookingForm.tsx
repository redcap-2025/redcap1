import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Package, Calendar, Clock, ArrowRight } from 'lucide-react';
import { cities, goodsTypes, weightCategories } from '../../data/mockData';
import { useBooking } from '../../context/BookingContext';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

interface BookingFormData {
  pickupLocation: string;
  dropLocation: string;
  goodsType: string;
  weight: string;
  scheduledDate: string;
  timeSlot: string;
}

const BookingForm: React.FC = () => {
  const [estimatedFare, setEstimatedFare] = useState(0);
  const { updateBookingData } = useBooking();
  const navigate = useNavigate();
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<BookingFormData>();

  const watchedValues = watch();

  React.useEffect(() => {
    if (watchedValues.pickupLocation && watchedValues.dropLocation && watchedValues.weight) {
      // Simple fare calculation
      const baseRate = 10;
      const weightMultiplier = {
        '1-10kg': 1,
        '10-50kg': 1.5,
        '50-100kg': 2,
        '100-500kg': 3,
        '500kg-1ton': 4,
        '1ton+': 5
      };
      
      const multiplier = weightMultiplier[watchedValues.weight as keyof typeof weightMultiplier] || 1;
      const distance = Math.floor(Math.random() * 50) + 10; // Mock distance
      const fare = Math.floor(baseRate * distance * multiplier);
      
      setEstimatedFare(fare);
    }
  }, [watchedValues.pickupLocation, watchedValues.dropLocation, watchedValues.weight]);

  const onSubmit = (data: BookingFormData) => {
    updateBookingData({
      ...data,
      totalPrice: estimatedFare
    });
    navigate('/booking/vehicles');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Transportation</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Pickup Location */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <MapPin className="h-4 w-4 mr-2 text-green-600" />
            Pickup Location
          </label>
          <select
            {...register('pickupLocation', { required: 'Pickup location is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">Select pickup location</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.pickupLocation && (
            <p className="mt-1 text-sm text-red-600">{errors.pickupLocation.message}</p>
          )}
        </div>

        {/* Drop Location */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <MapPin className="h-4 w-4 mr-2 text-red-600" />
            Drop Location
          </label>
          <select
            {...register('dropLocation', { required: 'Drop location is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">Select drop location</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.dropLocation && (
            <p className="mt-1 text-sm text-red-600">{errors.dropLocation.message}</p>
          )}
        </div>

        {/* Goods Type and Weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Package className="h-4 w-4 mr-2 text-blue-600" />
              Goods Type
            </label>
            <select
              {...register('goodsType', { required: 'Goods type is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Select goods type</option>
              {goodsTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.goodsType && (
              <p className="mt-1 text-sm text-red-600">{errors.goodsType.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Weight (approx)
            </label>
            <select
              {...register('weight', { required: 'Weight is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Select weight</option>
              {weightCategories.map((weight) => (
                <option key={weight} value={weight}>{weight}</option>
              ))}
            </select>
            {errors.weight && (
              <p className="mt-1 text-sm text-red-600">{errors.weight.message}</p>
            )}
          </div>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Calendar className="h-4 w-4 mr-2 text-purple-600" />
              Pickup Date
            </label>
            <input
              type="date"
              {...register('scheduledDate', { required: 'Pickup date is required' })}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            {errors.scheduledDate && (
              <p className="mt-1 text-sm text-red-600">{errors.scheduledDate.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Clock className="h-4 w-4 mr-2 text-orange-600" />
              Time Slot
            </label>
            <select
              {...register('timeSlot', { required: 'Time slot is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Select time slot</option>
              <option value="morning">Morning (8AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 4PM)</option>
              <option value="evening">Evening (4PM - 8PM)</option>
            </select>
            {errors.timeSlot && (
              <p className="mt-1 text-sm text-red-600">{errors.timeSlot.message}</p>
            )}
          </div>
        </div>

        {/* Estimated Fare */}
        {estimatedFare > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">Estimated Fare</span>
              <span className="text-2xl font-bold text-red-600">₹{estimatedFare}</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Final fare may vary based on actual distance and time
            </p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full flex items-center justify-center space-x-2"
        >
          <span>Choose Vehicle</span>
          <ArrowRight className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;