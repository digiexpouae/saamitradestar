import Image from "next/image"
const section2=()=>{
    return(
        <div>
            {/* Desktop */}
          <div className="bg-[#F0FBFF]   w-[95%]  md:w-[80%] p-6 md:p-10 m-auto  rounded-2xl gap-10 hidden md:flex flex-col md:flex-row  justify-between ">
              <div className="md:w-[55%] text-center md:text-left"><h2 className="text-[30px] md:text-[50px]  tracking-tighter font-semibold leading-[1.2] mb-4">Warehouse management technologies</h2>
              <p className="font-medium text-[20px] leading-[1.3] ">By automating key processes, from inbound goods arrival to inventory storage and fulfillment of outbound orders, Warehouse Management System (WMS) gives us closer control of procurement, manufacturing and distribution activities.For the better service to our clients we do modification in our WMS timely.</p>
          
              </div>
          <div className="h-auto  md:w-[40%]"><Image src="/assets/ITSupport/IT-2.jpg" alt="plane" width={400} height={900} className="h-full w-full object-cover object-right rounded-2xl" /></div>
          </div>  
{/* Mobile */}
<div className="bg-[#F0FBFF]   w-[95%]  md:w-[80%] p-6 md:p-10 m-auto  rounded-2xl gap-10 flex md:hidden flex-col md:flex-row  justify-between ">
<div className="h-auto  md:w-[40%]"><Image src="/assets/ITSupport/IT-2.jpg" alt="plane" width={400} height={900} className="h-full w-full object-cover object-right rounded-2xl" /></div>

              <div className="md:w-[55%] text-center md:text-left"><h2 className="text-[30px] md:text-[50px]  tracking-tighter font-semibold leading-[1.2] mb-4">Warehouse management technologies</h2>
              <p className="font-medium text-[20px] leading-[1.3] ">By automating key processes, from inbound goods arrival to inventory storage and fulfillment of outbound orders, Warehouse Management System (WMS) gives us closer control of procurement, manufacturing and distribution activities.For the better service to our clients we do modification in our WMS timely.</p>
          
              </div>
          </div> 

        </div>
    )
}   
export default section2