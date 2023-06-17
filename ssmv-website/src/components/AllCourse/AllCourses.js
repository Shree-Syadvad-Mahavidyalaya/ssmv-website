/* eslint-disable no-unused-vars */
import React,{ useEffect, useState } from 'react'
import './AllCourses.css'
import Delete from "../CRUD/Delete/Delete";
import Update from '../CRUD/Update/Update';
import axios from 'axios';

// export default function AllCourses() {
//   const [acourses, setacourse] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://test-moid.vercel.app/ssmv/home/onlineCourses/');
//       const data = response.data.onlineCourse;
//       setacourse(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <h1>
//         Courses<a href="/add-item/new-course"><button className="add-btn">Add</button></a>
//       </h1>
//       <div className="viewALL-container">
//         {acourses.map((item) => (
//           <div className="Viewcards" key={item._id}>
//             <img className="ACourses-image" src={item.image} alt="" />
//             <div>
//               <h2>{item.title}</h2>
//               <p>{item.description}</p>
//               <Delete/>
//               <Update url={'/add-item/EditHomeCourses'} id={item._id}/>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }


export default function AllCourses() {

  const Courses_cards = [
    { id: "1", name: "horizontal", url:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,"},
    { id: "2",name: "horizontal", url:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,"},
    { id: "3",name: "horizontal", url:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,"},
  ];

  const deleteById = id => {
    setacourse(oldValues => {
      return oldValues.filter(item => item.id !== id)
    })
  }

  const [acourses, setacourse] = useState(Courses_cards);

  return (
    <>
    <h1>Courses<a href='/add-item/new-course'><button className='add-btn'>Add</button></a></h1>
    <div className='viewALL-container'>
      {acourses.map((item) => (
        <div className="Viewcards" key={item.id}>
        <img className="ACourses-image" src={item.url} alt="" />
        <div><h2>{item.name}</h2>
        <p>{item.description}</p>
        <Delete onClick={() => deleteById(item.id)}/><Update/></div>
      </div>
      ))}
    </div>
    </>
  )
}
