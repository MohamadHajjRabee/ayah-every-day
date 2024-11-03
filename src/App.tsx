import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import AyahSvg from "./components/AyahSvg";
import externalLinkIcon from './assets/icons/external_link_icon.svg';
import githubMarkWhite from './assets/icons/github-mark-white.svg';
import xLogo from './assets/icons/x-logo.svg';
import instagramLogo from './assets/icons/Instagram_Glyph_White.svg'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonContainer from "./components/SkeletonContainer";
import BackgroundVideo from "./components/BackgroundVideo";
import AyahArabic from "./components/AyahArabic";
import AyahEnglish from "./components/AyahEnglish";
import {RootState} from "./state/store";
import {useSelector} from "react-redux";
import LangDropdown from "./LangDropdown/LangDropdown";
export interface ayahState {
    id: number,
    surah_no: number,
    surah_name_en: string,
    surah_name_ar: string,
    surah_name_roman: string,
    ayah_no_surah: number,
    ayah_ar: string,
    ayah_en: string,
    ayah_tr: string,
    ayah_de: string,
}

function App() {
    const currentLanguage = useSelector((state: RootState) => state.Language.value);

    const [ayah, setAyah] = useState<ayahState>({
        ayah_ar: "",
        ayah_en: "",
        ayah_tr: "",
        ayah_de: "",
        ayah_no_surah: 0,
        id: 0,
        surah_name_ar: "",
        surah_name_en: "",
        surah_name_roman: "",
        surah_no: 0
    })
    const containerLength = useRef<HTMLDivElement>(null)
    const ayahLength : number = ayah.ayah_ar.length;

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
        <div className="min-h-svh grid place-items-center font-aftikaLight">
            {!videoLoading &&
                <>
                    <LangDropdown/>
                    <div className='absolute md:top-10 md:left-10 top-5 left-5 md:text-3xl text-xl  text-white'>
                        Ayah Every Day
                    </div>
                    <div className="max-w-screen-lg w-[90%] z-30 rounded-xl px-4 pb-5 font-amiriQuran" style={{boxShadow: 'inset 2000px 0 0 0 rgb(0 0 0 / 50%)'}} ref={containerLength}>
                        {ayah.id === 0 && <SkeletonContainer/>}
                        {ayah.surah_name_ar && <AyahSvg ayah={ayah.surah_name_ar + '    /    ' + ayah.surah_name_roman}/>}
                        <AyahArabic ayah={ayah.ayah_ar}/>
                        <AyahEnglish ayah={(ayah[currentLanguage as keyof ayahState]).toString()} ayahLength={ayahLength}/>
                    </div>
                    <div className='fixed md:bottom-10 md:left-10 bottom-5 left-5 text-white font-aftikaLight'>
                        <a rel="noreferrer" className='underline transition-opacity hover:text-gray-250 hover:opacity-80' href={`https://quran.com/${ayah.surah_no}/${ayah.ayah_no_surah}` } target='_blank'>quran.com <img className='h-5 w-5 inline' src={externalLinkIcon} alt='Open in external link'/></a>
                        <p>Surah {ayah.surah_no} - Verse {ayah.ayah_no_surah}</p>
                    </div>
                </>
            }
            <BackgroundVideo/>
            <div className='fixed md:bottom-10 md:right-10 bottom-5 right-5 flex flex-row gap-3'>
                <a href='https://github.com/MohamadHajjRabee/ayah-every-day' rel="noreferrer" target='_blank'><img src={githubMarkWhite} alt='Project on GitHub' className='w-8 transition-opacity aspect-square hover:opacity-80'/></a>
                <a href='https://x.com/ayah_every_day1' rel="noreferrer" target='_blank'><img src={xLogo} alt='X/Twitter page' className='w-8 transition-opacity aspect-square hover:opacity-80'/></a>
                <a href='https://www.instagram.com/ayah_every_day0/' rel="noreferrer" target='_blank'><img src={instagramLogo} alt='instagram' className='w-8 transition-opacity aspect-square hover:opacity-80'/></a>

            </div>
        </div>
    );
}

export default App;
