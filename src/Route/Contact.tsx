import React from "react";
import contact_img from '../assets/contact-img.png'

const Contact:React.FC=()=>{
    return(
        <div className="contact-main">
            <div className="contact-left">
                <h1>Contact Us</h1>
                <p>Make your vision of your future enterprise a reality</p>
            </div>
            <div className="contact-right">
                <img src={contact_img} alt="" />
            </div>
        </div>
    )
}
export default Contact;