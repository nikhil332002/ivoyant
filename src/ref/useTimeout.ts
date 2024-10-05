import { useEffect, useRef, useState } from "react"


const useTimeout=(intitialTime:number)=>{

    const [time,setTime] = useState(intitialTime);
    const id = useRef<number>();

    const handleStart=()=>{
        id.current = setInterval(() => {
            setTime((time)=>time-1);
        }, 1000);  
    }

    const handelStop=()=>{
        clearInterval(id.current);
    }
    

    const handleReset=()=>{
        if(id.current){
            clearInterval(id.current);
        }
        setTime(intitialTime);
    }

    useEffect(()=>{
        if(time === 0){
            clearInterval(id.current);
        }
    },[time])

    return {handleStart,handelStop,handleReset,time}
}
export default useTimeout;