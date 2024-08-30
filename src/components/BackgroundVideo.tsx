import myVid from "../assets/backgrounds/desert-night-and-camel.mp4";
import React, {useRef} from "react";

const BackgroundVideo = () => {
    const backgroundRef = useRef<HTMLVideoElement>(null)

    return (
        <video
            ref={backgroundRef}
            className="absolute top-0 left-0 w-full h-full object-cover -z-20"
            src={myVid}
            autoPlay
            loop
            muted
        />
    )
}

export default BackgroundVideo;