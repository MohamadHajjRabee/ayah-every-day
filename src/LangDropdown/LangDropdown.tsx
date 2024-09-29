import arrowIcon from "../assets/icons/arrow.svg";
import React, {useEffect, useRef, useState} from "react";
import Button from "./Button";
import {RootState} from "../state/store";
import {useDispatch, useSelector} from "react-redux";
import {updateLanguage} from "../state/LanguageSlice";

const LangDropdown = () => {
    const dispatch = useDispatch();

    const [activeDropdown, setActiveDropdown] = useState<boolean>(false)
    const dropdownDiv = useRef<HTMLDivElement>(null)
    const currentLanguage = useSelector((state: RootState) => state.Language.name);

    const languages = [
        { name: 'English', value: 'ayah_en' },
        { name: 'Deutsch', value: 'ayah_de' },
        { name: 'Türkçe', value: 'ayah_tr'}
    ];
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownDiv.current && !dropdownDiv.current.contains(event.target as Node)) {
                setActiveDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setActiveDropdown(!activeDropdown)
    }
    interface LanguageChangePayload {
        name: string;
        value: string;
    }
    const handleLanguageChange = ({name, value}: LanguageChangePayload) => {
        dispatch(updateLanguage({name, value}));
        setActiveDropdown(false)
    }
    return(
        <div ref={dropdownDiv} className='absolute md:top-10 md:right-10 top-5 right-5 text-white py-2 px-4 md:text-lg text-sm tracking-widest rounded-md z-50' style={{boxShadow: 'inset 2000px 0 0 0 rgb(0 0 0 / 50%)'}}>
            <div className='flex-row flex gap-5 justify-around items-center border-b-2 border-white py-2 hover:cursor-pointer' onClick={toggleDropdown}>
                <button>
                    {currentLanguage}
                </button>
                <div><img src={arrowIcon} className='h-4 w-4 fill-white transition-all' alt='dropdown arrow logo' style={activeDropdown ? {transform: 'rotate(0.5turn)'} : undefined}/></div>
            </div>
            {
                activeDropdown &&
                <div className='flex-col items-start flex my-2'>
                    {languages.map((language, index) => {
                        return <Button key={index} value={language.value} name={language.name} onClick={handleLanguageChange}/>
                    })}
                </div>
            }
        </div>
    )
}

export default LangDropdown