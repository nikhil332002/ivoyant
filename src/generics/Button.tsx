import React from "react";

interface ButtonProps{
    onClick: ()=>void;
    children: React.ReactNode;
    type: 'button' | 'submit';
    disabled?: boolean;
}
const Button:React.FC<ButtonProps>=({onClick,children,type,disabled})=>{
    return(
        <button onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    )
}
export default Button;