// components/Footer.js

import React from 'react';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-[#F0FBFF] py-8 md:py-10 border border-[#FF0000] px-4 md:px-8" style={{borderTopLeftRadius:'75px',borderTopRightRadius:'75px'}}>
      <div className="container mx-auto">

        {/* Top Section: Logo & Description */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-8">
          <div className="flex flex-col items-center mb-4">
            {/* Make sure your image path is correct */}
            <Image src="/assets/footer/1 (2).png" alt="Saami Tradestar Logistics Ltd." width={400} height={400} className="object-cover mb-2" />
            <h1 className="text-xl md:text-2xl font-normal italic text-blue-800">Saami Tradestar Logistics Ltd.</h1>
          </div>
          <p className="text-sm md:text-base max-w-lg text-gray-700">Over the past 25 years, Saami Tradestar Logistics Limited has Pioneered Supply Chain Management Solutions</p>
        </div>

        {/* Horizontal Divider */}

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8  text-sm md:text-base mb-6 md:mb-8">
          <a href="#" className="text-black-800  md:text-[20px] hover:text-blue-600 transition duration-300">Home</a>
          <span>|</span>
          <a href="#" className="text-black-800  md:text-[20px] hover:text-blue-600 transition duration-300">  Company</a>
          <span>|</span>
          <a href="#" className="text-black-800  md:text-[20px] hover:text-blue-600 transition duration-300">  Services</a>
          <span>|</span>
          <a href="#" className="text-black-800  md:text-[20px] hover:text-blue-600 transition duration-300">  Career</a>
          <span>|</span>
          <a href="#" className="text-black-800  md:text-[20px] hover:text-blue-600 transition duration-300">  Contact</a>
          <span>|</span>
          <a href="#" className="text-black-800  md:text-[20px] hover:text-blue-600 transition duration-300">  Franchise</a>
        </nav>

        {/* Horizontal Divider */}
        <div className="h-px bg-gray-300 w-3/4 mx-auto my-2"></div>

        {/* Bottom Section: Copyright & Legal Links */}
        <div className="flex flex-col mx-auto px-[120px] md:flex-row md:justify-between items-center text-center md:text-left  text-black">
          <span className='text-[20px]'>Saamitradestar@2025 all right reserved</span>
          <span className="mt-2 md:mt-0 text-[20px]">Terms & Conditions | Privacy Policy</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;