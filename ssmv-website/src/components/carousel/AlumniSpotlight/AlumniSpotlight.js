import './AlumniSpotlight.css';
import React,{useState,useEffect} from 'react';
import Carousel from 'react-material-ui-carousel'
import Create from '../../CRUD/Create/Create';
import axios from 'axios';
import Delete from '../../CRUD/Delete/Delete';
import Update from '../../CRUD/Update/Update';

const AlumniSpotlight = () => {
  
  const [SpotlightData, setSpotlightData] = useState([]);

  useEffect(() => {
    axios.get('https://test-moid.vercel.app/ssmv/alumni/spotlight/')
      .then(response => {
        const { alumni_spotlight } = response.data;
        setSpotlightData(alumni_spotlight);
      })
      .catch(error => {
        console.error('Error fetching latest data:', error);
      });
  }, []);

  return (
    <>
      <h1 id='alum'>ALUMNI SPOTLIGHT <Create url={'/add-item/alumni-details'} />
      <hr></hr></h1>
      <Carousel>
      {SpotlightData.map(SpotlightItem => (
        <div className='card1' key={SpotlightItem._id}>
        <div className='alumni-card'>
        <img className='alumni-img' src={SpotlightItem.imagesurl} alt=''/>
          <p>{SpotlightItem.name}</p>
          <hr></hr>
          <p>{SpotlightItem.profile}</p>
        </div>
        <div className='alumni-about'><p>{SpotlightItem.description}</p>
        <Delete url={`https://test-moid.vercel.app/ssmv/alumni/spotlight/${SpotlightItem._id}`} baseurl={'/Alumni'} />
        <Update url={'/edit-item/spotlight'} id={SpotlightItem._id}/>
        </div>
      </div>
      ))}
      </Carousel>
    </>
  );
};

export default AlumniSpotlight;
