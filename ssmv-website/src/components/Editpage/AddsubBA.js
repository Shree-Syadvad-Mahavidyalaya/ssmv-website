import React, { useState } from 'react';
import './AddNewsForm.css'
import course_id from '../../Pages/Courses/BA/BA'
import { useLocation ,useNavigate} from 'react-router-dom';


function AddsubMA() {
  const navigate=useNavigate();
  const [subject, setSubject] = useState();
const location=useLocation();
const courseId = location.state.props;
  console.log(useLocation());

  const handleInputChange = (event) => {
    setSubject(event.target.value);
  };

  const handleEdit = async (event) => {
    event.preventDefault();

    const updatedData = { subject };

    try {
      const response = await fetch(`https://test-moid.vercel.app/ssmv/courses/ba/${courseId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        console.log('Course updated successfully');
        // Handle any further actions or notifications after successful update
      } else {
        console.error('Failed to update course');
        // Handle errors or display error messages
      }
    } catch (error) {
      console.error('Error updating course:', error);
      // Handle errors or display error messages
    }
    navigate('/Courses/BA');
  };

  return (
    <>
      <h1>Edit Row</h1>
      <form className='news-form' onSubmit={handleEdit}>
        <div className="form-group">
          <span>Subject:</span>
          <input
            type="text"
            name="course"
            value={subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" id='add-news-btn' >Edit</button>
      </form>
    </>
  );
}

export default AddsubMA;
