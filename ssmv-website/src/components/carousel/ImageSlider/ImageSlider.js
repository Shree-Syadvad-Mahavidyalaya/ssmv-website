import { useEffect, useState } from "react";
import './ImageSlider.css';
import "../../CRUD/Create/Create.css"
import Create from "../../CRUD/Create/Create";


const containerStyles = {
  width: "100%",
  height: "610px",
  margin: "0",
};

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: -1,
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#808080",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#808080",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

// const dotsContainerStyles = {
//   display: "flex",
//   justifyContent: "center",
// };

// const dotStyle = {
//   margin: "0 3px",
//   cursor: "pointer",
//   fontSize: "20px",
// };


const ImageSlider = (props) => {

  const [dataArray, setDataArray]=useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const {api}=props;

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setDataArray(data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching administration data:', error);
      });
  }, [api]);

  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? dataArray.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === dataArray.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${(dataArray[currentIndex]?.imageurl)?(dataArray[currentIndex]?.imageurl):'https://picsum.photos/200/300'})`,
  };

  return (
    <>
    <Create {...props}/>
    <div style={containerStyles}>
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground} className="image-slider"></div>
      <button className="btn">Learn More</button>
    </div>
    </div>
    </>
  );
};

export default ImageSlider;

