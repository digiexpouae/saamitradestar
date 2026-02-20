import Image from "next/image"
const section1=()=>{
    return(
<div className="flex md:flex-row gap-4 flex-col max-w-5xl py-20 mx-auto px-4">
    <div className="md:w-1/2">
<h2 className={`text-4xl md:text-4xl w-full leading-[1] font-medium text-black   `}>Established in 1993 today Saami Tradestar Logistics is a leading Third Party Logistics Providers in India which is headed by 
Mr. Fohad A. Latiwala.</h2>
<p className={` py-4 text-[20px]   leading-[1.5] md:leading-[1.3] `}style={{lineClamp:6}}>We specializing in sensitive ,time-critical freight that requires high-degree of personal service. STL listens to its customers and gain a thought understanding of their requirements.</p>
</div>


<div className="md:w-1/2  h-[250px] my-10 flex items-center justify-center md:justify-end">
<div className="relative h-full w-[90%]">

{/* <Image src={'/assets/about/Subtract.png'} width={400} height={400} /> */}
  <video
          src="/assets/saami_compressed.mp4"
          playsInline
            poster="/assets/placeholder_globe.JPG"   
          muted
          loop
        
          autoPlay
          className="absolute inset-0  h-full w-full object-cover"
        ></video>
                <div className='absolute -left-1  rotate-[-270deg]  -top-1  h-12 w-12 bg-white ' style={{clipPath:  'polygon(0 0, 0% 100%, 100% 100%)'}}></div>

        <div className='absolute -right-1 rotate-[-90deg]   -bottom-1  h-12 w-12 bg-white' style={{clipPath:  'polygon(0 0, 0% 100%, 100% 100%)'}}></div>
        <div className='absolute right-0 w-2 h-full  ' style={{  background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',filter:'blur(20px)'}}></div>
        <div className='absolute left-0 w-2 h-full  ' style={{  background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',filter:'blur(20px)'}}></div>
        <div className='absolute -bottom-2 h-4 w-full  ' style={{  background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',filter:'blur(20px)'}}></div>

</div>
</div>
</div>
    )
}
export default section1