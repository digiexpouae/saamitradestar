import { useEffect } from "react"
import {gsap} from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
const section2=()=>{
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.normalizeScroll(true);
    
        // Create a timeline with ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero",       // the section container
            start: "top top",       // when section hits top of viewport
            scrub: 2,            // link progress to scrollbar
            pin: true,     
            end:"+=1000"  ,       // keeps the section pinned while animating
            markers: true,          // shows start/end markers (remove in prod)
          },
        });
    
        // Animate children
        tl.to(".child-1", { x: "-200%", duration: 0.5 },"+0.5")
          .to(".child-2", { x: "200%", duration: 0.5 }, "<")
          .to(".child-3", { y: "0%", duration: 0.5 }, "+1")
         // "<" makes it run at same time
      }, []);
    
    return(<div className="flex flex-col items-center justify-center " style={{flexDirection:'column'}}>
<div className="flex items-center justify-center mb-80 !overflow-hidden hero gap-[20px] md:gap-[60px] h-[100vh] relative w-full"><div className="child-1"><h2 className="text-[70px] md:text-[200px] tracking-tighter font-semibold uppercase">We</h2></div>

<div className="child-2"><h2 className="text-[70px] md:text-[200px]  tracking-tighter  font-semibold  uppercase">Expert</h2></div>
</div>


</div> )
}
export default section2