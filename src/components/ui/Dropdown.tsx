'use client';

import Link from 'next/link';
import { useState } from 'react';
import { DropdownItem, DropdownProps } from '@/types/dropdown';

export default function Dropdown({ items, trigger, className = '' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Element */}
      <div className="cursor-pointer">
        {trigger}
      </div>

      {/* Dropdown Menu */}
      <div 
        className={`
          absolute top-full left-0 mt-2 p-4 min-w-[180px] w-fit bg-white rounded-lg shadow-lg  z-50
          transition-all duration-200 ease-in-out transform origin-top
          ${isOpen 
            ? 'opacity-100 scale-100 translate-y-0 visible' 
            : 'opacity-0 scale-95 -translate-y-2 invisible'
          }
        `}
      >
        <div className="py-2">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex items-center py-3 pl-1 pr-4 rounded cursor-pointer hover:bg-gray-100 transition-colors duration-150"
            >
              {item.icon && (<div className="flex-shrink-0 w-6 h-6 mr-4 flex items-center justify-center">
                {item.icon}
              </div>)}
              <span className="text-[#111827] text-base whitespace-nowrap font-medium md:text-[#4B5563] md:text-sm">
                {item.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}