
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LoginInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const LoginInput: React.FC<LoginInputProps> = ({ type: initialType, placeholder, value, onChange, error }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = initialType === 'password';
  const type = isPassword ? (showPassword ? 'text' : 'password') : initialType;

  return (
    <div className="relative mb-3">
      <div className={`relative border rounded-md ${error ? 'border-red-500' : isFocused ? 'border-facebook-blue' : 'border-gray-200'} bg-white`}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 text-base outline-none rounded-md"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isPassword && value && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} color="#8f8f8f" /> : <Eye size={20} color="#8f8f8f" />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default LoginInput;
