import React, { Component } from "react";
import "./App.css";
import photo from "./pf.png";

class Home extends Component{
    render(){
        return(
            <>
                <div className="main">
                    <div className="hero">
                        <h1>Hallo World...</h1>
                        <h3>I'm Choyrul Annam</h3>
                        <h3>a passionate <span>web developer</span></h3>
                        <button>Hire Me !</button>
                    </div>
                    <div className="photo">
                        <img src={photo} alt="" />
                    </div>
                </div>
            </>
        );
    }
};

export default Home;