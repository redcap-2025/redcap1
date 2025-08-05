import { Vehicle, PopularRoute } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: '1',
    name: '3-Wheeler',
    type: 'three-wheeler',
    capacity: 'Up to 200kg',
    image: 'https://images.pexels.com/photos/2734499/pexels-photo-2734499.jpeg?auto=compress&cs=tinysrgb&w=800',
    basePrice: 500, // Increased price
    description: 'Perfect for small loads and quick deliveries within the city.',
    suitableFor: ['Small packages', 'Documents', 'Light groceries'],
    specifications: {
      maxWeight: '200kg',
      dimensions: '4ft x 3ft x 3ft',
      fuelType: 'Petrol/CNG'
    }
  },
  {
    id: '2',
    name: '4-Wheeler',
    type: 'four-wheeler',
    capacity: 'Up to 750kg',
    image: 'https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&w=800',
    basePrice: 1000, // Increased price
    description: 'Ideal for household shifting and furniture transportation.',
    suitableFor: ['Furniture', 'Appliances', 'Medium cargo'],
    specifications: {
      maxWeight: '750kg',
      dimensions: '7ft x 4.5ft x 4ft',
      fuelType: 'Diesel'
    }
  },
  {
    id: '3',
    name: '6-Wheeler',
    type: 'six-wheeler',
    capacity: 'Up to 2500kg',
    image: 'https://images.pexels.com/photos/2449454/pexels-photo-2449454.jpeg?auto=compress&cs=tinysrgb&w=800',
    basePrice: 2500, // Increased price
    description: 'Best for large loads and medium distance haulage.',
    suitableFor: ['Heavy machinery', 'Bulk items', 'Construction materials'],
    specifications: {
      maxWeight: '2500kg',
      dimensions: '12ft x 6ft x 5ft',
      fuelType: 'Diesel'
    }
  },
  {
    id: '4',
    name: 'Heavy Load Vehicle',
    type: 'heavy-load',
    capacity: 'Up to 5000kg',
    image: 'https://images.pexels.com/photos/221376/pexels-photo-221376.jpeg?auto=compress&cs=tinysrgb&w=800',
    basePrice: 5000, // Increased price for heavy loads
    description: 'For industrial-scale transportation and long-distance cargo.',
    suitableFor: ['Heavy machinery', 'Industrial goods', 'Large-scale events'],
    specifications: {
      maxWeight: '5000kg',
      dimensions: '16ft x 8ft x 7ft',
      fuelType: 'Diesel'
    }
  }
];

export const popularRoutes: PopularRoute[] = [
  {
    id: '1',
    from: 'Bangalore',
    to: 'Mysore',
    distance: '143 km',
    duration: '3 hrs',
    price: 4200
  },
  {
    id: '2',
    from: 'Bangalore',
    to: 'Chennai',
    distance: '350 km',
    duration: '5 hrs',
    price: 8500
  },
  {
    id: '3',
    from: 'Bangalore',
    to: 'Hyderabad',
    distance: '580 km',
    duration: '9 hrs',
    price: 12000
  },
  {
    id: '4',
    from: 'Bangalore',
    to: 'Coimbatore',
    distance: '470 km',
    duration: '7 hrs',
    price: 9800
  },
  {
    id: '5',
    from: 'Bangalore',
    to: 'Mangalore',
    distance: '355 km',
    duration: '6 hrs',
    price: 7800
  },
  {
    id: '6',
    from: 'Within Bangalore',
    to: 'Local',
    distance: '25 km',
    duration: 'Same day',
    price: 300
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    company: 'Tech Solutions Pvt Ltd',
    rating: 5,
    comment: 'RedCap has transformed our logistics operations. Their reliable service and transparent pricing make them our go-to partner for all deliveries.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    company: 'Fashion Boutique',
    rating: 5,
    comment: 'Excellent service! The real-time tracking and professional drivers make RedCap stand out. Highly recommended for business deliveries.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '3',
    name: 'Amit Patel',
    company: 'Home Relocation',
    rating: 5,
    comment: 'Moved my entire household with RedCap. The team was careful with fragile items and delivered everything on time. Great experience!',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export const services = [
  {
    id: '1',
    title: 'On-Demand Transportation',
    description: 'Quick and reliable transportation solutions for all your cargo needs',
    icon: '🚛'
  },
  {
    id: '2',
    title: 'Intercity Courier',
    description: 'Fast intercity delivery services across major Indian cities',
    icon: '📦'
  },
  {
    id: '3',
    title: 'Supply Chain Management',
    description: 'End-to-end supply chain solutions for businesses',
    icon: '⚙️'
  },
  {
    id: '4',
    title: 'Real-time Tracking',
    description: 'Track your shipments in real-time with our advanced tracking system',
    icon: '📍'
  },
  {
    id: '5',
    title: 'B2B Solutions',
    description: 'Specialized logistics solutions for business-to-business operations',
    icon: '🏢'
  },
  {
    id: '6',
    title: '24/7 Support',
    description: 'Round-the-clock customer support for all your queries',
    icon: '☎️'
  }
];

export const cities = [
  'Bangalore', 'Chennai', 'Hyderabad', 'Mumbai', 'Delhi', 'Pune', 
  'Mysore', 'Coimbatore', 'Mangalore', 'Kochi', 'Thiruvananthapuram',
  'Madurai', 'Salem', 'Trichy', 'Vellore', 'Hosur'
];

export const goodsTypes = [
  'Electronics', 'Furniture', 'Appliances', 'Documents', 'Clothing',
  'Food Items', 'Industrial Goods', 'Construction Materials', 'Medical Supplies', 'Other'
];

export const weightCategories = [
  '1-10kg', '10-50kg', '50-100kg', '100-500kg', '500kg-1ton', '1ton+'
];
