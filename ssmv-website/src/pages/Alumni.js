import React,{useState,useEffect} from 'react';
import DoubleNavbar from '../components/header/doubleNavbar';
import AlumniSpotlight from '../components/carousel/AlumniSpotlight/AlumniSpotlight';
import ImageSlider from "../components/carousel/ImageSlider/ImageSlider";
import AboutAlumni from '../components/AboutAlumni/AboutAlumni';
import Events from '../components/events/Events';
import LatestSSMV from '../components/carousel/LatestSSMV/LatestSSMV';
import VideoG from '../components/VideoG/VideoG';
import Testimonials from '../components/carousel/Testimonials/Testimonials';
// import SocialMedia from '../components/SocialMedia/SocialMedia';
import Footer from '../components/Footer/Footer'
import Glry from '../components/VideoG/Glry';
import axios from 'axios';


const Alumni = () => {
    
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    axios.get('https://test-moid.vercel.app/ssmv/alumni/about/')
      .then(response => {
        const { alumni_about } = response.data;
        setEventsData(alumni_about);
      })
      .catch(error => {
        console.error('Error fetching  data:', error);
      });
  }, []);

  const containerStyles = {
    width: "100%",
    height: "410px",
    margin: "0",
  };

  return (
    <>
    <div><DoubleNavbar /></div>
    <div style={containerStyles}>
    {eventsData.map(event => (
      <ImageSlider key={event._id} slides={event.imagesurl} />
    ))}</div>
    <div><AboutAlumni/></div>
    <div><AlumniSpotlight/></div>
    <div><Events/></div>
    <div><LatestSSMV/></div>
    <div><Glry/></div>
    <div><VideoG/></div>
    <div><Testimonials/></div>
    {/* <div><SocialMedia/></div> */}
    <div><Footer/></div>
    </>
  )
}

export default Alumni;