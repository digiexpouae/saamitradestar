import Header from "@/layout/header";
// import Section2 from "../components/section2/section2";
// import Section3 from "../components/section3/section3";
import Text from "@/components/home/text";
import Section4 from '../components/section4/section4'
import Section6 from '../components/section6/section6'
import Section7 from '../components/section7/section7'
import Homesectio2 from '../components/home/section2'
 import Section2 from '../common/service2'
 import gsap from "gsap";
 import Section3 from '../common/service3'
 import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ServicesSection from "@/common/servicessection";
import Sectionhomethree from '../components/home/section3'
import Section from '../components/home/section4'
import Section5 from '../components/home/section5'
import Service1 from '../components/home/section6'
import Service2 from '../components/home/section7'
import Fadein from '../common/fadein'
import Scrollsection from '../components/home/scroll'
import { motion } from 'framer-motion';
import Image from "next/image";
import Getintouch from "@/common/getintouch";
import Home from "@/components/home/home";
import Footer from '../layout/footer/footer'
import { useEffect, useRef } from "react";
const index=()=>{
const ref1=useRef()
const ref2=useRef()
const ref3=useRef()
const ref4=useRef()
const ref5=useRef()
const ref6=useRef()
const container=useRef()
const  containerRef=useRef()
const headingref=useRef()
const sectionRef=useRef()

// useEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);
//   ScrollTrigger.normalizeScroll(true);

//   const mm = ScrollTrigger.matchMedia();

//   mm.add("(min-width: 768px)", () => {
//     const sections = [ ref2, ref3, ref4, ref5, ref6];
//     const section = [ ref1,ref2, ref3, ref4, ref5, ref6];
//     // Initial positions: all start below viewport
//     gsap.set(sections.map(ref => ref.current), { yPercent: 500,duration:2,ease:'power2.out' });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container.current,
//         pin: true,
//         scrub: 3,
//         start: "top top",
//         end: "+=3000",
//         // markers: true,
//       },
//     });

//     // Animate each section one by one
//     section.forEach(ref => {
//       const el = ref.current;

//       tl.to(el, { yPercent: 0, duration: 2, ease: "power2.out" })
//         .to({}, { duration: 5 }) // hold
//         .to(el, { yPercent: -400, duration: 4, ease: "power2.in" }); // exit
//     });

//     // Return cleanup for this media query
//     return () => {
//       tl.kill();
//       ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   });

//   // Global cleanup
//   return () => mm.revert();
// }, []);


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
      end: "+=" + container.offsetHeight * 2,
       endTrigger:containertwo,       // how long to scroll while pinned
      scrub: true,
      pin: true,
     
      markers: true,   
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

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // duration: 4,
        // ease: 'easein',
      },
    },
  };
  
// useEffect(()=>{
//   gsap.registerPlugin(ScrollTrigger);

//   let anim = lottie.loadAnimation({
//     container: document.getElementById('lottieContainer'),
//     renderer: 'svg',
//     loop: false,
//     autoplay: false,
//     path: 'https://cdn.prod.website-files.com/6490383845d4c0f51f929ca8/6740a1f4b359606d03562dd2_loka_circle_mask_reveal.lottie'
//   });
  
//   ScrollTrigger.create({
//     trigger: '#lottieContainer',
//     start: 'top 80%',
//     end: 'bottom 50%',
//     scrub: true,
//     onUpdate: self => {
//       const frame = anim.totalFrames * self.progress;
//       anim.goToAndStop(frame, true);
//     }
//   });
// },[])
    return(
        <div className="overflow-hidden">
<Home />

{/* <Section2 /> */}
<Homesectio2 />


<Fadein><Sectionhomethree heading1={'Over the past 25 years,'} heading2={<> Saami <br /> Tradestar Logistics Limited Has Pioneered <br /> Supply Chain Management Solutions</>} text={'as a 3PL in Domestic and International Logistics. STL has carved a niche as a 3PL within the Service Parts Logistics (SPL) and Expedited Time Definite Air Service.'}/> </Fadein>
 <Fadein><Section6 /></Fadein> 
<div className="relative">
<Scrollsection /></div>
<Getintouch />

<Fadein><Footer /></Fadein>
</div>  )
}
export default index;