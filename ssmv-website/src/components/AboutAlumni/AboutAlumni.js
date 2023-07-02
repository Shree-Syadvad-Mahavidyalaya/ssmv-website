import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import './AboutAlumni.css'
import Update from '../CRUD/Update/Update';

const AboutAlumni = (props) => {


  const [data, setData] = useState([]);
  const {api,fields,baseUrl}=props;
  console.log(api);

  useEffect(() => {
    axios.get(api)
      .then(response => {
        console.log(response.data)
        const { alumni_about } = response.data;
        setData(alumni_about[0]);
      })
      .catch(error => {
        console.error('Error fetching events data:', error);
      });
  }, [api]);
  return (
    <>
      <Update {...props} api={api+data._id} data={data}/>
      <div className='main-container2'>
        <div className='container-1'>
            <h1>ALUMNI PLATFORM VISION<hr></hr></h1> 
            <p>{data.description}</p>
        </div>
        <div className='container-2'>
            <div className='box_no'><p>500+</p><span>Members</span></div>
            <div className='box_no'><p>100+</p><span>Batches</span></div>
            <div className='box_no'><p>30+</p><span>Cities</span></div>
        </div>
      </div>
    </>
    
  )
}

export default AboutAlumni;
