import React from "react";

const Loading : React.FC = () => {

    return (
        <div className='absolute left-0 top-0 h-full w-full bg-black z-50 grid place-items-center'>
            <div className='border-white text-white h-16'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-96 md:h-[120px] h-[60px] mx-auto'>
                    <text xmlSpace="preserve" direction='rtl' className='fill-none text-4xl text-white stroke-current font-amiriQuran logo-text' x='50%' y='50%' style={{strokeDashoffset: 160, strokeDasharray: 160}} dominantBaseline="middle" textAnchor="middle">
                        Ayah Every Day
                    </text>
                </svg>
            </div>
        </div>
    )
}

export default Loading