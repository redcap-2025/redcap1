import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';

interface LoginFormData {
  phone: string;
  otp: string;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/';
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const handleSendOtp = async (data: LoginFormData) => {
    setIsLoading(true);
    setLoginError('');
    // Mock API call to send OTP
    console.log(`Sending OTP to phone number: ${data.phone}`);
    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 2000));
      // In a real app, you would make a fetch call here
      // const response = await fetch('/api/send-otp', { ... });
      // const result = await response.json();
      
      // Simulate successful OTP sent
      setOtpSent(true);
      setLoginError('');
    } catch (error) {
      setLoginError('Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setLoginError('');
    
    // Mock API call to verify OTP and log in
    console.log(`Verifying OTP: ${data.otp} for phone: ${data.phone}`);
    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 2000));
      // In a real app, you would make a fetch call here
      // const response = await fetch('/api/verify-otp-login', { ... });
      // const result = await response.json();
      
      // Assume a successful verification for the mock
      const success = true; // In a real app, this would come from the API response
      
      if (success) {
        // Since we can't modify the AuthContext, we'll simulate a successful login
        // A real implementation would call a login function from context
        alert('Login successful!');
        navigate(from, { replace: true });
      } else {
        setLoginError('Invalid OTP.');
      }
    } catch (error) {
      setLoginError('An error occurred during verification.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-gray-600">Sign in to your RedCap account</p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {loginError}
              </div>
            )}

            {/* Phone Number Input */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 relative">
                <input
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: 'Invalid Indian phone number'
                    }
                  })}
                  type="tel"
                  className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter your phone number"
                  disabled={otpSent}
                />
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            {/* OTP Input and verification step */}
            {otpSent ? (
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  OTP
                </label>
                <div className="mt-1 relative">
                  <input
                    {...register('otp', {
                      required: 'OTP is required',
                      minLength: {
                        value: 6,
                        message: 'OTP must be 6 digits'
                      },
                      maxLength: {
                        value: 6,
                        message: 'OTP must be 6 digits'
                      }
                    })}
                    type="text"
                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter the 6-digit OTP"
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.otp && (
                  <p className="mt-2 text-sm text-red-600">{errors.otp.message}</p>
                )}
              </div>
            ) : null}

            {/* Action buttons */}
            <div>
              {otpSent ? (
                <Button
                  type="submit"
                  isLoading={isLoading}
                  className="w-full"
                  size="lg"
                >
                  Verify & Sign In
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleSubmit(handleSendOtp)}
                  isLoading={isLoading}
                  className="w-full"
                  size="lg"
                >
                  Send OTP
                </Button>
              )}
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link to="/register">
                <Button variant="outline" className="w-full">
                  Create new account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
