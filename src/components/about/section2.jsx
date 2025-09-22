// components/MissionVisionValues.jsx
import Image from "next/image";

const items = [
  {
    title: "Mission",
    desc: "To secure the confidence and trust of our valued clients by conducting business with integrity and honesty.",
    icon: '/assets/about/Group 29.svg',
  },
  {
    title: "Vision",
    desc: "To be the preferred logistics company through our deep commitment to innovation, technology, and service excellence.",
    icon: '/assets/about/Group 28.svg',
  },
  {
    title: "Values",
    desc: "The Values of Saami Tradestar is the Value that we generate to our customers, Partner & Stakeholders.",
    icon: '/assets/about/Group 30.svg',
  },
];

export default function MissionVisionValues() {
  return (
    <section className="">
      <div className="w-[80%] mx-auto grid md:grid-cols-3 gap-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-[#F4FBFF] border border-black rounded-lg p-6 text-left shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-6 justify-start mb-4">
                <div className="w-14 h-14 rounded-full flex items-center  justify-center">
                  <Image className="object-cover" src={Icon} alt="icon" width={220} height={220} />
                </div>
                <h3 className="text-4xl font-bold mb-2">{item.title}</h3>

              </div>
              <p className="text-black text-base font-medium leading-[1.4]">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
