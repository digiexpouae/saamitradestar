// components/ValuesSection.tsx
"use client"
 // app/components/SaamiSection.tsx


 import Image from "next/image";

export default function ValuesSection() {
  const data = [
    {
      title: "The Right People",
      description:
        "We recognise that our people want to make a distinction and provide the culture of responsibility, challenge and opportunity for them to make an impact. We therefore attract, develop and reward people who have the passion to make a significant contribution to the continued growth of our business",
      icon: "/assets/career/icon-1.svg",
    },
    {
      title: "A Celebration Of Diversity",
      description:
        "We embrace and take full advantage of our diversity. We value individuality and create an inclusive culture where variety is positively encouraged and all employees are genuinely appreciated for what makes them different.",
      icon: "/assets/career/icon-2.svg",
    },
    {
      title: "Team Work",
      description:
        "Each business, every function and each individual has a part to play in our company’s achievements. Teamwork is vital to our success. Our businesses succeed together through the effective communication of ideas and by leveraging our individual skills and experiences.",
      icon: "/assets/career/icon-3.svg",
    },
  ];


  return (
    <section className="px-6 md:px-12 lg:px-24 text-center text-gray-800" >
      <div className="max-w-6xl mx-auto">
        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mission */}
          {data.map((elem,index)=>{

       return(
          <div key={index} className=" relative text-start text-white p-8  " style={{backgroundColor:'rgba(237, 48, 57, 1)'}}>
<div className="w-14 h-14 mb-4"><Image src={elem.icon} width={100} height={100} className="object-cover" /></div>
            <h3 className="text-4xl font-semibold mb-3">{elem.title}</h3>
            <p className="text-base leading-[1.3]">
         {elem.description}
            </p>
            <div className="absolute -right-2 -bottom-2  bg-white h-20 w-20 " style={{clipPath: 'polygon(24% 46%, 120% 46%, 100% 105%, 0px 155%, 0px 100%)'}}></div>

          </div>)
            })}

          {/* Vision */}
          {/* <div className="relative text-start text-white  p-6 shadow-lg" style={{backgroundColor:'rgba(237, 48, 57, 1)'}}>
        <div className="w-14 h-14 mb-4">    <Image src={'/assets/section1/Group 28.svg'} width={100} height={100} className="object-cover"  /></div>
            <h3 className="text-4xl font-semibold mb-3">Our Vision</h3>
            <p className="text-xl leading-[1.3]">
              To be the preferred logistics company through our deep commitment
              to innovation, technology, and service <br/> excellence.
            </p>
            <div className="absolute -right-1 -bottom-1  h-20 w-20" style={{clipPath: 'polygon(100% 49%, 100% 73%, 100% 100%, 75% 100%, 0 100%, 31% 50%)',backgroundColor:'rgba(255, 245, 245, 1)'}}></div>
          </div>

          {/* Values */}
          {/* <div className=" relative text-start text-white  p-8 shadow-lg" style={{backgroundColor:'rgba(237, 48, 57, 1)'}}>
          <div className="w-14 h-14 mb-4">  <Image src={'/assets/section1/Group 29.svg'} width={100} height={100} className="object-cover"  /></div>
            <h3 className="text-4xl font-semibold mb-3">Our Values</h3>
            <p className="text-xl leading-[1.3]">
              The Values of Saami Tradestar is the value that we generate to our
              customers, partners &amp; stakeholders.
            </p>
            <div className="absolute -right-1 -bottom-1  h-20 w-20" style={{clipPath: 'polygon(24% 46%, 100% 46%, 100% 100%, 0 99%, 0 100%)',backgroundColor:'rgba(255, 245, 245, 1)'}}></div>

          </div> */}
        </div>
      </div>
    </section>
  );
}
