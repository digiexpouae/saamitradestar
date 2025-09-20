
const section1=({heading,text,className})=>{
    return(
        <div className={`relative w-[85%] text-center max-w-5xl  h-screen md:h-[70vh] mx-auto flex flex-col items-center justify-center ${className}`}>
<h2 className="text-[40px] w-full md:text-[50px] leading-[1]  text-black font-semibold ">{heading}</h2>
        <p className="text-black font-medium py-4 text-[20px] md:text-[22px]  text-semibold leading-[1.5] md:leading-[1.3] " style={{lineClamp:6}}>{text}</p>
        </div>
    )
}       
export default section1