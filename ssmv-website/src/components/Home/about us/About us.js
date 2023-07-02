import React,{useEffect,useState} from 'react';
// import  { useContext } from 'react';
import './About us.css'
// import MyContext from '../events/MyContext';
// import Update from '../CRUD/Update/Update';
import Update from '../../CRUD/Update/Update';
// import '../Editpage/AddNewsForm.css';

const AboutUs = (props) => {

  const {api, fields, baseUrl}=props;
  
  const [data, setData] = useState("");
  
  useEffect(() => {
    // Fetch data from the backend API
    fetch(api)
      .then(response => response.json())
      .then(data => {
        // Update the state with the received data
        console.log(data)
        if (data.success && data.data.length > 0) {
          const aboutData = data.data[0];
          setData(aboutData);
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  }, [api]);

  return (
    <div className='main-container'>
      <div className='container'>
        <div className='image-aboutus'>
          {/* Render the images from the 'images' state */}
            <img  src={data?.imageurl} alt='loading' />
        </div>
        <div className='about'>
          <h2 id='about-heading'>ABOUT US</h2>
          <div className='content'>
            {/* Render the description from the 'description' state */}
            <p>{data.description}
             <Update {...props} api={api+data._id} data={data}/>
            </p>
            <button className='cont-btn'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;