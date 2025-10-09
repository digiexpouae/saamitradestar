
import HeroSection from "@/common/herosection"
import Footer from "../layout/footer/footer"
import Section2 from "@/common/section2"
import Section3 from "../components/spareparts/spareparts"
import Getintouch from "@/common/getintouch"
import Fadein from '../common/fadein'
const spareparts=()=>{
    const text="Without the speedy installation of spare parts and timely maintenance on the ground, every Telecommunication industry will quickly fall behind in the competitive race. For this reason, efficient spare-parts logistics is necessary - not only in the Telecommunication industry but also in just about every sector."
    const description="As a third party logistics providers(3PLs) we have answered the market’s demand and services most of earth’s area and population in spare part industries. Themajor vertical industries in the spare parts logistics network are Automotive, Industrial , Electronic, Telecom and Technology."
    const description2="In short,the spare parts logistics marketis driven by high value manufactured products and their maintenance. To meet our customers requirements for the spare parts logistics market, we begin to work with several key principles like:-"
    return(
        <div className="">
            <HeroSection image="/assets/spareparts/s-1.jpg" heading="Spare Parts Logistics"   className="bg-[#00000080]"/>
          
            <Fadein> <Section2 image="/assets/spareparts/s-1.png" heading="Spare Part Logistics" clstext={'font-semibold text-[#5A5A5A]'} desccls={'font-semibold text-[#5A5A5A]'} desccls1={'font-semibold text-[#5A5A5A]'} desccls2={'font-semibold text-[#5A5A5A]'} text={text} clsheading={'md:text-center font-semibold text-[#5A5A5A]'} classNamemain={''} clstext={'text-center font-semibold text-[#5A5A5A]'} description={description } description2={description2} className2={'!hidden'} /></Fadein>
            <Fadein> <Section3  /></Fadein>
            <Fadein><Getintouch /></Fadein>
            <Fadein> <Footer /></Fadein>
        </div>
    )
}       
export default spareparts