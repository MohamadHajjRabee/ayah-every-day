import myVid from "../assets/backgrounds/desert-night-and-camel.mp4";
import React, {useRef} from "react";
import Loading from "./Loading";
import {useDispatch ,useSelector} from "react-redux";
import {RootState} from "../state/store";
import {toggle} from "../state/VideoLoadingSlice"

const BackgroundVideo = () => {
    const backgroundRef = useRef<HTMLVideoElement>(null)

    const videoLoading = useSelector((state: RootState) => state.videoLoading.value)
    const dispatch = useDispatch();


    return (
        <>
            {videoLoading && <Loading/>}
            <video
                ref={backgroundRef}
                className="absolute top-0 left-0 w-full h-full object-cover -z-20"
                src={myVid}
                onLoadedData={()=> {
                    dispatch(toggle())
                }}
                autoPlay
                loop
                muted
            />
        </>
    )
}

export default BackgroundVideo;