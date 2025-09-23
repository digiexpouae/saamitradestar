
import {gsap} from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from 'react'
import {motion} from 'framer-motion'

const section3=()=>{
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };
    
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(true);

    gsap.set(".child-3, .child-4, .child-5", { yPercent: 550 });

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
          },
        });
        tl.to(".child-3", {  duration: 2})
        .to(".child-3", { yPercent: 0, duration: 2 })
          .to(".child-3", { yPercent: -550, duration: 3, ease: "power2.in" })
          .to(".child-4", { yPercent: 0, duration: 2})
          .to(".child-4", { yPercent: -550, duration: 3, ease: "power2.in" })
          .to(".child-5", { yPercent: 0, duration: 2 })
      },

      // Mobile
      "(max-width: 767px)": function () {
        const tlMobile = gsap.timeline({
          scrollTrigger: {
            trigger: ".container",
            start: "top top",
            scrub: true,
            snap: {
              snapTo: [0, 0.33, 0.66, 1], // 3 children (normalized progress)
              ease: "power1.inOut"
            },
            pin: true,
            end: "+=6000", // shorter scroll distance for mobile
      
          },
        });

        tlMobile
        // Child 3
        .to({}, { duration: 2 }) 
        .to(".child-3", { yPercent: 0, duration: 3, ease: "power3.inOut" }) // move into view
        .to({}, { duration: 1 }) // pause for 1s
        .to(".child-3", { yPercent: -250, duration: 3, ease: "power3.inOut" }) // move upward
      
        // Child 4
        .to(".child-4", { yPercent: 0, duration: 3, ease: "power3.inOut" })
        .to({}, { duration: 1 })
        .to(".child-4", { yPercent: -250, duration: 3, ease: "power3.inOut" })
      
        // Child 5
        .to(".child-5", { yPercent: 0, duration: 3, ease: "power3.inOut" })
        .to({}, { duration: 1 }); 

      },
    });

    // cleanup on unmount (important when using matchMedia)
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

    return(<div variants={fadeVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className='container h-[100vh] flex items-center justify-center w-full relative'>

        <div className="flex flex-col items-center  h-[40%] w-full justify-center overflow-hidden relative "><div className="child-3 absolute" ><h2 className="text-[50px] md:text-[70px]  tracking-tighter  font-semibold  ">In Surface Mode</h2></div>
<div className="child-4 absolute"><h2 className="text-[50px] md:text-[70px]  tracking-tighter  font-semibold  ">Air Mode</h2></div>
<div className="child-5 absolute"><h2 className="text-[50px] md:text-[70px]  tracking-tighter  font-semibold  ">Full Truck Load</h2></div></div>
    </div>)
}
export default section3