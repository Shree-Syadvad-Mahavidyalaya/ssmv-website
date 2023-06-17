/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState,useEffect,useContext} from 'react'
import MyContext from '../../components/events/MyContext';
import Carousel from "react-multi-carousel";
import '../AboutUs/About.css'
import Create from '../../components/CRUD/Create/Create';
import Delete from '../../components/CRUD/Delete/Delete';

const Aboutcarousel = () => {
  const [images, setImages] = useState([]);
  const isAdmin = useContext(MyContext)[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://test-moid.vercel.app/ssmv/aboutus/SSMV/');
        const data = await response.json();

        if (data.success && data.ssmv && data.ssmv.length > 0) {
          setImages(data.ssmv[0].images);
        }
      } catch (error) {
        console.error('Error fetching carousel images:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

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
        {images.map((imageUrl, index) => (
          <div className="about-carousel" key={index} width="100%" height="100%">
            <Create url = {'/add-item/image'}/>
            {isAdmin && <Delete url={`https://test-moid.vercel.app/ssmv/aboutus/SSMV/${index._id}/`} baseurl={'/About Us/SSMV'}/>}
            <img src={imageUrl} className="about-img" alt={`Carousel Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};


export default Aboutcarousel;
