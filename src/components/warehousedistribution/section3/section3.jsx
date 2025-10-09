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
    
   
  ];

  return (
    <div className="w-full py-16 flex items-center justify-center relative" style={{backgroundColor:'rgba(255, 245, 245, 1)'}}>
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center  justify-center ">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl  font-semibold text-gray-900 mb-4">
          Our Distribution Services Includes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-[85%]  items-center gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className=" p-2  py-4 flex items-center gap-2  shadow-md hover:shadow-lg transition-shadow duration-300"
         style={{backgroundColor:'rgba(237, 48, 57, 1)'}}
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
              <p className="text-sm lg:text-[20px] w-[85%]  leading-[1.3] font-medium text-white">{service.description}</p>
            </div>
          ))}

        </div>
        <div className="flex items-center justify-center w-[85%]">
        <div 
              className="w-full md:w-[50%]  mt-6 p-2  py-4 flex items-center gap-2   shadow-md hover:shadow-lg transition-shadow duration-300"
         style={{backgroundColor:'rgba(237, 48, 57, 1)'}}
         >
              <div className=" rounded-full flex  justify-center w-[15%]">
                <Image 
                  src={'/assets/warehouse/Layer_1.svg'} 
                  alt={'service'}
                  width={72}
                  height={72}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="text-sm lg:text-[20px] w-[85%]  leading-[1.3] font-medium text-white">E - billing and e - POD</p>
            </div>
            </div>
        
      </div>
      <div className="absolute bg-white h-20 w-20 bottom-0 left-0 " style={{clipPath:'polygon(0 0, 0% 110%, 100% 100%)'}}></div>
      <div className="absolute bg-white h-20 w-20 bottom-0 right-0 " style={{clipPath:'polygon(100% 0, 0% 110%, 100% 100%)'}}></div>
    </div>
  );
};

export default Section3;
