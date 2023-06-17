import React,{useState,useEffect} from 'react';
import './VideoG.css';
import Delete from '../CRUD/Delete/Delete';
import Create from '../CRUD/Create/Create';
import axios from 'axios';
import A from '../../A';

const VideoG = () => {
    
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://test-moid.vercel.app/ssmv/alumni/videoGallery/')
      .then(response => {
        const { alumni_videoGallery } = response.data;
        setData(alumni_videoGallery);
      })
      .catch(error => {
        console.error('Error fetching events data:', error);
      });
  }, []);

  return (
    <div id='container'>
      <div id='heading'>
        <h1>VIDEO GALLERY <Create url={'/add-item/alumni-video-gallery'}/> <hr id='line2'></hr></h1>
        <button className='view-btn'><A href='/ViewAll/VGallery'>View</A></button>
      </div>
      
      <div className='gallery-boxes'>
      {Data.map(item => (
          <div className='box1' key={item._id}>
            <iframe
            width="100%"
            height="100%"
            src={item.videolink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Delete url={`https://test-moid.vercel.app/ssmv/alumni/videoGallery/${item._id}`} baseurl={'/Alumni'} />
          </div>                      
      ))}
      </div>
      </div>
  )
}

export default VideoG;
