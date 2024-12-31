import Image from 'next/image';
import React from 'react';
import search_icon from "../../public/images/icon/search.svg";
import { Type, TypeInput } from '@/utils/type';

export const wh = 25

interface InputProps {
  type?: Type;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  classNameInput?: string; // To allow custom Tailwind classes
}

export const SearchInput:React.FC<InputProps> = ({
  type = 'text',
  placeholder = 'Search...',
  value,
  onChange,
  classNameInput = '',
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`pl-1 pr-4 py-2 border rounded-lg w-full text-gray-700 focus:outline-none focus:ring-0 ${classNameInput}`}
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <Image
          src={search_icon}
          alt="Search icon"
          width={20} // Set the size of the icon
          height={20} // Set the size of the icon
          priority={true}
        />
      </div>
    </div>
  );
};