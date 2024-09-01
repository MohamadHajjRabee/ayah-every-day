import React, {useRef} from "react";
interface Props {
    ayah: string;
}
const AyahArabic: React.FC<Props> = ({ayah} ) => {
    const copyText = useRef<HTMLSpanElement>(null)

    const toggleCopyText = ()=> {
        navigator.clipboard.writeText(ayah);
        copyText.current!.classList.toggle('hidden')
        setTimeout(()=> {
            copyText.current!.classList.toggle('hidden')
        }, 1000)
    }

    return (
        <div className="relative md:text-4xl text-2xl text-center text-white cursor-pointer" onClick={toggleCopyText}>
            <span ref={copyText} className='hidden text-base md:text-lg absolute left-1/2 -translate-x-2/4 bg-gray-500 font-aftikaLight px-5 py-2 -top-6 rounded-md text-copy'>Text Copied!</span>
            {ayah.split('').map((letter, index) => {
                return(
                    <span key={index} className={'testTextAnimation leading-[2.25em]'} style={{animationDelay: (index + 1) * 0.02 + 's'}}>{letter}</span>
                )
            })}</div>
    )
}
export default AyahArabic;