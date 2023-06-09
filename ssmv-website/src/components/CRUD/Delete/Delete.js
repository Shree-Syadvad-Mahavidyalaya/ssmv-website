import React, { useContext } from 'react'
import './Delete.css'
import MyContext from '../../events/MyContext'

export default function Delete() {
  const isAdmin=useContext(MyContext)[0];
  return ( isAdmin &&
    <button className='delete-btn'>Delete</button>
  )
}
