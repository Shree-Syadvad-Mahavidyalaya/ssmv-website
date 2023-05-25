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
            <h1>Events</h1>
            <Carousel responsive={responsive}>
            {product}
            </Carousel>
        </div>
    );
}

export default Events;
