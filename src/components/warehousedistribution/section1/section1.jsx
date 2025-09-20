import Image from "next/image"
const warehouse=()=>{
    return(<>             
    <div className="hidden md:flex flex-col items-center w-full my-10  justify-center gap-6 md:h-[100vh] mx-auto"> 
 <div className={`relative  text-left w-[90%] md:w-[80%] flex flex-col items-center justify-center `}>
<h2 className="text-[35px] md:text-[40px] w-full leading-[1]  text-black font-semibold ">Warehousing & Distribution</h2>
        <p className="text-black font-medium py-4 text-[20px]   leading-[1.5] md:leading-[1.3] " style={{lineClamp:6}}>One of the most important element of supply chain management is warehousing. The proper storage and tracking of inventory ensures that delivery times are met and asset management costs are reduced. With the widest network, the best of cargo movement facilities and several value added services to choose from, Saami Logistics is one of the preferred distribution solution provider today.</p>
        </div>
        <div className="flex md:flex-row flex-col  w-[90%] md:w-[80%] gap-10 md:gap-0 justify-between h-[60%] mx-auto ">
                <div className="md:w-[50%] text-left flex flex-col gap-4 md:gap-6">
                <p className="font-medium text-[20px] leading-[1.3] ">We offer our customers flexible storage option with excellent warehousing facility. Our warehousing facilities are completely equipped to handle bulk cargo including various other requirements such as Break bulk .</p>


<p className="font-medium text-[20px] leading-[1.3] ">We are also capable of handling cargo that is in units, packages, crates, bags and much more.Well guarded and spacious, our warehousing provides complete safety of the goods. Keeping the goods intact and impervious to any kind of damage, our warehousing facility is available throughout the country. Our expert freight forwarders ensure that utmost care is taken while transit of goods to the warehouse and ensures undamaged care for stored items.</p>
                </div>
            <div className="h-full  md:w-[45%]"><Image src="/assets/warehouse/w-2.jpg" alt="plane" width={400} height={900} className="!h-full w-full object-cover rounded-2xl object-center" /></div>
            </div>
         </div>
        {/* mobile */}
         <div className="md:hidden flex flex-col items-center w-full my-20  justify-center gap-6 md:h-[100vh] mx-auto"> 
         <div className="h-full  w-[90%]"><Image src="/assets/warehouse/w-2.jpg" alt="plane" width={400} height={900} className="!h-full w-full object-cover rounded-2xl object-center" /></div>

 <div className={`relative  text-left w-[90%] md:w-[80%] flex flex-col items-center justify-center `}>

<h2 className="text-[35px] md:text-[40px] w-full leading-[1]  text-black font-semibold ">Warehousing & Distribution</h2>
        <p className="text-black font-medium py-4 text-[20px]   leading-[1.5] md:leading-[1.3] " style={{lineClamp:6}}>One of the most important element of supply chain management is warehousing. The proper storage and tracking of inventory ensures that delivery times are met and asset management costs are reduced. With the widest network, the best of cargo movement facilities and several value added services to choose from, Saami Logistics is one of the preferred distribution solution provider today.</p>
        </div>
        <div className="flex md:flex-row flex-col  w-[90%] md:w-[80%] gap-10 md:gap-0 justify-between h-[60%] mx-auto ">
                <div className="md:w-[50%] text-left flex flex-col gap-4 md:gap-6">
                <p className="font-medium text-[20px] leading-[1.3] ">We offer our customers flexible storage option with excellent warehousing facility. Our warehousing facilities are completely equipped to handle bulk cargo including various other requirements such as Break bulk .</p>


<p className="font-medium text-[20px] leading-[1.3] ">We are also capable of handling cargo that is in units, packages, crates, bags and much more.Well guarded and spacious, our warehousing provides complete safety of the goods. Keeping the goods intact and impervious to any kind of damage, our warehousing facility is available throughout the country. Our expert freight forwarders ensure that utmost care is taken while transit of goods to the warehouse and ensures undamaged care for stored items.</p>
                </div>
            </div>
         </div>
        </>
    )
}
export default warehouse
