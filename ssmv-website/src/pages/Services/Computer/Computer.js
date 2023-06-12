import React ,{useEffect,useState}from 'react'
import Foot from '../../../components/Footer/Footer'
import Computercarousel from './Computercarousel'
import DoubleNavbar from '../../../components/header/doubleNavbar'
import Update from '../../../components/CRUD/Update/Update'

const Computer = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://test-moid.vercel.app/ssmv/services/computerLab/").then((result)=>{
      result.json().then((resp)=>{
        // console.warn("result",resp)
        setData(resp)
      })
    })
  },[])
  return (
    <div>
      <DoubleNavbar/>
      <div className='computer-carousel'>
        <Computercarousel/>
        </div>
        <div className='computer-div'>
            <h3 className='computer-head'><b>COMPUTER  <Update/></b></h3>
        <div className='computer-box'>
            {data.service_computerlab?.map((item)=>
                <p>{item.description}</p>)
 }
        </div>
        </div>
        <Foot className="Foot"/>
    </div>
  )
}

export default Computer;