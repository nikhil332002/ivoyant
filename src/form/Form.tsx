import useForm from "./useForm"

const Form=()=>{
    const initialvalue = {
        username:'',
        email:'',
        password:''
    }
    const {values, errors,handleChange,handleSubmit} = useForm(initialvalue)
    

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={values.username} onChange={handleChange}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" value={values.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}
export default Form;