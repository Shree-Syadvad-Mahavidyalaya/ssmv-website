import React from 'react';
import DoubleNavbar from '../components/header/doubleNavbar';
import AlumniSpotlight from '../components/carousel/AlumniSpotlight/AlumniSpotlight';
import ImageSlider from "../components/carousel/ImageSlider/ImageSlider";
import AboutAlumni from '../components/AboutAlumni/AboutAlumni';
import Events from '../components/events/Events';
import LatestSSMV from '../components/carousel/LatestSSMV/LatestSSMV';
import VideoG from '../components/VideoG/VideoG';
import Testimonials from '../components/carousel/Testimonials/Testimonials';

const Alumni = () => {
  const slides = [
    { url: "./tp.jpg", title: "img1" },
    { url: "./tp.jpg", title: "img2" },
    { url: "./3.jpg", title: "img3" },
  ];
  const containerStyles = {
    width: "100%",
    height: "410px",
    margin: "0",
  };
  return (
    <>
    <div><DoubleNavbar /></div>
    <div style={containerStyles}><ImageSlider slides={slides} /></div>
    <div><AboutAlumni/></div>
    <div><AlumniSpotlight/></div>
    <div><Events/></div>
    <div><LatestSSMV/></div>
    <div><VideoG/></div>
    <div><Testimonials/></div>
    </>
  )
}

export default Alumni;
