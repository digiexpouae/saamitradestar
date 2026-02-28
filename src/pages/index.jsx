import Header from "@/layout/footer/header-2"
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
import Image from "next/image";
import Getintouch from "@/common/getintouch";
import Home from "@/components/home/home";
import Footer from '../layout/footer/footer'
import Animationsection from '../components/home/Animationsection'
import { useEffect, useRef, useState } from "react";
const index = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const ref6 = useRef()
  const container = useRef()
  const containerRef = useRef()
  const headingref = useRef()
  const sectionRef = useRef()
  const [complete, setcomplete] = useState(false);
  const completeRef = useRef(complete);



  // lottie animation
  // useEffect(() => {
  //   completeRef.current = complete; // keep ref in sync
  // }, [complete]);





  return (<>
    <div className="">
      <Header complete={complete} />
      {/* <Home complete={complete} setcomplete={setcomplete} /> */}

      <Animationsection />





      {/* <div>
        <Homesectio2 />
      </div> */}

      {/* <Section2 /> */}





      <div className="relative h-full w-full ">
        <Scrollsection />

      </div>
      <Fadein><Sectionhomethree heading1={'Over the past 25 years,'} heading2={<> Saami <br /> Tradestar Logistics Limited Has Pioneered <br /> Supply Chain Management Solutions</>} text={'as a 3PL in Domestic and International Logistics. STL has carved a niche as a 3PL within the Service Parts Logistics (SPL) and Expedited Time Definite Air Service.'} /> </Fadein>
      <Fadein><Section6 /></Fadein>
      <Getintouch />

      <Fadein><Footer /></Fadein>

    </div ></>)
}
export default index;