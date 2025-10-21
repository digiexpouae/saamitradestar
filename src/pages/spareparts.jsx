
import HeroSection from "@/common/herosection"
import Footer from "../layout/footer/footer"
import Section2 from "@/common/section2"
import Section3 from "../components/spareparts/spareparts"
import Getintouch from "@/common/getintouch"
import Fadein from '../common/fadein'
const spareparts=()=>{
    const text="Our custom spare parts logistics program keeps your supply chain fast and reliable. Saami Tradestar focuses on spare parts inventory management and offers expert services, ensuring that vital equipment stays operational."
    const description="As a third-party logistics provider (3PL), we meet market demand by servicing most of the world’s areas and populations in the spare parts industry. We work with the automotive, industrial, electronics, telecommunications, and technology sectors"
    const description2="We ensure that each parts reach you quickly and stays tracked by combining smart spare parts inventory management, smooth distribution, and secure spare parts warehousing. Our method reduces downtime and boosts productivity. It also provides your firm with a reliable network of replacement parts."
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