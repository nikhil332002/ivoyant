import React, { useEffect, useState } from "react"
import { Students } from "../models/students.models";
import { useAddStudentMutation, useGetStudentQuery, useUpdateStudentMutation } from "../features/studentSlice";
import { useNavigate, useParams } from "react-router-dom";


const AddStudents:React.FC=()=>{

    const navigate=useNavigate();
    const {id} = useParams();

    const [students,setStudents] = useState<Students>(Object);
    const [editMode,setEditMode] = useState<boolean>(false);

    const [addStudent] = useAddStudentMutation();
    const [updateStudent] = useUpdateStudentMutation();
    const {data} = useGetStudentQuery(id!);

    useEffect(()=>{
        if(id && data){
            setEditMode(true);
            setStudents({...data});
        }
        else{
            setEditMode(false);
        }
    },[id,data]);
    

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setStudents({...students,[e.target.name]: e.target.value})
    }

    // console.log("single",data);
    
    
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if(editMode){
            await updateStudent(students);
        }
        else{
            await addStudent(students);
        }
        navigate('/');
        setEditMode(false);
    }
    return(
        <>
            {
                editMode? <h2>Edit Student Details</h2>: <h2>Add Student Details</h2>  
            }
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name="studentName" onChange={handleChange} value={students?.studentName}/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="studentEmail" onChange={handleChange} value={students?.studentEmail}/>
                </div>
                <button >Submit</button>
            </form>
        </>
    )
}
export default AddStudents;