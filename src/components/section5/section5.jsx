// Import necessary React libraries
 import Image from "next/image";
import { useState } from "react";
import Section6 from '../section6/section6'
export default function ServicesTable() {
    // Array of services for rendering
    const [hoveredIndex, setHoveredIndex] = useState(false);
    const [hoveredIndex2, setHoveredIndex2] = useState(false);

    const services = [
      {
        title: "Freight Forwarding",
        desc: "For over 20 years, we've delivered on our service commitments.",
      },
      {
        title: "Warehousing & Distribution",
        desc: "One of the most important elements of supply chain management is warehousing.",
      },
      {
        title: "Transportation Services",
        desc: "With advancements in technology and the global trading, we now have faster solutions.",
      },
     
    ];
   const services2=[ {
        title: "Sparepart Logistics",
        desc: "Without the speedy installation of spare parts and timely maintenance on the ground.",
      },
      {
        title: "Custom Clearance",
        desc: "The major activities of the Organization cover various disciplines of material handling.",
      },
      {
        title: "IT Support",
        desc: "We have invested in world-class technology to manage your supply chain.",
      },]
  
    return (
      <div className="py-10 px-1 ">
        <div className="grid relative border border-gray-300 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {/* Map over the services array and render each card */}
          {services.map((service, index) => (
            <div
              key={index}
              className={` p-4 px-15 border  shadow-md  `}
              onMouseEnter={() => setHoveredIndex(true)} // Set hoveredIndex on hover
              onMouseLeave={() => setHoveredIndex(false)} 
            >
              <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
              <p className="text-black leading-5 mb-4 font-medium text-sm">{service.desc}</p>
              <a href="#" className="text-black hover:text-blue-700 text-sm font-semibold">
                Read More 
              </a>
              <div className="absolute inset-0 opacity-0 h-[70vh] transition-opacity duration-1000 hover:opacity-100"><Image src="/assets/section5/1.png" alt="logo"fill className="object-cover"   /></div>

            </div>
          ))}
        </div>
        <div className={`grid relative border border-gray-300 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 transition-transform duration-700 ${hoveredIndex ? "transform translate-y-[148%]" : ""}`}>
          {/* Map over the services array and render each card */}
          {services2.map((service, index) => (
            <div
              key={index}
              className={` p-4 px-15 border  shadow-md  `}
              onMouseEnter={() => setHoveredIndex2(true)} // Set hoveredIndex on hover
              onMouseLeave={() => setHoveredIndex2(false)}
            >
              <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
              <p className="text-black leading-5 mb-4 font-medium text-sm">{service.desc}</p>
              <a href="#" className="text-black hover:text-blue-700 text-sm font-semibold">
                Read More 
              </a>
              <div className=" - absolute inset-0 opacity-0 h-[70vh] transition-opacity duration-1000 hover:opacity-100"><Image src="/assets/section5/2.png" alt="logo"fill className="object-cover"   /></div>

            </div>
          ))}
        </div>
<Section6 className={`transition-transform duration-1500  ease-in-out ${hoveredIndex ? "transform translate-y-[40%]" : ""} ${hoveredIndex2 ? "transform translate-y-[40%]" : ""}`} />
      </div>
    );
  }
  