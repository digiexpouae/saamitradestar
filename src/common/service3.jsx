import Image from "next/image"
import { forwardRef } from "react"
import Link from "next/link"
const services2=forwardRef(({img,heading,text,btn,className,link},ref)=>{
    return(

<div ref={ref} className={`flex items-center justify-center p-10 md:p-0   ${className}`}>
    <div className="flex md:flex-row flex-col items-center  justify-center md:justify-between  ">


     <div className="flex flex-col  mb-10 md:mb-0   md:w-1/2">
    <h2 className="text-4xl text-black font-medium">{heading}
    </h2>
    <p className="text-[#5A5A5A]  text-xl">
        {text}
</p>
{ btn && <div className=" mt-4 inline-block rounded-full w-32 p-[1px] bg-gradient-to-b from-[#ED3039] to-[#FF7D83]">
  <button className=" cursor-pointer hover:bg-red-100 w-full px-4 py-2 rounded-full bg-white text-[#ED3039]">
  <Link href={link}>  Learn More</Link>
  </button>
</div>}




  
  
  </div>
  <div className="h-full flex md:w-1/2 md:justify-end ">
    <Image src={img}
     width={300} height={300} className="object-cover"/></div>
</div></div>

    )
})
export default services2