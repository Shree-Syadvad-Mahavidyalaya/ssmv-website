import React, { useState,useEffect } from 'react';
import './AddNewsForm.css'
import { useNavigate, useLocation } from 'react-router-dom';

function EditHomeCourse() {
  const navigate = useNavigate();
  const location = useLocation();
  // const AdminId = location.state.props;
  const CourseId = location.state.props;
  console.log(CourseId);
  const [Course, setCourse] = useState({
    title: '',
    description: '',
    image:''
  });
console.log(useLocation());
  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/home/onlineCourses/${CourseId}/`
      );
      const data = await response.json();
  
      if (response.ok) {
        const CourseData = data.Course; // Access the first object in the `founder` array
        setCourse({
          title:CourseData.title,
          link: CourseData.link,
          description:CourseData.description,
          image: CourseData.image
        });
      } else {
        console.error('Failed to fetch administration data');
        // Handle errors or display error messages
      }
    } catch (error) {
      console.error('Error fetching administration data:', error);
      // Handle errors or display error messages
    }
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourse((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  console.log(CourseId);
 
  const handleEdit = async (event) => {
    event.preventDefault();
    const updatedData = Course; // No need to wrap `administration` in an object
  
    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/home/onlineCourses/${CourseId}/`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedData) // Use 'founder' instead of 'collegeadministration'
        }
      );
  
      if (response.ok) {
        console.log('MANAGE updated successfully');
        // Handle any further actions or notifications after successful update
      } else {
        console.error('Failed to update administration');
        // Handle errors or display error messages
      }
    } catch (error) {
      console.error('Error updating administration:', error);
      // Handle errors or display error messages
    }
    navigate('*');
  };
  

  return (
    <>
      <h1>Edit Courses</h1>
      <form className="news-form" onSubmit={handleEdit}>
        <div className="form-group">
          <span>Title:</span>
          <input
            type="text"
            name="title"
            value={Course.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Image url:</span>
          <input
            type="text"
            name="image"
            value={Course.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Description:</span>
          <textarea
            name="description"
            value={Course.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" id="add-news-btn" >
          Edit
        </button>
      </form>
    </>
  );
}

export default EditHomeCourse;


