import Image from "next/image"
const section2=()=>{
return(
<div className="flex items-center flex-col mb-10 justify-center w-full gap-20  relative w-full">
<div className="hidden md:flex flex-col gap-20  ">
{/* Air Freight */}

<div className="bg-[#F0FBFF] rounded-2xl  w-[95%]  md:w-[80%] px-2 py-4 md:p-10 m-auto md:h-[90vh]  gap-10 flex flex-col md:flex-row  justify-between ">
    <div className="md:w-[55%] text-center md:text-left"><h2 className="text-[30px] md:text-[50px]  tracking-tighter font-semibold ">Air Freight</h2>
    <p className="font-medium text-[20px] leading-[1.3] ">We have preferential agreements with the best airlines which provide us a guaranty of quality services. We offer innovating solutions and we deal with any kind of packages, whether small volumes or the freight of an entire airplane, or courier service.</p>
    <h4 className="font-bold text-[20px] mt-4">Air Services includes</h4>
    <ul className="font-medium  text-[20px] ">
        <li>Fastest possible top-priority delivery of shipments in a defined time</li>
        <li>Custom clearance for all imports</li>
        <li>Front-to-end tracking of freight handling</li>
        <li>Expert air carriers from within the Group are used</li>
        <li>to ensure efficient transportation of air cargo</li>
    </ul>
    </div>
<div className="h-full  md:w-[40%]"><Image src="/assets/freightforwarding/plane.webp" alt="plane" width={400} height={900} className="h-full w-full object-cover rounded-2xl" /></div>
</div>

{/* Train Freight */}
<div className="bg-[#F0FBFF]   w-[95%]  md:w-[80%] p-6 md:p-10 m-auto md:h-[45vh] rounded-2xl gap-10 flex flex-col md:flex-row  justify-between ">
    <div className="md:w-[55%] text-center md:text-left"><h2 className="text-[30px] md:text-[50px]  tracking-tighter font-semibold ">Train Freight</h2>
    <p className="font-medium text-[20px] leading-[1.3] ">There has been a longstanding demand of Railways and for transparency in sharing of information to give the customers an upto-date business-like environment.</p>

    </div>
<div className="h-full  md:w-[40%]"><Image src="/assets/freightforwarding/container.webp" alt="plane" width={400} height={900} className="h-full w-full object-cover rounded-2xl" /></div>
</div>
{/* Truck Freight */}
<div className="bg-[#F0FBFF] rounded-2xl  w-[95%]  md:w-[80%] p-4 md:p-10 m-auto md:h-[90vh]  gap-10 flex flex-col md:flex-row  justify-between ">
    <div className="md:w-[55%] text-center md:text-left"><h2 className="text-[30px] md:text-[50px]  tracking-tighter font-semibold ">Truck Freight</h2>
    <p className="font-medium text-[20px] leading-[1.3] ">We are one of the leading forwarders of groupage and part and full load transports. With a comprehensive and well-established network of our offices across the globe, we are able to meet our customers' demands for secure and timely transportation.</p>
    <h4 className="font-bold text-[20px] mt-4">Truck Cargo includes</h4>
    <ul className="font-medium  text-[20px] ">
        <li>JIT (Just In Time) delivery, transporting only what is needed, when needed.</li>
        <li>Avoid the rising risk of cargo damage, breakage, theft, and loss</li>
        <li>Front-to-end tracking of freight handling</li>
        <li>Preloading cargo assures quality, prevents left-off cargo and maintains stable lead times</li>
    </ul>
    </div>
<div className="h-full  md:w-[40%]"><Image src="/assets/freightforwarding/truck.webp" alt="plane" width={400} height={900} className="h-full w-full object-cover rounded-2xl" /></div>
</div>
</div>

{/* mobile */}
<div className="flex flex-col md:hidden gap-20  mb-10">
{/* Air Freight */}
<div className="bg-[#F0FBFF] rounded-2xl  w-[95%]  md:w-[80%]  p-6 md:p-10 m-auto md:h-[90vh]  gap-10 flex md:hidden flex-col md:flex-row  justify-between ">
<div className="h-full  md:w-[40%]"><Image src="/assets/freightforwarding/plane.webp" alt="plane" width={400} height={900} className="h-full w-full object-cover rounded-2xl" /></div>

    <div className="md:w-[55%] text-center md:text-left"><h2 className="text-[30px] md:text-[50px]  tracking-tighter font-semibold ">Air Freight</h2>
    <p className="font-medium text-[18px] leading-[1.3] ">We have preferential agreements with the best airlines which provide us a guaranty of quality services. We offer innovating solutions and we deal with any kind of packages, whether small volumes or the freight of an entire airplane, or courier service.</p>
    <h4 className="font-bold text-[18px] mt-4">Air Services includes</h4>
    <ul className="font-medium  text-[18px] ">
        <li>Fastest possible top-priority delivery of shipments in a defined time</li>
        <li>Custom clearance for all imports</li>
        <li>Front-to-end tracking of freight handling</li>
        <li>Expert air carriers from within the Group are used</li>
        <li>to ensure efficient transportation of air cargo</li>
    </ul>
    </div>
</div>

{/* Train Freight */}
<div className="bg-[#F0FBFF]   w-[95%]  md:w-[80%]  p-6 md:p-10 m-auto md:h-[45vh] rounded-2xl gap-10 flex flex-col md:flex-row  justify-between ">
<div className="h-full  md:w-[40%] "><Image src="/assets/freightforwarding/container.webp" alt="plane" width={400} height={900} className="h-full w-full object-cover rounded-2xl" /></div>

    <div className="md:w-[55%] text-center md:text-left"><h2 className="text-[30px] md:text-[50px]  tracking-tighter font-semibold ">Train Freight</h2>
    <p className="font-medium text-[18px] leading-[1.3] ">There has been a longstanding demand of Railways and for transparency in sharing of information to give the customers an upto-date business-like environment.</p>

    </div>
</div>
{/* Truck Freight */}
<div className="bg-[#F0FBFF] rounded-2xl  w-[95%]  md:w-[80%] p-6 md:p-10 m-auto md:h-[90vh]  gap-10 flex flex-col md:flex-row  justify-between ">
<div className="h-full  md:w-[40%]"><Image src="/assets/freightforwarding/truck.webp" alt="plane" width={400} height={900} className="h-full w-full object-cover rounded-2xl" /></div>

    <div className="md:w-[55%] text-center md:text-left"><h2 className="text-[30px] md:text-[50px]  tracking-tighter font-semibold ">Truck Freight</h2>
    <p className="font-medium text-[18px] leading-[1.3] ">We are one of the leading forwarders of groupage and part and full load transports. With a comprehensive and well-established network of our offices across the globe, we are able to meet our customers' demands for secure and timely transportation.</p>
    <h4 className="font-bold text-[20px] mt-4">Truck Cargo includes</h4>
    <ul className="font-medium  text-[18px] ">
        <li>JIT (Just In Time) delivery, transporting only what is needed, when needed.</li>
        <li>Avoid the rising risk of cargo damage, breakage, theft, and loss</li>
        <li>Front-to-end tracking of freight handling</li>
        <li>Preloading cargo assures quality, prevents left-off cargo and maintains stable lead times</li>
    </ul>
    </div>
</div>
</div>
</div>
)

}
export default section2