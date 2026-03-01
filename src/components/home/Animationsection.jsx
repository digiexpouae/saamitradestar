import { useEffect, useRef, useState } from "react";
import Header from "@/layout/header";
import Text from "./text";
import { motion } from 'framer-motion';
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import TrackShipment from "@/common/trackshipment";
import Tracking from '../../common/tracking'
import Video from '../../common/Video'
import Homesectio2 from '../../components/home/section2'
const home = () => {
  // const maincontainer = useRef()





  const sectionRef = useRef()
  const containerRef = useRef()
  const ref2 = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=2000`, // 👈 correct way

          pin: true,
          pinSpacing: true,        // ← explicitly keep spacer (default true, but be explicit)
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,

        },
      });

      tl.to(containerRef.current, {
        yPercent: -200,
        ease: "power2.out",
      });


      tl.to(ref2.current, {
        yPercent: -100,
        ease: "power2.out",
      }, "+=0.2")





    }, sectionRef);



    return () => ctx.revert();
  }, []);

  // const containerRef = useRef()


  return (
    <div className="flex items-center relative h-screen w-full justify-center overflow-hidden " ref={sectionRef}>


      <motion.div
        className="absolute inset-0 z-10 bg-white bg-cover bg-center flex flex-col items-center justify-center  h-[150vh] md:h-[180vh] " ref={containerRef}

        style={{
          backgroundImage: "url('/assets/section1/h-1.webp')", backgroundSize: 'cover', backgroundPosition: 'center',

          transformOrigin: 'center center',
        }}
      >

        <div className="flex flex-col items-center h-full justify-start  translate-y-[20%] md:translate-y-[15%]">
          <h2 className="text-4xl md:text-7xl  font-semibold flex flex-col items-center tracking-tighter" style={{ color: 'rgba(42, 42, 42, 1)' }}>We Make Shipping
            <span className="" style={{ color: 'rgba(238, 34, 61, 1)' }}>
              Faster & Easier
            </span>
          </h2>
          <span style={{ color: 'rgba(90, 90, 90, 1)' }} className="text-base text-center md:text-xl mb-6"> Call us for your navigational services needs anytime, anywhere</span>

          <TrackShipment />

        </div>



        <div className="absolute inset-0 bg-cover flex flex-col items-center translate-y-[55%]  md:translate-y-[40%]"
          style={{


            transformOrigin: 'center center',
          }}>
          <Image src={'/assets/globeCompressed.webp'} loading="lazy" width={600} height={1000} className="object-cover  globe-spin" />
        </div>






      </motion.div >
      <Video ref2={ref2} />
      <div className="absolute z-0 inset-0 w-full h-full">
        <Homesectio2 />
      </div>

    </div >)
}
export default home