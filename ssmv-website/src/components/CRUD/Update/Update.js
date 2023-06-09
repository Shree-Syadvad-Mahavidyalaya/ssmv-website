import React, { useContext } from 'react'
import './Update.css'
import MyContext from '../../events/MyContext'

export default function Update() {
  const isAdmin=useContext(MyContext)[0];
  return (isAdmin &&
    <button className='edit-btn'>Edit</button>
  )
}
