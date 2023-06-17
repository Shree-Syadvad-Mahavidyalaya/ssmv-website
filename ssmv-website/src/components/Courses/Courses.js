import React from 'react'
import './Courses.css'
import { CourseData, responsive } from "./CoursesData";
import { CoursesItem } from './CoursesItem'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Create from '../CRUD/Create/Create';
import A from '../AnchorTag';


export const Courses = () => {

  const Courses_data = CourseData.map((item) => (
    <CoursesItem
      name={item.name}
      url={item.imageurl}
      desc={item.description}
    />
  ));
  
  return (
    <div className='Courses'>
      <div className='heading_c'>
        <h2>ONLINE COURSES</h2>
        <button id='view-course'><Create url={'/add-item/new-course'}/>
        <A href='/ViewAll/AllCourses' >View All</A></button>
      </div>
      <Carousel responsive = {responsive} width ="100%">
      {Courses_data}
      </Carousel>
    </div>
  )
}
export default Courses;