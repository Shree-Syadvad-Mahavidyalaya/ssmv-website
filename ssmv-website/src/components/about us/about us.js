import { useContext } from 'react';
import React from 'react';
import './about us.css'
import Update from '../CRUD/Update/Update';
import MyContext from '../events/MyContext';

const AboutUs = () => {
  console.log(useContext(MyContext)[0]);
  
  // console.warn(data)
  // const url= window.base_url+'/ssmv/aboutus';

  
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
                <Update/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs;
