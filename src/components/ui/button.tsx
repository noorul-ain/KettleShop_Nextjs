import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'medium',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'rounded-full focus:outline-none focus:ring';
  
  const variantClasses =
    variant === 'outline'
      ? 'border border-gray-300 bg-white text-black-700 hover:bg-gray-100 rounded-full'
      : 'bg-[#b08968] text-white hover:bg-[#96735a] rounded-full';

  const sizeClasses =
    size === 'small'
      ? 'px-2 py-1 text-sm'
      : size === 'large'
      ? 'px-6 py-3 text-lg'
      : 'px-4 py-2 text-base'; 

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
