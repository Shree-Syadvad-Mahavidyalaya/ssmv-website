import React,{useState,useEffect} from 'react';
import  Header from '../components/Header/Header';
import AlumniSpotlight from '../components/carousel/AlumniSpotlight/AlumniSpotlight';
import ImageSlider from "../components/carousel/ImageSlider/ImageSlider";
import AboutAlumni from '../components/AboutAlumni/AboutAlumni';
import Events from '../components/events/Events';
import LatestSSMV from '../components/carousel/LatestSSMV/LatestSSMV';
import VideoG from '../components/VideoG/VideoG';
import Testimonials from '../components/carousel/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer'
import Glry from '../components/VideoG/Glry';
import backendApi from '../BackendApi';


function Alumni () {
    
  return (
    <>
    <Header />
    <ImageSlider 
      api={backendApi}
    />
    <AboutAlumni
      api={backendApi+'/alumni/about/'}
      fields={['description']}
      baseUrl='/Alumni'
    />
    <AlumniSpotlight
      api={backendApi+'/alumni/spotlight/'}
      fields={['name', 'description', 'imagesurl', 'profile' ]}
      baseUrl='/Alumni'
    />
    <Events
      api={backendApi+'/alumni/event/'}
      fields={[ 'name', 'description', 'imagesurl', 'venue']}
      baseUrl='/Alumni'
    />
    <LatestSSMV
      api={backendApi+'/alumni/latest/'}
      fields={[ 'name', 'date', 'description', 'imagesurl' ]}
      baseUrl='/Alumni'
    />
    <Glry
      api={backendApi+'/alumni/gallery/'}
      fields={['date', 'description', 'imagesurl']}
      baseUrl='/Alumni'
    />
    <VideoG
     api={backendApi+'/alumni/videoGallery/'}
     fields={['videolink']}
     baseUrl='/Alumni'
    />
    <Testimonials
     api={backendApi+'/alumni/testinomials/'}
     fields={['title', 'description', 'imagesurl']}
     baseUrl='/Alumni'
    />
    <Footer/>
    </>
  )
}

export default Alumni;