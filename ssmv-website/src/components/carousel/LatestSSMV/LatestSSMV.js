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

const LatestSSMV = (props) => {
  const {api,fields,baseUrl}=props;
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    axios.get(api)
      .then(response => {
        const { alumni_latest } = response.data;
        setDataArray(alumni_latest);
      })
      .catch(error => {
        console.error('Error fetching latest data:', error);
      });
  }, [api]);

  return (
     <>
      <h1 id='Latest'>LATEST @SSMV <Create {...props}/><hr></hr></h1>
      <div className='Latest-container'>
        <Carousel responsive={responsive}>
          {dataArray.map(data => (
            <div className="card2" key={data._id}>
              <div className="body-section">
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <Delete {...props} api={api+data._id}/>
                <Update {...props} api={api+data._id} data={data}/>
              </div>
              <img className="img-section" src={data.imagesurl} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default LatestSSMV;


