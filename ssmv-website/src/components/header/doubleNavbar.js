import React, { useEffect } from 'react';
import { useState } from "react"
import { FaFacebookSquare , FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
  
const DoubleNavbar = () => {
    
  const navigate = useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(window.innerWidth>768);

  useEffect(()=>{
    window.addEventListener("resize", ()=>{setIsNavExpanded(window.innerWidth>768)})
  });

  const handleclicked=()=>{
    setIsNavExpanded(!isNavExpanded);
  }

  const handleClick = (event) => {
    event.preventDefault();
    navigate(event.target.getAttribute("href"));
    
  };

  return (
    <>
        <nav className="navbar-top">
            <div className="top-section-links">
                <ul className = "section-links-indiv">
                    <li><a href= "/ssmv-website" onClick={handleClick}> Home </a></li>
                    <li><a href= "/Admission" onClick={handleClick}> Admission </a></li>
                    <li><a href = "/Alumni" onClick={handleClick}> Alumni </a> </li>
                    <li><a href = "/Donate" onClick={handleClick}> Donate </a></li>
                    <li><a href = "/Greviances" onClick={handleClick}> Grievancess </a></li>
                    <li><a href = "/Login" onClick={handleClick}> Login </a></li>
                    <li><a href = "/Login" onClick={handleClick}> Logout </a></li>
                </ul>
            </div>
            {/* social media links */}
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
                    <li><a href="/" onClick={(e)=>{e.preventDefault();}}>About Us</a> 
                            <ul id="abt">
                                <li><a href= "/About Us/SSMV" onClick={handleClick}>SSMV</a></li>
                                <li><a href= "/About Us/Annual Report" onClick={handleClick}>Annual Report</a></li>
                                <li><a href= "/About Us/Founder" onClick={handleClick}>Founder</a></li>
                                <li><a href= "/About Us/Principle" onClick={handleClick}>Principle</a></li>
                                <li><a href= "/About Us/Objectives" onClick={handleClick}>Objectives</a></li>
                                <li><a href= "/About Us/Map" onClick={handleClick}>SSMV Map</a></li>
                                <li><a href= "/" onClick={handleClick}>Temple</a></li>
                                <li><a href= "/" onClick={handleClick}>Kulgeet</a></li>
                            </ul>
                    </li> 
                    
                    <li><a href="/" onClick={(e)=>{e.preventDefault();}}>Academics</a>
                        <ul id='acads'>
                                <li><a href= "/Courses/BA" onClick={handleClick}>BA (Shastri)  </a></li>
                                <li><a href= "/Courses/MA" onClick={handleClick}>MA (Aacharya)  </a></li>
                        </ul>
                    </li>
                    <li><a href="/" onClick={(e)=>{e.preventDefault();}}>Administration</a>
                    <ul id="admn">
                                <li><a href= "/Admininstration/College Administration" onClick={handleClick}>College Administration</a></li>
                                <li><a href= "/" onClick={handleClick}>Managing Committee</a></li>
                                <li><a href= "/Administration/Group" onClick={handleClick}>Group 3/4</a></li>
                        </ul>
                    </li>
                    <li><a href="/" onClick={(e)=>{e.preventDefault();}}>Services</a>
                        <ul id='ss'>
                                <li><a href= "/Services/Hostel" onClick={handleClick}>Hostel</a></li>
                                <li><a href= "/Services/Library" onClick={handleClick}>Library</a></li>
                                <li><a href= "/Services/Computer" onClick={handleClick}>Computer Lab</a></li>
                                <li><a href= "/Services/Mess"onClick={handleClick}>Mess</a></li>
                                <li><a href= "/Services/Yoga" onClick={handleClick}>Yoga and Kamakanda</a></li>
                        </ul>
                    </li>
                    <li><a href="/" onClick={(e)=>{e.preventDefault();}}>Media</a></li>
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

