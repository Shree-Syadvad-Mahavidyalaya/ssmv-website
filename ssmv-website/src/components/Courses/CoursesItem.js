import React from 'react'
import Delete from '../CRUD/Delete/Delete'
import Update from '../CRUD/Update/Update'

export function CoursesItem (props) {
  console.log(props._id);
  return (
    <>
    <div className='Courses-Cards'>
      <div className='Courses-body'>
        <div >{props.name} <Delete /><Update url={'/add-item/EditHomeCourses'} id={props._id}/></div>
        <div >{props.desc}</div>
        <button id='course-btn'><a href='/learn-more/course'>Learn More</a></button>
      </div>
      <div className='image-courses'><img src={props.url} alt=''/></div>
    </div>
    </>
  )
}; 
