import React,{useState,useEffect} from 'react'
/* eslint-disable jsx-a11y/alt-text */
import Carousel from "react-multi-carousel";
import '../Library/Library.css'
import Delete from '../../../components/CRUD/Delete/Delete';
import Create from '../../../components/CRUD/Create/Create';


const Libraryimgcarousel = () => {
  const [libraryImages, setLibraryImages] = useState([]);

  useEffect(() => {
    // Simulating API fetch
    fetch('https://test-moid.vercel.app/ssmv/services/library/')
      .then(response => response.json())
      .then(data => {
        if (data.success && data.service_library && data.service_library.length > 0) {
          setLibraryImages(data.service_library[0].images);
        }
      })
      .catch(error => {
        console.error('Error fetching library images:', error);
      });
  }, []);

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
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
          },
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
        {libraryImages.map((imageUrl, index) => (
          <div className='library-carousel' key={index} width='100%' height='100%'>
            <Create url={'/add-item/Image'}/> <Delete/>
            <img src={imageUrl} className='library-img' alt='Library Image' />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Libraryimgcarousel;

{/* <a href='/add-item/Image'><button className='add-btn'>Add</button></a> */}
