import { useForm } from "./useForm"

const Form=()=>{

    const {values,errors,handleChange,handleSubmit} = useForm({name:'',email:''})

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={values.name} onChange={handleChange}/>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}
export default Form