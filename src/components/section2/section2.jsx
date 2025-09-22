import { useEffect } from "react"
import {gsap} from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
const section2=()=>{
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(true);
  
    ScrollTrigger.matchMedia({
      // Desktop (768px and up)
      "(min-width: 768px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            scrub: true, // smooth scrubbing
            pin: true,
            end: "+=1000",
          },
        });
        tl.to(".child-1", { x: 0, duration: 0.8, delay: 2 })
          .to(".child-2", { x: 0, duration: 0.8 })
          .to(".child-1", {
            x: "-250%",
            duration: 3,
            ease: "power2.in",
          })
          .to(
            ".child-2",
            {
              x: "250%",
              duration: 3,
              ease: "power2.in",
            },
            "<"
          );
      },
  
      // Mobile (below 768px)
      "(max-width: 767px)": function () {
        const tlMobile = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            scrub: true,
            pin: true,
            end: "+=1500", // shorter distance for mobile
          },
        });
  
        tlMobile
        // .to(".child-3", { duration: 10 }) // e
          .to(".child-1", { xPercent: -350, duration: 4,ease:'power2.in'})
          .to(".child-2", { xPercent: 350, duration: 4,ease:'power2.in' }, "<");
      },
    });
  
    // cleanup
    return () => {
      ScrollTrigger.kill();
    };
  }, []);
  
    
    return(<div className="flex items-center justify-center " style={{flexDirection:'column'}}>
<div className="flex flex-col md:flex-row items-center justify-center mb-80 !overflow-hidden hero gap-[5px] md:gap-[60px] h-[100vh] relative w-full"><div className="child-1"><h2 className="text-[80px] md:text-[200px] tracking-tighter font-semibold uppercase">We</h2></div>

<div className="child-2"><h2 className="text-[80px] md:text-[200px]  tracking-tighter  font-semibold  uppercase">Expert</h2></div>
</div>


</div> )
}
export default section2