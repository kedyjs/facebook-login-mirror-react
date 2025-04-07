
import React, { useState } from 'react';
import FacebookLogo from '@/components/FacebookLogo';
import MetaLogo from '@/components/MetaLogo';
import LoginInput from '@/components/LoginInput';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const isMobile = useIsMobile();

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = 'Email or phone number is required';
    } else if (!isValidEmail(email) && !isValidPhone(email)) {
      newErrors.email = 'Please enter a valid email or phone number';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidPhone = (phone: string) => {
    return /^[0-9]{10,}$/.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', { email, password });
      // In a real app, you would handle authentication here
    }
  };

  const renderLoginForm = () => (
    <form onSubmit={handleSubmit} className="w-full">
      <LoginInput
        type="text"
        placeholder="Mobile number or email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <LoginInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />
      <button
        type="submit"
        className="w-full bg-facebook-blue hover:bg-facebook-hover text-white py-3 px-4 rounded-md font-medium text-center transition duration-200 mb-3"
      >
        {isMobile ? "Log in" : "Log In"}
      </button>
      <div className="text-center mb-4">
        <a href="#" className="text-facebook-link text-sm hover:underline">
          {isMobile ? "Forgot password?" : "Forgotten password?"}
        </a>
      </div>
      <div className={`${isMobile ? 'mt-10' : 'border-t border-gray-200 pt-4 mt-2'}`}>
        <div className="flex justify-center">
          <button 
            type="button"
            className={`
              ${isMobile 
                ? "border border-facebook-blue text-facebook-blue py-2.5 px-4 rounded-md font-medium text-center w-full" 
                : "bg-facebook-green hover:bg-facebook-green-hover text-white py-3 px-4 rounded-md font-bold text-lg transition duration-200"
              } mb-3
            `}
          >
            Create {isMobile ? "new account" : "new account"}
          </button>
        </div>
      </div>
    </form>
  );

  const renderDesktopLayout = () => (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="flex flex-col lg:flex-row max-w-5xl w-full items-center">
        <div className="flex-1 pr-8 mb-10 lg:mb-0">
          <div className="-ml-8">
            <FacebookLogo size="large" />
          </div>
          <h2 className="text-2xl lg:text-3xl leading-normal max-w-md">
            Connect with friends and the world around you on Facebook.
          </h2>
        </div>
        <div className="lg:w-[396px]">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full">
            {renderLoginForm()}
          </div>
          <div className="text-center text-sm mt-6">
            <span>
              <a href="#" className="font-bold hover:underline">Create a Page</a>
            </span>{" "}
            for a celebrity, brand or business.
          </div>
        </div>
      </div>
    </div>
  );

  const renderMobileLayout = () => (
    <div className="min-h-screen flex flex-col bg-[#f0f2f5]">
      <div className="flex-1 w-full flex flex-col items-center justify-between py-4">
        <div className="w-full max-w-md flex flex-col items-center justify-center px-4">
          <div className="flex justify-center mt-10 mb-12">
            <FacebookLogo size="small" />
          </div>
          <div className="w-full mb-10">
            {renderLoginForm()}
          </div>
          <div className="w-full max-w-md px-4">
            <div className="flex justify-center mb-16">
              <MetaLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? renderMobileLayout() : renderDesktopLayout();
};

export default Index;
