import React from 'react'
import Delete from '../CRUD/Delete/Delete'
import Update from '../CRUD/Update/Update'
// import Delete from '../CRUD/Delete/Delete'
// import Update from '../CRUD/Update/Update'

export function CoursesItem (props) {
  return (
    <div className='Courses-Cards'>
      <div className='Courses-body'>
        <div id='course-name'>{props.name}<Delete/><Update/></div>
        <div id='course-desc'>{props.desc}</div>
        <button id='course-btn'>Learn More</button>
      </div>
      <div className='image-courses'><img src={props.url} alt=''/></div>
    </div>
  )
}; 
