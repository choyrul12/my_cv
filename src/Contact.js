import React, { Component } from "react";
import "./App.css";
import photo from "./pf.png";
import { ImHome } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

class Contact extends Component{
    render(){
        return(
            <>
                <div className="main">
                    <div className="contact">
                        <h1>Contact Me...</h1>
                        <div className="contact-warp">
                            < ImHome />
                             <h3>Address :</h3>
                             <p>Pesona Prima Cikahuripan 6 Block C2/8</p>
                        </div>
                        <div className="contact-warp">
                            < FaEnvelope />
                             <h3>Email :</h3>
                             <p>Choy.annam@gmail.com</p>
                        </div>
                        <div className="contact-warp">
                            < FaWhatsapp />
                             <h3>Whatsapp :</h3>
                             <p>+62 8787 8664 772</p>
                        </div>
                        <div className="contact-warp">
                            < FaGithubAlt />
                             <h3>Github :</h3>
                             <p>@choyrul12</p>
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

export default Contact;