import Image from "next/image"
const certification=()=>{
    return(
    
    <div className="bg-[linear-gradient(185.17deg,#FFF0F1_-21.25%,#FFFFFF_98.8%)] w-full py-20 ">
<div className="flex flex-col  max-w-5xl mx-auto px-4 ">


<div className="flex flex-col ">

<h2 className="text-5xl md:text-7xl font-semibold text-center">Approvals & Certifications</h2>
<div className="flex  items-center justify-between py-10 " style={{flexWrap:'wrap'}}>

<div className="flex flex-col w-full md:w-1/2  lg:w-[30%]"><p className="text-center text-lg mb-2">CRISIL MSE Rating</p><div className="h-[200px] w-full relative"><Image src={'/assets/about/c-1.webp'} className="object-fit rounded-2xl" sizes="(max-width:768px)80vw,(max-width:1200px)40vw,30vw"  fill /></div></div>
<div className="flex flex-col w-full md:w-1/2  lg:w-[30%]"><p className="text-center text-lg mb-2">Certification Quality Management System</p><div className="h-[400px] w-full relative"><Image src={'/assets/about/c2.webp'} className="object-fit rounded-2xl" sizes="(max-width:768px)80vw,(max-width:1200px)40vw,30vw"  fill /></div></div>
<div className="flex flex-col w-full md:w-1/2  lg:w-[30%]"><p className="text-center text-lg mb-2">Certification Of Accreditation</p><div className="h-[200px] w-full relative"><Image src={'/assets/about/c3.webp'} className="object-fit rounded-2xl" sizes="(max-width:768px)80vw,(max-width:1200px)40vw,30vw"  fill /></div></div>

</div>

</div>
<div className="flex flex-col py-10">

<h2 className="text-5xl  mb-8 text-center md:text-7xl font-semibold">
Achievements 
</h2>
<div className="flex w-full  justify-center gap-4 lg:gap-6" style={{flexWrap:'wrap'}}>
<div className="h-[200px] flex items-center justify-center w-full md:w-2/5 relative "><Image src={'/assets/about/c4.webp'}  className=" rounded-xl w-full h-auto" height={250} width={300} /></div>
<div className="h-[200px] flex items-center justify-center w-full md:w-2/5 relative "><Image src={'/assets/about/c5.webp'}  className=" rounded-xl w-full h-auto" height={250} width={300} /></div>
<div className="h-[500px] flex items-center justify-center w-full md:w-2/5 relative "><Image src={'/assets/about/c6.webp'}  className="w-[90%]  h-auto rounded-xl" height={350} width={300} /></div>
<div className="h-[500px] flex items-center justify-center w-full md:w-2/5 relative "><Image src={'/assets/about/c7.webp'}  className="w-[90%] md:w-full h-auto rounded-xl" height={350} width={300} /></div>

</div>
</div>
</div>



    </div>)
}
export default certification