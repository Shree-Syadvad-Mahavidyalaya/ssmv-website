import './App.css';
import DoubleNavbar from './navbar/doubleNavbar';
import ImageSlider from "./carousel/ImageSlider";
import AboutUs from './section/about us/about us';
import Foot from "../src/components/Foot"
import News from "./components/News"
import Courses from "../src/components/Courses.js"

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
      <div>
        <Courses/>
      </div>
      <div>
        <News/>
      </div>
      <div><Foot/></div>
    </>
    // <div className="App">
  );
};

export default App;
