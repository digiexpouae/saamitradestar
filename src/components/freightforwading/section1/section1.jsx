const section1=()=>{
    const text="Saami Tradedstar is one of the top freight forwarding companies in India. We offer tailored freight forwarding services perfect for every shipment. Our skilled team expertly handles freight forwarding by air, train, and truck. We stand out among the leading freight forwarding companies by offering seamless services that simplify logistics, reduce delays, and ensure product safety worldwide."
    return(
        <div className="relative max-w-5xl text-center max-w-5xl p-8 md:py-20  mx-auto flex flex-col items-center justify-center mt-10 md:mt-0 ">
<h2 className="text-[40px] md:text-[50px] leading-[1]  text-black font-semibold ">Freight Forwarding</h2>
        <p className="text-[#5A5A5A] font-medium py-4 text-[20px] md:text-[22px] text-center text-semibold leading-[1.5] md:leading-[1.3] " style={{lineClamp:6}}>{text}</p>
        </div>
    )
}       
export default section1