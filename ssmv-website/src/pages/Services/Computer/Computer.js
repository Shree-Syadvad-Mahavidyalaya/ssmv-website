import React ,{useEffect,useState}from 'react'
import Computercarousel from './Computercarousel'
import DoubleNavbar from '../../../components/header/doubleNavbar'
import Update from '../../../components/CRUD/Update/Update'
import Footer from '../../../components/Footer/Footer'

const Computer = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch('https://test-moid.vercel.app/ssmv/services/computerLab/')
      .then(response => response.json())
      .then(data => {
        if (data.success && data.service_computerlab.length > 0) {
          setData(data.service_computerlab[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <DoubleNavbar/>
      <div className='computer-carousel'>
        <Computercarousel/>
        </div>
        <div className='computer-div'>
          <h3 className='computer-head'><b>COMPUTER</b><Update url ={'/edit-item/services-info-computer'} id={Data._id}/></h3>
        <div className='computer-box'>
            <p>{Data.description}</p>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Computer;