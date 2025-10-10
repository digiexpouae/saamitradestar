import Image from "next/image"
const section3=()=>{
    return(
        <div className="flex flex-col items-center justify-center gap-10 max-w-5xl mx-auto py-20 px-4">
<div className="flex items-center justify-center gap-10 flex-col  md:flex-row">
    <div className="md:w-1/2"><h2 className="font-medium text-4xl mb-2">Our History</h2> <p className=" text-[#5A5A5A] leading-5 lg:text-xl">Recently, on 10th Feb. 2013 we have celebrated our 20 years of successful journey throughout. As for integration of worldwide overseas logistics business, scheduled from April 2011, the Company plans to steadily enhance its combined logistics network on a global basis. Moving ahead, the Company will pursue an even higher level of service quality better tailored to customer needs in the two key business areas of air/ocean freight forwarding and contract logistics. We also intend to generate greater customer satisfaction through a host of services according to customers' logistics needs.</p></div>
    <div className=""><Image src={'/assets/Subtract-1.png'} width={350} height={350}/></div>
    
    </div>

<div className="flex flex-col  md:flex-row items-center justify-center gap-10 ">
    
<div className=""><Image  src={'/assets/Subtract-2.png'} width={350} height={350} /></div>
    <div className="md:w-1/2"><h2 className=" font-medium text-4xl mb-2"> Quality Commitments</h2> <p className="text-[#5A5A5A] leading-5 text-xl"> For Saami Tradestar, quality is to identify , define and meet the stated and unstated ( implied ) customer requirements. We at Saami Tradestar motivate all the members of the organization to make consistent efforts to understand and respond to the needs and expectations of our customers promptly with utmost sincerity and dedication, ensuring delivery of products and services uphold highest level of customer satisfaction ratings. We at Tradestar, work pro-actively to render high quality logistics services that consistently keep up with the changing and emerging logistic requirements locally as well as globally by maintaining a pool of skilled , innovative and service oriented professionals.</p></div>

</div>


        </div>
    )
}
export default section3