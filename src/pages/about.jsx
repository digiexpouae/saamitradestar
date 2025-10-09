import HeroSection from "@/common/herosection";
import Section2 from "@/common/section2";
import Footer from '../layout/footer/footer'
import Section3 from '../components/about/section'
import Section4 from '../components/about/section2'
import Section5 from '../common/section3'
import Section6 from '../components/section6/section6'
import Fadein from '../common/fadein'
import Section1 from "@/components/about/section1";
import Sectionhomethree from '../components/home/section3'
import Section from '../components/about/section3'
import Certification from "@/components/about/certifications";
const about = () => {
    const heading ="Established in 1993 today Saami Tradestar Logistics is a leading Third Party Logistics Providers in India which is headed by Mr. Fohad A. Latiwala."
    const text="We specializing in sensitive ,time-critical freight that requires high-degree of personal service. STL listens to its customers and gain a thought understanding of their requirements."
    const description="Over the years since our foundation, the company slowly expands business module into warehousing, Transportation, Distribution, Local delivery to cater to the growing customer requirement. A committed team of more than 1,500 logistics specialists across india with a goal to provide innovative and sustainabale solutions to our customers."
    const description2="We specialize in providing Integrated Operations, Transportation and Warehousing Services to corporate and individual customers at large. We are attuned to ply and meet all the requirements of our clients. We are commited to our customers and shall alter our services to meet specific requirements."
   const heading2="Quality Commitments"
   const text2="For Saami Tradestar, quality is to identify , define and meet the stated and unstated ( implied ) customer requirements. We at Saami Tradestar motivate all the members of the organization to make consistent efforts to understand and respond to the needs and expectations of our customers promptly with utmost sincerity and dedication, ensuring delivery of products and services uphold highest level of customer satisfaction ratings. We at Tradestar, work pro-actively to render high quality logistics services that consistently keep up with the changing and emerging logistic requirements locally as well as globally by maintaining a pool of skilled , innovative and service oriented professionals."
    const description1="We at Saami Tradestar emphasise on trustworthy relationships with partners , associates and stakeholders by maintaining tranparency leading to a mutual beneficial growth. At Saami Tradestar there are regular review meetings on current projects in order to improve the performance of our employees. We strive for the ability to deliver the service within the time schedule , within budget and with the least number of errors. We aim to achieve additional resource utilisation and reduce costs by eliminating defects , non-value adding activities , rework , delays. We Nurture a winning network of partnerships by providing the full logistics service with integrity , sincerity and competence."
  const description3="We make sure that Saami Tradestar Logistics Pvt. Limited meets the regulatory requirements, requirements of society and the quality standards. At Saami Tradestar we benchmark for a zero defect performance. We are inspired by the Just In Time (JIT) Japanese concept to have cost benefit and right scheduling of activities so that the consignment is delivered as per the TAT given to the clients . We ensure that we continuously improve the degree to which our services meet customer requirements and attain unprecedented levels of performance by making improvements that are incremental and are continuously maintained.We aim to increase the returns on our revenues and assets."
  return( <div>
            <HeroSection image="/assets/about/a-1.webp" heading="About Us"   className="bg-[#00000080]"/>
         {/* <Fadein>   <Section2 image={'/assets/about/a-2.webp'} heading={heading} text={text} description={description}  description2={description2} /> */}
         {/* </Fadein> */}
         <Fadein><Section1 /></Fadein>
         <Fadein><Sectionhomethree  heading2={<> Saami Tradestar Logistics Limited <br /> Has Pioneered Supply Chain <br /> Management Solutions</>}  text={'as a 3PL in Domestic and International Logistics. STL has carved a niche as a 3PL within the Service Parts Logistics (SPL) and Expedited Time Definite Air Service.'} /></Fadein>
       <Fadein><Section /></Fadein>
         {/* <Fadein>   <Section3 /></Fadein>
         <Fadein>   <Section4 /></Fadein> */}
            {/* <Fadein> <Section5 image={'/assets/about/a-3.webp'} heading={heading2} text={text2} description={description1} description2={description3} /></Fadein> */}
            <Fadein> <Section6  /></Fadein>
            <Fadein><Certification /></Fadein>
<Fadein> <Footer /></Fadein>
         
         
            </div>)
}
export default about
