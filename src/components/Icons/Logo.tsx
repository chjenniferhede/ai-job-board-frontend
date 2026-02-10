import React from 'react';
import logoUrl from '../../assets/logo.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = 'h-8 w-auto',
  showText = true,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logoUrl} alt="JobNova logo" className={className} />
    </div>
  );
};

export default Logo;
