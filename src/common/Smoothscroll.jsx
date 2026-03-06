import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";

export default function SmoothScrollProvider({ children }) {
    useEffect(() => {
        if (typeof window === "undefined") return;
        const isMobile = window.innerWidth < 768

        import("gsap/ScrollTrigger").then((module) => {

            let lenis = null;
            const ScrollTrigger = module.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            lenis = new Lenis({
                lerp: 0.08,
                smoothTouch: true,
            });
            // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
            lenis.on('scroll', ScrollTrigger.update);

            // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
            // This ensures Lenis's smooth scroll animation updates on each GSAP tick
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000); // Convert time from seconds to milliseconds
            });

            // Disable lag smoothing in GSAP to prevent any delay in scroll animations
            gsap.ticker.lagSmoothing(0);

            // Connect Lenis with GSAP ScrollTrigger
            // ScrollTrigger.scrollerProxy(document.body, {

            //     getBoundingClientRect() {
            //         return {
            //             top: 0,
            //             left: 0,
            //             width: window.innerWidth,
            //             height: window.innerHeight,
            //         };
            //     },
            //     pinType: document.body.style.transform ? "transform" : "fixed",
            // });

            // lenis.on("scroll", ScrollTrigger.update);
            // ✅ Removed .update() call — Lenis has no update() method

            // ScrollTrigger.refresh();

        });

        return () => {
            lenis.destroy();
            ScrollTrigger.kill();
        };
    }, []);

    return children;
}
