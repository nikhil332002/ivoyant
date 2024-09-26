import { ComponentType, ReactNode } from 'react';
import { ChildProps } from './Parent';

interface childProps{
    childe: ReactNode;
}


const Child:React.FC<childProps>=({childe})=>{
    return(
        <>
        <div>
            {childe}
        </div>
        </>
    )
}
export default Child;