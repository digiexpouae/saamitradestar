import { useEffect, useRef } from "react";
import Header from "@/layout/header";
import Text from "./text";
import { motion } from 'framer-motion';
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
const home=()=>{
const maincontainer=useRef()

    const sectionRef=useRef()
    const containerRef=useRef()
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.normalizeScroll(true);
        const section = sectionRef.current;
        const container = containerRef.current;
        if (!section || !container) return;
        const containertwo=document.querySelector('.container2')
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,   // ✅ use .current
            start: "top top",
            end: "+=2000",
             endTrigger:containertwo,       // how long to scroll while pinned
            scrub: true,
            pin: true,
            pinSpacing:true,
            // markers: true,   
               // 🔧 remove later
          },
        });
      
        // 👇 Example animation: fade in + move upward
        tl.to(section, {
          opacity: 1,
          y: -200,
          duration: 4,
          ease: "power2.out",
        });
      
        return () => {
          ScrollTrigger.getAll().forEach((st) => st.kill());
        };
      }, []);
      
return(
<div className=" flex items-center relative h-[100vh] w-full justify-center  " ref={containerRef}>
<Header />
<Text sectionRef={maincontainer}/>
<motion.div
ref={maincontainer}
  className="absolute inset-0 z-0 bg-cover bg-center flex flex-col items-center justify-center   overflow-hidden"
// //  variants={fadeVariants}
//  initial="hidden"
//  whileInView="visible"

//  viewport={{ once: true, amount: 0.3 }}
 style={{ backgroundImage: "url('/assets/section1/h-1.webp')",borderBottomLeftRadius:'65px',borderBottomRightRadius:'65px', backgroundSize:'cover',backgroundPosition:'center',clipPath: 'circle(0% at 50% 50%)', // start hidden as circle
    transformOrigin: 'center center', }}
>
  <div className="-translate-y-10 flex flex-col items-center justify-center ">
<h2 className="text-4xl md:text-7xl  font-semibold flex flex-col items-center" style={{color:'rgba(42, 42, 42, 1)'}}>We Make Shipping
      <span className="" style={{color:'rgba(238, 34, 61, 1)'}}>
      Faster & Easier
      </span>
    </h2>
    <span style={{color:'rgba(90, 90, 90, 1)'}} className="text-base text-center md:text-xl mb-6"> Call us for your navigational services needs anytime, anywhere</span>
    <div className="flex  gap-2">
<button class="button  " style={{backgroundColor:'rgba(237, 48, 57, 1)',border:'1px solid rgba(237, 48, 57, 1)'}}>

    <div class="button-inner text-white">
    <Link href='/contact'>  <span>Get In Touch</span></Link>
    </div>
</button>

<button class="button bg-white" style={{border:'1px solid rgba(237, 48, 57, 1)'}}>
    <div class="button-inner text-[rgba(42, 42, 42, 1)]">
    <Link href='/services'>  <span>Learn more</span></Link>
    </div>
</button>

</div>
  </div>
<div className="absolute inset-0 bg-cover flex flex-col items-center  translate-y-[70%]">
  <Image  src={'/assets/section1/globe.svg'}  width={600} height={1000} className="object-cover  globe-spin"/>
</div>
<div class="circle-animation absolute" style={{width:'300px',margin:'auto'}}>



</div>



<div ref={sectionRef}></div>
</motion.div>

</div> )
}
export default home