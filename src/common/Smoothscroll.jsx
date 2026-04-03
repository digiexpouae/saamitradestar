import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";

export default function SmoothScrollProvider({ children }) {
    useEffect(() => {
        if (typeof window === "undefined") return;

        let lenis = null;
        let ScrollTrigger = null;
        let gsapTicker = null;
        import("gsap/ScrollTrigger").then((module) => {

            ScrollTrigger = module.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            lenis = new Lenis({
                lerp: 0.08,
                syncTouch:true,
                syncTouchLerp:0.03
            });
            // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
            lenis.on('scroll', ScrollTrigger.update);

            // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker

            // This ensures Lenis's smooth scroll animation updates on each GSAP tick
            gsapTicker = (time) => {
                lenis.raf(time * 1000);
            }
            gsap.ticker.add((gsapTicker));

            // Disable lag smoothing in GSAP to prevent any delay in scroll animations
            gsap.ticker.lagSmoothing(0);



        });

        return () => {
            if (gsapTicker) gsap.ticker.remove(gsapTicker)
            if (lenis) lenis.destroy();
            if (ScrollTrigger) ScrollTrigger.revert();
        };
    }, []);

    return children;
}
