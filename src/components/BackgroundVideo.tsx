import myVid from "../assets/backgrounds/desert-night-and-camel.mp4";
import React, {useRef, useState} from "react";
import Loading from "./Loading";

const BackgroundVideo = () => {
    const backgroundRef = useRef<HTMLVideoElement>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const toggleIsLoading = () => {
        setIsLoading(false)
    }

    return (
        <>
            {isLoading && <Loading/>}
            <video
                ref={backgroundRef}
                className="absolute top-0 left-0 w-full h-full object-cover -z-20"
                src={myVid}
                onLoadedData={()=> {
                    toggleIsLoading()
                }}
                autoPlay
                loop
                muted
            />
        </>
    )
}

export default BackgroundVideo;