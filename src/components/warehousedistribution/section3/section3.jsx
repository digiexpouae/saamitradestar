import Image from "next/image";

const Section3 = () => {
  const services = [
    {
      icon: "/assets/warehouse/icon1.png",
      title: "Contract Logistics",
      description: "On - time departure of vehicles irrespective of capacity utilisation"
    },
    {
      icon: "/assets/warehouse/icon2.png",
      title: "Warehousing",
      description: "Weather - proof containerised vehicles for safe movement"
    },
    {
      icon: "/assets/warehouse/icon3.png",
      title: "Transportation",
      description: "Online track and trace facility to trace your cargo"
    },
    {
      icon: "/assets/warehouse/icon4.png",
      title: "Value Added Services",
      description: "Physical proof of delivery option"
    },
    {
      icon: "/assets/warehouse/icon5.png",
      title: "E-commerce Fulfillment",
      description: "E - billing and e - POD"
    },
   
  ];

  return (
    <div className="w-full py-16 bg-[#F0FBFF]">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center md:items-start  justify-center md:justify-start">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl  font-semibold text-gray-900 mb-4">
          Our Distribution Services Includes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-[85%]  items-center gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-2  py-4 flex items-center gap-2 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className=" rounded-full flex  justify-center w-[15%]">
                <Image 
                  src={'/assets/warehouse/w-icon.svg'} 
                  alt={service.title}
                  width={72}
                  height={72}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="text-sm md:text-[20px] w-[85%]  leading-[1.3] font-medium text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
