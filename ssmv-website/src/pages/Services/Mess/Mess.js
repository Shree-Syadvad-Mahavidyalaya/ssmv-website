import React ,{useState,useEffect}from 'react'
import Foot from '../../../components/Footer/Footer'
import Messcarousel from './Messcarousel'
import DoubleNavbar from '../../../components/header/doubleNavbar'
import Update from '../../../components/CRUD/Update/Update'

const Mess = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch('https://test-moid.vercel.app/ssmv/services/mess/')
      .then(response => response.json())
      .then(data => {
        if (data.success && data.service_mess.length > 0) {
          setData(data.service_mess[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <DoubleNavbar/>
      <div className='mess-carousel'>
        <Messcarousel/>
        </div>
        <div className='mess-div'>
            <h3 className='mess-head'><b>MESS  <Update url={'/edit-item/services-info-mess'} id={Data._id}/></b></h3>
        <div className='mess-box'>
            <p>{Data.description}</p>
        </div>
        </div>
        <Foot className="Foot"/>
    </div>
  )
}

export default Mess;