import { useEffect, useState } from "react"


const parallexSection = ({ ref2 }) => {
const [isMobile,setisMobile]=useState(false)


useEffect(()=>{
const checkMobile=()=> setisMobile(window.innerWidth<768);
 checkMobile(); // run
window.addEventListener("resize",checkMobile)
return ()=> window.removeEventListener("resize",checkMobile)

},[])

    return (
        <div className="w-full absolute h-full inset-0 z-[5] " ref={ref2}>
            <video
                src={!isMobile ?"/assets/Final-video.mp4":"/assets/verticalVideo.mp4"}
                playsInline
                muted
                loop
                // onCanPlayThrough={()=>handleVideoLoad()}
                autoPlay

                className={` h-full w-full transition-opacity duration-200 ease-in-out object-cover `}

            ></video>
        </div>
    )


}
export default parallexSection