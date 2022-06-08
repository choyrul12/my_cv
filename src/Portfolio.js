import React, { Component } from "react";
import "./App.css";
import photo from "./pf.png";

class Portfolio extends Component{
    render(){
        return(
            <>
                <div className="main">
                    <div className="portfolio">
                        <h1>Portfolio</h1>
                        <h3>I'm Productive - Toyota Astra Motor</h3>
                        <p>An application to monitor employee productivity levels and an application to submit new ideas and concepts</p>
                        <h3>System Information Mahad</h3>
                        <p>A application for managing grades and student health reports</p>
                        <h3>E-Library</h3>
                        <p>A web that contains various types of books, and you can read them</p>
                        <h3>Circel Student</h3>
                        <p>School management system, including report cards and learning content</p>
                        <h3>www.standardplus.co.id</h3>
                        <p>A company profile website</p>
                        <h3>Sistem Produksi PT. Klip Plastik Indonesia</h3>
                        <p>An integrated system from the marketing process to the production process to packaging</p>
                        <h3>www.klipplastik.co.id</h3>
                        <p>A company profile website and online shop product</p>
                    </div>
                    <div className="photo">
                        <img src={photo} alt="" />
                    </div>
                </div>
            </>
        );
    }
};

export default Portfolio;