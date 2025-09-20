import Image from "next/image"
const section4=()=>{
    return(
        <>
        <div className=" rounded-2xl  w-[95%] md:h-screen  md:w-[80%] p-6 md:p-10 m-auto md:h-[90vh]  gap-10 md:flex hidden flex-col md:flex-row  justify-between ">
            <div className="md:w-[55%] text-left"><h2 className="text-[30px] md:text-[40px]  tracking-tighter font-semibold ">Our Warehousing Locations</h2>
            <p className="font-medium text-[20px] leading-[1.3] ">We have our own warehouses of all areas in all major cities of india like:-</p>
            <ul className="font-medium  text-[20px]  " style={{listStyle:'disc'}}>
  <li>Delhi</li>
  <li>Chandigarh</li>
  <li>Jaipur</li>
  <li>Jodhpur</li>
  <li>Udaipur</li>
  <li>Ahmedabad</li>
  <li>Mumbai</li>
  <li>Lucknow</li>
  <li>Gwalior</li>
  <li>Bangalore</li>
  <li>Patna</li>
</ul>
<p  className="font-medium text-[20px] leading-[1.3] ">Apart from these we can provide all types of warehouses in any location in india or outside india on demand.</p>
            </div>
        <div className="h-full  md:w-[40%]"><Image src="/assets/warehouse/w-4.png" alt="plane" width={400} height={900} className="h-full w-full object-cover rounded-2xl" /></div>
        </div>

        {/* mobile */}
        <div className=" rounded-2xl  w-[95%] md:h-screen  md:w-[80%] p-6 md:p-10 m-auto md:h-[90vh]  gap-10 md:hidden flex-col md:flex-row  justify-between mb-20 ">
        <div className="h-full  md:w-[40%]"><Image src="/assets/warehouse/w-4.png" alt="plane" width={400} height={900} className="h-full w-full object-cover rounded-2xl" /></div>

            <div className="md:w-[55%] text-left"><h2 className="text-[30px] md:text-[40px]  tracking-tighter font-semibold ">Our Warehousing Locations</h2>
            <p className="font-medium text-[20px] leading-[1.3] ">We have our own warehouses of all areas in all major cities of india like:-</p>
            <ul className="font-medium  text-[20px]  " style={{listStyle:'disc'}}>
  <li>Delhi</li>
  <li>Chandigarh</li>
  <li>Jaipur</li>
  <li>Jodhpur</li>
  <li>Udaipur</li>
  <li>Ahmedabad</li>
  <li>Mumbai</li>
  <li>Lucknow</li>
  <li>Gwalior</li>
  <li>Bangalore</li>
  <li>Patna</li>
</ul>
<p  className="font-medium text-[20px] leading-[1.3] ">Apart from these we can provide all types of warehouses in any location in india or outside india on demand.</p>
            </div>
        </div>
        </>
    )
}
export default section4