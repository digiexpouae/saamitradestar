
import Footer from "@/layout/footer/footer"
import HeroSection from "@/common/herosection"
import Section from '../components/ITsupport/section'
import Section2 from '../components/ITsupport/section2'
import Section3 from '../common/section2'
import Section4 from '../components/ITsupport/section3'
const ITSupport=()=>{
    const description="Registered customers of Saami can make advanced queries on the status of their shipments, and can keep track of them. Customers have option of downloading the entire waybill tracking data - schedule the download, These customers can also generate and download various reports customized to meet their individual needs"
    const description2="Very soon we are launching some more new and exciting facilities to our e-commerce customers which will help them in analyzing their business growth."
    return(
        <div>
            <HeroSection image="/assets/ITSupport/IT-1.jpg" heading="IT Support"   className="bg-[#00000080]"/>
            <Section /> 
            <Section2 />
            <Section4 />
            <Section3  heading="E-commerce Initiatives" className2={'!hidden'} className="md:h-[35vh] " cls4={'  hidden'} cls3={'md:w-full'} description={description} clstext={'hidden'} description2={description2} desccls={'font-semibold'}  />

                    <Footer />
        </div>
    )
}
export default ITSupport