
import Footer from "@/layout/footer/footer"
import HeroSection from "@/common/herosection"
import Section from '../components/ITsupport/section'
import Section2 from '../components/ITsupport/section2'
import Section3 from '../common/section2'
import Section4 from '../components/ITsupport/section3'
import Fadein from '../common/fadein'
const ITSupport=()=>{
    const description="Registered customers of Saami can make advanced queries on the status of their shipments, and can keep track of them. Customers have option of downloading the entire waybill tracking data - schedule the download, These customers can also generate and download various reports customized to meet their individual needs"
    const description2="Very soon we are launching some more new and exciting facilities to our e-commerce customers which will help them in analyzing their business growth."
    return(
        <div> 
            <HeroSection image="/assets/ITSupport/IT-1.jpg" heading="IT Support"   className="bg-[#00000080]"/>
            <Fadein> <Section /> </Fadein> 
            <Fadein> <Section2 /></Fadein>
            <Fadein> <Section4 /></Fadein>
            <Fadein> <Section3  heading="E-commerce Initiatives" headingcls={'!text-[30px]'} className2={'!hidden'} className="md:h-[35vh] " cls4={'  hidden'} cls3={'md:w-full'} description={description} clstext={'hidden'} description2={description2} desccls={'font-semibold'}  /></Fadein>

                    <Fadein> <Footer /></Fadein>
        </div>
    )
}
export default ITSupport