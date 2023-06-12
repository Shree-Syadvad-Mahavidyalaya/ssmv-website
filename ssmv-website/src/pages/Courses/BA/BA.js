/* eslint-disable jsx-a11y/scope */
import React,{useState,useEffect,useContext} from 'react'
import '../BA/BA.css'
import { useNavigate } from 'react-router-dom';
import Foot from '../../../components/Footer/Footer'
import DoubleNavbar from '../../../components/header/doubleNavbar'
import Delete from '../../../components/CRUD/Delete/Delete'
import Update from '../../../components/CRUD/Update/Update'
import Create from '../../../components/CRUD/Create/Create'
import MyContext from '../../../components/events/MyContext'
import AddsubBA from '../../../components/Editpage/AddsubBA'


const BA = () => {
  const [BAcourses, setBAcourses] = useState([]);
  const [editingCourseId, setEditingCourseId] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
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
  
  function handleDelete(id){
    const newList = BAcourses.filter(li => li.id != id)
    setBAcourses(newList)
  }

  return (
    <>
      <DoubleNavbar />
      <div>
        <Create url={'/add-item/course-row'} />
        <div className="Table">
          <table>
            <thead>
              <tr>
                <th scope="col">Course</th>
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
                        <Delete handleDelete={() => handleDelete(val._id)} />
                        {/* <button onClick={() => handleEdit(val._id)}>EDIT</button> */}
                        <Update url={'/add-item/course-BA'} id={val._id}/>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default BA;