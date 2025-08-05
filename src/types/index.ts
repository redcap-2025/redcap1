export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: 'two-wheeler' | 'three-wheeler' | 'mini-truck' | 'large-truck';
  capacity: string;
  image: string;
  basePrice: number;
  description: string;
  suitableFor: string[];
  specifications: {
    maxWeight: string;
    dimensions?: string;
    fuelType: string;
  };
}

export interface PopularRoute {
  id: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  price: number;
}

export interface BookingData {
  id?: string;
  userId: string;
  pickupLocation: string;
  dropLocation: string;
  vehicleId: string;
  goodsType: string;
  weight: string;
  scheduledDate: string;
  timeSlot: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'in-progress' | 'delivered' | 'cancelled';
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id' | 'createdAt'> & { password: string }) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

export interface BookingContextType {
  bookingData: Partial<BookingData>;
  updateBookingData: (data: Partial<BookingData>) => void;
  clearBookingData: () => void;
  submitBooking: () => Promise<boolean>;
}