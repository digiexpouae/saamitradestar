// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Lottie from "lottie-web";

// const Text = ({sectionRef}) => {
//   const container = useRef(null);
//   const animationRef = useRef(null);
// const sectionref=useRef(null)
// const imageref=useRef(null)
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const target = container.current;
//     if (!target) return;

//     const animation = Lottie.loadAnimation({
//       container: target,
//       renderer: "svg",
//       loop: false,
//       autoplay: false,
//       path: "/assets/lottie/animation_1.json",
//       rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
//     });

//     animationRef.current = animation;

//     const onReady = () => {
//       const totalFrames = animation.totalFrames;
//       if (!totalFrames) return;
//       const svg = target.querySelector("svg");
//       if (!svg) return;

//       // GSAP MatchMedia for responsive triggers
//       ScrollTrigger.matchMedia({
//         // Desktop
//         "(min-width: 768px)": () => {
//           ScrollTrigger.create({
//             trigger: target,
//             start: "top top",
//             scrub: true,
//             // once:true,
//             end: `+=${totalFrames * 10}`,
//             onUpdate: (self) => {
//               const progress = self.progress;
//               const frame = Math.floor(progress * (totalFrames - 1));
//               animation.goToAndStop(frame, true);

//               gsap.to(svg, {
//                 yPercent: -50 * progress,
//                 ease: "none",
//                 overwrite: "auto",
//                 duration: 0.1,
//               })
//           if (progress >= 0.2 && sectionRef.current) {
//             const clipPercent = Math.min((progress - 0.5) / 0.4 * 100, 100);
          
         
//                 gsap.to(sectionRef.current, {
//                   opacity: 1,
//                   clipPath: `circle(${clipPercent}% at 50% 50%)`,
//                   // expand circle to fully reveal

//                   scale: 1,
//                   // duration: 3,
//                   // ease: "power2.out",
//                   transformOrigin: "center center"
//                 },)

//                 gsap.to(imageref.current,{opacity:1-progress},"<")
//        }
//        else if (progress < 0.4) {
//         gsap.to(sectionRef.current, {
//           opacity: 0,
//           clipPath: "circle(0% at 50% 50%)",
  

//         });
//       } 
//       // if(progress>=1){
//       // gsap.to(target, { autoAlpha: 0, duration: 0.5 });
//       // // gsap.to(imageref, { opacity: 0,  });
//       // }
//       }
//           });
//         },

//         // Mobile
//         "(max-width: 767px)": () => {
//           ScrollTrigger.create({
//             trigger: target,
//             start: "top top",
//             once:true,
//             scrub: true,
//             end: `+=${totalFrames * 5}`, // shorter scroll distance for mobile
//             onUpdate: (self) => {
//               const progress = self.progress;
//               const frame = Math.floor(progress * (totalFrames - 1));
//               animation.goToAndStop(frame, true);

//               // gsap.to(svg, {
//               //   yPercent: -30 * progress, // smaller movement on mobile
//               //   ease: "none",
//               //   overwrite: "auto",
//               //   duration: 0.1,
//               // });
//               if (progress >= 0.2 && sectionRef.current) {
//                 const clipPercent = Math.min((progress - 0.6) / 0.4 * 100, 100);
              
             
//                     gsap.to(sectionRef.current, {
//                       opacity: 1,
//                       clipPath: `circle(${clipPercent}% at 50% 50%)`,
//                       // expand circle to fully reveal
    
//                       scale: 1,
//                       duration: 3,
//                       ease: "power2.out",
//                       transformOrigin: "center center"
//                     },)
    
//                     gsap.to(imageref.current,{opacity:1-progress},"<")
//            }
//            if (progress >= 1) {
//             gsap.to(target, { zIndex: -10, ease: "none" });
//           } else {
//             gsap.to(target, { zIndex: 20,  ease: "none" });
//           }
//             },
//           });
//         },
//       });
//     };

//     animation.addEventListener("DOMLoaded", onReady);

//     return () => {
//       animation.destroy();
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className="absolute  inset-0 z-20  md:h-[100vw] w-[100vw] "
     
//         ref={container}
//       >

//       </div>
//       {/* style={{backgroundImage:'url(/assets/im1.png)'}}  */}
//       <div className="absolute inset-0 h-full w-full "
//       ref={imageref}>
//         <video src="/assets/SAAMI.mp4"  playsInline muted loop autoPlay     className="absolute inset-0 h-full w-full object-cover"
//         >
//         </video>
//       </div>

//     </>
//   );
// };

// export default Text;


import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lottie from "lottie-web";

const Text = ({ sectionRef }) => {
  const container = useRef(null);
  const animationRef = useRef(null);
  const imageref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const target = container.current;
    if (!target) return;

    const animation = Lottie.loadAnimation({
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
                  duration: 3,
                  ease: "power2.out",
                
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

    return () => {
      animation.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <div
        className="absolute inset-0 z-20 xl:h-[100vw] w-[100vw]"
        ref={container}
      ></div>

      <div className="absolute inset-0 h-full w-full" ref={imageref}>
        <video
          src="/assets/saami_compressed.mp4"
          playsInline
          muted
          loop
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
        ></video>
      </div>
    </>
  );
};

export default Text;

