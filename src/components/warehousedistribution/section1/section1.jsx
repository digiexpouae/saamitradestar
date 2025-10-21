import Image from "next/image"
const warehouse=()=>{
    const text="Saami Tradedstar helps companies achieve a seamless supply chain at every step by offering reliable warehousing and distribution services. Our facilities are well-located, secure, and equipped with modern systems. These modern systems help us track our inventory quickly and accurately."
  const text2="We provide our customers with a flexible storage option and an excellent warehousing facility. We provide full warehousing and distribution ser vices, which means your goods can be delivered on time and in full. We also offer bespoke warehousing and distribution solutions."
  const text3="We help businesses grow with confidence by providing high-quality warehousing and distribution solutions. We ensure every shipment is handled smoothly and cost-effectively. You can track it in real time. We combine modern storage and distribution systems with skilled staff and smart warehouse logistics. Our services are tailored to meet the needs of various industries, such as retail and manufacturing."
  return(<>             
    <div className="hidden md:flex flex-col relative max-w-5xl p-8 items-center w-full my-10  justify-center gap-15  mx-auto" style={{color:'rgba(90, 90, 90, 1)'}}> 
 <div className={`relative  text-left flex flex-col items-center justify-center `}>
<h2 className="text-[35px] md:text-5xl w-full leading-[1]  text-black font-semibold text-center">Warehousing & Distribution</h2>
        <p className=" font-medium py-4 text-[20px]  leading-6 text-center " style={{lineClamp:6}}>{text}</p>
        </div>
        <div className="flex md:flex-row flex-col   gap-10 md:gap-5 justify-between  mx-auto ">
                <div className="md:w-1/2 text-left flex flex-col gap-4 md:gap-6">
                <p className="font-medium text-[20px] leading-6 ">{text2}</p>


<p className="font-medium text-[20px] leading-6 ">{text3}</p>
                </div>
            <div className="h-full  md:w-1/2"><Image src="/assets/warehouse/Subtract.png" alt="plane" width={400} height={900} className="!h-full  w-full object-cover  object-center" /></div>
            </div>
         <hr className="h-px w-[90%] px-4  mx-auto bg-[#000000] absolute -bottom-10" />

         </div>
        {/* mobile */}
         <div className="md:hidden flex flex-col items-center w-full my-20  justify-center gap-6 md:h-[100vh] mx-auto"> 
         <div className="h-full  w-[90%]"><Image src="/assets/warehouse/Subtract.png" alt="plane" width={400} height={900} className="!h-full w-full object-cover  object-center" /></div>

 <div className={`relative  text-left w-[90%] md:w-[80%] flex flex-col items-center justify-center `}>

<h2 className="text-[35px] md:text-[40px] w-full leading-[1]  text-black font-semibold ">Warehousing & Distribution</h2>
        <p className="text-black font-medium py-4 text-[20px]   leading-[1.5] md:leading-[1.3] " style={{lineClamp:6}}>{text}</p>
        </div>
        <div className="flex md:flex-row flex-col  w-[90%] md:w-[80%] gap-10 md:gap-0 justify-between h-[60%] mx-auto ">
                <div className="md:w-[50%] text-left flex flex-col gap-4 md:gap-6">
                <p className="font-medium text-[20px] leading-[1.3] ">{text2}</p>


<p className="font-medium text-[20px] leading-[1.3] ">{text3}</p>
                </div>
            </div>
          
         </div>
        </>
    )
}
export default warehouse
