import React from 'react'
import DoubleNavbar from '../components/header/doubleNavbar';
import ImageSlider from "../components/carousel/ImageSlider/ImageSlider";
import AboutUs from '../components/about us/about us';
import Courses from '../components/Courses/Courses'
import Foot from '../components/Footer/Foot'
import Newsnav from '../components/News/Newsnav'

function Home () {
    const slides = [
    { url: "https://i.ibb.co/mGYVThg/1.jpg", title: "img1" },
    { url: "https://i.ibb.co/GVmQMJV/2.jpg", title: "img2" },
    { url: "https://i.ibb.co/TYsbCBt/3.jpg", title: "img3" },
  ];
  const containerStyles = {
    width: "100%",
    height: "610px",
    margin: "0",
  };
  
  return (
    <>
      <DoubleNavbar />
      <div style={containerStyles}><ImageSlider slides={slides} /></div>
      <div><AboutUs/></div>
      <div><Newsnav/></div>
      <div><Courses/></div>
      <div><Foot/></div>
    </>
  )
};

export default Home;
