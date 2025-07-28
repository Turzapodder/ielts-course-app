"use client"
import Link from 'next/link';
import Image from 'next/image';
import getConfig from 'next/config';
import { useState } from 'react';
import Dropdown from '../ui/Dropdown';
import { navigationDropdownData, navigationItems } from '@/utils/dropdownData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { publicRuntimeConfig } = getConfig();
  const basePath = publicRuntimeConfig.basePath || '';
  const [searchQuery, setSearchQuery] = useState('');
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className=" sticky top-0 z-50 border-b bg-white md:h-[65px]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 md:px-7">
        <div className="flex gap-2"><button className="lg:hidden ml-2" type="button" name="menu-toggle"><svg stroke="#000000" fill="#000000" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 17.9995V19.9995H3V17.9995H21ZM17.4038 3.90332L22 8.49951L17.4038 13.0957L15.9896 11.6815L19.1716 8.49951L15.9896 5.31753L17.4038 3.90332ZM12 10.9995V12.9995H3V10.9995H12ZM12 3.99951V5.99951H3V3.99951H12Z"></path></svg><span className="sr-only">menu</span></button>
        <div className="md:hidden"><Link href="/" className="flex items-center">
            <Image
              src={`${basePath}/10mslogo-svg.svg`}
              alt="10 Minute School"
              width={100}
              height={30}
            />
          </Link></div>
        </div>
        {/* Logo */}
        <div className="hidden md:block flex-shrink-0 h-[27px] w-[100px]">
          <Link href="/" className="flex items-center">
            <Image
              src={`${basePath}/10mslogo-svg.svg`}
              alt="10 Minute School"
              width={100}
              height={30}
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 w-full pr-4 md:block">
          <div className="w-full">
            <div className="relative flex w-full flex-col items-center bg-white  z-50">
              <div className="  shadow-0 rounded-b-[23px] flex w-full items-center gap-2 rounded-t-[23px] border-0 px-[12px] py-2 md:border">
                <Image
                  src={`${basePath}/search-icon.svg`}
                  alt="Search"
                  width={27}
                  height={24}
                  className="text-gray-400"
                />
                <input
                  type="search"
                  placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                  className="w-full flex-1 placeholder:text-sm placeholder:font-normal placeholder:leading-5 placeholder:text-[#7C818A] focus:outline-none"
                  name="Search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery} />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden mr-4 xl:block">
          <div className='flex items-center gap-2 lg:gap-4'>
          {navigationItems.map((navItem) => {
            if (navItem.hasDropdown) {
              return (  
                <Dropdown
                  key={navItem.key}
                  items={navigationDropdownData[navItem.key] || []}
                  trigger={
                    <div className=" text-[#4B5563] hover:text-green-600 text-sm font-medium flex items-center cursor-pointer">
                      {navItem.label}
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  }
                />
              );
            } else {
              return (
                <Link
                  key={navItem.key}
                  href={navItem.href || '#'}
                  className=" text-[#4B5563] hover:text-green-600 text-sm font-medium flex items-center"
                >
                  {navItem.label}
                </Link>
              );
            }
          })}
          </div>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className='flex items-center gap-3 rounded-md max-h-96 md:gap-6'>
            <div className="hidden md:flex items-center">
              <button
                onClick={toggleLanguage}
                className=" cursor-pointer items-center gap-1 rounded border px-2 py-[2px] hover:bg-slate-50 md:flex  text-[#4B5563] border-[#dbe1eb]"
              >
                <Image
                  src={`${basePath}/lang-bn.svg`}
                  alt="Language Toggle"
                  width={15}
                  height={14}
                />
                <span className='text-black'>{language === 'en' ? 'EN' : 'বাং'}</span>
              </button>
            </div>

            {/* Helpline */}
            <a className="items-center gap-1 text-green-600 hover:text-green-700 md:flex" href="tel:16910" >
              <Image
                src={`${basePath}/helpline-icon.svg`}
                alt="Language Toggle"
                width={15}
                height={14}
              />
              <span className=' text-green-600 hidden sm:inline-block'>16910</span>
            </a>
          </div>

          {/* Login Button */}
          <a className="flex items-center px-3 py-1 text-white rounded-md bg-green-600 md:px-6" href="/auth/login/?returnUrl=%2Fproduct%2Fielts-course%2F"><span id="login-button" className="leading-[18 px] whitespace-nowrap text-[12px] font-semibold leading-[24px] md:text-[16px] md:font-medium">লগ-ইন</span></a>
        </div>
      </div>
    </header>
  );
}