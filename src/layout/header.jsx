import Image from "next/image";
import { useState } from "react";
import { FaBars, FaPlus, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false); // also close dropdown
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className="fixed top-4 z-20 w-full md:w-[75%] px-2">
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

        {/* Phone image (hidden on small devices) */}
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
        <div
          className="flex items-center justify-center gap-2 hover:bg-red-800 bg-[#ED3039] rounded-full px-4 md:px-6 py-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <button
            className="text-white cursor-pointer font-medium"
            onClick={toggleMenu}
          >
            Menu
          </button>
          <FaBars size={14} color="white" />
        </div>
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
        w-50 lg:w-1/3`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-8 left-6 text-white cursor-pointer z-40"
        >
          <FaTimes size={24} color="black" />
        </button>

        {/* Nav items */}
        <div
          className={`flex flex-col items-center w-full justify-center h-full text-black text-2xl md:text-3xl font-medium gap-6 md:gap-8 transition-all duration-500 ease-in-out`}
        >
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>

          {/* Services Dropdown */}
          <div className="flex flex-col items-center justify-center gap-2 relative">
            <button
              className="flex items-center gap-2 cursor-pointer"
              onClick={toggleServices}
              type="button"
            >
              Services <FaPlus size={20} />
            </button>

            {/* Dropdown menu */}
            <div
              className={`
                absolute left-0 right-0 top-full 
                transition-all duration-300 ease-in-out
                ${isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"}
              `}
            >
              <div
                className={`flex flex-col items-center gap-3 justify-center text-lg md:text-xl mt-2 text-2xl md:text-3xl font-medium transition-all duration-500 ease-in-out overflow-hidden
                  ${isServicesOpen ? "opacity-100" : "none"}
                `}
              >
                <Link
                  href="/freightforwarding"
                  className="text-2xl text-center font-medium"
                  onClick={closeMenu}
                >
                  Freight Forwarding
                </Link>
                <Link
                  href="/warehousing"
                  className="text-2xl text-center font-medium"
                  onClick={closeMenu}
                >
                  Warehousing & Distribution
                </Link>
              </div>
            </div>
          </div>

          {/* Other links */}
          <Link
            href="/franchise"
            className={`transition-transform duration-500 ease-in-out ${isServicesOpen ? "translate-y-50" : "translate-y-0"}`}
            onClick={closeMenu}
          >
            Franchise
          </Link>
          <Link
            href="/contact"
            className={`transition-transform duration-500 ease-in-out ${isServicesOpen ? "translate-y-50" : "translate-y-0"}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
