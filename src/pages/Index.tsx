
import React, { useState } from 'react';
import FacebookLogo from '@/components/FacebookLogo';
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
        placeholder="Email or phone number"
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
        className="w-full bg-facebook-blue hover:bg-facebook-hover text-white py-3 px-4 rounded-md font-bold text-xl transition duration-200 mb-3"
      >
        Log In
      </button>
      <div className="text-center mb-4">
        <a href="#" className="text-facebook-link text-sm hover:underline">
          Forgotten password?
        </a>
      </div>
      <div className="border-t border-gray-200 pt-4 mt-2">
        <div className="flex justify-center">
          <button 
            type="button"
            className="bg-facebook-green hover:bg-facebook-green-hover text-white py-3 px-4 rounded-md font-bold text-lg transition duration-200 mb-3"
          >
            Create new account
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
    <div className="min-h-screen flex flex-col items-center justify-between p-4 pb-8">
      <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center">
        <div className="w-full flex justify-center mb-8 mt-6">
          <FacebookLogo size="small" />
        </div>
        <div className="w-full">
          {renderLoginForm()}
        </div>
      </div>
      <div className="w-full max-w-md">
        <div className="mt-4 mb-3 flex justify-center">
          <select className="text-center text-facebook-link bg-transparent text-sm py-1 px-2 border-none outline-none">
            <option value="en_US">English (US)</option>
            <option value="es_LA">Español</option>
            <option value="fr_FR">Français (France)</option>
            <option value="pt_BR">Português (Brasil)</option>
            <option value="de_DE">Deutsch</option>
            <option value="it_IT">Italiano</option>
            <option value="ja_JP">日本語</option>
            <option value="zh_CN">简体中文</option>
            <option value="ar_AR">العربية</option>
            <option value="hi_IN">हिन्दी</option>
          </select>
        </div>
        <div className="text-xs text-center text-gray-500 mt-4">
          Meta © 2023
        </div>
      </div>
    </div>
  );

  return isMobile ? renderMobileLayout() : renderDesktopLayout();
};

export default Index;
