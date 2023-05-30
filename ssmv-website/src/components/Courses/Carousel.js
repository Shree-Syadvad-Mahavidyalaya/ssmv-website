/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Carousel from "react-multi-carousel";
import '../Courses/Courses.css'

export default ()=>(
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
        
        <div className='course'  width="100%" height="300px">
        <div className='course-text'>
        <p className='course-head'><b>Lorem ipsum dolor sit amet</b></p>
        <p className='course-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <btn>Learn More</btn>
        </div>
        <img src="https://source.unsplash.com/random/150x150/?news" className='course-img' />
        </div>
        <div className='course'  width="100%" height="300px">
        <div className='course-text'>
        <p className='course-head'><b>Lorem ipsum dolor sit amet</b></p>
        <p className='course-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <btn>Learn More</btn>
        </div>
        <img src="https://source.unsplash.com/random/150x150/?news" className='course-img' />
        </div>
        <div className='course'  width="100%" height="300px">
        <div className='course-text'>
        <p className='course-head'><b>Lorem ipsum dolor sit amet</b></p>
        <p className='course-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <btn>Learn More</btn>
        </div>
        <img src="https://source.unsplash.com/random/150x150/?news" className='course-img' />
        </div>
        <div className='course'  width="100%" height="300px">
        <div className='course-text'>
        <p className='course-head'><b>Lorem ipsum dolor sit amet</b></p>
        <p className='course-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <btn>Learn More</btn>
        </div>
        <img src="https://source.unsplash.com/random/150x150/?news" className='course-img' />
        </div>
        <div className='course'  width="100%" height="300px">
        <div className='course-text'>
        <p className='course-head'><b>Lorem ipsum dolor sit amet</b></p>
        <p className='course-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <btn>Learn More</btn>
        </div>
        <img src="https://source.unsplash.com/random/150x150/?news" className='course-img' />
        </div>
        <div className='course'  width="100%" height="300px">
        <div className='course-text'>
        <p className='course-head'><b>Lorem ipsum dolor sit amet</b></p>
        <p className='course-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <btn>Learn More</btn>
        </div>
        <img src="https://source.unsplash.com/random/150x150/?news" className='course-img' />
        </div>
        
    </Carousel>
);