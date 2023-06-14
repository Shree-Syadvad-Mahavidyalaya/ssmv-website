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

  // const handleDelete = async (id) => {
  //   try {
  //     const response = await fetch(`https://test-moid.vercel.app/ssmv/alumni/latest/${id}`, {
  //       method: 'DELETE',
  //     });

  //     if (response.ok) {
  //       // Remove the deleted element from the component's state
  //       setSpotlightData((prevData) => prevData.filter((item) => item.id !== id));
  //       console.log('Deleted successfully');
  //     } else {
  //       console.error('Failed to delete');
  //     }
  //   } catch (error) {
  //     console.error('Error deleting:', error);
  //   }
  // };
  return (
    <>
      <h2 id='alum'>Alumni Spotlight <Create url={'/add-item/alumni-details'} /></h2>
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
}

export default AlumniSpotlight;
