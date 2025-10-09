import Image from "next/image"
const section=()=>{
    return (
<div className=" rounded-2xl  max-w-5xl p-6 md:p-10 pb-10 md:pb-20 m-auto   gap-4 flex  flex-col   justify-center ">
<h2 className="text-4xl md:text-5xl  tracking-tighter font-semibold ">Our Transportation Facilities Includes</h2>
<div className="font-medium  text-[20px] space-y-4 " >
  <div className="flex  items-center  gap-3"><div className="w-10 h-10 flex-shrink-0 relative
flex-shrink-0 relative
flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" width={80} height={80} /></div> <div> 
    <p className="font-semibold text-[#5A5A5A]">JIT (Just In Time) delivery, transporting only what is needed, when neededmaintains stable lead times</p>
    </div></div>
  <div className="flex items-center  gap-3"><div className="w-10 h-10 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold text-[#5A5A5A]">Avoid the rising risk of cargo damage, breakage, theft, and loss</p></div></div>
  <div className="flex items-center  gap-3"><div className="w-10 h-10 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold text-[#5A5A5A]">Front-to-end tracking of freight handpng</p></div></div>
  <div className="flex items-center  gap-3"><div className="w-10 h-10 flex-shrink-0 relative"><Image src={'/assets/tick.svg'} className="object-cover" fill /></div> <div> <p className="font-semibold text-[#5A5A5A]">Preloading cargo assures quality, prevents left-off cargo and maintains stable lead times</p></div></div>
</div>
</div>
    )
}
export default section