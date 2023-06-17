import React,{useState,useEffect} from 'react'
import Footer from '../../components/Footer/Footer'
import ServiceCarousel from './ServiceCarousel'
import DoubleNavbar from '../header/doubleNavbar'
import  Update from '../CRUD/Update/Update'
import "./Service.css"


const Service = ({service,url,text,updateUrl}) => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success && data[`service_${service}`].length > 0) {
          setServiceData(data[`service_${service}`][0]);
          
        }
      })
      .catch(error => {
        console.error('Error fetching service data:', error);
      });
  },[url,service]);

  return (
    <div>
      <DoubleNavbar />
      <div className='service-carousel'>
        <ServiceCarousel />
      </div>
      {serviceData && (
        <div className='service-div'>
          <h3 className='service-head'>
            <b>{text}<Update url ={updateUrl} id={serviceData._id}/></b>
          </h3>
          <div className='service-box'>
            <p>{serviceData.description}</p>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Service;
