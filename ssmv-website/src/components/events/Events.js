import React,{useState,useEffect} from 'react';
import { productData, responsive } from "./Data";
import EventsIndiv from "./EventsIndiv";
import './Events.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';

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
        <h2>Events</h2>
        <button className='view-btn'><a href='/ViewAll/AllEvents'>View All</a></button>
      </div>
      <Carousel responsive={responsive}>
        {eventsData.map(event => (
          <div className="card_eve" key={event._id}>
            <img className="product--image" src={event.imagesurl} alt="" />
            <h2>{event.name}</h2>
            <p className="price">{event.venue}</p>
            <p className='description-event'>{event.description}</p>
            <p>
              <button>Read More</button>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Events;

