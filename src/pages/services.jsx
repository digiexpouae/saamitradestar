import HeroSection from "@/common/herosection"
import Footer from "@/layout/footer/footer"
import Section1 from "../components/services/section1"
 import Section2 from '../components/section5/section5'
 import Fadein from '../common/fadein'
const services = () => {
return(<div>



<HeroSection image="/assets/services/s-1.webp" heading="Services"   className="bg-[#0000004D]"/>
<Fadein> <Section1 /></Fadein>
<Fadein> <Section2 className="hidden" /></Fadein>
<Fadein> <Footer /></Fadein>
</div>)
}
export default services