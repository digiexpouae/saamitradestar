// components/ServicesSection.jsx
import Image from "next/image";

export default function ServicesSection({className,services}) {
    // const serviceList = Array.isArray(services) ? services : services ? [services] : [];
    
    
    
    if (!Array.isArray(services) || services.length === 0) {
        return null; // render nothing
      }
  return (
    <section className={ ` ${className}`}>
      <div className="w-full mx-auto ">
        <div className="grid md:grid-cols-3 gap-0">
          {services?.map((service, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden w-full shadow-lg group"
            >
              <div className="relative h-92">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover object-center "
                />
              </div>
              <div     className="absolute inset-0 flex px-14 p-5 flex-col justify-end "
 style={{
  background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 41.1%, #FFFFFF 100%)"
}}>
              <h3 className="text-xl md:text-2xl font-medium ">{service.title}</h3>
              <p className="text-black leading-4 mb-2 font-medium text-sm">{service.desc}</p>
              <a href="#" className="text-black hover:text-blue-700 text-sm font-semibold">
                Read More 
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
