/* eslint-disable jsx-a11y/scope */
import React,{useState,useEffect,useContext} from 'react'
import '../BA/BA.css'
// import { useNavigate } from 'react-router-dom';
import DoubleNavbar from '../../../components/header/doubleNavbar'
import Delete from '../../../components/CRUD/Delete/Delete'
import Update from '../../../components/CRUD/Update/Update'
import Create from '../../../components/CRUD/Create/Create'
// import MyContext from '../../../components/events/MyContext'
import AddsubBA from '../../../components/Editpage/EditBAcourses'
import Footer from '../../../components/Footer/Footer';


const BA = () => {
  const [BAcourses, setBAcourses] = useState([]);
  const [editingCourseId, setEditingCourseId] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    console.log('hello!!');
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://test-moid.vercel.app/ssmv/courses/ba/');
      const data = await response.json();
      // Assuming the response contains an array of course objects in the "course_ba" property
      setBAcourses(data.course_ba);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  const handleEdit = (courseId) => {
    setEditingCourseId(courseId);
  };

  const handleCancelEdit = () => {
    setEditingCourseId(null);
  };
  // function Update(props) {
  //   const navigate=useNavigate();
  //   const isAdmin=useContext(MyContext)[0];
  //   const handleClick=(e)=>{
  //     e.preventDefault();
  //     navigate(props.url)
  //   }
  //   return ( isAdmin &&
  //     <a href='/add-item/Image' onClick={handleClick} ><button className='edit-btn'>Edit</button></a>
  //   )
  // }
 

  return (
    <>
      <DoubleNavbar />
      <div>
      
        <div className="Table">
          <table>
            <thead>
              <tr>
                <th scope="col"><b>Course</b><Create url={'/add-item/AddBACourse'} setBAcourses={setBAcourses}/></th>
              </tr>
            </thead>
            <tbody>
              {BAcourses.map((val, key) => (
                <tr key={key}>
                  <td>
                    {editingCourseId === val._id ? (
                      <AddsubBA courseId={val._id} initialSubject={val.subject} onCancelEdit={handleCancelEdit} />
                    ) : (
                      <>
                        {val.subject}
                        <Delete url={`https://test-moid.vercel.app/ssmv/courses/ba/${val._id}`} baseurl={'/Courses/BA'} />
                        {/* <button onClick={() => handleEdit(val._id)}>EDIT</button> */}
                        <Update url={'/add-item/course-BA'} id={val._id} />
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BA;