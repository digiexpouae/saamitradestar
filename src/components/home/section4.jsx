import Image from "next/image"
import Link from "next/link"
import { forwardRef } from "react"
forwardRef
const services2=forwardRef(({img,heading,text,btn,className},ref)=>{

    return(

<div className={`flex items-center justify-center w-full p-10 md:p-0  ${className}`} ref={ref}>
    <div className="flex lg:flex-row flex-col md:items-center  justify-center md:justify-between w-4xl gap-8">
    <div className="h-full md:w-1/2 flex md:justify-end ">
    <Image src={img}
     width={300} height={300} className="object-cover"/></div>
<div className="flex flex-col  md:w-1/2">
    <h2 className="text-4xl text-black font-medium">{heading}
    </h2>
    <p className="text-[#5A5A5A] text-xl">
        {text}
</p>
{btn && (
              <button className="mt-4 rounded-full w-32 p-[1px] bg-gradient-to-b from-[#ED3039] to-[#FF7D83]"   style={{ pointerEvents: "auto" }}>
                <Link
                  href="/transportation"
                  className="hover:bg-red-100 w-full px-4 py-2 rounded-full bg-white text-[#ED3039] cursor-pointer block text-center"
                >
                  Learn More
                </Link>
              </button>
            )}





  
  
  </div>


</div>


</div>

    )
})
export default services2