
import React from 'react';

interface FacebookLogoProps {
  size?: 'small' | 'large';
}

const FacebookLogo: React.FC<FacebookLogoProps> = ({ size = 'large' }) => {
  if (size === 'small') {
    return (
      <div className="w-12 h-12">
        <img 
          src="https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yD/r/5D8s-GsHJlJ.png"
          alt="Facebook Logo"
          className="w-full h-full"
        />
      </div>
    );
  }
  
  return (
    <div className="w-72">
      <img 
        src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
        alt="Facebook Logo"
        className="w-full"
      />
    </div>
  );
};

export default FacebookLogo;
