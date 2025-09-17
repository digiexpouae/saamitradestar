
import {gsap} from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from 'react'


const section3=()=>{
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        // normalize scroll across devices (touch, wheel, trackpad)
        ScrollTrigger.normalizeScroll(true);
    
        gsap.set('.child-3,.child-4,.child-5',{yPercent:250});
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".container",
            start: "top top",
            scrub: 2,        // smoother scrubbing (higher = smoother but laggier)
            pin: true,
            end: "+=1500",   // longer scroll distance = smoother animation
            markers: true,
          },
        });
 
    
        tl.to(".child-3",{ yPercent: 0, duration: 2})
        .to(".child-3", { yPercent: -250, duration: 2,ease:'power1.in' })
        .to(".child-4", { yPercent: 0, duration: 1})
        .to(".child-4", { yPercent:-250, duration: 2 ,ease:'power1.in'})
        // The next animation will start after the previous one finishes.
        .to(".child-5", { yPercent:0, duration: 2 })
        .to(".child-5", { yPercent: 0, duration: 1 });

        }, 
      []);
    return(<div className='container h-[100vh] flex items-center justify-center w-full relative'>

        <div className="flex flex-col items-center  h-[40%] w-full justify-center overflow-hidden relative "><div className="child-3 absolute" ><h2 className="text-[50px] md:text-[70px]  tracking-tighter  font-semibold  ">In Surface Mode</h2></div>
<div className="child-4 absolute"><h2 className="text-[50px] md:text-[70px]  tracking-tighter  font-semibold  ">Air Mode</h2></div>
<div className="child-5 absolute"><h2 className="text-[50px] md:text-[70px]  tracking-tighter  font-semibold  ">Full Truck Load</h2></div></div>
    </div>)
}
export default section3