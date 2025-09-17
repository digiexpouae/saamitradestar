import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute top-4 z-20 w-full md:w-[75%] px-2">
      <div
        className="bg-white px-4 py-2 flex justify-between items-center w-full h-[10vh] md:h-[14vh]"
        style={{ borderRadius: "45px" }}
      >
        {/* Logo */}
        <div className="w-28 sm:w-32 md:w-60">
          <Image
            src="/assets/header/saami.png"
            alt="logo"
            width={500}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Phone image (hidden on small devices) */}
        <div className="hidden md:flex w-1/2 items-center justify-end">
          <Image
            src="/assets/header/2.png"
            alt="phone"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Menu Button */}
        <div className="flex items-center justify-center gap-2 hover:bg-red-800 bg-[#ED3039] rounded-full px-4 md:px-6 py-2 cursor-pointer">
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
        className={`fixed top-0 right-0 h-full bg-red-900 bg-opacity-95 z-30 transition-transform duration-300 ease-in-out transform
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        w-full sm:w-2/3 md:w-1/2 lg:w-1/4`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-8 left-6 text-white cursor-pointer z-40"
        >
          <FaTimes size={24} />
        </button>

        <div className="flex flex-col items-center justify-center h-full text-white text-2xl md:text-3xl font-medium gap-6 md:gap-8">
          <a href="#" onClick={closeMenu}>Home</a>
          <a href="#" onClick={closeMenu}>About</a>
          <a href="#" onClick={closeMenu}>Services</a>
          <a href="#" onClick={closeMenu}>Franchise</a>
          <a href="#" onClick={closeMenu}>Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
