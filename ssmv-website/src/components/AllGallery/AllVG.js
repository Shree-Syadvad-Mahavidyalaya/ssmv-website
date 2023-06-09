import React from 'react'
import './AllVG.css'
import Delete from '../CRUD/Delete/Delete'
import Create from '../CRUD/Create/Create'

export default function AllVG() {
  return (
    <>
        <h1>Gallery</h1><Create url={'/add-item/image'}/>
        <div className='gallery-boxes-videos'>
            <div className='box1-videos'><Delete/></div>       
            <div className='box1-videos'><Delete/></div>          
            <div className='box1-videos'><Delete/></div>            
            <div className='box1-videos'><Delete/></div>            
            <div className='box1-videos'><Delete/></div>            
        </div>
    </>
  )
}
{/* <a href='/add-item/image'><button className='add-btn'>Add</button></a> */}