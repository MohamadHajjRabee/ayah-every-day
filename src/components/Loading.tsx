import React from "react";

const Loading : React.FC = () => {
    return (
        <div className='absolute left-0 top-0 h-full w-full bg-black z-50 grid place-items-center'>
            <div className='rounded-full border-b-8 border-white text-white h-16 animate-spin w-16 '>Loading</div>
        </div>
    )
}

export default Loading