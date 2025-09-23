"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const InViewWrapper = ({ children, threshold = 0.2 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animation on next tick to allow y transition
          requestAnimationFrame(() => setIsVisible(true));
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [threshold]);

  return (
    <motion.div
      ref={ref}
      initial={{ y:250, opacity: 0.4 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{
        y: { type: "spring", stiffness: 50, damping: 20 },
        opacity: { duration: 2, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default InViewWrapper;
