


const parallexSection = ({ ref2 }) => {

    return (
        <div className="w-full absolute h-full inset-0 z-[5] " ref={ref2}>
            <video
                src="/assets/Saami2.mp4"
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