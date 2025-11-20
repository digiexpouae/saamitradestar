import Image from "next/image"

const section2=({heading})=>{
return(
    <div className="flex flex-col   max-w-5xl px-4 mx-auto" >
        <h2 className="text-4xl font-medium  text-start md:pl-10  md:text-[40px] mb-2  leading-[1]  text-black font-semibold " >Custom Clearance Control</h2>
    <div className=" hidden md:flex gap-10  p-10 pb-20 w-full  mx-auto">
 <div className="w-1/2">

    <div className="font-medium  text-[20px] space-y-4 " style={{color:'rgba(90, 90, 90, 1)'}} >

  <div className="flex items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold">Import/ Export Regulation Advice</p></div></div>
  <div className="flex items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold">Import/ Export Permits</p></div></div>
  <div className="flex items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold">Monitor Shipping Schedule</p></div></div>
  <div className="flex items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold">Supervision of Packing, Loading, Unloading</p></div></div>
  <div className="flex items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold">Preparation of Import/ Export Documents</p></div></div>
  <div className="flex items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold">Custom and Port examination of Cargo</p></div></div>
  <div className="flex items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold">Identification and Arrangement of suitable 
  mode of Transportation</p></div></div>



</div>
</div>
<div className="w-1/2">
    <Image src={'/assets/customer/customer.png'} alt="plane" width={500} height={600} className=" object-cover " />
</div>
    </div>
    {/* mobile */}
    <div className=" flex md:hidden gap-6  mb-10 max-w-5xl px-4 mx-auto items-center py-10 flex-col justify-center mx-auto">
    <div>
    <Image src={'/assets/customer/customer.png'} alt="plane" width={400} height={600} className=" object-cover  " />
</div>

<div className="">

<div className="font-medium  text-[20px] space-y-4 " style={{color:'rgba(90, 90, 90, 1)'}} >
<div className="flex  items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative
flex-shrink-0 relative
flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" width={80} height={80} /></div> <div> 
<p className="font-semibold">
Quick response to any request form our nearest warehouses        </p>
</div></div>
<div className="flex items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold">Import/ Export Regulation Advice</p></div></div>
<div className="flex items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold">Import/ Export Permits</p></div></div>
<div className="flex items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold">Monitor Shipping Schedule</p></div></div>
<div className="flex items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold">Supervision of Packing, Loading, Unloading</p></div></div>
<div className="flex items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold">Preparation of Import/ Export Documents</p></div></div>
<div className="flex items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold">Custom and Port examination of Cargo</p></div></div>
<div className="flex items-start  gap-3"><div className="w-8 h-8 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold">Identification and Arrangement of suitable 
mode of Transportation</p></div></div>



</div>
</div>

    </div>
    </div>
)       
}
export default section2