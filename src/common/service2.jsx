import Image from "next/image"
import { forwardRef } from "react"
import Link from "next/link"
const services2=forwardRef(({img,heading,text,btn,className,link},ref)=>{

    return(
<>
{/* desktop */}
<div className={`flex items-center justify-center  p-10 md:p-0  ${className}`} ref={ref} style={{willChange:'transform'}}>
    <div className="flex md:flex-row flex-col md:items-center w-full justify-center md:justify-between  ">

<div className="h-full md:w-1/2  flex md:justify-start ">
    <Image src={img}
     width={300} height={300} className="object-cover "/></div>
     <div className="flex flex-col mt-10 md:mt-0   md:w-1/2">
    <h2 className="text-4xl text-black font-medium">{heading}
    </h2>
    <p className="text-[#5A5A5A] text-xl">
        {text}
</p>
{btn && <div className=" mt-4 inline-block rounded-full w-32 p-[1px] bg-gradient-to-b from-[#ED3039] to-[#FF7D83]">
 <button className= "cursor-pointer hover:bg-red-100 w-full px-4 py-2 rounded-full bg-white text-[#ED3039]">
   <Link href={link}>Learn More</Link> 
  </button>
</div>}

  </div>
</div></div>
{/* mobile */}
{/* <div className={`md:hidden flex items-center justify-center w-full p-10 md:p-0 md:mb-16  ${className}`} ref={ref} style={{willChange:'transform'}}>
    <div className="flex md:flex-row flex-col md:items-center  justify-center md:justify-between w-4xl gap-8">
<div className="flex flex-col  md:w-1/2">
    <h2 className="text-4xl text-black font-medium">{heading}
    </h2>
    <p className="text-[#5A5A5A] text-xl">
        {text}
</p>
{btn && <div className=" mt-4 inline-block rounded-full w-32 p-[1px] bg-gradient-to-b from-[#ED3039] to-[#FF7D83]">
 <button className="w-full px-4 py-2 rounded-full bg-white text-[#ED3039]">
    Learn More
  </button>
</div>}

  </div>
<div className="h-full md:w-1/2 flex md:justify-end ">
    <Image src={img}
     width={300} height={300} className="object-cover"/></div>
</div></div> */}
</>
    )
})
export default services2