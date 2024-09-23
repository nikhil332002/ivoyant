import { useState } from "react"
import Button from "./Button"
import Input from "./Input"

const Form=()=>{


    const [text,setText] = useState('');
    const handleClick=()=>{
        console.log(text)
    }
    const handleSubmit=()=>{
        console.log("submitted")
    }
    const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }
    return(
        <div>
            <h2>Text: {text}</h2>
            <label htmlFor="name">User name</label>
            <Input type={"text"} onChange={handleInput} placeholder={"User name"} className="name"/>
            <Input type={"radio"} onChange={handleInput} placeholder={"User name"}/>
            
            <Button type={"button"} onClick={handleClick} disabled={false}>Click</Button>
            <Button type={"submit"} onClick={handleSubmit} disabled={true}>Submit</Button>
        </div>
    )
}
export default Form;