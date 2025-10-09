import HeroSection from "@/common/herosection"
import Section2 from "@/common/custom"
import Section3 from '../components/customerclearance/section2'
import Footer from "@/layout/footer/footer"
import Getintouch from "@/common/getintouch"
import Fadein from '@/common/fadein'
const customer=()=>{
    const description="The major activities of the Organization covers various disciplines of material handling. We have well-trained and approved customs clearing staff that enables precision and efficient clearance of goods at majour gateways through customs enabling consignee to receive goods in shortest possible duration."
    const description2="The major activities of the Organization covers various disciplines of material handling. We have well-trained and approved customs clearing staff that enables precision and efficient clearance of goods at majour gateways through customs enabling consignee to receive goods in shortest possible duration."
    return(
        <div>
            <HeroSection image="/assets/customer/c-1.jpg" heading="Customer Service"   className="bg-[#00000080]"/>
            <Fadein> <Section2  heading="Custom Clearance" text="" className=" " clsheading={'text-center'} clstext={'text-center'} cls4={'  hidden'} cls3={'md:w-full'}   /></Fadein>
            <Fadein> <Section3 /></Fadein>
            <Fadein><Getintouch /> </Fadein>
            <Fadein> <Footer /></Fadein>
        </div>
    )
}   
export default customer