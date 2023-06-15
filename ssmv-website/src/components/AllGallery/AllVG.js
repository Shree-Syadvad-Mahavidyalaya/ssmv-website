import React,{useState,useEffect} from 'react';
import './AllVG.css'
import Delete from '../CRUD/Delete/Delete'
import Create from '../CRUD/Create/Create'
import axios from 'axios';

export default function AllVG() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://test-moid.vercel.app/ssmv/videoGallery/')
      .then(response => {
        const { videoGallery } = response.data;
        setData(videoGallery);
      })
      .catch(error => {
        console.error('Error fetching events data:', error);
      });
  }, []);

  return (
    <>
        <h1>VIDEO GALLERY <Create url={'/add-item/videos'}/><hr></hr></h1>
        <div className='gallery-boxes-videos'>
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
          <Delete url={`https://test-moid.vercel.app/ssmv/videoGallery/${item._id}`} baseurl={'/ViewAll/VGallery'} />
          </div>                      
      ))}         
        </div>
    </>
  )
}