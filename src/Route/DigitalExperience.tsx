import React from "react";
import digital_experience_img from '../assets/digital-experience.png'

const DigitalExperience:React.FC=()=>{
    return(
        <div className="digitalexp-main">
            <div className="digitalexp-left">
                <h1>The best Digital Technology is no guarantor of a great digital experience</h1>
                <p>Drive business outcomes with experiences that address customer's neeeds and leverage the best of technologies</p>
              
            </div>
            <div className="digitalexp-right">
                <img src={digital_experience_img} alt="" />
            </div>
        </div>
    )
}
export default DigitalExperience;