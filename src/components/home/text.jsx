
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lottie from "lottie-web";
import Image from "next/image";
const Text = ({ sectionRef }) => {
  const container = useRef(null);
  const animationRef = useRef(null);
  const imageref = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef(null)
  const [hideText, setHideText] = useState(false);


  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // If video is already loaded or playing
    if (video.readyState >= 3) {
      console.log("Video already ready on mount");
      setIsLoaded(true)
      setIsVideoReady(true);
    }

    // Force play in case autoPlay is blocked by browser
    video.play().catch(e => console.log("Auto-play prevented, waiting for interaction:", e));
  }, []);




  useEffect(() => {
    console.log("video", isVideoReady)
    if (!isVideoReady) return;

    let animation;
    let ctx;
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
                  setHideText(true);
                  const clipPercent = Math.min(((progress - 0.5) / 0.4) * 100, 100);
                  gsap.to(sectionRef.current, {
                    opacity: 1,
                    clipPath: `circle(${clipPercent}% at 50% 50%)`,
                    scale: 1,
                    transformOrigin: "center center",
                  });
                  gsap.to(imageref.current, { opacity: 1 - progress }, "<");
                } else if (progress < 0.4) {
                  setHideText(false);
                  gsap.to(sectionRef.current, {
                    opacity: 0,
                    clipPath: "circle(0% at 50% 50%)",
                    zIndex: 20
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
                  setHideText(true);
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
                  setHideText(false);
                  gsap.to(sectionRef.current, {
                    opacity: 0,
                    clipPath: "circle(0% at 50% 50%)",
                    zIndex: 20
                  });
                }
                gsap.to(svg, { yPercent: 0 })
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


    return () => {
      ctx?.revert();
      animation?.destroy();
    };


  }, [isVideoReady]);


  return (
    <>
      {/* {lottieReady && ( */}

      {!hideText && <div className="absolute  top-1/2 lg:top-[70%] left-1/2 opacity-100 z-30 w-full -translate-x-1/2 -translate-y-1/2"> <h1 className="text-white text-center font-bold text-2xl md:text-4xl md:leading-[1.7]" >Reliable Logistics Solutions<br /> <span className="text-3xl md:text-5xl uppercase">Delivered with Precision.</span></h1>
        <p className="text-white text-lg text-center ">Seamless air, sea, and land freight services connecting your business to the world.</p> </div>}

      <div className={`absolute  inset-0 transition-opacity duration-500 ease-in    ${isLoaded ? 'opacity-0 ' : 'opacity-100 '}`}



      >


        <Image
          src="/assets/placeholder_globe.webp"
          alt="Background"
          className="object-cover"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"

        />
      </div >


      <div
        className="absolute inset-0  z-20 xl:h-[100vw] w-[100vw]"
        ref={container}

        style={{ contentVisibility: 'auto', contain: 'strict' }}></div>



      {/* video */}

      <div className={`absolute inset-0 h-full w-full `} ref={imageref}>
        <video
          ref={videoRef}

          src="/assets/SaamiCompressed_two.mp4"
          playsInline
          muted
          loop
          // onCanPlayThrough={()=>handleVideoLoad()}

          // FALLBACK for fast cache
          onLoadedMetadata={() => {
            setIsVideoReady(true);
            setIsLoaded(true);
          }}
          autoPlay
          onLoadedData={() => {
            setIsVideoReady(true);
            setIsLoaded(true);
          }}
          fetchPriority="high"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-100 ease-in ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        ></video>
      </div>

    </>
  );
};

export default Text;

