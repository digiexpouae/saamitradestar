import Image from "next/image"
import DomeGallery from "@/common/domegallery"
const section4=()=>{
    const location=['Delhi','Chandigarh','Jaipur','Jodhpur','Udaipur']
    const location2=['Mumbai','Lucknow','Gwalior','Bangalore','Patna','Ahmedabad']
    return(
        <>
        {/* desktop */}
        <div className=" rounded-2xl  w-[95%] md:w-[90%] md:py-20 p-6 md:p-10 m-auto  gap-10 hidden md:flex  flex-col  justify-center ">
            <div className="text-left"><h2 className="text-[30px] md:text-5xl  tracking-tighter font-semibold mb-2 text-center">Our Warehousing Locations</h2>
             <p className="font-medium text-[20px] leading-[1.3] text-center">We have our own warehouses of all areas in all major cities of india like:-</p>
             <div className="grid grid-cols-2 md:flex  gap-4 p-4 md:items-center md:justify-center ">
  {location.map((elem, index) => (
    <div key={index} className="flex gap-2  items-center">
      <div className="w-10 h-10">
        <Image
          src="/assets/warehouse/location.svg"
          width={30}
          height={30}
          alt="Location Icon"
           className="object-cover w-full h-full"
        />
      </div>
      <p className="text-black text-sm lg:text-xl">{elem}</p>
    </div>
  ))}
</div>
<div className="md:flex grid grid-cols-2 md:mb-6  gap-4 p-4 md:flex-row md:items-center md:justify-center" >
  {location2.map((elem, index) => (
    <div key={index} className="flex gap-2 items-center">
      <div className="w-10 h-10 ">
        <Image
          src="/assets/warehouse/location.svg"
     width={30}
          height={30}          alt="Location Icon"
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-black text-sm lg:text-xl">{elem}</p>
    </div>
  ))}
</div>

             <div className=" flex w-full items-center justify-center py-10" style={{ height: '80vh' }}>
            <div className="w-full lg:max-w-5xl h-full " >
             <DomeGallery />
            </div>
             </div>

            </div>
        </div>

        {/* mobile */}
        <div className=" rounded-2xl  w-[95%] md:w-[90%] py-20 p-6 md:p-10 m-auto  gap-10 md:hidden flex  flex-col  justify-center ">
            <div className="text-left"><h2 className="text-4xl md:text-5xl  tracking-tighter font-semibold mb-2 text-center">Our Warehousing Locations</h2>
             <p className="font-medium text-[20px] leading-[1.3] text-center">We have our own warehouses of all areas in all major cities of india like:-</p>
             <div className="grid grid-cols-2 md:flex  gap-4 p-4 md:items-center md:justify-center ">
  {location.map((elem, index) => (
    <div key={index} className="flex gap-2  items-center">
      <div className="w-10 h-10 aspect-[4/4] relative">
        <Image
          src="/assets/warehouse/location.svg"
         fill
          alt="Location Icon"
           className="object-cover w-full h-full"
        />
      </div>
      <p className="text-black text-sm lg:text-xl">{elem}</p>
    </div>
  ))}
</div>


             <div className=" flex w-full items-center justify-center" style={{ height: '70vh' }}>
            <div className="w-full h-[90%] md:h-full ">
             <DomeGallery />
            </div>
             </div>
             <div className="md:flex grid grid-cols-2 md:mb-6  gap-4 p-4 md:flex-row md:items-center md:justify-center" >
  {location2.map((elem, index) => (
    <div key={index} className="flex gap-2 items-center">
      <div className="w-10 h-10 relative aspect-[4/4]">
        <Image
          src="/assets/warehouse/location.svg"
        fill
          alt="Location Icon"
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-black text-sm md:text-xl">{elem}</p>
    </div>
  ))}
</div>

            </div>
        </div>
       
      
        </>
    )
}
export default section4