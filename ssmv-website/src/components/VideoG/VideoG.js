import React from 'react';
import './VideoG.css';

const VideoG = () => {
  return (
    <div id='container'>
      <div id='heading'>
        <div><h2>Video Gallery</h2></div>
        <button className='view-btn'><a href='/ViewAll/Videos'>View</a></button>
      </div>
      <div className='gallery-boxes'>
          <div className='box1'></div>          
          <div className='box1'></div>          
          <div className='box1'></div>            
          <div className='box1'></div>            
      </div>
      </div>
  )
}

export default VideoG;
