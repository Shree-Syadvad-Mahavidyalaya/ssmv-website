import './App.css';
import DoubleNavbar from './navbar/doubleNavbar';
import ImageSlider from "./carousel/ImageSlider";
import AboutUs from './section/about us/about us';

function App() {
  const slides = [
    { url: "./1.jpg", title: "img1" },
    { url: "./2.jpg", title: "img2" },
    { url: "./3.jpg", title: "img3" },
  ];
  const containerStyles = {
    width: "100%",
    height: "610px",
    margin: "0 auto",
  };
  return (
    <>
      <DoubleNavbar />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <div>
        <AboutUs/>
      </div>
    </>
  );
};

export default App;
