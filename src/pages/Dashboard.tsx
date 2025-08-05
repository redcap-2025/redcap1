import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Package, MapPin, Calendar, Clock, User, Edit, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { BookingData } from '../types';
import { vehicles } from '../data/mockData';
import Button from '../components/ui/Button';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<BookingData[]>([]);

  useEffect(() => {
    if (user) {
      const allBookings = JSON.parse(localStorage.getItem('redcap_bookings') || '[]');
      const userBookings = allBookings.filter((booking: BookingData) => booking.userId === user.id);
      setBookings(userBookings);
    }
  }, [user]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getVehicleName = (vehicleId: string) => {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    return vehicle ? vehicle.name : 'Unknown Vehicle';
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in</h2>
          <Link to="/login">
            <Button>Go to Login</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
          <p className="text-gray-600 mt-2">Manage your bookings and profile information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-red-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">{user.phone}</p>
                
                <Button variant="outline" className="mt-4 w-full">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{bookings.length}</div>
                  <div className="text-sm text-gray-600">Total Bookings</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bookings Section */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Your Bookings</h2>
              <Link to="/booking">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Booking
                </Button>
              </Link>
            </div>

            {bookings.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No bookings yet</h3>
                <p className="text-gray-600 mb-6">Start by creating your first booking</p>
                <Link to="/booking">
                  <Button>
                    Create Your First Booking
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Package className="h-5 w-5 text-red-600" />
                        <span className="font-semibold text-gray-900">Booking #{booking.id}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-green-600 mt-1" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Route</p>
                          <p className="text-sm text-gray-600">{booking.pickupLocation} → {booking.dropLocation}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Package className="h-4 w-4 text-blue-600 mt-1" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Vehicle</p>
                          <p className="text-sm text-gray-600">{getVehicleName(booking.vehicleId)}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Calendar className="h-4 w-4 text-purple-600 mt-1" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Date</p>
                          <p className="text-sm text-gray-600">{booking.scheduledDate}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <div className="text-lg font-bold text-red-600 mt-1">₹</div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Total</p>
                          <p className="text-sm text-gray-600">₹{booking.totalPrice}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm text-gray-500">
                        Booked on {new Date(booking.createdAt).toLocaleDateString()}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {booking.status === 'confirmed' && (
                          <Button variant="outline" size="sm">
                            Track
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;