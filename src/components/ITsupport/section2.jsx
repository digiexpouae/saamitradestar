import Image from "next/image"
const section2=({heading,text,classNamep})=>{
    return(
        <div className="py-10">
            {/* Desktop */}
          <div className=" max-w-5xl mx-auto  p-6 md:p-10 m-auto  rounded-2xl gap-10 hidden md:flex flex-col md:flex-row  justify-between ">
              <div className=" w-1/2 text-center md:text-left"><h2 className="text-[30px] md:text-5xl  tracking-tighter font-semibold leading-[1.2] mb-4">{heading}</h2>
              <p className={`font-medium text-[20px] leading-[1.3] text-[#5A5A5A] ${classNamep}`}>{text}</p>
          
              </div>
          <div className=" w-1/2"><Image src="/assets/ITSupport/it-1.png" alt="plane" width={400} height={900} className=" object-cover object-right" /></div>
          </div>  
{/* Mobile */}
<div className="   max-w-5xl  mx-auto p-6 md:p-10 m-auto  rounded-2xl gap-10 flex md:hidden flex-col md:flex-row  justify-between ">
<div className="h-auto  md:w-[40%]"><Image src="/assets/ITSupport/it-1.png" alt="plane" width={400} height={900} className="h-full w-full object-cover object-right " /></div>

              <div className="md:w-[55%] text-left"><h2 className="text-[30px] md:text-[50px]  tracking-tighter font-semibold leading-[1.2] mb-4">{heading}</h2>
              <p className={`font-medium text-[20px] leading-[1.3] text-[#5A5A5A] ${classNamep}`}>{text}</p>
          
              </div>
          </div> 

        </div>
    )
}   
export default section2