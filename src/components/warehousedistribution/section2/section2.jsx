import Image from "next/image"
const section2=()=>{
    return(
        <>
        <div className=" max-w-5xl hidden md:flex  p-6 md:p-10 m-auto rounded-2xl gap-10  flex-col md:flex-row   justify-between " >
                    <div className="h-full  md:w-[40%]"><Image src="/assets/warehouse/2.png" alt="plane" width={400} height={600} className=" object-cover  " /></div>

            <div className="md:w-[55%] text-center md:text-left"><h2 className="text-[30px] md:text-[40px] tracking-tighter font-semibold leading-[1.3] ">We Provide The Right Storage 
            Solutions For Your Business</h2>
            <ul className="font-medium text-[20px] leading-[1.3] " style={{listStyle:'disc',color:'rgba(90, 90, 90, 1)'}}>
  <li>Full pick-and-pack operation</li>
  <li>Order Quantity Optimization</li>
  <li>Safety/Min/Maximum stock determination</li>
  <li>Consignment inventory management</li>
  <li>Handling returns with RMA module</li>
  <li>Lead time analysis</li>
</ul>
        
            </div>
        </div>
         <div className="  w-[95%] block md:hidden  md:w-[80%] p-6 md:p-10 m-auto rounded-2xl gap-10 flex flex-col md:flex-row   justify-between ">

 <div className="md:w-[55%] text-left"><h2 className="text-[30px] md:text-[40px] tracking-tighter font-semibold leading-[1.3] ">We Provide The Right Storage 
 Solutions For Your Business</h2>
 <ul className="font-medium text-[20px] leading-[1.3] " style={{listStyle:'disc',color:'rgba(90, 90, 90, 1)'}}>
<li>Full pick-and-pack operation</li>
<li>Order Quantity Optimization</li>
<li>Safety/Min/Maximum stock determination</li>
<li>Consignment inventory management</li>
<li>Handling returns with RMA module</li>
<li>Lead time analysis</li>
</ul>

 </div>
 <div className="h-full  md:w-[40%]"><Image src="/assets/warehouse/2.png" alt="plane" width={400} height={600} className=" object-cover " /></div>

</div>
</>

    )
}
export default section2