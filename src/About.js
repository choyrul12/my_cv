import React, { Component } from "react";
import "./App.css";
import photo from "./pf.png";

class About extends Component{
    render(){
        return(
            <>
                <div className="main">
                    <div className="about">
                        <h1>About Me</h1>
                        <h3>Profile</h3>
                        <p>I am interested and like to learn new things, although it takes time to adapt. I can work in a team and individually, I want to always explore my potential until I see how far I can go.
                        </p>
                        <ul>
                            <li><i class="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Choyrul Annam, S.Kom</span></li>
                            <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>2 Desember 1993</span></li>
                            <li><i class="bi bi-chevron-right"></i> <strong>Education:</strong> <span>Information System</span></li>
                            <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+62 8787 8664 772</span></li>
                            <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Cileungsih, Jawa Barat</span></li>
                        </ul>
                        <h3>Skills</h3>
                        <div className="skill-warp">
                            <div className="skill">
                                <label>HTML:</label>
                                <progress value="80" max="100"></progress>
                                <label>CSS (Boostrap, Tailswind):</label>
                                <progress value="60" max="100"></progress>
                                <label>PHP (Codeigniter,Laravel):</label>
                                <progress value="75" max="100"></progress>
                                <label>Javascript (JQuery):</label>
                                <progress value="70" max="100"></progress>
                                <label>MySQL:</label>
                                <progress value="75" max="100"></progress>
                            </div>
                            <div className="skill">
                                <label>React Js:</label>
                                <progress value="60" max="100"></progress>
                                <label>React Native:</label>
                                <progress value="50" max="100"></progress>
                                <label>Photoshop:</label>
                                <progress value="60" max="100"></progress>
                                <label>Adobe Ilustrator:</label>
                                <progress value="60" max="100"></progress>
                                <label>SolidWorks:</label>
                                <progress value="70" max="100"></progress>
                            </div>
                        </div>
                    </div>
                    <div className="photo">
                        <img src={photo} alt="" />
                    </div>
                </div>
            </>
        );
    }
};

export default About;