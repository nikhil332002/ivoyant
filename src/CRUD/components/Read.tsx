import { NavLink } from "react-router-dom";
import { useDeleteStudentMutation, useGetStudentsQuery } from "../features/studentSlice";


const Read=()=>{
    const {data:students, isSuccess, isError, error, isLoading} = useGetStudentsQuery();
    console.log(students);

    const [deleteStudent] = useDeleteStudentMutation();

    console.log(students?.length);
    

    return(
        <>
        <h2>Students Details</h2>
        {isLoading && <span>Loading...</span>}
        {isError && <span>Something went wrong!</span>}
        <div>
            {
                students?.map((student)=>(
                    <div key={student?.id}>
                        <div>
                            {/* <h3>{student?.studentName}</h3> */}
                            <h3>{student?.studentName}</h3>
                            <p>{student?.studentEmail}</p>
                            <NavLink style={{textDecoration:'none', color:'black',marginRight:'8px',border:'1px solid black',padding:'0.4px',}} to={`/editStudents/${student?.id}`}> Edit</NavLink>
                            <button onClick={()=>deleteStudent(student?.id)}>Delete</button>
                        </div>
                        <hr />
                    </div>
                ))
            }
        </div>
        </>
    )
    
}
export default Read;