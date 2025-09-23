import Header from '../layout/header'
import {motion} from 'framer-motion'
const HeroSection = ({ image, heading,className }) => {
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easein',
      },
    },
  };
  return (

      <motion.div variants={fadeVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="flex items-center relative h-[65vh] w-full justify-center">
        <Header />

        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover"
          style={{
            backgroundImage: `url(${image})`,
            borderBottomLeftRadius: "65px",
            borderBottomRightRadius: "65px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Overlay + Heading */}
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center ${className}`}
          style={{
            borderBottomLeftRadius: "65px",
            borderBottomRightRadius: "65px",
          }}
        >
          <h2 className="text-[45px] text-center md:text-[70px] tracking-tighter absolute top-[50%] md:top-[48%] text-white font-semibold">
            {heading}
          </h2>
        </div>
      </motion.div>
  );
};

export default HeroSection;
