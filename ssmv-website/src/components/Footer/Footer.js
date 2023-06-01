import React from 'react'
import { FaFacebookSquare,  FaInstagramSquare, FaTwitterSquare, FaLinkedin} from "react-icons/fa";
import { MdWifiCalling3, MdLocationOn} from "react-icons/md";
import '../Footer/Footer.css'

const Footer = () => {
  return (
      <>
        <div className='Footer'>
          <div className='Footer-body'>
            <div className='aboutus-footer'>
              <h3 className='footer-head'>About Us</h3>
              <div className='sub-section-footer'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum</p>
              </div>
            </div>
            <div className='Support'>
              <h3 className='footer-head'>Support</h3>
              <div className='sub-section-footer'>
              <div>@LoremIpsum</div><hr></hr>
              <div>@LoremIpsum</div><hr></hr>
              </div>
            </div>
            <div className='QuickLinks'>
              <h3 className='footer-head'>Quick Links</h3>
              <div className='sub-section-footer'>
                <div>link 1</div>
                <hr></hr>
                <div>link 1</div>
                <hr></hr>
              </div>
            </div>
            <div className='Contact-us'>
            <h3 className='footer-head'>Contact Us</h3>
            <div className='sub-section-footer'>
            <div className='contact-icons'>
            <MdWifiCalling3 className="call"/> 9784563144
            </div>
            <div>
            <MdLocationOn className="location"/>Lorem ipsum dolor sit amet, consectetur adip elit sit amet, conse
            </div>
            </div>
            </div>
          </div>
          <div className='SocialMedia-icons'>
          <FaFacebookSquare className="fb"/>
          <FaInstagramSquare className="insta"/>
          <FaTwitterSquare className="ttr"/>
          <FaLinkedin className="ln"/>
          </div>
        </div>
      </>
  )
}
export default Footer;

