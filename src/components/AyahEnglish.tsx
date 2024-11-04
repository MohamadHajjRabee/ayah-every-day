import React from "react";
interface Props {
    ayah: string;
    ayahLength: number
}
const AyahEnglish: React.FC<Props> = ({ayah, ayahLength} ) => {

    return (
        <div className='opacity-0 md:text-2xl text-lg englishText md:my-5 my-2 text-center text-white' style={{animationDelay: `${ayahLength * 0.02 + 2}s`}}>{ayah}</div>
    )
}
export default AyahEnglish;