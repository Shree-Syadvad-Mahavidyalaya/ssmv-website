import React from 'react'
import OnlineCourses from '../components/Home/OnlineCourses/OnlineCourses';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import backendApi from '../BackendApi';
import AboutUs from '../components/Home/about us/About us';
import Newsnav from '../components/Home/Stories/Newsnav';
import ServiceCarousel from '../components/Service/ServiceCarousel';

function Home () {
  return (
    <>
      <Header />

      <ServiceCarousel
        api={backendApi+'/homeImagesSlider/'}
        fields={['imageurl']}
        baseUrl={'/Home'}
      />
      <AboutUs
       api='https://test-moid.vercel.app/ssmv/aboutus/SSMV/'
       fields={['description', 'imageurl']}
       baseUrl={'/Home'}
      />
      <Newsnav
       api='https://test-moid.vercel.app/ssmv/'
       fields={['description', 'imageurl', 'date']}
       baseUrl={'/Home'}
      />
      <OnlineCourses
        api={backendApi+'/home/onlineCourses/'}
        fields={['description','imageurl','youtubeLink','title']}
        baseUrl={'/Home'}
      />
      <Footer/>
    </>
  )
};

export default Home;