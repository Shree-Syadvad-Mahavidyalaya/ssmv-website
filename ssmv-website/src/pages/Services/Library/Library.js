import React,{useState,useEffect} from 'react'
import Libraryimgcarousel from './Libraryimgcarousel'
import DoubleNavbar from '../../../components/header/doubleNavbar'
import Update from '../../../components/CRUD/Update/Update'
import Footer from '../../../components/Footer/Footer'

const Library = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch('https://test-moid.vercel.app/ssmv/services/library/')
      .then(response => response.json())
      .then(data => {
        if (data.success && data.service_library.length > 0) {
          setData(data.service_library[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <DoubleNavbar/>
      <div className='library-carousel'>
        <Libraryimgcarousel/>
        </div>
        <div className='library-div'>
            <h3 className='library-head'><b>LIBRARY <Update url={'/edit-item/services-info-library'} id={Data._id}/></b></h3>
        <div className='library-box'>
              <p>{Data.description}</p>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Library;