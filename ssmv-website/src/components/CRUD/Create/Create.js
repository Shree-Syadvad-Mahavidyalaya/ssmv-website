import React, { useContext } from 'react'
import './Create.css'
import MyContext from '../../events/MyContext'
import { useNavigate } from 'react-router-dom';


export default function Create(props) {
  const navigate=useNavigate();
  const isAdmin=useContext(MyContext)[0];
  const handleClick=(e)=>{
    e.preventDefault();
    navigate(props.url)
  }
  return ( isAdmin &&
    <a href='/add-item/Image' onClick={handleClick}><button className='add-btn'>Add</button></a>
  )
}
