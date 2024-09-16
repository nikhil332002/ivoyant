import { ChangeEvent, FormEvent, useState } from "react";

interface FormState{
    username:string;
    email:string;
    password:string;
}

interface FormErrors{
    username?:string;
    email?:string;
    password?:string;
}

const useForm=(initialvalue:FormState)=>{

    const [values,setValues] = useState<FormState>(initialvalue)
    const [errors,setErrors] = useState<FormErrors>({})

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setValues({...values,[name]:value})
    }

    const validate=()=>{
        let TempErrors:FormErrors={}

        if(!values.username){
            TempErrors.username = 'username is required!';
        }
        if(!values.email){
            TempErrors.email = 'email is required!';
        }
        else if(!/\S+@\S+\.\S+/.test(values.email)){
            TempErrors.email = 'email is not valid!';
        }
        if(values.password.length < 6 ){
            TempErrors.password = 'password should be at least 6 characters long!';
        }
        setErrors(TempErrors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(validate()){
            console.log("Form submitted",values);
            setValues(initialvalue)
        }
        else{
            console.log("Something went wrong!");  
        }
    }
    return {values, errors,handleChange,handleSubmit}
}
export default useForm;