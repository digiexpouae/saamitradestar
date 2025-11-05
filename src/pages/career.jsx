
import HeroSection from "@/common/herosection"
import Section2 from '../common/section2'
import Footer from "@/layout/footer/footer"
import Career from "@/components/career/career"
import Opening from '../components/career/openingposition'
import Fadein from '../common/fadein'
import Getintouch from "@/common/getintouch"
const career=()=>{
    const heading="We is a team of more than 1500 STL-ites spread across multiple locations across the globe, having proven track record and professional skills, woven together with a common culture of trust & caring."
    const text="We offers its people freedom at work, unmatched leadership & the opportunity to grow at a rapid pace. It provides them challenging, interesting & motivating assignments which brings a sense of professional fulfillment."
    const description="The company encourages entrepreneurial skills thus, enabling and empowering employees to take appropriate risks. Employee participation is encouraged by inviting suggesions & opinions. This is coupled with competitive compensation & rewards and training through Core Development & Behaviour Development Programmes, to enable them to unleash their full potential."
    const description2="Today STL is growing at a rapid pace. This growth necessitate greater investment in talent. If you have the passion to excel in your career, We at STL provide you the right platform to translate your imaginations to reality."
    const description3="We have opportunities in various disciplines viz Supply Chain, Technology, Engineering, Finance, IT, HR, Sales, Marketing, Legal and many more. We invite you to be a part of this committed and professionally managed Indian multinational."
  return(<div>
                    <HeroSection image="/assets/career/career.webp" heading="Career"   className="bg-[#00000080]"/>
                 <Fadein> <Section2 cls4={'hidden'} cls3={'md:!w-[100%]'} desccls2={"!block md:!block"} heading={heading} text={text} clsheading={'text-center'} clstext={'text-center'} className2={'!hidden'}/></Fadein>
  <Fadein>    <Career /></Fadein>
  <Fadein>    <Opening /></Fadein>
  <Fadein><Getintouch /> </Fadein>
        <Fadein> <Footer /></Fadein>
    </div>)
}           
export default career