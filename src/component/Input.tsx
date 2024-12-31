import { Type } from '@/utils/type';
import React from 'react';

interface InputProps {
  type?: Type;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // To allow custom Tailwind classes
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = 'Search...',
  value,
  onChange,
  className = '',
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-4 py-2 border border-gray-300 focus:outline-none focus:ring-0 ${className}`}
    />
  );
};