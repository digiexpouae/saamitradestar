// pages/_app.js
import "@/styles/globals.css";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import  ScrollTrigger  from "gsap/dist/ScrollTrigger";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.1, // 0 = instant, 1 = very slow
      smoothWheel: true,
      smoothTouch: false, // disable smooth scroll on touch if you want
    });

    // Sync Lenis and ScrollTrigger
    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <Component {...pageProps} />;
}
