import React,{useEffect,useState} from 'react';
import React, { useContext } from 'react';
import './about us.css'
import MyContext from '../events/MyContext';

const AboutUs = () => {
  
  // console.warn(data)
  // const url= window.base_url+'/ssmv/aboutus';
  console.log(useContext(MyContext)[0]);

  
  return (
    <div className='main-container'>
        <div className='container'>
          <div className='image-aboutus'>
            <img src="" alt='loading'/>
          </div>
          <div className='about'>
              <h2 id='about-heading'>ABOUT US</h2>
              <div className='content'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum</p>
                
                <button className='cont-btn'>Learn More</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs;
