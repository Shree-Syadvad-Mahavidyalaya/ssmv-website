import React,{useState,useEffect} from 'react';
import './VideoG.css';
import Delete from '../CRUD/Delete/Delete';
import Create from '../CRUD/Create/Create';
import axios from 'axios';
import A from '../../A';

const Glry = () => {
    
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://test-moid.vercel.app/ssmv/alumni/gallery/')
      .then(response => {
        const { alumni_gallery } = response.data;
        setData(alumni_gallery);
      })
      .catch(error => {
        console.error('Error fetching events data:', error);
      });
  }, []);

  return (
    <div id='container'>
      <div id='heading'>
        <h1>GALLERY <Create url={'/add-item/alumni-video-gallery'}/> <hr id='line2'></hr></h1>
        <button className='view-btn'><A href='/ViewAll/Gallery'>View</A></button>
      </div>
      <div className='gallery-boxes'>
      {Data.map(item => (
          <div className='box1' key={item._id}>
            <img src={item.imagesurl} alt=''/>
          <Delete url={`https://test-moid.vercel.app/ssmv/alumni/videoGallery/${item._id}`} baseurl={'/Alumni'} />
          </div>                      
      ))}
      </div>
      </div>
  )
}

export default Glry;
