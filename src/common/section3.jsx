import Image from "next/image"
const warehouse=({image,heading,text,description,description2,className,className2,clstext,cls1,cls3,cls4,desccls,headingcls})=>{
    return(
    

    <div className="flex items-center  flex-col justify-center w-full">
{/* desktop */}
              <div className="hidden md:flex flex-col items-center w-full my-20  justify-center gap-6 mx-auto"> 
 <div className={`relative  text-left w-[90%] md:w-[80%] flex flex-col items-center justify-center ${cls1} `}>

        </div>
        <div className={`flex md:flex-row flex-col  w-[90%] md:w-[80%] gap-10 md:gap-0 justify-between  mx-auto ${className}`}>

                <div className={`md:w-[50%] text-left flex flex-col gap-4 md:gap-6 ${cls3}`}>
                <h2 className="text-[35px] md:text-[40px] w-full leading-[1]  text-black font-semibold ">{heading}</h2>
                <p className={`text-black font-medium py-4 text-[20px]   leading-[1.5] md:leading-[1.3] ${clstext} `}style={{lineClamp:6}}>{text}</p>
           
                </div>
            <div className={`h-full  md:w-[45%] ${cls4}`}><Image src={image} alt="plane" width={400} height={900} className="!h-full w-full object-cover rounded-2xl object-center" /></div>
            </div>
            <div className="w-[80%]">
            <p className="font-medium text-[20px] leading-[1.3] mb-6">{description}</p>


<p className={`font-medium text-[20px] leading-[1.3] ${desccls}`}>{description2}</p></div>
         </div>
                  {/* mobile */}
         <div className="flex md:hidden flex-col items-center w-full my-14  justify-center gap-6 mx-auto"> 

 <div className={`relative  text-left w-[90%] md:w-[80%] flex flex-col items-center justify-center ${cls1} `}>
<h2 className={`text-[35px] md:text-[40px] w-full leading-[1]  text-black font-semibold ${headingcls} `}>{heading}</h2>
        <p className={`text-black font-medium py-4 text-[20px]   leading-[1.5] md:leading-[1.3] ${clstext} `}style={{lineClamp:6}}>{text}</p>
        </div>
        <div className={`h-full w-[90%]  md:w-[45%] ${cls4}`}><Image src={image} alt="plane" width={400} height={900} className="!h-full w-full object-cover rounded-2xl object-center" /></div>

        <div className={`flex md:flex-row flex-col  w-[90%] md:w-[80%] gap-10 md:gap-0 justify-between  mx-auto ${className}`}>
                <div className={`md:w-[50%] text-left flex flex-col gap-4 md:gap-6 ${cls3}`}>
               <p className="font-medium text-[20px] leading-[1.3] ">{description}</p>


<p className="font-medium text-[20px] leading-[1.3] ">{description2}</p>
                </div>
            </div>

         </div>
                     <hr className={`w-[80%] h-[0.8px] bg-zinc-800 hidden md:block border-0 my-4 rounded-full ${className2}`} />
</div>
        
    )
}
export default warehouse
