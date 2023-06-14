import React,{useState,useEffect} from 'react';
import './LatestSSMV.css';
import {responsive } from "./LatestData";
// import LatestItem from "./LatestItem";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import Create from '../../CRUD/Create/Create';
import Delete from '../../CRUD/Delete/Delete';
import Update from '../../CRUD/Update/Update';

const LatestSSMV = () => {

  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    axios.get('https://test-moid.vercel.app/ssmv/alumni/latest/')
      .then(response => {
        const { alumni_latest } = response.data;
        setLatestData(alumni_latest);
      })
      .catch(error => {
        console.error('Error fetching latest data:', error);
      });
  }, []);

  return (
     <>
      <h2 id='Latest'>Latest @SSMV <Create url={'/add-item/alumni-latest'}/></h2>
      <div className='Latest-container'>
        <Carousel responsive={responsive}>
          {latestData.map(latestItem => (
            <div className="card2" key={latestItem._id}>
              <div className="body-section">
                <h3>{latestItem.name}</h3>
                <p>{latestItem.description}</p>
                <Delete url={`https://test-moid.vercel.app/ssmv/alumni/latest/${latestItem._id}`} baseurl={'/Alumni'} />
                <Update url = {'/edit-item/alumni-latest'} id={latestItem._id}/>
              </div>
              <img className="img-section" src={latestItem.imagesurl} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default LatestSSMV;


