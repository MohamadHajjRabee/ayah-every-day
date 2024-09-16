import React from "react";
import {LanguageState} from "../state/LanguageSlice";

interface ButtonProps {
    value: string,
    name: string,
    onClick: (payload: LanguageState) => void
}
const Button : React.FC<ButtonProps> = ({value, name, onClick}) => {


    return (
        <button className=' my-2 border-b-2 border-b-transparent hover:border-white opacity-85 hover:opacity-100 transition-all' onClick={() => onClick({name, value})}>{name}</button>
    )
}

export default Button