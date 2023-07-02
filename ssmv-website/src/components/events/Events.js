import './Events.css';
import React,{useState,useEffect} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import Create from '../CRUD/Create/Create';
import Update from '../CRUD/Update/Update';
import { responsive } from './Data';
import Delete from '../CRUD/Delete/Delete';
import A from '../AnchorTag';


const Events = (props) => {
    
    
  const {api,fields,baseUrl}=props;
  const [dataArray, setDataArray] = useState([]);


  useEffect(() => {
    axios.get(api)
      .then(response => {
        const { alumni_event } = response.data;
        setDataArray(alumni_event);
      })
      .catch(error => {
        console.error('Error fetching events data:', error);
      });
  }, [api]);

  return (
    <div className="events-container">
      <div id='heading1'>
        <h1>EVENTS <Create {...props}/> <hr id='line2'></hr></h1>
        <button className='view-btn'><A href='/ViewAll/AllEvents'>View All</A></button>
      </div>
      <Carousel responsive={responsive}>
        {dataArray.map(data => (
          <div className="card_eve" key={data._id}>
            <img className="product--image" src={data.imagesurl} alt=" " />
            <h2>{data.name}</h2>
            <p className="price">{data.venue}</p>
            <p className='description-data'>{data.description}</p>
            <p>
              <button>Read More</button>
              <Update {...props} api={api+data._id} data={data}/>
              <Delete {...props} api={api+data._id}/>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Events;
