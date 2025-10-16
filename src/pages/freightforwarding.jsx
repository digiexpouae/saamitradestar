import Header from "@/layout/header"
import Freightforwarding from '../components/freightforwading/section1/section1'
// import Section2 from "@/components/freightforwading/section2/section2"
import Footer from "@/layout/footer/footer"
import HeroSection from "@/common/herosection"
import Fadein from '../common/fadein'
import Section2 from '../common/service2'
import Getintouch from "@/common/getintouch";
import Section3 from '../common/service3'
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
     <Fadein> <Section2 heading={'Air Freight'}   className={'md:mb-16 max-w-4xl mx-auto md:px-4'}  btn={false} text={'We have preferential agreements with the best airlines which provide us a guaranty of quality services. We offer innovating solutions and we deal with any kind of packages, whether small volumes or the freight of an entire airplane, or courier service.'} img={'/assets/freightforwarding/f-1.png' }/></Fadein>
     <Fadein> <Section3 heading={'Train Freight'} className={'md:mb-16 max-w-4xl mx-auto md:px-4'}  btn={false} text={'There has been a longstanding demand of Railways and for transparency in sharing of information to give the customers an upto-date business-like environment.'} img={'/assets/freightforwarding/f-2.png' }/></Fadein>
     <Fadein> <Section2 heading={'Truck Freight'} className={'md:mb-16 max-w-4xl mx-auto md:px-4'} btn={false} text={"We are one of the leading forwarders of groupage and part and full load transports. With a comprehensive and well-established network of our offices across the globe, we are able to meet our customers' demands for secure and timely transportation."} img={'/assets/freightforwarding/f-3.png' }/></Fadein>

     <Getintouch />
     <Fadein> <Footer /></Fadein>
     </div>
    )
}
export default freightforwarding