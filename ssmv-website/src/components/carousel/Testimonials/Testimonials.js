import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from "./Testimonialsdata";
import Create from '../../CRUD/Create/Create';
import Delete from '../../CRUD/Delete/Delete';
import './Testimonials.css';
import Update from '../../CRUD/Update/Update';

const Testimonials = (props) => {
  const {api,fields,baseUrl}=props;
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    axios.get(api)
      .then(response => {
        const { alumni_testinomial} = response.data;
        setDataArray(alumni_testinomial);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [api]);

  return (
    <div className='Testimonials'>
      <h1 id='h2'>TESTIMONIALS <Create {...props} /> <hr></hr></h1>
      <Carousel responsive={responsive}>
        {dataArray.map(data => (
          <div id='body-containers' key={data._id}>
            <div className='boxes1'></div>
            <div className='test-Body'>
              <img className='img-test' src={data.imagesurl} alt=''/>
              <div className='cont-body-test'>
                <i className="fa-solid fa-quote-left fa-3x"></i>
                <p>{data.description}</p>
                <Update {...props} api={api+data._id} data={data}/>
                <Delete {...props} api={api+data._id}/>
              </div>
            </div>
            <div className='boxes2'></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Testimonials;
