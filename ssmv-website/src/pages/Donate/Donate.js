/* eslint-disable jsx-a11y/scope */
import React,{useState,useEffect} from 'react';
import Footer from '../../components/Footer/Footer';
import DoubleNavbar from '../../components/Header/Header';
import Delete from '../../components/CRUD/Delete/Delete'
import Update from '../../components/CRUD/Update/Update'
import Create from '../../components/CRUD/Create/Create';
import './Donate.css'
import axios from 'axios';

const Donate = () => {

  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://test-moid.vercel.app/ssmv/donate/')
      .then(response => {
        const {donater_details} = response.data;
        setData(donater_details);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <DoubleNavbar/>
    <h1>DONATORS <Create url = {'/add-item/donators-name'}/> </h1>
    <div className='donate' >
    { Data.map(item => (
      <div className='donate-card' key={item._id}>
        <img className='donate-img' src={item.imagesurl} alt=''/>
          <p>{item.name}</p>
          <hr></hr>
          <p>{item.description}</p>
          <Delete url={`https://test-moid.vercel.app/ssmv/donate/${item._id}`} baseurl={'/Donate'} />
          <Update url={'/edit-item/Donate'} id={item._id}/>
      </div>
    ))}
    </div>
    <Footer/>
  </>
)
}

export default Donate;