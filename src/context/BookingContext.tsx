import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BookingData, BookingContextType } from '../types';
import { useAuth } from './AuthContext';

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({});
  const { user } = useAuth();

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  const clearBookingData = () => {
    setBookingData({});
  };

  const submitBooking = async (): Promise<boolean> => {
    if (!user || !bookingData.pickupLocation || !bookingData.dropLocation || !bookingData.vehicleId) {
      return false;
    }

    const booking: BookingData = {
      id: Date.now().toString(),
      userId: user.id,
      pickupLocation: bookingData.pickupLocation!,
      dropLocation: bookingData.dropLocation!,
      vehicleId: bookingData.vehicleId!,
      goodsType: bookingData.goodsType || 'General',
      weight: bookingData.weight || '1-10kg',
      scheduledDate: bookingData.scheduledDate || new Date().toISOString().split('T')[0],
      timeSlot: bookingData.timeSlot || 'morning',
      totalPrice: bookingData.totalPrice || 0,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    const bookings = JSON.parse(localStorage.getItem('redcap_bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('redcap_bookings', JSON.stringify(bookings));

    clearBookingData();
    return true;
  };

  const value: BookingContextType = {
    bookingData,
    updateBookingData,
    clearBookingData,
    submitBooking,
  };

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
};