import HeroSection from "@/common/herosection";
import Section2 from "@/common/section2";
import Section3 from "@/components/transportation/section"
import Footer from '../layout/footer/footer'
const Transportation=()=>{
    const text="With advancements in technology and the global trading, wenow have faster, safer and more reliable vehicles, both on rail and on road. The surface transportation is still the lifeline of economic growth. In the relocation industry, the need for faster and reliable means of transportation is increasing at a fast pace."
    const description="There are several alternative means to ship the belongings as well as people. With increasing fuel costs and importance of timely deliveries, a number of factors have also to be kept in mind while moving the goods or people."
    const description2="We also deliver the goods to project sites /Factory of importers etc. through employing surface transport. Our transport arrangements cover all parts of India and a very wide network in all majour countries. We also have the facility to transport the basic normal cargo."
    return(
<div>
    <HeroSection image="/assets/transportation/t-1.jpg" heading="Transportation Services"   className="bg-[#00000080]"/>
<Section2 image="/assets/transportation/t-2.JPG" heading="Transportation Services" text={text} description={description } description2={description2} />
<Section3 />
<Footer />
</div>
    )
}
export default Transportation