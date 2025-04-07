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
      newErrors.email = 'Email veya telefon numarası gerekli';
    } else if (!isValidEmail(email) && !isValidPhone(email)) {
      newErrors.email = 'Lütfen geçerli bir e-posta veya telefon numarası girin';
    }

    if (!password) {
      newErrors.password = 'Şifre gerekli';
    } else if (password.length < 6) {
      newErrors.password = 'Şifre en az 6 karakter olmalıdır';
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
        placeholder={isMobile ? "Cep telefonu numarası veya e-posta" : "Email or phone number"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <LoginInput
        type="password"
        placeholder={isMobile ? "Şifre" : "Password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />
      <button
        type="submit"
        className="w-full bg-facebook-blue hover:bg-facebook-hover text-white py-3 px-4 rounded-2xl font-medium text-center transition duration-200 mb-3"
      >
        {isMobile ? "Giriş yap" : "Log In"}
      </button>
      <div className="text-center mb-4">
        <a href="#" className="text-facebook-link text-sm hover:underline">
          {isMobile ? "Şifreni mi unuttun?" : "Forgotten password?"}
        </a>
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
      <div className="flex justify-center p-4">
        <span className="text-sm text-gray-600">Türkçe</span>
      </div>
      <div className="flex-1 w-full flex flex-col px-4 py-6">
        <div className="flex justify-center mb-12">
          <FacebookLogo size="small" />
        </div>
        
        <div className="w-full max-w-md mx-auto flex flex-col flex-grow">
          <div className="w-full mb-auto">
            {renderLoginForm()}
          </div>
          
          <div className="mt-auto w-full flex flex-col items-center space-y-6 pb-8">
            <button 
              type="button"
              className="border border-facebook-blue text-facebook-blue py-2.5 px-4 rounded-2xl font-medium text-center w-full max-w-md"
            >
              Yeni hesap oluştur
            </button>
            
            <div className="flex justify-center">
              <MetaLogo />
            </div>
            
            <div className="flex justify-center text-xs text-gray-600 space-x-2">
              <a href="#" className="hover:underline">Hakkımızda</a>
              <span>·</span>
              <a href="#" className="hover:underline">Yardım</a>
              <span>·</span>
              <a href="#" className="hover:underline">Daha Fazla</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? renderMobileLayout() : renderDesktopLayout();
};

export default Index;
