import React from 'react'
import './AllVG.css'
import Delete from '../CRUD/Delete/Delete'

export default function AllVG() {
  return (
    <>
        <h1>Gallery<a href='/add-item/image'><button className='add-btn'>Add</button></a></h1>
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
