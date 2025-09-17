
import {gsap} from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from 'react'


const section3=()=>{
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(true);

    gsap.set(".child-3, .child-4, .child-5", { yPercent: 250 });

    ScrollTrigger.matchMedia({
      // Desktop
      "(min-width: 768px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".container",
            start: "top top",
            scrub: 1,
            pin: true,
            end: "+=3000", // longer scroll distance for desktop
            markers: true,
          },
        });

        tl.to(".child-3", { yPercent: 0, duration: 2 })
          .to(".child-3", { yPercent: -250, duration: 1, ease: "power1.in" })
          .to(".child-4", { yPercent: 0, duration: 1 })
          .to(".child-4", { yPercent: -250, duration: 1, ease: "power1.in" })
          .to(".child-5", { yPercent: 0, duration: 2 })
      },

      // Mobile
      "(max-width: 767px)": function () {
        const tlMobile = gsap.timeline({
          scrollTrigger: {
            trigger: ".container",
            start: "top top",
            scrub: 0.5,
            snap: {
              snapTo: [0, 0.33, 0.66, 1], // 3 children (normalized progress)
              duration: 0.5,              // snap speed
              ease: "power1.inOut"
            },
            pin: true,
            end: "+=6000", // shorter scroll distance for mobile
      
          },
        });

        tlMobile
          .to(".child-3", { yPercent: 0, duration: 3 },"+2")
          .to(".child-3", { yPercent: -250, duration: 2, ease: "power1.in" })
          .to(".child-4", { yPercent: 0, duration: 2})
          .to(".child-4", { yPercent: -250, duration: 2, ease: "power1.in" })
          .to(".child-5", { yPercent: 0, duration: 2 })        
            .to(".child-5", {duration: 2 })

      },
    });

    // cleanup on unmount (important when using matchMedia)
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

    return(<div className='container h-[100vh] flex items-center justify-center w-full relative'>

        <div className="flex flex-col items-center  h-[40%] w-full justify-center overflow-hidden relative "><div className="child-3 absolute" ><h2 className="text-[50px] md:text-[70px]  tracking-tighter  font-semibold  ">In Surface Mode</h2></div>
<div className="child-4 absolute"><h2 className="text-[50px] md:text-[70px]  tracking-tighter  font-semibold  ">Air Mode</h2></div>
<div className="child-5 absolute"><h2 className="text-[50px] md:text-[70px]  tracking-tighter  font-semibold  ">Full Truck Load</h2></div></div>
    </div>)
}
export default section3