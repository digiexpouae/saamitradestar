import Header from "@/layout/header";
import Section2 from "../components/section2/section2";
import Section3 from "../components/section3/section3";
import Section4 from '../components/section4/section4'
import Section5 from '../components/section5/section5'
import Section7 from '../components/section7/section7'
import Footer from '../layout/footer/footer'
const index=()=>{



    return(
        <>
    <div className=" flex items-center relative h-[120vh] w-full justify-center">
<Header />
<div
  className="absolute inset-0 z-0 bg-cover bg-center "
  style={{ backgroundImage: "url('/assets/section1/1.png')",borderBottomLeftRadius:'55px',borderBottomRightRadius:'55px', backgroundSize:'cover',backgroundPosition:'center' }}
></div>

</div>  
<Section2 />
<Section3 />
<Section4 />
<Section5 />
<Section7 />
<Footer />
</>  )
}
export default index;