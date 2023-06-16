import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './Update.css'
import MyContext from '../../events/MyContext'

// export default function Update() {
//   const isAdmin=useContext(MyContext)[0];
//   return (isAdmin &&
//     <button className='edit-btn'>Edit</button>
//   )
// }
export default function Update(props) {
  const navigate=useNavigate();
  const isAdmin=useContext(MyContext)[0];
  console.log(props);
  
  const handleClick=(e,p)=>{
    // e.preventDefault();
    navigate(p.url,{state:{props:p.id}})
  }
  return ( isAdmin &&
    <button className='edit-btn' onClick={(e)=>handleClick(e,props)}>Edit</button>
  )
}
