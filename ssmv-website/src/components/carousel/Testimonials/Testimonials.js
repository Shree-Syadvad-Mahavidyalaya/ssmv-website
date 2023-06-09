import React from 'react'
import './Testimonials.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Testimonialsdata, responsive } from "./Testimonialsdata";
import Tsms from "./Tsms";

const Testimonials = () => {

  const Td = Testimonialsdata.map((item) => (
    <Tsms
      // name={item.name}
      url={item.imageurl}
      para={item.para}
    />
  ));
  return (
    <div className='Testimonials'>
          <h2 id='h2'>Testimonials<a href='/add-item/Image-Desc'><button className='add-btn'>Add</button></a></h2>
    <Carousel responsive={responsive}>
            {Td}
    </Carousel>
   </div>
   )
}

export default Testimonials