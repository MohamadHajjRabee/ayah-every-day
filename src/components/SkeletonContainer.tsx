import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import React from "react";
const SkeletonContainer = () => {

    return (
        <SkeletonTheme baseColor="#e9e5de" highlightColor="#bfb29f">
            <br/>
            <Skeleton height={30} count={1}/>
            <br/>
            <Skeleton height={20} count={2}/>
            <br/>
            <Skeleton height={25} count={2}/>
        </SkeletonTheme>
    )

}

export default SkeletonContainer;