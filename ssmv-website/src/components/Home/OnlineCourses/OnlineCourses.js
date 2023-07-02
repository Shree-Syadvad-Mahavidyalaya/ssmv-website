import React, { useState } from 'react'
import './Courses.css'
import { CourseData, responsive } from "./CoursesData";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Create from '../../CRUD/Create/Create';
import Delete from '../../CRUD/Delete/Delete';
import Update from '../../CRUD/Update/Update';
import A from '../../AnchorTag';
import { useEffect } from 'react';


export const  OnlineCourses = (props) => {
  const [dataArray, setDataArray]=useState(CourseData);
  const {api}=props;

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setDataArray(data.onlineCourse);
        }else{
          console.log(data.error)
        }
      })
      .catch(error => {
        console.error('Error fetching administration data:', error);
      });
  }, [api]);


  return (
    <div className='Courses'>
      <div className='heading_c'>
        <h2>ONLINE COURSES</h2>
        <Create {...props}/>
        <button id='view-course'>
        <A href='/ViewAll/AllCourses' >View All</A></button>
      </div>
      <Carousel responsive = {responsive} width ="100%">
        {dataArray?.map((data)=>{
          return(
          <div key={data._id} className='Courses-Cards'>
            <div className='Courses-body'>
              <div id='course-name'>{data.name} 
              <Delete {...props} api={api+data._id}/>
              <Update {...props} api={api+data._id} data={data}/></div>
              <div id='course-desc'>{data.description}</div>
              <button id='course-btn'><A href='/learn-more/course'>Learn More</A></button>
            </div>
            <div className='image-courses'><img src={data.imageurl} alt=''/></div>
        </div>)
        })}
      </Carousel>
    </div>
  )
}
export default OnlineCourses;