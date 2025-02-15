// src/components/ui/select.tsx
import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ children, className, ...props }) => {
  return (
    <select
      className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};
