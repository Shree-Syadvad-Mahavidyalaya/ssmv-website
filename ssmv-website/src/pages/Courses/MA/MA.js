/* eslint-disable jsx-a11y/scope */
import React,{useState,useEffect} from 'react'
import '../BA/BA.css'
import Foot from '../../../components/Footer/Footer'
import DoubleNavbar from '../../../components/header/doubleNavbar'
import Delete from '../../../components/CRUD/Delete/Delete'
import Update from '../../../components/CRUD/Update/Update'
import Create from '../../../components/CRUD/Create/Create'
import AddsubMA from '../../../components/Editpage/AddsubMA'


const MA = () => {
  const [MAcourses, setMAcourses] = useState([]);
  const [editingCourseId, setEditingCourseId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://test-moid.vercel.app/ssmv/courses/ma/');
      const data = await response.json();
      if (data.success) {
        setMAcourses(data.course_ma);
        console.log(data.course_ma);
      } else {
        console.log('Error:', data.error);
      }
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
  
  return (
    <>
      <DoubleNavbar />
      <div>
        <a href="/add-item/course-row">
        </a>
        <div className="Table">
          <table>
            <thead>
              <tr>
                <th scope="col">Course</th>
              </tr>
            </thead>
            <tbody>
            {MAcourses.map((val, key) => (
                <tr key={key}>
                  <td>
                    {editingCourseId === val._id ? (
                      <AddsubMA courseId={val._id} initialSubject={val.subject} onCancelEdit={handleCancelEdit} />
                    ) : (
                      <>
                        {val.subject}
                        <Delete url={`https://test-moid.vercel.app/ssmv/courses/ma/${val._id}`} baseurl={'/Courses/MA'} />
                        {/* <button onClick={() => handleEdit(val._id)}>EDIT</button> */}
                        <Update url={'/add-item/course-MA'} id={val._id}/>
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

export default MA;
