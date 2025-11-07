import HeroSection from "@/common/herosection"
import Footer from "@/layout/footer/footer"
import Section1 from "../components/services/section1"
 import Section2 from '../common/service2'
 import Section3 from '../common/service3'
 import Getintouch from "@/common/getintouch"
 import Fadein from '../common/fadein'
const services = () => {
return(<div>



<HeroSection image="/assets/services/s-1.webp" heading="Services"   className="bg-[#0000004D]"/>
<Fadein> <Section1 /></Fadein>
<Fadein> <Section3 btn={true}  link="/freightforwarding"  className={'md:mb-16 max-w-4xl mx-auto md:px-4'} heading={'Freight Forwarding'} text={`For over 20 years, we've delivered on our service commitments. 
`} img={'/assets/services/service-1.png'}  /></Fadein>
<Fadein> <Section2 btn={true} link="/warehousing" className={'md:mb-16 max-w-4xl mx-auto md:px-4'} heading={<>Warehousing & Distribution</>} text={`One of the most important element of supply chain management is warehousing.`} img={'/assets/services/s-2.png'}  /></Fadein>
<Fadein> <Section3 btn={true}  link="/transportation" className={'md:mb-16 max-w-4xl mx-auto md:px-4'} heading={'Transportation Services'} 
text={`With advanced technology and global reach, we ensure your shipments move safely, efficiently, and on time.`} img={'/assets/services/s-3.png'}  /></Fadein>
<Fadein> <Section2 btn={true} link="/spareparts" className={'md:mb-16 max-w-4xl mx-auto md:px-4'} heading={'Sparepart Logistics'}
 text={`Without the speedy installation of spare parts and timely maintenance on the ground.`} img={'/assets/services/s-4.png'}  /></Fadein>

<Fadein> <Section3 btn={true} link="/customerclearance" className={'md:mb-16 max-w-4xl mx-auto md:px-4'} heading={'Custom Clearance'} 
text={`The major activities of the Organization covers various disciplines of material handling. 
 `} img={'/assets/services/s-5.png'}  /></Fadein>
<Fadein> <Section2 btn={true} link="/ITSupport" className={'md:mb-16 max-w-4xl mx-auto md:px-4'} heading={'IT Support'} 
text={`We have invested in world-class technology to manage your supply chain.`} img={'/assets/services/s-6.png'}  /></Fadein>


<Getintouch />


<Fadein> <Footer /></Fadein>
</div>)
}
export default services