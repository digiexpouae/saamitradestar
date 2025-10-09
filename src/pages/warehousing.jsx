
import Header from "@/layout/header"
import Footer from '../layout/footer/footer'
import Section1 from '../common/section1'
import Fadein from'../common/fadein'
import Section from '../components/warehousedistribution/section1/section1'
import Section2 from '../components/warehousedistribution/section2/section2'
import Section3 from "@/components/warehousedistribution/section3/section3"
import Section4 from "@/components/warehousedistribution/section4/section4"
import HeroSection from "@/common/herosection"
import Getintouch from "@/common/getintouch"
const Warehouse=()=>{
return(<>

<HeroSection image="/assets/warehouse/w-1.jpg" heading="Warehousing & Distribution"   className="bg-[#0000004D]  "/>

{/* <Section1 className={'text-left'} heading="Warehousing & Distribution" text="One of the most important element of supply chain management is warehousing. The proper storage and tracking of inventory ensures that delivery times are met and asset management costs are reduced. With the widest network, the best of cargo movement facilities and several value added services to choose from, Saami Logistics is one of the preferred distribution solution provider today." /> */}
<Fadein> <Section /></Fadein>
<Fadein> <Section2 /></Fadein>
<Fadein> <Section3 /></Fadein>
<Fadein> <Section4 /></Fadein>
<Fadein><Getintouch /> </Fadein>
<Fadein> <Footer /></Fadein>

</>)
}
export default Warehouse