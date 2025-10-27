import HeroSection from "@/common/herosection";
import Section2 from "@/common/section2";
import Section3 from "@/components/transportation/section"
import Footer from '../layout/footer/footer'
import Fadein from '../common/fadein'
import Getintouch from "@/common/getintouch";
const Transportation=()=>{
    const text="Saami Tradedstar provides proven transport services in India. We connect businesses to key trade centers locally and globally. Our transport is designed to be flexible on both rail and on road so that we can move items safely and on time in any situation."
    const description="We specialize in flexible cargo services in India. We handle both bulk and time-sensitive shipments. We focus on road transport in logistics, using trucks and rail. This approach speeds up delivery times and keeps clients informed."
    const description2="We help businesses grow confidently with our reliable surface transportation services and custom solutions. Saami Tradestar cargo services in India offer reliable transport services and integrated road transportation in logistics. We also provide multimodal solutions, including rail transport, to cover every aspect of your supply chain."
    return(
<div>
    <HeroSection image="/assets/transportation/t-1.jpg" heading="Transportation Services"   className="bg-[#00000080]"/>
<Fadein> <Section2  clstext={'md:text-center font-semibold text-[#5A5A5A]'} desccls={'!font-semibold !text-[#5A5A5A]'} desccls1={'font-semibold text-[#5A5A5A]'} desccls2={'font-semibold text-[#5A5A5A]'} cls1={'font-semibold text-[#5A5A5A]'} image="/assets/transportation/transportation.png" classNamemain={'gap-5'} heading="Transportation Services" text={text} description={description } clsheading={'md:text-center'} description2={description2} /></Fadein>
<Fadein> <Section3 /></Fadein>
<Fadein> <Getintouch /></Fadein>
<Fadein> <Footer /></Fadein>
</div>
    )
}
export default Transportation