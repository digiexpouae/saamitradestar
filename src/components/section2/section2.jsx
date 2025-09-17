import { useEffect } from "react"
import {gsap} from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
const section2=()=>{
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(true);

    // ScrollTrigger.matchMedia({
      // Desktop (768px and up)
      // "(min-width: 768px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            scrub: true, // smooth scrubbing (takes 1.5s to "catch up")
            pin: true,
            end:"+=2500"
          },
        });
    tl.to('.child-1',{x:0,duration:0.8})
    tl.to('.child-2',{x:0,duration:0.8})
        tl.to(".child-1", {
            x: "-250%",
            duration: 1.5,
            ease: "power2.inOut",
          })
          .to(".child-2", {
            x: "250%",
            duration: 1.5,
            ease: "power2.inOut",
          }, "<"); // runs at the same time as .child-1
    
      // // Mobile (below 768px)
      // "(max-width: 767px)": function () {
      //   const tlMobile = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: ".hero",
      //       start: "top top",
      //       scrub:0.5,
      //       pin: true,
      //       end: "+=1500", // shorter distance for mobile
      //     },
      //   });

      //   // Different animation for mobile
      //   tlMobile
      //     .to(".child-1", { xPercent: -200,yPercent:0, duration: 1 }, "+1.5")
      //     .to(".child-2", { xPercent: 200,yPercent:0, duration: 1 }, "<");
      // },
    // });

    // cleanup on unmount
    
  }, []);
    
    return(<div className="flex items-center justify-center " style={{flexDirection:'column'}}>
<div className="flex items-center justify-center mb-80 !overflow-hidden hero gap-[20px] md:gap-[60px] h-[100vh] relative w-full"><div className="child-1"><h2 className="text-[70px] md:text-[200px] tracking-tighter font-semibold uppercase">We</h2></div>

<div className="child-2"><h2 className="text-[70px] md:text-[200px]  tracking-tighter  font-semibold  uppercase">Expert</h2></div>
</div>


</div> )
}
export default section2