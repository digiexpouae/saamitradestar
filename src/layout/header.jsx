import Image from "next/image";
import { useState } from "react";
import { FaBars, FaPlus, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };
  const toggleServices = () => setIsServicesOpen((prev) => !prev);

  return (
    <header className="fixed top-4 z-20 w-full md:w-[75%] px-2">
      {/* Top Bar */}
      <div
        className="bg-white px-4 py-2 flex justify-between items-center w-full h-[10vh] md:h-[14vh]"
        style={{ borderRadius: "45px" }}
      >
        {/* Logo */}
        <div className="w-36 md:w-60 cursor-pointer">
          <Link href="/">
            <Image
              src="/assets/header/saami.png"
              alt="logo"
              width={500}
              height={50}
              className="object-cover"
            />
          </Link>
        </div>

        {/* Phone Image */}
        <div className="hidden md:flex w-1/2 h-[70%] items-center justify-end">
          <Image
            src="/assets/header/2.png"
            alt="phone"
            width={200}
            height={20}
            className="object-contain"
          />
        </div>

        {/* Menu Button */}
        <button
          className="flex items-center justify-center gap-2 hover:bg-red-800 bg-[#ED3039] rounded-full px-4 md:px-6 py-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <span className="text-white font-medium">Menu</span>
          <FaBars size={14} color="white" />
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-20"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar menu */}
      <nav
        className={`fixed top-0 right-0 h-full bg-white transition-all duration-500 ease-in-out bg-opacity-95 z-30
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        w-4/5 sm:w-1/2 lg:w-1/3`}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute top-8 left-6 cursor-pointer z-40"
          aria-label="Close menu"
        >
          <FaTimes size={24} color="black" />
        </button>

        {/* Nav items */}
        <div className="flex flex-col items-center text-center p-20 h-full text-black font-medium gap-6 md:gap-8">
          <Link href="/" onClick={closeMenu} className="text-2xl md:text-3xl">
            Home
          </Link>
          <Link href="/about" onClick={closeMenu} className="text-2xl md:text-3xl">
            About
          </Link>

          {/* Services Dropdown */}
          <div className="flex flex-col items-center gap-2 relative w-full">
            <div
              className="flex items-center gap-2 cursor-pointer text-2xl md:text-3xl"
              type="button"
            >
               <Link href="/services">    Services   </Link> <button  className="cursor-pointer" onClick={toggleServices}> <FaPlus size={20} /></button>
         
            </div>

            {/* Dropdown menu with smooth spacing */}
            <div
              className={`transition-all duration-1000 ease-in-out overflow-hidden flex flex-col items-center gap-2 mt-2 text-base md:text-lg font-medium
                ${isServicesOpen ? "max-h-96" : "max-h-0"}`}
            >
              <Link href="/freightforwarding" onClick={closeMenu}>
                Freight Forwarding
              </Link>
              <Link href="/warehousing" onClick={closeMenu}>
                Warehousing & Distribution
              </Link>
              <Link href="/transportation" onClick={closeMenu}>
                Transportation
              </Link>
              <Link href="/spareparts" onClick={closeMenu}>
                Spare Part Logistics
              </Link>
              <Link href="/customerclearance" onClick={closeMenu}>
                Customer Clearance
              </Link>
              <Link href="/ITSupport" onClick={closeMenu}>
              IT Support
              </Link>
            </div>
          </div>

          {/* Other links */}
          <Link href="/franchise" onClick={closeMenu} className={`text-2xl md:text-3xl `}>
            Franchise
          </Link>
          <Link href="/contact" onClick={closeMenu} className={`text-2xl md:text-3xl `}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
