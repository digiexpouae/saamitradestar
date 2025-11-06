import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="relative bg-[#2A2A2A] text-gray-300 flex items-center justify-end flex-col  md:h-[70vh] px-6">
      <div className=" mx-auto  flex-col flex  md:flex-row md:h-[70%] py-10 items-start justify-center  md:flex-row  gap-10 md:gap-20">
        {/* Company Info */}
        <div className="md:w-1/2">
        <div className="h-20 w-72">  <Image
            src="/assets/footer/footerlogo.svg"
            alt="Saami Tradestar Logo"
            width={300} height={300}
            className= " object-cover mb-4"
          /></div>
     
          <p className="text-xl font-medium leading-tight text-white leading-relaxed">
            Over the past 25 years, Saami Tradestar <br /> Logistics Limited has
            pioneered supply chain management solutions.
          </p>
          <div className="mt-4 flex md:flex-row flex-col text-sm w-full " style={{flexWrap:'wrap'}}>
            <div className="flex  items-center gap-2 p-2 md:justify-center"><div className="w-4 h-4 flex items-center justify-center relative"><Image src={'/assets/footer/location.svg'} width={20} height={20} className="object-cover"/> </div><p className="text-white ">India</p></div>
            {/* <div className="flex  items-center gap-2 p-2 md:justify-center"><div className="w-4 h-4 flex items-center justify-center relative"><Image src={'/assets/footer/vector.svg'}   width={20} height={20} className="object-cover"/> </div><p className="text-white ">+971 4 885 9549</p></div> */}
            <div className="flex  items-center gap-2 p-2 md:justify-center"><div className="w-6 h-4 flex items-center justify-center relative"><Image src={'/assets/footer/email.svg'}    width={20} height={20} className="object-cover"/> </div><p className="text-white ">         info@tradestarindia.com
            </p></div>

          </div>
        </div>

        {/* Quick Links */}
        <div className="flex  md:flex-row flex-col items-start justify-center gap-10 w-1/3"> 
        <div className="">
          <h3 className="text-white text-2xl font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white leading-[0.8]  text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-white">
                Career
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="">
          <h3 className="text-white text-2xl leading-tight font-medium mb-3">Follow us</h3>
          <ul className="space-y-2 text-white leading-[0.8]   text-sm">
            <li>
              <Link href="#" className="hover:text-white">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                YouTube
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
<div className="md:w-[80%] ">
      <hr className="border-white" />

      <div className="max-w-7xl py-4  mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-white">
         
        <p className="text-xl">Saamitradestar©2025 All rights reserved</p>
        <p className="mt-2 md:mt-0 text-xl">
          <Link href="/terms" className="  hover:text-white">
            Terms & Conditions
          </Link>{" "}
          |{" "}
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </p>
      </div>
      </div>
      <div className="absolute top-[-1%] right-0 h-8  bg-[#FFFF] w-[35vw]" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 9% 100%)'}}></div>
    </footer>
  );
}
