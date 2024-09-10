import { useEffect, useState } from "react"

const Find_by=()=>{
    const [isLoggedin,setIsLoggedin] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoggedin(true)
        },3000) 
    },[])
    return(
        <>
            {
                isLoggedin ? <button>Logout</button> : <button>Login</button>
            }
        </>
    )
}
export default Find_by