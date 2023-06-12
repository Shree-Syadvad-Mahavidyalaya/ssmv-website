import React,{useState,useEffect} from 'react';
import './AlumniSpotlight.css';
// import ASTIndiv from './ASTIndiv';
import Carousel from 'react-multi-carousel';
// import { AlumData} from "./DataAlum";
import Create from '../../CRUD/Create/Create';
import axios from 'axios';
import Delete from '../../CRUD/Delete/Delete';
import Update from '../../CRUD/Update/Update';

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
    <>
      <h2 id='alum'>Alumni Spotlight <Create url={'/add-item/alumni-details'}/></h2>
      <Carousel>
        {alumniData.map(alumni => (
          <div className='card1' key={alumni._id}>
          <div className='alumni-card'>
          <img className='alumni-img' src={alumni.url} alt=''/>
            <p>{alumni.name}</p>
            <hr></hr>
            <p>{alumni.profile}</p>
          </div>
          <div className='alumni-about'><p>{alumni.designation}</p>
          <Delete/><Update/>
          </div>
        </div>
        ))}
      </Carousel>
    </>
  );
};

export default AlumniSpotlight;
