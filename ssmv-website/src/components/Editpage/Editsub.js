import React, { useState } from 'react';
import './AddNewsForm.css'
// import course_id from '../../Pages/Courses/BA/BA'
import { useLocation ,useNavigate} from 'react-router-dom';


function EditSub() {
  const navigate=useNavigate();
  const [subject, setSubject] = useState();
  const location=useLocation();
  console.log(location.state)
  const courseId = location.state.id;
  const courseType=location.state.courseType;
  console.log(location.state)

  const handleInputChange = (event) => {
    setSubject(event.target.value);
  };

  const handleEdit =  (event) => {
    event.preventDefault();

    const updatedData = { subject };

      fetch(`https://test-moid.vercel.app/ssmv/courses/${courseType}/${courseId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      })
      .then((res)=>{
        console.log(res);
      })
      .catch ((error)=>{
        console.error('Error updating course:', error);
      }) 
      .finally(()=>{
          // console.log(response);
          navigate(`/Courses/${courseType}`);
      })
      navigate("/loading")
    
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

export default EditSub;
