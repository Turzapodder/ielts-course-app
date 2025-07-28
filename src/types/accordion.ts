import React from 'react';

// Interface for each item's content
export interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

// Interface for the overall Accordion component
export interface UniversalAccordionProps {
  type: "single" | "multiple";
  items: AccordionItemProps[];
  className?: string;
  collapsible?: boolean;
  maxItems?: number;
}