import React,{useEffect,useState} from 'react';
import  { useContext } from 'react';

import './about us.css'
// import Update from '../CRUD/Update';
import MyContext from '../events/MyContext';
import Update from '../CRUD/Update';
import Create from '../CRUD/Create';

// const AboutUs = () => {
  
//   // console.warn(data)
//   // const url= window.base_url+'/ssmv/aboutus';
//   console.log(useContext(MyContext)[0]);
//   console.log(useContext(MyContext)[0]);
  
//   // console.warn(data)
//   // const url= window.base_url+'/ssmv/aboutus';

  
//   return (
//     <div className='main-container'>
//         <div className='container'>
//           <div className='image-aboutus'>
//             <img src="" alt='loading'/>
//           </div>
//           <div className='about'>
//               <h2 id='about-heading'>ABOUT US</h2>
//               <div className='content'>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrua <Update/></p>
                
//                 <button className='cont-btn'>Learn More</button>
//               </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default AboutUs;


import '../Editpage/AddNewsForm.css';

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

