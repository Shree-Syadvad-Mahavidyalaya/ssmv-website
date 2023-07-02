import './AlumniSpotlight.css';
import React,{useState,useEffect} from 'react';
import Carousel from 'react-material-ui-carousel'
import Create from '../../CRUD/Create/Create';
import axios from 'axios';
import Delete from '../../CRUD/Delete/Delete';
import Update from '../../CRUD/Update/Update';
const AlumniSpotlight = (props) => {
  
  const [dataArray, setDataArray] = useState([]);
  const {api,fields,baseUrl}=props;

  useEffect(() => {
    axios.get(api)
      .then(response => {
        const { alumni_spotlight } = response.data;
        setDataArray(alumni_spotlight);
      })
      .catch(error => {
        console.error('Error fetching latest data:', error);
      });
  }, [api]);

  return (
    <>
      <h1 id='alum'>ALUMNI SPOTLIGHT <Create {...props} />
      <hr></hr></h1>
      <Carousel>
      {dataArray.map(data => (
        <div className='card1' key={data._id}>
        <div className='alumni-card'>
        <img className='alumni-img' src={data.imagesurl} alt=''/>
          <p>{data.name}</p>
          <hr></hr>
          <p>{data.profile}</p>
        </div>
        <div className='alumni-about'><p>{data.description}</p>
        <Delete {...props} api={api+data._id}/>
        <Update {...props} api={api+data._id} data={data}/>
        </div>
      </div>
      ))}
      </Carousel>
    </>
  );
};

export default AlumniSpotlight;
