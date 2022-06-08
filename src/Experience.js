import React, { Component } from "react";
import "./App.css";
import photo from "./pf.png";

class Experience extends Component{
    render(){
        return(
            <>
                <div className="main">
                    <div className="experience">
                        <h1>Work Experience</h1>
                        <h3>IT Programmer<span>2018 - Now</span></h3>
                        <p>Develop and creating software programs, integrating systems and software, training end-users, modifying source-code, and maintaining the current systems</p>
                        <h3>IT Programmer<span>2017 - 2018</span></h3>
                        <p>Develop and creating software programs, integrating systems and software, training end-users, modifying source-code, and maintaining the current systems</p>
                        <h3>Drafter Engineering <span>2015 - 2016</span></h3>
                        <p>Design and prepare shopdrawing using computer aided design and drafting (CADD) software</p>
                    </div>
                    <div className="photo">
                        <img src={photo} alt="" />
                    </div>
                </div>
            </>
        );
    }
};

export default Experience;