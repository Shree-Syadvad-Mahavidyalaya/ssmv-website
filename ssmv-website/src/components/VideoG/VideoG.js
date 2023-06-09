import React from 'react';
import './VideoG.css';
import Delete from '../CRUD/Delete/Delete';

const VideoG = () => {
  return (
    <div id='container'>
      <div id='heading'>
        <div><h2>Video Gallery<a href='/add-item/Image'><button className='add-btn'>Add</button></a></h2></div>
        <button className='view-btn'><a href='/ViewAll/Gallery'>View</a></button>
      </div>
      <div className='gallery-boxes'>
          <div className='box1'><Delete/></div>          
          <div className='box1'><Delete/></div>          
          <div className='box1'><Delete/></div>            
          <div className='box1'><Delete/></div>            
      </div>
      </div>
  )
}

export default VideoG;
