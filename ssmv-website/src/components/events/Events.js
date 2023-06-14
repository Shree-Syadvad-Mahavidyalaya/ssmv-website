import './Events.css';
import React,{useState,useEffect} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Create from '../CRUD/Create/Create';
import axios from 'axios';
import Update from '../CRUD/Update/Update';
import { responsive } from './Data';
import Delete from '../CRUD/Delete/Delete';


const Events = () => {
    
    
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    axios.get('https://test-moid.vercel.app/ssmv/alumni/event/')
      .then(response => {
        const { alumni_event } = response.data;
        setEventsData(alumni_event);
      })
      .catch(error => {
        console.error('Error fetching events data:', error);
      });
  }, []);

  return (
    <div className="events-container">
      <div id='heading1'>
        <h2>Events<Create url={'/add-item/alumni-events'}/></h2>
        <button className='view-btn'><a href='/ViewAll/AllEvents'>View All</a></button>
      </div>
      <Carousel responsive={responsive}>
        {eventsData.map(event => (
          <div className="card_eve" key={event._id}>
            <img className="product--image" src={event.imagesurl} alt=" " />
            <h2>{event.name}</h2>
            <p className="price">{event.venue}</p>
            <p className='description-event'>{event.description}</p>
            <p>
              <button>Read More</button>
              <Update url={'/edit-item/alumni-events'} id={event._id}/>
              <Delete/>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Events;
