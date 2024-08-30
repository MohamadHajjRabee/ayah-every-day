import React, {useEffect, useRef, useState} from "react";

interface Props {
    ayah: string;
}

const AyahSvg : React.FC<Props> = ({ayah }) => {

    const ayahTextRef = useRef<SVGTextElement>(null)
    const [sizes, setSizes] = useState<number>(0)
    useEffect(() => {
        const size = ayahTextRef.current!.getComputedTextLength()
        setSizes(size)

    },[])


    return (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-full md:h-[120px] h-[60px] mx-auto'>
            <text xmlSpace="preserve" direction='rtl' ref={ayahTextRef} className='fill-none md:text-5xl text-2xl text-white stroke-current font-amiriQuran ayah-text' x='50%' y='50%' style={{strokeDashoffset: sizes, strokeDasharray: sizes}} dominantBaseline="middle" textAnchor="middle">
                {ayah}
            </text>
        </svg>
    )
}
export default AyahSvg