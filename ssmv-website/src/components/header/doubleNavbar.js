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
                <ul className = "section-links-indiv">
                    <li><a href = "/#"> Admission </a></li>
                    <li><a href = "/Alumni"> Alumni </a> </li>
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
                    <li><a href="/#">About Us</a> 
                            <ul>
                                <li><a href= "/About Us/SSMV">SSMV</a></li>
                                <li><a href= "/About Us/Annual Report">Annual Report</a></li>
                                <li><a href= "/About Us/Founder">Founder</a></li>
                                <li><a href= "/About Us/Principle">Principle</a></li>
                                <li><a href= "/">Objectives</a></li>
                                <li><a href= "/">SSMV Map</a></li>
                                <li><a href= "/">Temple</a></li>
                                <li><a href= "/">Kulgeet</a></li>
                            </ul>
                    </li> 
                    
                    <li><a href="/#">Academics</a>
                        <ul>
                                <li><a href= "/">BA (Shastri) </a>
                                    {/* <ul className='sub-submenu'>
                                        <li><a href='/'>List of Courses</a></li>
                                        <li><a href='/'>course2</a></li>
                                    </ul> */}
                                </li>
                                <li><a href= "/">MA (Aacharya)</a></li>
                        </ul>
                    </li>
                    <li><a href="/#">Administration</a>
                    <ul>
                                <li><a href= "/Admininstration/College Administration">College Administration</a></li>
                                <li><a href= "/">Managing Committee</a></li>
                                <li><a href= "/Administration/Group">Group 3/4</a></li>
                        </ul>
                    </li>
                    <li><a href="/#">Services</a>
                        <ul>
                                <li><a href= "/">Hostel</a></li>
                                <li><a href= "/">Library</a></li>
                                <li><a href= "/">Computer Lab</a></li>
                                <li><a href= "/">Mess</a></li>
                                <li><a href= "/">Yoga and Kamakanda</a></li>
                        </ul>
                    </li>
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

