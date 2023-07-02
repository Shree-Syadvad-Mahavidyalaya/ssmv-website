import React,{useState,useEffect} from 'react';
import './VideoG.css';
import Delete from '../CRUD/Delete/Delete';
import Create from '../CRUD/Create/Create';
import axios from 'axios';
import A from '../AnchorTag';
import Update from '../CRUD/Update/Update';

const VideoG = (props) => {
    
  const [dataArrayta, setDataArray] = useState([]);
  const {api, fields, baseUrl}=props;
  useEffect(() => {
    axios.get(api)
      .then(response => {
        const { alumni_videoGallery } = response.data;
        setDataArray(alumni_videoGallery);
      })
      .catch(error => {
        console.error('Error fetching events data:', error);
      });
  }, [api]);

  return (
    <div id='container'>
      <div id='heading'>
        <h1>VIDEO GALLERY <Create {...props}/> <hr id='line2'></hr></h1>
        <button className='view-btn'><A href='/ViewAll/VGallery'>View</A></button>
      </div>
      
      <div className='gallery-boxes'>
      {dataArrayta.map(data => (
          <div className='box1' key={data._id}>
            <iframe
            width="100%"
            height="100%"
            src={data.videolink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Update {...props} api={api+data._id} data={data} />
          <Delete {...props} api={api+data._id} />
          </div>                      
      ))}
      </div>
      </div>
  )
}

export default VideoG;
