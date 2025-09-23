import Header from "@/layout/header"
import Freightforwarding from '../components/freightforwading/section1/section1'
import Section2 from "@/components/freightforwading/section2/section2"
import Footer from "@/layout/footer/footer"
import HeroSection from "@/common/herosection"
import Fadein from '../common/fadein'
const freightforwarding=()=>{
    return(<div className="">
   
<div className=" flex items-center relative h-[65vh] w-full justify-center">
{/* <Header />
<div
  className="absolute inset-0 z-0 bg-cover  " 
  style={{ backgroundImage: "url('/assets/freightforwarding/plane1.webp')",borderBottomLeftRadius:'65px',borderBottomRightRadius:'65px', backgroundSize:'cover',backgroundPosition:'center' }}
></div> */}
<HeroSection image="/assets/freightforwarding/plane1.webp" heading="Freight Forwarding"   className="bg-[#00000080]"/>
<div className="absolute inset-0 z-10 bg-[#0000004D]  flex items-center justify-center" style={{borderBottomLeftRadius:'65px',borderBottomRightRadius:'65px',}}>  <h2 className="text-[45px] md:text-[70px] tracking-tighter absolute top-[50%] md:top-[48%] text-white font-semibold ">Freight Forwarding</h2> </div>
 
     </div>
     <Fadein> <Freightforwarding /></Fadein>
     <Fadein> <Section2 /></Fadein>
     <Fadein> <Footer /></Fadein>
     </div>
    )
}
export default freightforwarding