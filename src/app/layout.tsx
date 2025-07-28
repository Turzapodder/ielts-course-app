import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from 'react';
import "./globals.css";
import ReduxProvider from "@/components/providers/ReduxProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Complete IELTS Course in Bangladesh - Munzereen Shahid [2025]",
  description: "Master IELTS with expert guidance from Munzereen Shahid. 50+ video lectures, mock tests, and comprehensive preparation for all four skills.",
  other: {
    'X-TENMS-SOURCE-PLATFORM': 'web',
  },
  openGraph: {
    title: "Complete IELTS Course in Bangladesh - Munzereen Shahid [2025]",
    description: "Master IELTS with expert guidance from Munzereen Shahid. 50+ video lectures, mock tests, and comprehensive preparation for all four skills.",
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'bn_BD',
  },
  alternates: {
    languages: {
      'en': '/en',
      'bn': '/bn',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        style={{ '--base-path': process.env.NEXT_PUBLIC_BASE_PATH || '' } as React.CSSProperties}
      >
        <ReduxProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
