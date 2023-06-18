import React,{useState,useEffect} from 'react'
import Aboutcarousel from './Aboutcarousel'
import '../AboutUs/About.css'
import Footer from '../../components/Footer/Footer'
import DoubleNavbar from '../../components/header/doubleNavbar'
import Update from '../../components/CRUD/Update/Update'

const AboutUs = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://test-moid.vercel.app/ssmv/aboutus/SSMV/").then((result)=>{
      result.json().then((resp)=>{
        // console.warn("result",resp)
        setData(resp)
      })
    })
  },[])
  return (
    <div>
      <DoubleNavbar/>
      <div className='carousel'>
        <Aboutcarousel/>
        </div>
        <div className='div'>
            <h3 className='head'>ABOUT US</h3>
        <div className='box2'>
        <Update url={'/add-item/ssmv-about'} id={data._id}/>
        {data.ssmv?.map((item)=>
        <>
          <p>{item.description}</p>
          
        </>)
 }
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs;
