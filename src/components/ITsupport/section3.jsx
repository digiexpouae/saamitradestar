import Image from "next/image";

const Section3 = () => {
  const services = [
    {
      icon: "/assets/warehouse/Layer_1.svg",
      title: "Inbound and Outbound Entries",
    },
    {
      icon: "/assets/warehouse/Layer_1.svg",
      title: "Stock Management tool",
    },
    {
      icon: "/assets/warehouse/Layer_1.svg",
      title: "RMA tool for replacable goods",
    },
    {
      icon: "/assets/warehouse/Layer_1.svg",
      title: "Outstanding reports of the stock",
    },
    {
      icon: "/assets/warehouse/Layer_1.svg",
      title: "customized reports of inbound and outbound",
      description: ""
    },
   
  ];
  const services2 = [
    {
   icon: "/assets/warehouse/Layer_1.svg",
      title: "Inbound and Outbound Entries",
    },
    {
  icon: "/assets/warehouse/Layer_1.svg",
      title: "Stock Management tool",
    },
    {
      icon: "/assets/warehouse/Layer_1.svg",
      title: "RMA tool for replacable goods",
    },
    {
      icon: "/assets/warehouse/Layer_1.svg",
      title: "Outstanding reports of the stock",
    },
    
   
   
  ];
  

  return (
  <>
  {/* mobile */}
    <div className="w-full py-16 md:hidden flex bg-[#FFF5F5]">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center   justify-center ">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl  font-semibold text-gray-900 mb-4">
          Few Key Functionalities of our Wms are  </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-[85%]  items-center justify-center gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#ED3039] p-2  py-4 flex items-center gap-2  shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className=" rounded-full flex  justify-center w-[15%]">
                <Image 
                  src={'/assets/warehouse/Layer_1.svg'} 
                  alt={service.title}
                  width={72}
                  height={72}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="text-sm md:text-[20px] w-[85%]  leading-[1.3] font-medium text-white">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  {/* desktop */}
  <div className="w-full py-16 hidden md:flex bg-[#FFF5F5]">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center   justify-center ">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl  font-semibold text-gray-900 mb-4">
          Few Key Functionalities of our Wms are          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-[85%]  mb-10 items-center justify-center gap-8">
          {services2.map((service, index) => (
            <div 
              key={index}
              className="bg-[#ED3039] p-2  py-4 flex items-center gap-2  shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className=" rounded-full flex  justify-center w-[15%]">
                <Image 
                  src={'/assets/warehouse/Layer_1.svg'} 
                  alt={service.title}
                  width={72}
                  height={72}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="text-sm md:text-[20px] w-[85%]  leading-[1.3] font-medium text-white">{service.title}</p>
            </div>
          ))}
        </div>
        <div 
              className="bg-[#ED3039] p-2  py-4 flex items-center gap-2  shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className=" rounded-full flex  justify-center w-[15%]">
                <Image 
           src={'/assets/warehouse/Layer_1.svg'} 
                  // alt={service.title}
                  width={72}
                  height={72}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="text-sm md:text-[20px]  leading-[1.3] font-medium text-white">customized reports of inbound and outbound</p>
            </div>
      </div>
    </div>
  </>
  );
};

export default Section3;
// icon: "/assets/warehouse/icon5.png",
// title: "E - billing and e - POD",
// description: ""
// },