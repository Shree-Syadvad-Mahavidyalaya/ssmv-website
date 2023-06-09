import React from 'react';
import './VideoG.css';
import Delete from '../CRUD/Delete/Delete';
import Create from '../CRUD/Create/Create';

const VideoG = () => {
  return (
    <div id='container'>
      <div id='heading'>
        <div><h2>Video Gallery <Create url={'/add-item/Image'}/> </h2></div>
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


{/* <a href='/add-item/Image'><button className='add-btn'>Add</button></a> */}
