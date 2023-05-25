import React from 'react'
import DoubleNavbar from '../components/header/doubleNavbar';
import ImageSlider from "../components/carousel/ImageSlider/ImageSlider";
import AboutUs from '../components/about us/about us';

function Home () {
    const slides = [
    { url: "./1.jpg", title: "img1" },
    { url: "./2.jpg", title: "img2" },
    { url: "./3.jpg", title: "img3" },
  ];
  const containerStyles = {
    width: "100%",
    height: "610px",
    margin: "0",
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
  )
};

export default Home;
