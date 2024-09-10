
const Query=()=>{
    const isLoggedin=true;
    return(
        <>
            {
                isLoggedin? <button>Logout</button> : <button>Login</button>
            }
        </>
    )
}
export default Query