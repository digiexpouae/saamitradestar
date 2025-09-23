import { motion } from "framer-motion";

const Section = () => {
  const fadeVariants = {
    hidden: { opacity: 0, x: -250 }, // start off-screen to the left
    visible: {
      opacity: 1,
      x: 0, // move into place
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const fadeVariants2 = {
    hidden: { opacity: 0, x: 250 }, // start off-screen to the left
    visible: {
      opacity: 1,
      x: 0, // move into place
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      className="w-full"
   
    >
      <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] my-20 justify-center gap-6 mx-auto">
        <motion.h2    variants={fadeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} className="text-[40px] md:w-[30%] md:text-[50px] leading-[1] text-black font-semibold">
          Our History
        </motion.h2>
        <motion.p variants={fadeVariants2} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="text-black font-medium py-4 text-[20px] md:w-[70%] leading-[1.5] md:leading-[1.3] line-clamp-8">
          Recently, on 10th Feb. 2013 we have celebrated our 20 years of successful journey throughout. As for integration of worldwide overseas logistics business, scheduled from April 2011, the Company plans to steadily enhance its combined logistics network on a global basis. Moving ahead, the Company will pursue an even higher level of service quality better tailored to customer needs in the two key business areas of air/ocean freight forwarding and contract logistics. We also intend to generate greater customer satisfaction through a host of services according to customers' logistics needs.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Section;
