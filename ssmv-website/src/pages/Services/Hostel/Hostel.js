import React,{useState,useEffect} from 'react'
import Hostelcarousel from './Hostelcarousel'
import DoubleNavbar from '../../../components/header/doubleNavbar'
import Update from '../../../components/CRUD/Update/Update'
import Footer from '../../../components/Footer/Footer'


const Hostel = () => {
  const [hostelData, setHostelData] = useState(null);

  useEffect(() => {
    fetch('https://test-moid.vercel.app/ssmv/services/hostel/')
      .then(response => response.json())
      .then(data => {
        if (data.success && data.service_hostel.length > 0) {
          setHostelData(data.service_hostel[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching hostel data:', error);
      });
  }, []);

  return (
    <div>
      <DoubleNavbar />
      <div className='hostel-carousel'>
        <Hostelcarousel />
      </div>
      {hostelData && (
        <div className='hostel-div'>
          <h3 className='hostel-head'>
            <b>HOSTEL <Update url ={'/edit-item/services-info-hostel'} id={hostelData._id}/></b>
          </h3>
          <div className='hostel-box'>
            <p>{hostelData.description}</p>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Hostel;
