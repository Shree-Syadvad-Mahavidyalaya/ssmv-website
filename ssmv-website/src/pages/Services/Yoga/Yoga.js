import React,{useState,useEffect} from 'react'
import Foot from '../../../components/Footer/Footer'
import Yogacarousel from './Yogacarousel'
import DoubleNavbar from '../../../components/header/doubleNavbar'
import Update from '../../../components/CRUD/Update/Update'

const Yoga = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch('https://test-moid.vercel.app/ssmv/services/yoga/')
      .then(response => response.json())
      .then(data => {
        if (data.success && data.service_yoga.length > 0) {
          setData(data.service_yoga[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <DoubleNavbar/>
      <div className='yoga-carousel'>
        <Yogacarousel/>
        </div>
        <div className='yoga-div'>
            <h3 className='yoga-head'><b>YOGA AND KARMAKANDA  <Update url={'/edit-item/services-info-yoga'} id={Data._id}/></b></h3>
        <div className='yoga-box'>
          <p>{Data.description}</p>
        </div>
        </div>
        <Foot className="Foot"/>
    </div>
  )
}

export default Yoga;