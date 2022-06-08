import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Contact from './Contact';


export default function Menu(){
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <>
        <div className='menu-container'>
          <ul>
          <li className={splitLocation[1] === "" ? "active" : ""}><Link to='/'>HOME</Link></li>
          <li className={splitLocation[1] === "about" ? "active" : ""}><Link to='about'>ABOUT</Link></li>
          <li className={splitLocation[1] === "experience" ? "active" : ""}><Link to='experience'>EXPERIENCE</Link></li>
          <li className={splitLocation[1] === "portfolio" ? "active" : ""}><Link to='portfolio'>PORTFOLIO</Link></li>
          <li className={splitLocation[1] === "contact" ? "active" : ""}><Link to='contact'>CONTACT</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />  
          <Route path='experience' element={<Experience />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
    </>
  );
};
