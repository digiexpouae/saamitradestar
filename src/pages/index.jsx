import Header from "@/layout/header";
import Section2 from "../components/section2/section2";
import Section3 from "../components/section3/section3";
import Section4 from '../components/section4/section4'
import Section5 from '../components/section5/section5'
import Section7 from '../components/section7/section7'
import ServicesSection from "@/common/servicessection";
import Fadein from '../common/fadein'
import { motion } from 'framer-motion';

import Footer from '../layout/footer/footer'
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
  

    return(
        <>
    <div className=" flex items-center relative h-[100vh] w-full justify-center">
<Header />
<Fadein>

<motion.div
  className="absolute inset-0 z-0 bg-cover bg-center "
 variants={fadeVariants}
 initial="hidden"
 whileInView="visible"

 viewport={{ once: true, amount: 0.3 }}
 style={{ backgroundImage: "url('/assets/section1/1.png')",borderBottomLeftRadius:'65px',borderBottomRightRadius:'65px', backgroundSize:'cover',backgroundPosition:'center' }}
></motion.div>
</Fadein>
</div> 
<Section2 />
<Section3 />
<Fadein><Section4 /></Fadein>
<Fadein><Section5 /></Fadein>
<Fadein><Section7 /></Fadein>
<Fadein><Footer /></Fadein>
</>  )
}
export default index;