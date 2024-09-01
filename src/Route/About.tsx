import React from "react";
import about_img from '../assets/about-img.png'

const About:React.FC=()=>{
    return(
        <div className="about-main">
            <div className="about-left">
                <h1>Data, digital and excellence</h1>
                <p>Future-proofing digital enterprises from strategy definition to business outcomes by scaling digital innovations at speed</p>
            </div>
            <div className="about-right">
                <img src={about_img} alt="" className="about-img"/>
            </div>
        </div>
    )
}
export default About;