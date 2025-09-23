
import Image from 'next/image'
export default function ContactBar() {
  const contactItems = [
    {
      id: 1,
      icon: '/assets/contact/1.svg',
      text: "+971 4 885 9549",
      link: "tel:+97148859549",
    },
    {
      id: 2,
      icon: '/assets/contact/2.svg',
      text: "Unit No. S03-103, MAG AlQuoz Logistic Park, Dubai",
    },
    {
      id: 3,
      icon: '/assets/contact/3.svg',
      text: "info@kamdardevelopment.com",
      link: "mailto:info@kamdardevelopment.com",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center">
    <div className=" p-4 w-[80%] flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
      {contactItems.map((item) => (
        <div key={item.id} className="flex  gap-2">
          <Image src={item.icon} alt={item.text} width={20} height={20} />
          {item.link ? (
            <a
              href={item.link}
              className="text-gray-800 hover:text-red-500"
            >
              {item.text}
            </a>
          ) : (
            <span className="text-gray-800">{item.text}</span>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}
