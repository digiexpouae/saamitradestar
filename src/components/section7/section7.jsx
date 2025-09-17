import React from "react";

const Section7 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 md:py-0 h-[60vh] md:h-[70vh] relative overflow-hidden">
      <div className=" relative flex items-center justify-center gap-0 h-[50vh] w-full">
        {/* Flex container that holds both headlines */}
        
        <div className="flex justify-between animate-scroll-left">
          {/* First headline */}
          <h1 className="text-[50px] md:text-[100px] font-semibold" style={{whiteSpace:'nowrap'}} >
            | Contact us Today{" "}
          </h1>
          {/* Duplicate the headline to create continuous effect */}
        
        </div>
        <div className="flex gap-20 animate-scroll-right">

        <h1 className="text-[50px] md:text-[100px] font-semibold" style={{whiteSpace:'nowrap'}}>
            | Contact us Today{" "}
          </h1>
          </div>
       
      </div>
      <div>
        <button className="bg-[#ED3039] rounded-full text-white h-12 w-32">Get in touch</button>
      </div>
    </div>
  );
};

export default Section7;
 