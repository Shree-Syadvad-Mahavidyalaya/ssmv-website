import React,{useEffect,useState} from 'react';
import  { useContext } from 'react';
import './about us.css'
import Update from '../CRUD/Update/Update';

const AboutUs = () => {
  const [about, setAbout] = useState({
    description: '',
    images: []
  });

  useEffect(() => {
    // Fetch data from the backend API
    fetch('https://test-moid.vercel.app/ssmv/aboutus/SSMV/')
      .then(response => response.json())
      .then(data => {
        // Update the state with the received data
        if (data.success && data.ssmv.length > 0) {
          const aboutData = data.ssmv[0];
          setAbout({
            description: aboutData.description,
            images: aboutData.images
          });
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  }, []);

  return (
    <div className='main-container'>
      <div className='container'>
        <div className='image-aboutus'>
          {/* Render the images from the 'images' state */}
          {about.images.map((image, index) => (
            <img key={index} src={image} alt='loading' />
          ))}
        </div>
        <div className='about'>
          <h2 id='about-heading'>ABOUT US</h2>
          <div className='content'>
            {/* Render the description from the 'description' state */}
            <p>{about.description}<Update/></p>
            <button className='cont-btn'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

