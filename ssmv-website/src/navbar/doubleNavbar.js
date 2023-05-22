import React from 'react';
import { useState } from "react"
import { FaFacebookSquare , FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import './navbar.css';
  
const DoubleNavbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  const handleclicked=()=>{
    setIsNavExpanded(!isNavExpanded);
  }

  return (
    <>
        <nav className="navbar-top">
            <div className="top-section-links">
                <ul classname = "section-links-indiv">
                    <li><a href = "/#"> Admission </a></li>
                    <li><a href = "/#"> Alumni </a> </li>
                    <li><a href = "/#"> Donate </a></li>
                    <li><a href = "/#"> Grievances </a></li>
                    <li><a href = "/#"> Login </a></li>
                </ul>
            </div>
            {/* sociaol media links */}
            <div className="social-media-icons">
                <ul className="social-media-desktop">
                    <li><a href="/#"> <FaFacebookSquare className="facebook"/></a></li>
                    <li><a href="/#"><FaTwitterSquare className="twitter"/></a></li>
                    <li><a href="/#"><FaYoutubeSquare className="youtube"/></a></li>
                </ul>
            </div>
        </nav>
        <nav className='navbar-bottom'>
            <div className='logo'>
                <img src="" alt="loading"/>
            </div>
            { isNavExpanded && <div className="main-menu">
                <ul>
                    <li><a href="/#">About Us</a></li>
                    <li><a href="/#">Academics</a></li>
                    <li><a href="/#">Administration</a></li>
                    <li><a href="/#">Services</a></li>
                    <li><a href="/#">Media</a></li>
                </ul>
            </div> }   
            <div id='mobile'>
                <i id='bars' onClick={handleclicked} className={isNavExpanded ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
      </nav>
    </>
  );
};

export default DoubleNavbar;

