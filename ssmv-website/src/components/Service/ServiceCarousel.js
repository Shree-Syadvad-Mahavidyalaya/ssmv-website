
import React from 'react'
import Carousel from "react-multi-carousel";
import '../Service/Service'
import Delete from "../CRUD/Delete/Delete"
import Create from '../CRUD/Create/Create';
import { useState , useEffect} from 'react';
import axios from 'axios';

const ServiceCarousel = (props) => {
    const [dataArray, setDataArray] = useState([]);
    const {title,api,fields,baseUrl}=props;
  
    useEffect(() => {
      axios.get(api)
        .then(response => {
          setDataArray(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching events data:', error);
        });
    }, [api]);

  return (
    <div>
         <Create {...props}/>
         {dataArray  && <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container-with-dots"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemAriaLabel=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
        desktop:{
            breakpoint:{
                max:3000,
                min:1024
            },
            items:1,
            
        },
        mobile:{
            breakpoint:{
                max:464,
                min:0
            },items:1,
            
        },
        tablet:{
            breakpoint:{
                max:1024,
                min:464
            },items:2,
            
        }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
    >
        {dataArray?.map((data)=>{
            return(
            <div key={data._id} className='service-carousel'  width="100%" height="100%">
               <Delete {...props} api={api+data._id}/>
               <img src={data.imageurl} alt="img" className='service-img' />
            </div>)
        })}
    </Carousel>}
    </div>
  )
}

export default ServiceCarousel


