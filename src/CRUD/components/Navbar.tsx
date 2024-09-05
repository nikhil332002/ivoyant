import { Link } from "react-router-dom"
import './Style.css'
const Navbar:React.FC=()=>{
    return(
        <>
        <div>
            <ul className="ul-list">
                <li className="navelements"><Link to="/">Home</Link></li>
                <li className="navelements"><Link to="/addStudents">Add Students</Link></li>
            </ul>
        </div>
        </>
    )
}
export default Navbar;