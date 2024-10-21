import { ChangeEvent, useState } from "react";

const Login=()=>{

    const [data,setData] = useState({name:"",email:""});
    const [submit,setSubmit] = useState(false);

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        const {value,name} = e.target;
        setData({...data,[name]:value});
    }

    const handleSubmit=()=>{
        setSubmit(true);
        // localStorage.setItem("name",data.name);
        // localStorage.setItem("email",data.email);
    }

    const handleLogout=()=>{
        setSubmit(false);
        // localStorage.removeItem("name");
        // localStorage.removeItem("email");
    }

    return(
        <>
                <input type="text" placeholder="Name" onChange={handleChange} name="name" value={data.name}/>
                <input type="text" placeholder="Email" onChange={handleChange} name="email" value={data.email}/>
                <button onClick={handleSubmit}>Submit</button>
            {submit?<div><p>Name: {data.name}</p><p>Email: {data.email}</p><button onClick={handleLogout}>Logout</button></div>:null}
        </>
    )
}
export default Login;