import Image from "next/image"
const section1=()=>{
    return(
<div className="flex md:flex-row gap-4 flex-col max-w-5xl py-20 mx-auto px-4">
    <div className="md:w-1/2">
<h2 className={`text-4xl md:text-4xl w-full leading-[1] font-medium text-black   `}>Established in 1993 today Saami Tradestar Logistics is a leading Third Party Logistics Providers in India which is headed by 
Mr. Fohad A. Latiwala.</h2>
<p className={` py-4 text-[20px]   leading-[1.5] md:leading-[1.3] `}style={{lineClamp:6}}>We specializing in sensitive ,time-critical freight that requires high-degree of personal service. STL listens to its customers and gain a thought understanding of their requirements.</p>
</div>


<div className="md:w-1/2 h-[250px] my-10 flex items-center justify-center"><Image src={'/assets/about/Subtract.png'} width={400} height={400} /></div>
</div>
    )
}
export default section1