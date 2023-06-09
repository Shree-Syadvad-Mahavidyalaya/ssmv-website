/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Carousel from "react-multi-carousel";
import '../Mess/Mess.css'
import Delete from '../../../components/CRUD/Delete/Delete';
import Create from '../../../components/CRUD/Create/Create';

const Messcarousel = () => {
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
        
        <div className='mess-carousel'  width="100%" height="100%">
        <Create url={'/add-item/Image'}/> <Delete/>
        <img src="https://source.unsplash.com/random/150x150/?news" className='mess-img' />
        </div>
        <div className='mess-carousel'  width="100%" height="100%">
        
        <img src="https://source.unsplash.com/random/150x150/?news" className='mess-img' />
        </div>
        <div className='mess-carousel'  width="100%" height="100%">
        
        <img src="https://source.unsplash.com/random/150x150/?news" className='mess-img' />
        </div>
        <div className='mess-carousel'  width="100%" height="100%">
        
        <img src="https://source.unsplash.com/random/150x150/?news" className='mess-img' />
        </div>
        <div className='mess-carousel' width="100%" height="100%">
        
        <img src="https://source.unsplash.com/random/150x150/?news" className='mess-img' />
        </div>
        <div className='mess-carousel'  width="100%" height="100%">
        
        <img src="https://source.unsplash.com/random/150x150/?news" className='mess-img' />
        </div>
        
    </Carousel>
    </div>
  )
}

export default Messcarousel


{/* <a href='/add-item/Image'><button className='add-btn'>Add</button></a> */}