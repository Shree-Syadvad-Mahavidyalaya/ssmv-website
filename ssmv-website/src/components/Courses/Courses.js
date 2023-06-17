import React,{useState,useEffect} from 'react'
import './Courses.css'
import { CourseData, responsive } from "./CoursesData";
import { CoursesItem } from './CoursesItem'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Create from '../CRUD/Create/Create';
import axios from 'axios';

export const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://test-moid.vercel.app/ssmv/home/onlineCourses/');
      const data = response.data.onlineCourse;
      setCourses(data);
    } catch (error) {
      console.log(error);
    }
  };

  const Courses_data = courses.map((item) => (
    <CoursesItem
      _id={item._id}
      name={item.title}
      url={item.image}
      desc={item.description}
    />
  ));

  return (
    <div className="Courses">
      <div className="heading_c">
        <h2>ONLINE COURSES</h2>
        <button id="view-course">
          <Create url={'/add-item/new-course'} />
          <a href="/ViewAll/AllCourses">View All</a>
        </button>
      </div>
      <Carousel responsive={responsive} width="100%">
        {Courses_data}
      </Carousel>
    </div>
  );
};

export default Courses;

// export const Courses = () => {

//   const Courses_data = CourseData.map((item) => (
//     <CoursesItem
//       name={item.name}
//       url={item.imageurl}
//       desc={item.description}
//     />
//   ));
  
//   return (
//     <div className='Courses'>
//       <div className='heading_c'>
//         <h2>ONLINE COURSES</h2>
//         <button id='view-course'><Create url={'/add-item/new-course'}/><a href='/ViewAll/AllCourses'>View All</a></button>
//       </div>
//       <Carousel responsive = {responsive} width ="100%">
//       {Courses_data}
//       </Carousel>
//     </div>
//   )
// }
// export default Courses;