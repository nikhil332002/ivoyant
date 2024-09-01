import React from "react";
import banner from  '../assets/Home-banner1.png'
import { useNavigate } from "react-router-dom";

const Home:React.FC=()=>{

    const navigate=useNavigate();

    const handleNavigate=():void=>{
        navigate('/contact');
    }

    return(
        <div className="home-main">
            <div className="home-left">
                <h1>Driving intelligent transformation through data, digital and excellence</h1>
                <p>Future-proofing digital enterprises from strategy definition to business outcomes by scaling digital innovations at speed across the entire enterprise footprint</p>
                <button className="home-button" onClick={handleNavigate}>Speak to a member of our team</button>
            </div>
            <div className="home-right">
                <img src={banner} alt="" className="banner"/>
            </div>
        </div>
    )
}
export default Home;