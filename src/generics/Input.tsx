import { ChangeEvent, ReactNode } from "react";

interface inputProps{
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void;
    type: 'text' | 'checkbox' | 'radio' ;
    placeholder?: string;
    className?:string;
}
const Input:React.FC<inputProps>=({onChange,type,placeholder,className})=>{
    return(
        <input type={type} onChange={onChange} placeholder={placeholder} className={className}/>
    )
}
export default Input;