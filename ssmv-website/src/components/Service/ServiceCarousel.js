
import React from 'react'
import Carousel from "react-multi-carousel";
import '../Service/Service'
import Delete from "../CRUD/Delete/Delete"
import Create from "../CRUD/Create/Create"

const ServiceCarousel = () => {
  return (
    <div>
         <Carousel
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
        
        <div className='service-carousel'  width="100%" height="100%">
        <Create url={'/add-item/Image'}/> <Delete/>
        <img src="https://source.unsplash.com/random/150x150/?news" className='service-img' />
        </div>
        <div className='service-carousel'  width="100%" height="100%">
        
        <img src="https://source.unsplash.com/random/150x150/?news" className='service-img' />
        </div>
        <div className='service-carousel'  width="100%" height="100%">
        
        <img src="https://source.unsplash.com/random/150x150/?news" className='service-img' />
        </div>
        <div className='service-carousel'  width="100%" height="100%">
        
        <img src="https://source.unsplash.com/random/150x150/?news" className='service-img' />
        </div>
        <div className='service-carousel' width="100%" height="100%">
        
        <img src="https://source.unsplash.com/random/150x150/?news" className='service-img' />
        </div>
        <div className='service-carousel'  width="100%" height="100%">
        
        <img src="https://source.unsplash.com/random/150x150/?news" className='service-img' />
        </div>
        
    </Carousel>
    </div>
  )
}

export default ServiceCarousel


