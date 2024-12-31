import Image from "next/image";
import menu_icon from "../../public/images/icon/menu_icon.svg";
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const wh = 25

export const MenuButton: React.FC<ButtonProps>  = ({onClick}) => {
  return (
    <button className="bg-slate-50 h-10 rounded"
    onClick={onClick}>
      <Image 
        src={menu_icon} 
        alt="button-icon" 
        // width={wh} 
        // height={wh} 
        priority={true} 
        className="object-contain"
      />
    </button>
  );
}

export const Button: React.FC<ButtonProps> = ({ 
  onClick,
  children,
  className = '',
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};
