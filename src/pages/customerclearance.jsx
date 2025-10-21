import HeroSection from "@/common/herosection"
import Section2 from "@/common/custom"
import Section3 from '../components/customerclearance/section2'
import Footer from "@/layout/footer/footer"
import Getintouch from "@/common/getintouch"
import Fadein from '@/common/fadein'
const customer=()=>{
    const description="We provide expert customs clearance services to help you move your goods across borders quickly and easily. Our well-trained and skilled staff handles every part of customs clearance. We fill out paperwork and conduct inspections so that our clients can finish their business deals smoothly."
    const description2="Saami Tradestar manages import customs clearance to help you get your customs clearance certificate. We also offer reliable online support for customs clearance."
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