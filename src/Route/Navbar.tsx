
import { Link } from "react-router-dom";
import logo from '../assets/ivoyant-logo.png'
import { useState } from "react";




const Navbar:React.FC=()=>{

    const [isOpen,setIsOpen] = useState<boolean>(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    }
    console.log(isOpen);
    

    return(
        <div className="navbar">
            <Link to="/" id="logo"><img src={logo} alt="" /></Link>
            <ul className="navbar-ul">
                <li className="navbar-li" onClick={toggle}>
                Solution
                {
                    isOpen && 
                    (
                        <ul className="navbar-li-dropdown">
                        <li><Link to="/digital-experience" className="navbar-li-dropdown-select">Digital Experience</Link></li>
                        <li><Link to="*"  className="navbar-li-dropdown-select">Digital Transformation</Link></li>
                        <li><Link to="*"  className="navbar-li-dropdown-select">Digital Infrastructure</Link></li>
                        </ul>
                    )
                }
                </li>
                <li><Link to="/about" id="about" className="navbar-li">About Us</Link></li>
                <li><Link to="/career" id="career" className="navbar-li">Careers</Link></li>
                <li><Link to="/contact" id="contact" className="navbar-li">Contact Us</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;