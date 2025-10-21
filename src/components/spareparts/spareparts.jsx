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
    Quick responses to requests from the closest warehouses.   </p>
    </div></div>
  <div className="flex items-center  gap-3"><div className="w-12 h-12 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold text-[#5A5A5A]">Items that are broken or need to be replaced might move in both directions.</p></div></div>
  <div className="flex items-center  gap-3"><div className="w-12 h-12 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold text-[#5A5A5A]">All shipments come in safe, protective packaging.</p></div></div>
  <div className="flex items-center  gap-3"><div className="w-12 h-12 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold text-[#5A5A5A]">Tracking in real-time at every step</p></div></div>
  <div className="flex items-center  gap-3"><div className="w-12 h-12 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold text-[#5A5A5A]">Reporting on all items in a clear and precise manner.</p></div></div>
  <div className="flex items-center  gap-3"><div className="w-12 h-12 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold text-[#5A5A5A]">Verified e-proof for damaged materials sent back by customers.</p></div></div>




</div>
</div>
    )
}
export default section