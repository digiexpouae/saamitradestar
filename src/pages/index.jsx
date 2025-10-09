import Header from "@/layout/header";
// import Section2 from "../components/section2/section2";
// import Section3 from "../components/section3/section3";
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
import Fadein from '../common/fadein'

import { motion } from 'framer-motion';
import Image from "next/image";
import Getintouch from "@/common/getintouch";
import Footer from '../layout/footer/footer'
import { useEffect } from "react";
const index=()=>{

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 4,
        ease: 'easein',
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
        <>
    <div className=" flex items-center relative h-[100vh] w-full justify-center">
<Header />
<Fadein>

<motion.div
  className="absolute inset-0 z-0 bg-cover bg-center flex flex-col items-center justify-center  overflow-hidden"
 variants={fadeVariants}
 initial="hidden"
 whileInView="visible"

 viewport={{ once: true, amount: 0.3 }}
 style={{ backgroundImage: "url('/assets/section1/h-1.webp')",borderBottomLeftRadius:'65px',borderBottomRightRadius:'65px', backgroundSize:'cover',backgroundPosition:'center' }}
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
      <span>Get In Touch</span>
    </div>
</button>

<button class="button bg-white" style={{border:'1px solid rgba(237, 48, 57, 1)'}}>
    <div class="button-inner text-[rgba(42, 42, 42, 1)]">
      <span>Learn more</span>
    </div>
</button>

</div>
  </div>
<div className="absolute inset-0 bg-cover flex flex-col items-center  translate-y-[70%]">
  <Image  src={'/assets/section1/globe.svg'}  width={600} height={1000} className="object-cover  globe-spin"/>
</div>
<div class="circle-animation absolute" style={{width:'300px',margin:'auto'}}>



</div>




</motion.div>
</Fadein>
</div> 
{/* <Section2 /> */}
<Homesectio2 />
<div className="py-20 md:px-10"> 
<Fadein> <Section2 heading={'Freight Forwarding'} text={`For over 20 years, we've delivered on our service commitments. 
`} img={'/assets/services/service-1.png'}  /></Fadein>
<Fadein> <Section3 heading={<>Warehousing & Distribution</>} text={`One of the most important element of supply chain management is warehousing.`} img={'/assets/services/s-2.png'}  /></Fadein>
<Fadein> <Section2 heading={'Transportation Services'} 
text={`With advancements in technology and the global trading, wenow have faster `} img={'/assets/services/s-3.png'}  /></Fadein>
<Fadein> <Section3 heading={'Sparepart Logistics'}
 text={`Without the speedy installation of spare parts and timely maintenance on the ground.`} img={'/assets/services/s-4.png'}  /></Fadein>

<Fadein> <Section2 heading={'Custom Clearance'} 
text={`The major activities of the Organization covers various disciplines of material handling. 
 `} img={'/assets/services/s-5.png'}  /></Fadein>
<Fadein> <Section3 heading={'IT Support'} 
text={`We have invested in world-class technology to manage your supply chain.`} img={'/assets/services/s-6.png'}  /></Fadein>
</div>
<Fadein><Sectionhomethree heading1={'Over the past 25 years,'} heading2={<>Saami  <br /> Tradestar Logistics Limited Has Pioneered <br /> Supply Chain Management Solutions</>} /> </Fadein>
 <Fadein><Section6 /></Fadein> 

<Getintouch />

<Fadein><Footer /></Fadein>
</>  )
}
export default index;