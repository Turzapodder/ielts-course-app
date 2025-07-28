import React from 'react';

// Types for dropdown functionality
export interface DropdownItem {
  icon?: React.ReactNode;
  text: string;
  link: string;
}

export interface NavDropdownData {
  [key: string]: DropdownItem[];
}

export interface DropdownProps {
  items: DropdownItem[];
  trigger: React.ReactNode;
  className?: string;
}