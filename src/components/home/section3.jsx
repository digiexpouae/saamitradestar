// app/components/SaamiSection.tsx
"use client";

import Image from "next/image";
export default function SaamiSection({heading1,heading2,text}) {
  return (
    <section className=" py-16 px-6 md:px-12 lg:px-24 text-center text-gray-800 relative" style={{backgroundColor:'rgba(255, 245, 245, 1)'}}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl  font-semibold tracking-tighter mb-4" style={{color:'rgba(237, 48, 57, 1)'}}>
        {heading1}
         <span className="" style={{color:'rgb(26, 19, 19)'}}> 
         {heading2}</span>
        </h2>
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
       
        </h1>
        <p className=" mb-12 max-w-3xl text-xl mx-auto leading-[1.2]" style={{color:'rgba(90, 90, 90, 1)'}}>
         {text}
        </p>

        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6">
          {/* Mission */}
          <div className=" relative text-start text-white p-9 md:pr-4 shadow-lg " style={{backgroundColor:'rgba(237, 48, 57, 1)'}}>
<div className="w-14 h-14 mb-4"><Image src={'/assets/section1/Group 27.svg'} width={100} height={100} className="object-cover" /></div>
            <h3 className="text-4xl font-semibold mb-3">Our Mission</h3>
            <p className="text-xl leading-[1.3] pr-4">
              To secure the confidence and trust of our valued clients by
              conducting business with integrity and honesty.
            </p>
            <div className="absolute right-0 bottom-0 h-20 w-20" style={{clipPath:  'polygon(24% 46%, 120% 46%, 100% 105%, 0px 155%, 0px 100%)',backgroundColor:'rgba(255, 245, 245, 1)'}}></div>

          </div>

          {/* Vision */}
          <div className="relative text-start text-white p-9 md:pr-4 shadow-lg" style={{backgroundColor:'rgba(237, 48, 57, 1)'}}>
        <div className="w-14 h-14 mb-4">    <Image src={'/assets/section1/Group 28.svg'} width={100} height={100} className="object-cover"  /></div>
            <h3 className="text-4xl font-semibold mb-3">Our Vision</h3>
            <p className="text-xl leading-[1.3] pr-4">
              To be the preferred logistics company through our deep commitment
              to innovation, technology, and service <br/> excellence.
            </p>
            <div className="absolute right-0 bottom-0  h-20 w-20" style={{clipPath:  'polygon(24% 46%, 120% 46%, 100% 105%, 0px 155%, 0px 100%)',backgroundColor:'rgba(255, 245, 245, 1)'}}></div>
          </div>

          {/* Values */}
          <div className=" relative text-start text-white  p-9 md:pr-4 shadow-lg" style={{backgroundColor:'rgba(237, 48, 57, 1)'}}>
          <div className="w-14 h-14 mb-4">  <Image src={'/assets/section1/Group 29.svg'} width={100} height={100} className="object-cover"  /></div>
            <h3 className="text-4xl font-semibold mb-3">Our Values</h3>
            <p className="text-xl leading-[1.3] pr-4">
              The Values of Saami Tradestar is the value that we generate to our
              customers, partners &amp; stakeholders.
            </p>
            <div className="absolute right-0 bottom-0  h-20 w-20" style={{clipPath:  'polygon(24% 46%, 120% 46%, 100% 107%, 0px 155%, 0px 100%)',backgroundColor:'rgba(255, 245, 245, 1)'}}></div>

          </div>
        </div>
      </div>
      <div className="absolute bg-white h-20 w-20 bottom-0 left-0 " style={{clipPath:'polygon(0 0, 0% 110%, 100% 100%)'}}></div>
      <div className="absolute bg-white h-20 w-20 bottom-0 right-0 " style={{clipPath:'polygon(100% 0, 0% 110%, 100% 100%)'}}></div>
    </section>
  );
}
