import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaPlus, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = ({ complete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [update, setUpdate] = useState(complete);
  const [mounted, setMounted] = useState(false); // track mount

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };
  const toggleServices = () => setIsServicesOpen((prev) => !prev);

  useEffect(() => {
    setUpdate(complete);
  }, [complete]);

  // trigger mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={`fixed top-0 z-[999] w-full transition-all duration-500 ease-out
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
    >
      {/* Top Bar */}
      <div
        className="relative px-2 md:px-32 py-2 lg:py-4 flex justify-between items-center w-full"
        style={{ borderRadius: "10px" }}
      >
        <div
          className={`absolute inset-0 -z-[1] transition-all duration-1000 ease-out
            ${update ? "backdrop-blur-[10px] bg-[#FFFFFF99] opacity-60" : "backdrop-blur-lg opacity-100"}`}
        ></div>

        {/* Logo */}
        <div className="aspect-[12/2] w-[70%] md:w-[35%] cursor-pointer transition-all duration-1000 ease-out">
          <Link href="/">
            <Image
              src={update ? "/assets/saamilogo-2.png" : "/assets/whitelogo.png"}
              alt="logo"
              width={500}
              height={50}
              className="object-cover duration-1000 ease-out"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div
          className="hidden lg:flex w-1/2 h-[70%] gap-6 pt-4 items-center justify-center"
        >
          <Link
            className={`font-semibold text-sm transition-all duration-1000 ease-out ${
              update ? "text-black" : "text-white"
            }`}
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={`font-semibold text-sm transition-all duration-1000 ease-out ${
              update ? "text-black" : "text-white"
            }`}
            href={"/about"}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <Link
              href="/services"
              className={`font-semibold text-sm hover:text-blue-600 transition-colors duration-300 ${
                update ? "text-black" : "text-white"
              }`}
            >
              Services
            </Link>
            <div className="absolute left-0 mt-2 w-56 flex-col rounded-lg bg-white shadow-lg opacity-0 invisible transition-all duration-300 ease-out peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible z-20">
              <Link href="/freightforwarding" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                Freight Forwarding
              </Link>
              <Link href="/warehousing" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                Warehousing & Distribution
              </Link>
              <Link href="/transportation" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                Transportation
              </Link>
              <Link href="/spareparts" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                Spare Part Logistics
              </Link>
              <Link href="/customerclearance" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                Customer Clearance
              </Link>
              <Link href="/ITSupport" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                IT Support
              </Link>
            </div>
          </div>

          <Link
            className={`font-semibold text-sm transition-all duration-1000 ease-out ${
              update ? "text-black" : "text-white"
            }`}
            href={"/career"}
          >
            Career
          </Link>
          <Link
            className={`font-semibold text-sm transition-all duration-1000 ease-out ${
              update ? "text-black" : "text-white"
            }`}
            style={{ whiteSpace: "nowrap" }}
            href={"/contact"}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center gap-2 hover:bg-red-800 bg-[#ED3039] rounded-full px-4 md:px-6 py-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <FaBars size={16} color="white" />
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black opacity-40 z-20" onClick={closeMenu} />}
    </header>
  );
};

export default Header;
