import HeroSection from "@/common/herosection";
import Footer from "@/layout/footer/footer";
import Contactform from '@/components/contact/contactform' 
import Icons from '../components/contact/icons'
import Map from "@/components/contact/map";
import Fadein from '../common/fadein'
const contact=()=>{
    return(
        <div>
                              <HeroSection image="/assets/contact/c-1.webp" heading="Contact Us"   className="bg-[#00000080]"/>
         <Fadein>  <Contactform /></Fadein>
  
 {/* <Fadein> <Icons /></Fadein> */}
 <Fadein><Map /></Fadein> 
 <Fadein><Footer /></Fadein>
        </div>
    )

}
export default contact