import useTimeout from "./useTimeout"

const Time=()=>{
    const {handleStart,handelStop,handleReset,time} = useTimeout(10);

    return(
        <>
            <h2>{time}</h2>
            <button disabled={time === 0? true:false} onClick={handleStart}>Start</button>
            <button disabled={time === 10 || time === 0? true:false} onClick={handelStop}>Stop</button>
            <button disabled={time === 10? true:false} onClick={handleReset}>Reset</button>
        </>
    ) 
}
export default Time;