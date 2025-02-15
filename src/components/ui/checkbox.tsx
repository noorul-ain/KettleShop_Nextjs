// src/components/ui/checkbox.tsx
import * as React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        className={`h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";
