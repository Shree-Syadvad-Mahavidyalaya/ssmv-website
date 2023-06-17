/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import './AddNewsForm.css'


function AddBACourse(props) {
  const navigate=useNavigate();
  const location=useLocation();
  console.log(location.state)
  const courseType=location.state.courseType;
  const [bacourse, setBAcourse] = useState({
    subject: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBAcourse((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch(`https://test-moid.vercel.app/ssmv/courses/${courseType}/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bacourse),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Do any additional actions after successfully adding the news, such as showing a success message or refreshing the data.
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle any error that occurred during the request.
      })
      .finally(()=>{
        navigate(`/Courses/${courseType}`);
      })
      // location(setBAcourse)
      navigate("/loading");
      
  };

  return (
    <>
      <h1>Add BACourse</h1>
      <form onSubmit={handleSubmit} className='news-form'>
        <div className="form-group">
          <span>Course:</span>
          <textarea
            name="subject"
            value={bacourse.subject}
            onChange={handleChange}
            rows="6"
            required
          />
        </div>
        <button type="submit" id='add-news-btn'>Add</button>
      </form>
    </>
  );
}

export default AddBACourse;
