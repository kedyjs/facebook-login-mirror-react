
import React from 'react';

const MetaLogo: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-1 text-gray-600">
      <svg width="12" height="20" viewBox="0 0 36 36" fill="currentColor">
        <path d="M28.5 18c0 5.799-4.701 10.5-10.5 10.5S7.5 23.799 7.5 18 12.201 7.5 18 7.5 28.5 12.201 28.5 18z"></path>
        <path d="M12.507 15.53c1.638-.958 2.525-2.158 3.256-4.054l.884-2.43h2.468l1.19 2.434c.8 1.205 1.164 1.684 1.848 2.600.684.915 1.291 1.61 2.307 2.46.514.43 1.73 1.206 2.227 1.468.498.262 1.005.43 1.005.43v2.204s-.507.169-1.005.432c-.497.262-1.713 1.035-2.227 1.466-1.016.849-1.623 1.546-2.307 2.46-.684.917-1.048 1.397-1.848 2.602l-1.19 2.432H17.37l-.884-2.43c-.731-1.897-1.618-3.097-3.256-4.055-1.639-.957-2.918-1.437-5.198-1.631v-2.205c2.28-.193 3.56-.673 5.198-1.63z"></path>
      </svg>
      <span className="text-sm font-semibold tracking-wide">Meta</span>
    </div>
  );
};

export default MetaLogo;
