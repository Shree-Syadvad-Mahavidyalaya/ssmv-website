import React,{useState,useEffect} from 'react'
import Foot from '../../components/Footer/Footer'
import '../Objective/Objective.css'
import DoubleNavbar from '../../components/header/doubleNavbar'
import Update from '../../components/CRUD/Update/Update'

const Objective = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://test-moid.vercel.app/ssmv/aboutus/objectives/").then((result)=>{
      result.json().then((resp)=>{
        // console.warn("result",resp)
        setData(resp)
      })
    })
  },[])
  return (
    <div>
      <DoubleNavbar/>
        <div className='objective-div'>
            <h3 className='objective-head'><b>OBJECTIVES OF THE UNIVERSITY</b><Update/></h3>
        <div className='objective-box'>
        {data.objective?.map((item)=>
                <p>{item.description}</p> )
 }
        </div>
        </div>
        <Foot className="Foot"/>
    </div>
  )
}

export default Objective