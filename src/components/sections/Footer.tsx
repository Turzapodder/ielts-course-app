import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="container mb-24 md:mb-0">
        <div className="flex flex-col pt-12 md:flex-row md:border-[#E4E4E4]">
          <div className="flex flex-col items-center w-full mb-7 md:mb-0 md:items-start mx-lg:mb-7 mx-lg:mr-6">
            <Link className="mb-4" href="/">
              <div className="rounded-md opacity-100 transition-opacity duration-300 ease-in-out object-contain">
                <Image
                  alt="Instructor"
                  loading="lazy"
                  width="116"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  className="text-transparent"
                  src="https://10minuteschool.com/images/logo.svg"
                />
              </div>
            </Link>
            <h3 className="mb-[14px] text-base font-semibold md:font-medium">
              ডাউনলোড করুন আমাদের মোবাইল অ্যাপ
            </h3>
            <div className="flex">
              <div className="mr-4">
                <a href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool">
                  <div className="rounded-md opacity-100 transition-opacity duration-300 ease-in-out">
                    <Image
                      alt="google play"
                      loading="lazy"
                      width="156"
                      height="49"
                      decoding="async"
                      data-nimg="1"
                      className="text-transparent"
                      src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
                    />
                  </div>
                </a>
              </div>
              <div>
                <a href="https://apps.apple.com/us/app/10-minute-school/id1577061772">
                  <div className="rounded-md opacity-100 transition-opacity duration-300 ease-in-out">
                    <Image
                      alt="ios download"
                      loading="lazy"
                      width="156"
                      height="49"
                      decoding="async"
                      data-nimg="1"
                      className="text-transparent"
                      src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-0 flex w-full justify-center border-b border-[#E4E4E4] pb-8 md:mx-14 md:border-none mx-lg:mx-0 mx-lg:border-b mx-lg:border-[#E4E4E4]">
            <div className="flex justify-center w-full max-w-sm">
              <div className="w-1/2 mr-4">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">কোম্পানি</h3>
                <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                  <li><a href="https://app.10minuteschool.com/careers" className="mb-2 text-sm font-medium hover:text-green-500 md:text-base">ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি</a></li>
                  <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScWh9jjyWnUKdDKET1-LHvdTxuU6-ssd0GLTI-0JlQ2MH6RzA/viewform" className="mb-2 text-sm font-medium hover:text-green-500 md:text-base">শিক্ষক হিসাবে যোগ দিন</a></li>
                  <li><a href="https://affiliation.10minuteschool.com/" className="mb-2 text-sm font-medium hover:text-green-500 md:text-base">অ্যাফিলিয়েট হিসাবে যোগ দিন</a></li>
                  <li><a href="https://app.10minuteschool.com/privacy-policy" className="mb-2 text-sm font-medium hover:text-green-500 md:text-base">প্রাইভেসি পলিসি</a></li>
                  <li><a href="https://app.10minuteschool.com/refund-policy" className="mb-2 text-sm font-medium hover:text-green-500 md:text-base">রিফান্ড পলিসি</a></li>
                  <li><a href="https://app.10minuteschool.com/terms-and-conditions" className="mb-2 text-sm font-medium hover:text-green-500 md:text-base">ব্যবহারকারীর শর্তাবলি</a></li>
                </ul>
              </div>
              <div className="w-1/2">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">অন্যান্য</h3>
                <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                  <li><a href="https://blog.10minuteschool.com/" className="mb-2 text-sm font-medium hover:text-green-500 md:text-base">ব্লগ</a></li>
                  <li><a href="/store/all" className="mb-2 text-sm font-medium hover:text-green-500 md:text-base">বুক স্টোর</a></li>
                  <li><a href="https://10minuteschool.com/content" className="mb-2 text-sm font-medium hover:text-green-500 md:text-base">ফ্রি নোটস ও গাইড</a></li>
                  <li><a href="/jobs-prep" className="mb-2 text-sm font-medium hover:text-green-500 md:text-base">চাকরি প্রস্তুতি কোর্সসমূহ</a></li>
                  <li><a href="/certificate" className="mb-2 text-sm font-medium hover:text-green-500 md:text-base">সার্টিফিকেট ভেরিফাই করুন</a></li>
                  <li><a href="/resource" className="mb-2 text-sm font-medium hover:text-green-500 md:text-base">ফ্রি ডাউনলোড</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full ml-0 md:ml-4">
            <div className="hidden md:block">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">আমাদের যোগাযোগ মাধ্যম</h3>
              <p className="mb-4 text-base font-normal">কল করুন: <a className="text-green-500" href="tel:16910">16910</a> (24x7)</p>
              <p className="mb-4 text-base font-normal">হোয়াটসঅ্যাপ: <a className="text-green-500" href="https://api.whatsapp.com/send?phone=+8801896016252&text=I need your assistance">+8801896016252</a>(24x7)</p>
              <p className="mb-4 text-base font-normal">দেশের বাহির থেকে: <a className="text-green-500" href="tel:+8809610916910">+880 9610916910</a></p>
              <p className="mb-2 text-base font-normal">ইমেইল: <span className="text-green-500">support@10minuteschool.com</span></p>
            </div>
            <div className="mx-auto mb-3 mt-5 flex w-full max-w-[256px] gap-6 md:mx-0">
              <div><a href="https://www.facebook.com/10minuteschool/" target="_blank" rel="noreferrer"><Image alt="facebook" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="text-transparent" src="https://cdn.10minuteschool.com/images/facebook_1695730910971.png"/></a></div>
              <div><a href="https://www.instagram.com/10ms_insta/" target="_blank" rel="noreferrer"><Image  alt="instagram" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="text-transparent" src="https://cdn.10minuteschool.com/images/instagram_1695731442397.png"/></a></div>
              <div><a href="https://www.linkedin.com/company/10ms/" target="_blank" rel="noreferrer"><Image  alt="linkedin" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="text-transparent" src="https://cdn.10minuteschool.com/images/linkedin_1695731507042.png"/></a></div>
              <div><a href="https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw" target="_blank" rel="noreferrer"><Image  alt="youtube" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="text-transparent" src="https://cdn.10minuteschool.com/images/youtube_1695731538726.png"/></a></div>
              <div><a href="https://www.tiktok.com/@10minuteschool?lang=en" target="_blank" rel="noreferrer"><Image  alt="Tiktok" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="text-transparent" src="https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png"/></a></div>
            </div>
          </div>
        </div>
        <div className="pb-5 text-center">
          <p className="text-xs font-normal text-gray-600 md:text-sm"> স্বত্ব © ২০১৫ - ২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত </p>
        </div>
        <button id="chat-button" className="fixed right-0 rounded-full bottom-[130px] z-10 md:bottom-[60px] flex gap-2 items-center m-5 px-2 py-2 md:px-4 md:py-[14px] text-white bg-gradient-to-r from-green-500 to-green-700 z-49">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 10.015C0 4.74712 4.21 0 10.02 0C15.7 0 20 4.65699 20 9.98498C20 16.1642 14.96 20 10 20C8.36 20 6.54 19.5593 5.08 18.698C4.57 18.3876 4.14 18.1572 3.59 18.3375L1.57 18.9384C1.06 19.0986 0.6 18.698 0.75 18.1572L1.42 15.9139C1.53 15.6034 1.51 15.2729 1.35 15.0125C0.49 13.4301 0 11.6975 0 10.015ZM5.37004 11.3068C4.67004 11.3068 4.09004 10.7259 4.09004 10.0249C4.09004 9.31382 4.66004 8.74297 5.37004 8.74297C6.08004 8.74297 6.65004 9.31382 6.65004 10.0249C6.65004 10.7259 6.08004 11.2968 5.37004 11.3068ZM8.70005 10.0151C8.70005 10.7262 9.27005 11.297 9.98005 11.307C10.69 11.307 11.26 10.7262 11.26 10.0251C11.26 9.31405 10.69 8.74319 9.98005 8.74319C9.28005 8.73318 8.70005 9.31405 8.70005 10.0151ZM13.31 10.0258C13.31 10.7268 13.88 11.3077 14.59 11.3077C15.3 11.3077 15.87 10.7268 15.87 10.0258C15.87 9.3147 15.3 8.74385 14.59 8.74385C13.88 8.74385 13.31 9.3147 13.31 10.0258Z" fill="#F9FAFB"></path>
          </svg>
        </button>
        <a href="https://wa.me/8801896016252" target="_blank" rel="noreferrer" className="fixed right-0 rounded-full bottom-[86px] z-10 md:bottom-[0px] flex gap-2 items-center m-5 px-2 py-2 md:px-4 md:py-[14px] text-white bg-gradient-to-r from-green-500 to-green-700 z-49">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M19.9802 9.40946C19.6402 3.60946 14.3702 -0.860526 8.30016 0.139474C4.12016 0.829473 0.770171 4.21945 0.120171 8.39945C-0.259829 10.8195 0.240193 13.1095 1.33019 14.9995L0.440178 18.3095C0.240178 19.0595 0.930158 19.7395 1.67016 19.5295L4.93017 18.6295C6.41017 19.4995 8.14016 19.9995 9.99016 19.9995C15.6302 19.9995 20.3102 15.0295 19.9802 9.40946ZM14.8802 13.7195C14.7902 13.8995 14.6802 14.0695 14.5402 14.2295C14.2902 14.4995 14.0201 14.6995 13.7201 14.8195C13.4201 14.9495 13.0902 15.0095 12.7402 15.0095C12.2302 15.0095 11.6802 14.8895 11.1102 14.6395C10.5302 14.3895 9.96019 14.0595 9.39019 13.6495C8.81019 13.2295 8.27017 12.7595 7.75017 12.2495C7.23017 11.7295 6.77015 11.1794 6.35015 10.6094C5.94015 10.0394 5.61017 9.46945 5.37017 8.89945C5.13017 8.32945 5.01018 7.77947 5.01018 7.25947C5.01018 6.91947 5.07018 6.58947 5.19018 6.28947C5.31018 5.97947 5.50019 5.69947 5.77019 5.44947C6.09019 5.12947 6.44017 4.97947 6.81017 4.97947C6.95017 4.97947 7.09015 5.00947 7.22015 5.06947C7.35015 5.12947 7.47017 5.21946 7.56017 5.34946L8.72015 6.98945C8.81015 7.11945 8.88016 7.22945 8.92016 7.33945C8.97016 7.44945 8.99016 7.54945 8.99016 7.64945C8.99016 7.76945 8.95018 7.88947 8.88018 8.00947C8.81018 8.12947 8.72015 8.24945 8.60015 8.36945L8.22015 8.76945C8.16015 8.82945 8.14019 8.88946 8.14019 8.96946C8.14019 9.00946 8.15015 9.04945 8.16015 9.08945C8.18015 9.12945 8.19019 9.15946 8.20019 9.18946C8.29019 9.35946 8.45016 9.56944 8.67016 9.82944C8.90016 10.0894 9.1402 10.3595 9.4002 10.6195C9.6702 10.8895 9.93019 11.1294 10.2002 11.3594C10.4602 11.5794 10.6801 11.7295 10.8501 11.8195C10.8801 11.8295 10.9102 11.8494 10.9402 11.8594C10.9802 11.8794 11.0202 11.8795 11.0702 11.8795C11.1602 11.8795 11.2202 11.8495 11.2802 11.7895L11.6601 11.4095C11.7901 11.2795 11.9102 11.1895 12.0202 11.1295C12.1402 11.0595 12.2502 11.0194 12.3802 11.0194C12.4802 11.0194 12.5802 11.0395 12.6902 11.0895C12.8002 11.1395 12.9202 11.1995 13.0402 11.2895L14.7002 12.4695C14.8302 12.5595 14.9202 12.6695 14.9802 12.7895C15.0302 12.9195 15.0602 13.0395 15.0602 13.1795C15.0002 13.3495 14.9602 13.5395 14.8802 13.7195Z" fill="#F9FAFB"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;