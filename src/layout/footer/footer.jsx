// components/Footer.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="bg-[#F0FBFF] py-8 md:py-10 border border-[#FF0000] px-4 md:px-8"
      style={{
        borderTopLeftRadius: '75px',
        borderTopRightRadius: '75px',
        borderBottom: 'none',
      }}
    >
      <div className="container mx-auto">
        {/* Top Section: Logo & Description */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-8">
          <div className="flex flex-col items-center mb-4">
            <Image
              src="/assets/footer/1 (2).png"
              alt="Saami Tradestar Logistics Ltd."
              width={400}
              height={400}
              className="object-cover mb-2"
            />
          </div>
          <p className="text-sm md:text-[20px] max-w-lg text-black">
            Over the past 25 years, Saami Tradestar Logistics Limited has Pioneered Supply Chain Management Solutions
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base mb-6 md:mb-8">
          <Link href="/" className="text-black md:text-[20px] hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <span>|</span>
          <Link href="/about" className="text-black md:text-[20px] hover:text-blue-600 transition duration-300">
            Company
          </Link>
          <span>|</span>
          <Link href="/services" className="text-black md:text-[20px] hover:text-blue-600 transition duration-300">
            Services
          </Link>
          <span>|</span>
          <Link href="/career" className="text-black md:text-[20px] hover:text-blue-600 transition duration-300">
            Career
          </Link>
          <span>|</span>
          <Link href="/contact" className="text-black md:text-[20px] hover:text-blue-600 transition duration-300">
            Contact
          </Link>
          <span>|</span>
          <Link href="/franchise" className="text-black md:text-[20px] hover:text-blue-600 transition duration-300">
            Franchise
          </Link>
        </nav>

        {/* Horizontal Divider */}
        <div className="h-[1px] bg-gray-800 w-[80%] mx-auto my-2"></div>

        {/* Bottom Section: Copyright & Legal Links */}
        <div className="flex mx-auto md:px-[120px] md:flex-row justify-between items-center text-center md:text-left text-gray-800">
          <span className="text-[14px] md:text-[20px]">Saamitradestar@2025 all rights reserved</span>
          <span className="mt-2 md:mt-0 text-[14px] md:text-[20px]">
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link> |{' '}
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
