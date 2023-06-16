import React, { useContext } from 'react'
import './Create.css'
import MyContext from '../../events/MyContext'
import { useNavigate } from 'react-router-dom';


export default function Create(props) {
  const navigate=useNavigate();
  const isAdmin=useContext(MyContext)[0];
  console.log(props.url);
  const handleClick=(e)=>{
    e.preventDefault();
    console.log(props.url);
    navigate(props.url, {setBAcourses:props.setBAcourses})
  }
  return ( isAdmin &&
    <button className='add-btn' onClick={(e)=>handleClick(e)}>Add</button>
  )
}