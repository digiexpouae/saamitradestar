import Image from "next/image"
const section2=()=>{
    return(
        <div className="h-screen flex items-center justify-center w-full  container2" style={{backgroundColor:'rgba(255, 240, 241, 1)'}}>
<div className=" w-[80%]  md:w-[90%] lg:w-[80%] mx-auto h-full flex md:flex-row flex-col items-center justify-center gap-10 lg:gap-20 md:justify-between">
<div className="w-full h-1/3 lg:h-1/2 xl:h-[60%]  md:w-1/2 relative">
  <Image src={'/assets/Untitled-1.png'}  fill className="object-cover" />
  {/* <video src="/assets/SAAMI.mp4" className="h-full w-full absolute inset-0" playsInline muted loop autoPlay></video> */}
<div className="absolute inset-0 h-12 w-12 " style={{backgroundColor:'rgba(255, 240, 241, 1)',clipPath: 'polygon(0 0, 0% 100%, 100% 0)'}}></div>
<div className="absolute bottom-0 right-0 h-12 w-12  " style={{backgroundColor:'rgba(255, 240, 241, 1)',clipPath: 'polygon(0 0, 0% 100%, 100% 0)',transform:'rotate(180deg)'}}></div>
</div>
<div className="md:w-[60%] lg:w-1/2">
  <h2 className="text-4xl md:text-5xl font-semibold mb-4 upppercase"><span className="text-red-600">Tailored logistics services </span>powered <br /> by modern software.</h2>
  <p className="text-base  lg:text-xl leading-tight">
  Our connected network takes care of your fulfillment and shipping operations. Our modern software gives you the empowerment you need to drive efficiencies, reduce costs and improve customer experience.
  </p>
</div>
</div>
        </div>



    )
} 
export default section2