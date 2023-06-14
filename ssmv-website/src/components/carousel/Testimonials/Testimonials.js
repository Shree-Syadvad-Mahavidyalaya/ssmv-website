import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from "./Testimonialsdata";
import Create from '../../CRUD/Create/Create';
import Delete from '../../CRUD/Delete/Delete';
import './Testimonials.css';
import Update from '../../CRUD/Update/Update';

const Testimonials = () => {
  const [TestimonialsData, setData] = useState([]);

  useEffect(() => {
    axios.get('https://test-moid.vercel.app/ssmv/alumni/testinomials/')
      .then(response => {
        const { alumni_testinomial} = response.data;
        setData(alumni_testinomial);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='Testimonials'>
      <h2 id='h2'>Testimonials <Create url={'/add-item/alumni-testimonials'}/> </h2>
      <Carousel responsive={responsive}>
        {TestimonialsData.map(Testimonialsitem => (
          <div id='body-containers' key={Testimonialsitem._id}>
            <div className='boxes1'></div>
            <div className='test-Body'>
              <img className='img-test' src={Testimonialsitem.imagesurl} alt=''/>
              <div className='cont-body-test'>
                <i className="fa-solid fa-quote-left fa-3x"></i>
                <p>{Testimonialsitem.description}</p>
                <Update url={'/edit-item/alumni-testimonials'} id={Testimonialsitem._id}/>
                <Delete url={`https://test-moid.vercel.app/ssmv/alumni/testinomials/${Testimonialsitem._id}`} baseurl={'/Alumni'} />
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
