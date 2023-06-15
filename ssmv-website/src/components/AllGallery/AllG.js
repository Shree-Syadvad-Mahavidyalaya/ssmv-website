import React,{useState,useEffect} from 'react';
import './AllVG.css'
import Delete from '../CRUD/Delete/Delete'
import Create from '../CRUD/Create/Create'
import axios from 'axios';

export default function AllG() {

  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://test-moid.vercel.app/ssmv/gallery/')
      .then(response => {
        const { gallery } = response.data;
        setData(gallery);
      })
      .catch(error => {
        console.error('Error fetching events data:', error);
      });
  }, []);

  return (
    <>
        <h1>GALLERY <Create url={'/add-item/Images-Gallery'}/><hr></hr></h1>
        <div className='gallery-boxes-videos'>
        {Data.map(item => (
          <div className='box1' key={item._id}>
            <img src={item.imagesurl} alt=''/>
          <Delete url={`https://test-moid.vercel.app/ssmv/gallery/${item._id}`} baseurl={'/ViewAll/Gallery'} />
          </div>                      
      ))}      
        </div>
    </>
  )
}