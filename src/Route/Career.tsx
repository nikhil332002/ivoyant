import React from "react";
import career_img from '../assets/Careers-img.png'

const Career:React.FC=()=>{
    return(
        <div className="careers-main">
            <div  className="careers-left">
                <h1>Careers</h1>
                <p>Join our team to shape the future</p>
            </div>
            <div className="careers-right">
                <img src={career_img} alt=""/>
            </div>
        </div>
    )
}
export default Career;