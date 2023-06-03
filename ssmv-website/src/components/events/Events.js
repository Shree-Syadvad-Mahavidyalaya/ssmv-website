import React from 'react';
import { productData, responsive } from "./Data";
import EventsIndiv from "./EventsIndiv";
import './Events.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Events = () => {
    
    
    const product = productData.map((item) => (
        <EventsIndiv
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}
        />
      ));

    return (
        <div className="events-container">
        <div id='heading1'>
          <h2>Events</h2>
          <button className='view-btn'><a href='/ViewAll/AllEvents'>View All</a></button>
        </div>
            <Carousel responsive={responsive}>
            {product}
            </Carousel>
        </div>
    );
}

export default Events;
