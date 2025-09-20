import HeroSection from "@/common/herosection"
import Section2 from "@/common/section2"
import Section3 from '../components/customerclearance/section2'
import Footer from "@/layout/footer/footer"
const customer=()=>{
    const description="The major activities of the Organization covers various disciplines of material handling. We have well-trained and approved customs clearing staff that enables precision and efficient clearance of goods at majour gateways through customs enabling consignee to receive goods in shortest possible duration."
    const description2="The major activities of the Organization covers various disciplines of material handling. We have well-trained and approved customs clearing staff that enables precision and efficient clearance of goods at majour gateways through customs enabling consignee to receive goods in shortest possible duration."
    return(
        <div>
            <HeroSection image="/assets/customer/c-1.jpg" heading="Customer Service"   className="bg-[#00000080]"/>
            <Section2  heading="Custom Clearance" text="" className="md:h-[35vh] " cls4={'  hidden'} cls3={'md:w-full'} description={description} clstext={'hidden'} description2={description2}  />
            <Section3 />
            <Footer />
        </div>
    )
}   
export default customer