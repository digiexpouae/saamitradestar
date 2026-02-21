

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lottie from "lottie-web";
import Image from "next/image";
const Text = ({ sectionRef }) => {
  const container = useRef(null);
  const animationRef = useRef(null);
  const imageref = useRef(null);

  useLayoutEffect(() => {
let animation;
let ctx;
      const initLottie = () => {
    gsap.registerPlugin(ScrollTrigger);
    const target = container.current;
    if (!target) return;
    ctx = gsap.context(() => {

     animation = Lottie.loadAnimation({
      container: target,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/assets/lottie/animation_1.json",
      rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
    });

    animationRef.current = animation;

    const onReady = () => {
      const totalFrames = animation.totalFrames;
      if (!totalFrames) return;
      const svg = target.querySelector("svg");
      if (!svg) return;

      ScrollTrigger.matchMedia({
        // === DESKTOP ===
        "(min-width: 1040px)": () => {
          ScrollTrigger.create({
            trigger: target,
            start: "top top",
            scrub: true,
            end: `+=${totalFrames * 10}`,
            onUpdate: (self) => {
              const progress = self.progress;
              const frame = Math.floor(progress * (totalFrames - 1));
              animation.goToAndStop(frame, true);

              gsap.to(svg, {
                yPercent: -40 * progress,
                ease: "none",
                overwrite: "auto",
                duration: 0.1,
              });

              // Animate reveal and image fade
              if (progress >= 0.4 && sectionRef.current) {
                const clipPercent = Math.min(((progress - 0.5) / 0.4) * 100, 100);
                gsap.to(sectionRef.current, {
                  opacity: 1,
                  clipPath: `circle(${clipPercent}% at 50% 50%)`,
                  scale: 1,
                  transformOrigin: "center center",
                });
                gsap.to(imageref.current, { opacity: 1 - progress }, "<");
              } else if (progress < 0.4) {
                gsap.to(sectionRef.current, {
                  opacity: 0,
                  clipPath: "circle(0% at 50% 50%)",
                  zIndex:20
                });
              }

              // ✅ Set z-index to 0 when scroll completes
              if (progress >= 1) {
                gsap.to(target, { zIndex: 0, ease: "none" })
              } else {
                gsap.to(target, { zIndex: 20, ease: "none" });
              }
            },
          });
        },

        // === MOBILE ===
        "(max-width: 1025px)": () => {
          ScrollTrigger.create({
            trigger: target,
            start: "top top",
            scrub: true,
            end: `+=${totalFrames * 5}`,
            onUpdate: (self) => {
              const progress = self.progress;
              const frame = Math.floor(progress * (totalFrames - 1));
              animation.goToAndStop(frame, true);

              if (progress >= 0.4 && sectionRef.current) {
                const clipPercent = Math.min(((progress - 0.6) / 0.4) * 100, 100);
                gsap.to(sectionRef.current, {
                  opacity: 1,
                  clipPath: `circle(${clipPercent}% at 50% 50%)`,
                  scale: 1,
                  duration: 1,
            
                
                  transformOrigin: "center center",
                });
                gsap.to(imageref.current, { opacity: 1 - progress }, "<");
              }
else if (progress < 0.4) {
                gsap.to(sectionRef.current, {
                  opacity: 0,
                  clipPath: "circle(0% at 50% 50%)",
                  zIndex:20
                });
              }
              gsap.to(svg,{yPercent:0})
              // ✅ Same z-index control for mobile
              if (progress >= 1) {
                gsap.to(target, { zIndex: 0, ease: "none" });
              } else {
                gsap.to(target, { zIndex: 20, ease: "none" });
              }
            },
          });
        },
      });
    };

    animation.addEventListener("DOMLoaded", onReady);
  })
}
  requestAnimationFrame(() => {
    requestAnimationFrame(initLottie);
  })   

    
    return () => {
       ctx?.revert();       
    animation?.destroy(); 
    };


}, []);

  return (
    <>

   
      <div
        className="absolute inset-0 z-20 xl:h-[100vw] w-[100vw]"
        ref={container}
      ></div>
{!imageref ?(

 <div className="absolute inset-0 z-30 h-full w-full">
      <Image src="/assets/placeholder_globe.JPG"  className="object-cover" fill />
    </div>):(
      <div className="absolute inset-0 h-full w-full" ref={imageref}>
        <video
          src="/assets/SaamiCompressed_two.mp4"
          playsInline
          muted
                poster="/assets/placeholder_globe.JPG"   
          loop
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
        ></video>
      </div>)}
    </>
  );
};

export default Text;

