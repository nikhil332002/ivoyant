import React from "react"

type skillsProps={
    skill:string[]
}
const Skills:React.FC<skillsProps>=({skill})=>{

    return(
        <>
            <ul>
                {
                    skill.map((skill,index)=>(
                        <li key={index}>{skill}</li>
                    ))
                }
            </ul>
        </>
    )
}
export default Skills