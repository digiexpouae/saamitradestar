import Image from "next/image";
import { forwardRef } from "react";
import Link from "next/link";

const Services2 = forwardRef(({ img, heading, text, btn, className }, ref) => {
  return (
    <div    ref={ref}
      className={`flex items-center justify-center w-full p-10 md:p-0  ${className}`}
   
    >
      <div className="flex lg:flex-row flex-col items-center justify-center md:justify-between gap-8">
        <div className="h-full flex md:w-1/2 lg:justify-end">
          <Image src={img} width={300} height={300} className="object-cover" alt={heading} />
        </div>

        <div className="flex flex-col md:w-1/2 px-2 md:px-0">
          <h2 className="text-4xl text-black font-medium">{heading}</h2>
          <p className="text-[#5A5A5A] text-xl">{text}</p>

          {btn && (
            <div className="mt-4 inline-block rounded-full w-32 p-[1px] bg-gradient-to-b from-[#ED3039] to-[#FF7D83]">
              <Link href="/ITSupport"
                        className="hover:bg-red-100 w-full px-4 py-2 rounded-full bg-white text-[#ED3039] cursor-pointer block text-center"

               >
                Learn More
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default Services2;
