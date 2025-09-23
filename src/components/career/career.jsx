// components/ValuesSection.tsx
import Image from "next/image";

export default function ValuesSection() {
  const data = [
    {
      title: "The Right People",
      description:
        "We recognise that our people want to make a distinction and provide the culture of responsibility, challenge and opportunity for them to make an impact. We therefore attract, develop and reward people who have the passion to make a significant contribution to the continued growth of our business",
      icon: "/assets/career/Group 45.svg",
    },
    {
      title: "A Celebration Of Diversity",
      description:
        "We embrace and take full advantage of our diversity. We value individuality and create an inclusive culture where variety is positively encouraged and all employees are genuinely appreciated for what makes them different.",
      icon: "/assets/career/Group 47.svg",
    },
    {
      title: "Team Work",
      description:
        "Each business, every function and each individual has a part to play in our company’s achievements. Teamwork is vital to our success. Our businesses succeed together through the effective communication of ideas and by leveraging our individual skills and experiences.",
      icon: "/assets/career/Group 46.svg",
    },
  ];

  return (
    <section className="bg-[#F0FBFF] flex items-center justify-center w-full py-24 px-6">
      <div className="md:w-[80%] mx-auto grid md:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-start p-4 ${
              index !== data.length - 1 ? "md:border-r-1 border-black" : ""
            }`}
          >
            <div className="w-10 h-10 mb-4 relative">
              <Image src={item.icon} alt={item.title} fill />
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-black text-sm leading-[1.3]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
