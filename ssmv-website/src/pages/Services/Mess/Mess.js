import React ,{useState,useEffect}from 'react'
import Foot from '../../../components/Footer/Footer'
import Messcarousel from './Messcarousel'
import DoubleNavbar from '../../../components/header/doubleNavbar'
import Update from '../../../components/CRUD/Update/Update'

const Mess = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://test-moid.vercel.app/ssmv/services/mess/").then((result)=>{
      result.json().then((resp)=>{
        // console.warn("result",resp)
        setData(resp)
      })
    })
  },[])
  return (
    <div>
      <DoubleNavbar/>
      <div className='mess-carousel'>
        <Messcarousel/>
        </div>
        <div className='mess-div'>
            <h3 className='mess-head'><b>MESS  <Update/></b></h3>
        <div className='mess-box'>
        {data.service_mess?.map((item)=>
                <p>{item.description}</p>)
 }
            
        </div>
        </div>
        <Foot className="Foot"/>
    </div>
  )
}

export default Mess;