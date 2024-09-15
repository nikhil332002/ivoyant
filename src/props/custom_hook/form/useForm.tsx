import { ChangeEvent, FormEvent, useState } from "react";

interface FormField{
    [key:string]:string;
}
interface FormErrors{
    [key:string]:string;
}
export const useForm=(initialvalue:FormField)=>{

    const [values,setValues] = useState<FormField>(initialvalue)
    const [errors,setErrors] = useState<FormErrors>({})

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setValues({...values,[name]:value})
    }

    const validate=()=>{
        let tempErrors:FormErrors={}
        for(const key in values){
            if(!values[key]){
                tempErrors[key]=`${key} is required`
            }
        }
        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0;
    }

    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(validate()){
            console.log("Form submitted",values);
            setValues(initialvalue)
        }
    }
    return{values,errors,handleChange,handleSubmit}
}