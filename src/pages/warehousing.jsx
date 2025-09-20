
import Header from "@/layout/header"
import Footer from '../layout/footer/footer'
import Section1 from '../common/section1/section1'
import Section from '../components/warehousedistribution/section1/section1'
import Section2 from '../components/warehousedistribution/section2/section2'
import Section3 from "@/components/warehousedistribution/section3/section3"
import Section4 from "@/components/warehousedistribution/section4/section4"
const Warehouse=()=>{
return(<div> 
<div className=" flex items-center relative h-[65vh] w-full justify-center">
<Header />
<div
  className="absolute inset-0 z-0 bg-cover  " 
  style={{ backgroundImage: "url('/assets/warehouse/w-1.jpg')",borderBottomLeftRadius:'65px',borderBottomRightRadius:'65px', backgroundSize:'cover',backgroundPosition:'center' }}
></div>
<div className="absolute inset-0 z-10 bg-[#0000004D]  flex items-center justify-center" style={{borderBottomLeftRadius:'65px',borderBottomRightRadius:'65px',}}>  <h2 className="text-[45px] text-center md:text-[70px] tracking-tighter absolute top-[50%] md:top-[48%] text-white font-semibold ">Warehousing & Distribution</h2> </div>

</div>
{/* <Section1 className={'text-left'} heading="Warehousing & Distribution" text="One of the most important element of supply chain management is warehousing. The proper storage and tracking of inventory ensures that delivery times are met and asset management costs are reduced. With the widest network, the best of cargo movement facilities and several value added services to choose from, Saami Logistics is one of the preferred distribution solution provider today." /> */}
<Section />
<Section2 />
<Section3 />
<Section4 />
<Footer />
</div>)
}
export default Warehouse