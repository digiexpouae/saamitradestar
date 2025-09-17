import Image from "next/image";
const header=()=>{
    return(
        <header className=" absolute top-4 z-20">
          

            <div className="bg-white px-4 py-2 flex justify-between items-center w-5xl h-[12vh]" style={{borderRadius:'45px'}}>
                
                <div className="w-1/4"> 
                <div className="w-full h-full"><Image src="/assets/header/saami.png" alt="logo" width={500} height={400} className="object-cover"/></div></div>
                <div className="flex w-1/2 items-center justify-end">
<div className="h-full"><Image src="/assets/header/2.png" alt="phone" width={250} height={250} className="object-cover"/></div>

                </div>
                <div className="h-full flex items-center"> <button className="bg-[#ED3039] rounded-full text-white h-12 w-32">Menu</button></div>
                 </div>
        </header>
    )       
}
export default header;