import React, { useContext, useEffect } from 'react';
import { useState } from "react"
import { FaFacebookSquare , FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import './Header.css';
import MyContext from '../events/MyContext';
import A from '../AnchorTag';
  
const Header = () => {


  const [isNavExpanded, setIsNavExpanded] = useState(window.innerWidth>768);
  const isAdmin=useContext(MyContext)[0];


  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsNavExpanded(window.innerWidth > 768);
    });
  }, []);

  const handleclicked=()=>{
    setIsNavExpanded(!isNavExpanded);
  }
  const handleAnchorClick=(e)=>{
     e.preventDefault();
  }
  return (
    <>
        <nav className="navbar-top">
            <div className="top-section-links">
                <ul className = "section-links-indiv">
                    <li><A href= "/ssmv-website" > Home </A></li>
                    <li><A href= "/Admission" > Admission </A></li>
                    <li><A href = "/Alumni" > Alumni </A> </li>
                    <li><A href = "/Donate" > Donate </A></li>
                    <li><A href = "/Greviances" > Grievancess </A></li>
                    <li><A href={isAdmin ? "/Logout" : "/Login"} >{isAdmin ? "Logout" : "Login"}</A>
    </li>
                </ul>
            </div>
            {/* social media links */}
            <div className="social-media-icons">
                <ul className="social-media-desktop">
                    <li><A href="/#"> <FaFacebookSquare className="facebook"/></A></li>
                    <li><A href="/#"><FaTwitterSquare className="twitter"/></A></li>
                    <li><A href="/#"><FaYoutubeSquare className="youtube"/></A></li>
                </ul>
            </div>
        </nav>
        <nav className='navbar-bottom'>
            <div className='logo'>
                <img src="https://drive.google.com/uc?export=view&id=15KYpqXFAgLWzBOlH5-WTLwk2-8gSkuba" alt="loading"/>
            </div>
            { isNavExpanded && <div className="main-menu">
                <ul>
                    <li><a href="/" onClick={handleAnchorClick}>About Us</a> 
                            <ul id="abt">
                                <li><A href= "/About Us/SSMV" >SSMV</A></li>
                                <li><A href= "/About Us/Annual Report" >Annual Report</A></li>
                                <li><A href= "/About Us/Founder" >Founder</A></li>
                                <li><A href= "/About Us/Principle" >Principle</A></li>
                                <li><A href= "/About Us/Objectives" >Objectives</A></li>
                                <li><A href= "/About Us/Map" >SSMV Map</A></li>
                                <li><A href= "/" >Temple</A></li>
                                <li><A href= "/" >Kulgeet</A></li>
                            </ul>
                    </li> 
                    
                    <li><a href="/" onClick={handleAnchorClick}>Academics</a>
                        <ul id='acads'>
                                <li><A href= "/Courses/BA" >BA (Shastri)  </A></li>
                                <li><A href= "/Courses/MA" >MA (Aacharya)  </A></li>
                        </ul>
                    </li>
                    <li><a href="/" onClick={handleAnchorClick}>Administration</a>
                    <ul id="admn">
                                <li><A href= "/Admininstration/CollegeAdministration" >College Administration</A></li>
                                <li><A href= "/Administration/ManagingCommitee" >Managing Committee</A></li>
                                <li><A href= "/Administration/Group" >Group 3/4</A></li>
                        </ul>
                    </li>
                    <li><a href="/" onClick={handleAnchorClick}>Services</a>
                        <ul id='ss'>
                                <li><A href= "/Services/Hostel" >Hostel</A></li>
                                <li><A href= "/Services/Library" >Library</A></li>
                                <li><A href= "/Services/Computer" >Computer Lab</A></li>
                                <li><A href= "/Services/Mess">Mess</A></li>
                                <li><A href= "/Services/Yoga" >Yoga and Kamakanda</A></li>
                        </ul>
                    </li>
                    <li><a href="/Media" onClick={handleAnchorClick}>Media</a></li>
                </ul>
            </div> }   
            <div id='mobile'>
                <i id='bars' onClick={handleclicked} className={isNavExpanded ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
      </nav>
    </>
  );
};

export default Header;

