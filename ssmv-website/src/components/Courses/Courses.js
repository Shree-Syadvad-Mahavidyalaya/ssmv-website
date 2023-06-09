import React from 'react'
import './Courses.css'
import { CourseData, responsive } from "./CoursesData";
import { CoursesItem } from './CoursesItem'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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
        <h2>ONLINE COURSES<a href='/add-item/new-course'><button className='add-btn'>Add</button></a></h2>
        <button id='view-course'><a href='/ViewAll/AllCourses'>View All</a></button>
      </div>
      <Carousel responsive = {responsive} width ="100%">
      {Courses_data}
      </Carousel>
    </div>
  )
}

export default Courses;