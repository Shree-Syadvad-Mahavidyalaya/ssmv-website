import React, { useState, useEffect } from 'react';
import DoubleNavbar from '../header/doubleNavbar';
import Delete from '../CRUD/Delete/Delete';
import Update from '../CRUD/Update/Update';
import Create from '../CRUD/Create/Create';
import Footer from '../Footer/Footer';
import A from '../AnchorTag';
import "./BA.css";

const Courses = ({ coursesUrl, deleteUrl, addUrl, updateUrl,baseUrl, courseIdKey, subjectKey, addSubComponent,courseType }) => {
  const [courses, setCourses] = useState([]);
  const [editingCourseId, setEditingCourseId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(coursesUrl);
      const data = await response.json();
      if (data.success) {
        setCourses(data[courseIdKey]);
      } else {
        console.log('Error:', data.error);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };


  return (
    <>
      <DoubleNavbar />
      <div>
        <A href={addUrl}></A>
        <div className="Table">
          <table>
          <Create url={addUrl} courseType={courseType}/>
            <thead>
              <tr>
                <th scope="col">Course</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((val, key) => (
                <tr key={key}>
                  <td>
                    {editingCourseId === val._id ? (
                      { addSubComponent }
                    ) : (
                      <>
                        {val[subjectKey]}
                        <Delete url={deleteUrl + val._id} baseurl={baseUrl} />
                        <Update url={updateUrl} id={val._id} courseType={courseType}/>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;


