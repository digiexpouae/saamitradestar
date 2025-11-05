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

  const text1='We offer air freight services that are fast, safe, and handled by experts. Companies choose us for our quick freight forwarding services, customs expertise, and ongoing visibility. We handle every kind of package, from small to large volumes, and ensure that every shipment arrives on time.'
   const text2="Our Train Freight service is ideal for safe and eco-friendly shipment. Saami Tradestar bulk cargo moves safely with set schedules, ensuring less risk of delays. Our monitoring is constant throughout the journey."
   const text3="Saami Tradestar preloading freight ensures good quality and keeps lead times stable. We offer versatile truck freight services for both local and international needs. We keep your cargo on schedule and safe from start to finish by using just-in-time planning and real-time visibility. "
   
   return(<div className="">
   
<div className=" flex items-center relative h-[65vh] w-full justify-center">
{/* <Header />
<div
  className="absolute inset-0 z-0 bg-cover  " 
  style={{ backgroundImage: "url('/assets/freightforwarding/plane1.webp')",borderBottomLeftRadius:'65px',borderBottomRightRadius:'65px', backgroundSize:'cover',backgroundPosition:'center' }}
></div> */}
<HeroSection image="/assets/freightforwarding/plane1.webp" heading="Freight Forwarding"   className="bg-[#00000080]"/>
{/* <div className="absolute inset-0 z-10 bg-[#0000004D]  opacity-[0] flex items-center justify-center" style={{borderBottomLeftRadius:'65px',borderBottomRightRadius:'65px',}}>  <h2 className="text-[45px] md:text-[70px] tracking-tighter absolute top-[50%] md:top-[48%] text-white font-semibold ">Freight Forwarding</h2> </div> */}


     </div>
     <Fadein> <Freightforwarding /></Fadein>
     <Fadein> <Section2 heading={'Air Freight'}   className={'md:mb-16 max-w-4xl mx-auto md:px-4'}  btn={false} text={text1} img={'/assets/freightforwarding/f-1.png' }/></Fadein>
     <Fadein> <Section3 heading={'Train Freight'} className={'md:mb-16 max-w-4xl mx-auto md:px-4'}  btn={false} text={text2} img={'/assets/freightforwarding/f-2.png' }/></Fadein>
     <Fadein> <Section2 heading={'Truck Freight'} className={'md:mb-16 max-w-4xl mx-auto md:px-4'} btn={false} text={text3} img={'/assets/freightforwarding/f-3.png' }/></Fadein>

     <Getintouch />
     <Fadein> <Footer /></Fadein>
     </div>
    )
}
export default freightforwarding