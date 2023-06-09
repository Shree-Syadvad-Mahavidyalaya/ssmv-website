import React,{useState,useEffect} from 'react';
import './AlumniSpotlight.css';
import ASTIndiv from './ASTIndiv';
import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
import { AlumData} from "./DataAlum";
// import { productData} from "../../events/Data";
// import EventsIndiv from "../../events/EventsIndiv";


  
  // const data = AlumData.map((item) => (
  //   <ASTIndiv
  //     name={item.name}
  //     url={item.imageurl}
  //     designation={item.designation}
  //   />
  // ));
  // console.log(data_alum);
  // const product = productData.map((item) => (
  //   <EventsIndiv
  //     name={item.name}
  //     url={item.imageurl}
  //     price={item.price}
  //     description={item.description}
  //   />
  // ));
//   const AlumniSpotlight = () => {
//   return (
//     <div className="Alumni-container">
//       <h1 id='alum'>Alumni Spotlight</h1>
//       <Carousel sx = {{ width : " 200px" }}>
//       <div className='card1' >
//         <img className='alumni-img' src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=''/>
//         <p>xyz</p>
//         <hr></hr>
//         <p>abc</p>
//     </div>
//       </Carousel>
//       <div className='alumni-about'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asp</p></div>
//     </div>
//   );
// }

// export default AlumniSpotlight;

import axios from 'axios';

const AlumniSpotlight = () => {
  const [alumniData, setAlumniData] = useState([]);

  useEffect(() => {
    axios.get('https://test-moid.vercel.app/ssmv/alumni/spotlight/')
      .then(response => {
        const { alumni_spotlight } = response.data;
        setAlumniData(alumni_spotlight);
      })
      .catch(error => {
        console.error('Error fetching alumni data:', error);
      });
  }, []);

  return (
    <div className="Alumni-container">
      <h1 id='alum'>Alumni Spotlight</h1>
      <Carousel sx={{ width: "200px" }}>
        {alumniData.map(alumni => (
          <div className='card1' key={alumni._id}>
            <img className='alumni-img' src={alumni.imagesurl} alt='' />
            <p>{alumni.name}</p>
            <hr></hr>
            <p>{alumni.description}</p>
          </div>
        ))}
      </Carousel>
      <div className='alumni-about'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asp</p></div>
      
    </div>
  );
};

export default AlumniSpotlight;
