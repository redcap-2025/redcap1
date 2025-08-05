import React from 'react';
import BookingForm from '../components/forms/BookingForm';

// This component represents the first page of the booking flow, where the user
// enters their booking details. It's a self-contained page.
const Booking: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Your Transportation</h1>
          <p className="text-lg text-gray-600">
            Fill in the details below to get started with your booking
          </p>
        </div>
        <BookingForm />
      </div>
    </div>
  );
};

export default Booking;
