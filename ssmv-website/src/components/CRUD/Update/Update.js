import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './Update.css'
import MyContext from '../../events/MyContext'

export default function Update(props) {
  const navigate=useNavigate();
  const isAdmin=useContext(MyContext)[0];
  console.log(props);
  
  const handleClick=(e)=>{
    // e.preventDefault();
    navigate(props.url,{state:props})
  }
  return ( isAdmin &&
    <button className='edit-btn' onClick={(e)=>handleClick(e,props)}>Edit</button>
  )
}