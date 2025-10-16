import Image from "next/image"
import Link from "next/link"
const getintouch=()=>{
return(<>
{/* desktop */}
    <div className="hidden md:flex w-full items-center justify-center h-96 relative px-4"
     style={{background: 'linear-gradient(185.17deg , #FFF0F1 -21.25%, #FFFFFF 98.8%)'
    }}>
        <div className="flex items-center gap-4 justify-between w-84 max-w-5xl h-full mx-auto w-full ">
        <div className="w-1/2 h-full flex items-center justify-center">
        <div className="flex flex-col gap-4 ">
<h2 className="font-semibold text-5xl lg:text-7xl ">Get In Touch</h2>
<p className="text-lg md:text-xl " style={{color:'rgba(90, 90, 90, 1)'}}><>Call us for your navigational <br /> services needs anytime, anywhere</></p>
<div className="flex  gap-2">
<button class="button  " style={{backgroundColor:'rgba(237, 48, 57, 1)',border:'1px solid rgba(237, 48, 57, 1)'}}>

    <div class="button-inner text-white">
     <Link href="/contact"><span>Get In Touch</span></Link> 
    </div>
</button>

<button class="button bg-white" style={{border:'1px solid rgba(237, 48, 57, 1)'}}>
    <div class="button-inner text-[rgba(42, 42, 42, 1)]">
      <Link href="/services"><span>Learn more</span></Link>
    </div>
</button>

</div>
</div>
</div>
<div className=" relative  flex justify-end  h-full w-1/2"><Image src={'/assets/services/m-1.png'} width={700} height={420} className="object-contain -bottom-10"/></div>

</div>   </div>


{/* mobile */}
<div className="md:hidden flex w-full items-center justify-center h-screen relative"
     style={{background: 'linear-gradient(185.17deg , #FFF0F1 -21.25%, #FFFFFF 98.8%)'
    }}>
 <div className=" flex flex-col items-center gap-4 justify-between h-full w-5xl">
    <div className="flex items-center justify-center h-1/2">
 <div className="flex flex-col gap-4 p-6">
<h2 className="font-semibold text-6xl ">Get In Touch</h2>
<p className="text-base " style={{color:'rgba(90, 90, 90, 1)'}}><>Call us for your navigational services needs anytime, anywhere</></p>
<div className="flex  gap-2">
<button class="button  " style={{backgroundColor:'rgba(237, 48, 57, 1)',border:'1px solid rgba(237, 48, 57, 1)'}}>

    <div class="button-inner text-white">
      <Link href="/contact"><span>Get In Touch</span></Link>
    </div>
</button>

<button class="button bg-white" style={{border:'1px solid rgba(237, 48, 57, 1)'}}>
    <div class="button-inner text-[rgba(42, 42, 42, 1)]">
    <Link href="/services"> <span>Learn more</span></Link> 
    </div>
</button>

</div>
</div>
</div>

<div className="  h-1/2 w-full flex justify-end"><Image src={'/assets/services/m-1.png'} width={540} height={320} className="object-cover"/></div>


 
</div>  </div>
</>)
}
export default getintouch