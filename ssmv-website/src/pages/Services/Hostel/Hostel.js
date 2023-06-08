import React,{useState,useEffect} from 'react'
import Foot from '../../../components/Footer/Footer'
import Hostelcarousel from './Hostelcarousel'
import DoubleNavbar from '../../../components/header/doubleNavbar'


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
            <b>HOSTEL</b>
          </h3>
          <div className='hostel-box'>
            <p>{hostelData.description}</p>
          </div>
        </div>
      )}
      <Foot className='Foot' />
    </div>
  );
};

export default Hostel;
