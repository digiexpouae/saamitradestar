import Image from "next/image"
const services2=({img,heading,text})=>{
    return(

<div className="flex items-center justify-center w-full p-16 md:p-0 md:mb-16 ">
    <div className="flex md:flex-row flex-col items-center  justify-center md:justify-between w-4xl gap-8">
<div className="flex flex-col  md:w-1/2">
    <h2 className="text-4xl text-black font-medium">{heading}
    </h2>
    <p className="text-[#5A5A5A] text-xl">
        {text}
</p>
<div className="inline-block rounded-full w-32 p-[1px] bg-gradient-to-b from-[#ED3039] to-[#FF7D83]">
  <button className="w-full px-4 py-2 rounded-full bg-white text-[#ED3039]">
    Learn More
  </button>
</div>




  
  
  </div>
<div className="h-full md:w-1/2 flex justify-end ">
    <Image src={img}
     width={300} height={300} className="object-cover"/></div>
</div></div>

    )
}
export default services2