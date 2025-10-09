import Image from "next/image"
const section=()=>{
    return (
<div className=" rounded-2xl  max-w-5xl mx-auto    p-6   md:p-10    md:p-10 pb-10 md:pb-20 m-auto   gap-4 flex  flex-col   justify-center ">
{/* <h2 className="text-[30px] md:text-[40px]  tracking-tighter font-semibold ">Our Transportation facilities includes</h2> */}
<div className="font-medium  text-[20px] space-y-4 " >
  <div className="flex  items-center  gap-3"><div className="w-12 h-12 flex-shrink-0 relative
flex-shrink-0 relative
flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" width={80} height={80} /></div> <div> 
    <p className="font-semibold text-[#5A5A5A]">
    Quick response to any request form our nearest warehouses        </p>
    </div></div>
  <div className="flex items-center  gap-3"><div className="w-12 h-12 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold text-[#5A5A5A]">2 ways inbound and outbound for faulty items and its replaced items</p></div></div>
  <div className="flex items-center  gap-3"><div className="w-12 h-12 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold text-[#5A5A5A]">Secure packaging of the goods ordered</p></div></div>
  <div className="flex items-center  gap-3"><div className="w-12 h-12 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold text-[#5A5A5A]">End to end real time tracking of the full cycle</p></div></div>
  <div className="flex items-center  gap-3"><div className="w-12 h-12 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold text-[#5A5A5A]">Outstanding reports of all items</p></div></div>
  <div className="flex items-center  gap-3"><div className="w-12 h-12 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold text-[#5A5A5A]">E-proof of faulty material given by the client</p></div></div>

</div>
</div>
    )
}
export default section