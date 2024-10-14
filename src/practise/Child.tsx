import { memo } from "react";

interface props{
    display: ()=>void;
}
const Child:React.FC<props>=({display})=>{

    display()
    
    return(
        <div>
        </div>
    )
}
export default memo(Child);