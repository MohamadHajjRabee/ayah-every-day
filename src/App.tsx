import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import AyahSvg from "./components/AyahSvg";
import externalLinkIcon from './assets/icons/external_link_icon.svg'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonContainer from "./components/SkeletonContainer";
import BackgroundVideo from "./components/BackgroundVideo";
import AyahArabic from "./components/AyahArabic";
import AyahEnglish from "./components/AyahEnglish";
import {RootState} from "./state/store";
import {useSelector} from "react-redux";
interface ayahState {
    id: number,
    surah_no: number,
    surah_name_en: string,
    surah_name_ar: string,
    surah_name_roman: string,
    ayah_no_surah: number,
    ayah_ar: string,
    ayah_en: string
}

function App() {
    const [ayah, setAyah] = useState<ayahState>({
        ayah_ar: "",
        ayah_en: "",
        ayah_no_surah: 0,
        id: 0,
        surah_name_ar: "",
        surah_name_en: "",
        surah_name_roman: "",
        surah_no: 0
    })
    const containerLength = useRef<HTMLDivElement>(null)
    const ayahLength : number = ayah.ayah_ar.split(' ').length;

    const videoLoading = useSelector((state: RootState) => state.videoLoading.value)
    useEffect(() => {
        fetch('https://backend-ayah-every-day.vercel.app/ayah')
            .then(res => {
                if(!res.ok){
                    throw new Error('Error: ' + res.status)
                }
                return res.json();
            })
            .then(res => {
                setAyah(res)
            })

    }, []);



    return (
        <div className="min-h-svh grid place-items-center">
            <BackgroundVideo/>
            {!videoLoading &&
                <>
                    <div className="max-w-screen-lg w-[90%] z-30 rounded-xl px-4 pb-5 font-amiriQuran" style={{boxShadow: 'inset 2000px 0 0 0 rgb(0 0 0 / 50%)'}} ref={containerLength}>
                        {ayah.id === 0 && <SkeletonContainer/>}
                        {ayah.surah_name_ar && <AyahSvg ayah={ayah.surah_name_ar + '    /    ' + ayah.surah_name_roman}/>}
                        <AyahArabic ayah={ayah.ayah_ar}/>
                        <AyahEnglish ayah={ayah.ayah_en} ayahLength={ayahLength}/>
                    </div>
                    <div className='fixed bottom-10 text-white left-10 font-aftikaLight'>
                        <a rel="noreferrer" className='underline hover:text-gray-250' href={`https://quran.com/${ayah.surah_no}/${ayah.ayah_no_surah}` } target='_blank'>quran.com <img className='h-5 w-5 inline' src={externalLinkIcon} alt='Open in external link'/></a>
                        <p>Surah {ayah.surah_no} - Verse {ayah.ayah_no_surah}</p>
                    </div>
                </>
            }
        </div>
    );
}

export default App;
