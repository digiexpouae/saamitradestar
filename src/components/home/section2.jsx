import Image from "next/image"
const section2=()=>{
    return(
        <div className="h-screen flex items-center justify-center w-full container2" style={{backgroundColor:'rgba(255, 240, 241, 1)'}}>

<div className="h-[60%] md:h-[80%] w-[70%] relative">
  <Image src={'/assets/section1/h-2.png'}  fill className="object-cover" />
<div className="absolute inset-0 h-12 w-12 " style={{backgroundColor:'rgba(255, 240, 241, 1)',clipPath: 'polygon(0 0, 0% 100%, 100% 0)'}}></div>
<div className="absolute bottom-0 right-0 h-12 w-12  " style={{backgroundColor:'rgba(255, 240, 241, 1)',clipPath: 'polygon(0 0, 0% 100%, 100% 0)',transform:'rotate(180deg)'}}></div>
</div>

        </div>

    )
}
export default section2