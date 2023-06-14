import React, { useState,useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import './AddNewsForm.css'


function AddBACourse() {
  const navigate=useNavigate();
  const location=useLocation();

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
    
    fetch('https://test-moid.vercel.app/ssmv/courses/ba/new', {
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
      });
      location.setBAcourses
      navigate('/Courses/BA');
      
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

