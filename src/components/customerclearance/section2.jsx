import Image from "next/image"

const section2=({heading})=>{
return(
    <>
    <div className=" hidden md:flex  p-10 w-full items-center justify-center mx-auto">
 <div className="w-[45%]">
    <h2 className="text-[35px] md:text-[40px] mb-2 w-full leading-[1]  text-black font-semibold ">Custom Clearance Control</h2>
    <ul className="font-medium  text-[20px]  " style={{listStyle:'disc'}} >
        <li>Import/ Export Regulation Advice</li>
        <li>Import/ Export Permits</li>
        <li>Monitor Shipping Schedule</li>
        <li>Supervision of Packing, Loading, Unloading</li>
        <li>Preparation of Import/ Export Documents</li>
        <li>Custom and Port examination of Cargo</li>
        <li>Identification and Arrangement of suitable mode of Transportation</li>
       
    </ul>
</div>
<div>
    <Image src={'/assets/customer/c-2.jpg'} alt="plane" width={400} height={600} className=" object-cover  rounded-2xl" />
</div>
    </div>
    <div className=" flex md:hidden gap-6 h-screen mb-4  w-[90%] items-center flex-col justify-center mx-auto">
    <div>
    <Image src={'/assets/customer/c-2.jpg'} alt="plane" width={400} height={600} className=" object-cover  rounded-2xl" />
</div>
 <div className="w-[90%]">
    <h2 className="text-[35px] md:text-[40px] mb-2 w-full leading-[1]  text-black font-semibold ">Custom Clearance Control</h2>
    <ul className="font-medium  text-[20px]  " style={{listStyle:'disc'}} >
        <li>Import/ Export Regulation Advice</li>
        <li>Import/ Export Permits</li>
        <li>Monitor Shipping Schedule</li>
        <li>Supervision of Packing, Loading, Unloading</li>
        <li>Preparation of Import/ Export Documents</li>
        <li>Custom and Port examination of Cargo</li>
        <li>Identification and Arrangement of suitable mode of Transportation</li>
       
    </ul>
</div>

    </div>
    </>
)       
}
export default section2