"use client";

// Corrected Import: Import all necessary components as named exports
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from "@radix-ui/react-accordion";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

import { UniversalAccordionProps } from '@/utils/types';

const UniversalAccordion = ({
  type,
  items,
  className,
  collapsible = false,
  maxItems = 6,
}: UniversalAccordionProps) => {
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? items : items.slice(0, maxItems);
  const shouldShowMoreButton = items.length > maxItems;
  return (
    <Root
      type={type}
      className={`border border-solid border-gray-300 rounded-md ${
        className || ""
      }`}
      collapsible={type === "single" ? collapsible : undefined}
    >
      {displayedItems.map((item) => (
        <Item
          key={item.value}
          value={item.value}
          className={`border-b border-dashed border-gray-200 last:border-b-0 ${
            item.className || ""
          }`}
        >
          <Header className="flex">
            <Trigger className="flex flex-1 items-center justify-between p-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors data-[state=open]:bg-gray-100">
              {typeof item.trigger === 'string' ? (
                <span dangerouslySetInnerHTML={{ __html: item.trigger }} />
              ) : (
                <span>{item.trigger}</span>
              )}
              <ChevronDown
                className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </Trigger>
          </Header>
          <Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="p-4">
              {typeof item.content === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              ) : (
                item.content
              )}
            </div>
          </Content>
        </Item>
      ))}

      {shouldShowMoreButton && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="absolute bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700"
        >
          {showAll ? (
            <>
              Show Less <ChevronUp />
            </>
          ) : (
            <>
              Show More <ChevronDown />
            </>
          )}
        </button>
      )}
    </Root>
  );
};

export default UniversalAccordion;
